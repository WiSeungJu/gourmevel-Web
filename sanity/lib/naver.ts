// 네이버 블로그 자동 수집
// 기본: 모바일 블로그 비공식 JSON API (카테고리 + 전체 글 페이지네이션)
// 폴백: RSS (https://rss.blog.naver.com/gourmevel.xml — 최신 글만, 카테고리 없음)

export const NAVER_BLOG_ID = "gourmevel";
export const NAVER_BLOG_URL = `https://blog.naver.com/${NAVER_BLOG_ID}`;
const RSS_URL = `https://rss.blog.naver.com/${NAVER_BLOG_ID}.xml`;
const API_BASE = `https://m.blog.naver.com/api/blogs/${NAVER_BLOG_ID}`;

const API_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; GourmevelSite/1.0)",
  Referer: `https://m.blog.naver.com/${NAVER_BLOG_ID}`,
};

export interface NaverPost {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  excerpt?: string;
  category?: string;
  categoryNo?: number;
}

export interface NaverCategory {
  categoryNo: number;
  name: string;
  parentCategoryNo: number | null;
  postCount: number;
}

function clean(s: string): string {
  return s
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .trim();
}

function tag(block: string, name: string): string | undefined {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? clean(m[1]) : undefined;
}

/**
 * 네이버 썸네일은 type 파라미터가 없거나 저해상 프리셋이면 큰 카드에서 뭉개진다.
 * blogthumb → postfiles 호스트로 바꾸고 width 프리셋(w966)으로 요청.
 * (mblogthumb-phinf / postfiles 모두 referer 없이 직접 로딩 OK)
 */
function upscaleNaverImage(url: string): string {
  if (!/pstatic\.net|naver\.net/.test(url)) return url;
  let out = url.replace("blogthumb.pstatic.net", "postfiles.pstatic.net");
  if (/[?&]type=/.test(out)) {
    out = out.replace(/([?&]type=)[^&]+/, "$1w966");
  } else {
    out = out + (out.includes("?") ? "&" : "?") + "type=w966";
  }
  return out;
}

/**
 * 블로그 카테고리(게시판) 목록. 구분선/비공개는 제외.
 * 실패해도 throw 하지 않고 빈 배열 반환.
 */
export async function fetchNaverCategories(): Promise<NaverCategory[]> {
  try {
    const res = await fetch(`${API_BASE}/category-list`, {
      headers: API_HEADERS,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const list = data?.result?.mylogCategoryList;
    if (!Array.isArray(list)) return [];
    return list
      .filter((c) => c.openYN && !c.divisionLine)
      .map((c) => ({
        categoryNo: c.categoryNo,
        name: clean(String(c.categoryName || "")),
        parentCategoryNo: c.parentCategoryNo ?? null,
        postCount: c.postCnt ?? 0,
      }));
  } catch {
    return [];
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapApiPost(item: any): NaverPost | null {
  const logNo = item?.logNo;
  const title = clean(String(item?.titleWithInspectMessage || ""));
  if (!logNo || !title) return null;

  const link = `${NAVER_BLOG_URL}/${logNo}`;
  const rawThumb: string | undefined =
    item?.thumbnailList?.[0]?.encodedThumbnailUrl || item?.thumbnailUrl || undefined;

  const excerpt = clean(String(item?.briefContents || ""))
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 140);

  return {
    id: link,
    title,
    link,
    pubDate: item?.addDate ? new Date(item.addDate).toISOString() : "",
    thumbnail: rawThumb ? upscaleNaverImage(rawThumb) : undefined,
    excerpt: excerpt || undefined,
    category: item?.categoryName ? clean(String(item.categoryName)) : undefined,
    categoryNo: item?.categoryNo ?? undefined,
  };
}

/**
 * 블로그 전체 글을 페이지네이션으로 수집 (최신순, 카테고리 포함).
 * 실패해도 throw 하지 않고 그때까지 모은 글(또는 빈 배열)을 반환.
 */
export async function fetchAllNaverPosts(): Promise<NaverPost[]> {
  const PER_PAGE = 30;
  const MAX_PAGES = 20; // 안전장치 (600개)
  const posts: NaverPost[] = [];

  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const res = await fetch(
        `${API_BASE}/post-list?categoryNo=0&itemCount=${PER_PAGE}&page=${page}`,
        { headers: API_HEADERS, next: { revalidate: 3600 } }
      );
      if (!res.ok) break;
      const data = await res.json();
      const items = data?.result?.items;
      if (!Array.isArray(items) || items.length === 0) break;

      for (const item of items) {
        const post = mapApiPost(item);
        if (post) posts.push(post);
      }
      if (items.length < PER_PAGE) break;
    }
  } catch {
    // 수집 도중 실패하면 그때까지 모은 것만 사용
  }
  return posts;
}

/** RSS 폴백 — API 장애 시 최신 글만이라도 노출 */
async function fetchRssPosts(limit: number): Promise<NaverPost[]> {
  try {
    const res = await fetch(RSS_URL, {
      headers: { "User-Agent": API_HEADERS["User-Agent"] },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const blocks = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

    const posts: NaverPost[] = [];
    for (const raw of blocks) {
      const link = tag(raw, "link");
      const title = tag(raw, "title");
      if (!link || !title) continue;

      const description = tag(raw, "description") || "";
      const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);

      posts.push({
        id: link,
        title,
        link,
        pubDate: tag(raw, "pubDate") || "",
        thumbnail: imgMatch ? upscaleNaverImage(imgMatch[1]) : undefined,
        excerpt:
          description
            .replace(/<[^>]+>/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 140) || undefined,
      });

      if (posts.length >= limit) break;
    }
    return posts;
  } catch {
    return [];
  }
}

/**
 * 네이버 블로그 최신 글 (홈 등에서 사용).
 * API 우선, 실패 시 RSS 폴백. 절대 throw 하지 않음.
 */
export async function fetchNaverPosts(limit = 12): Promise<NaverPost[]> {
  const all = await fetchAllNaverPosts();
  if (all.length > 0) return all.slice(0, limit);
  return fetchRssPosts(limit);
}
