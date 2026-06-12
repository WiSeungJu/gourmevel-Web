// 네이버 블로그 RSS 자동 수집
// 블로그: https://blog.naver.com/gourmevel  →  RSS: https://rss.blog.naver.com/gourmevel.xml

export const NAVER_BLOG_ID = "gourmevel";
export const NAVER_BLOG_URL = `https://blog.naver.com/${NAVER_BLOG_ID}`;
const RSS_URL = `https://rss.blog.naver.com/${NAVER_BLOG_ID}.xml`;

export interface NaverPost {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  excerpt?: string;
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
    .replace(/&amp;/g, "&")
    .trim();
}

function tag(block: string, name: string): string | undefined {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? clean(m[1]) : undefined;
}

/**
 * RSS가 주는 썸네일은 `blogthumb.pstatic.net/...?type=s3`(최대 185px 정사각)이라
 * 큰 카드에 넣으면 확대/뭉개져 보인다. 같은 경로의 풀해상도 호스트(postfiles)로 바꾸고
 * width 프리셋(w966)으로 요청한다. (postfiles 는 referer 없으면 200 → 직접 로딩 OK)
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
 * 네이버 블로그 최신 글을 RSS로 가져온다.
 * 실패해도 절대 throw 하지 않고 빈 배열을 반환 (페이지가 깨지지 않도록).
 */
export async function fetchNaverPosts(limit = 12): Promise<NaverPost[]> {
  try {
    const res = await fetch(RSS_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GourmevelSite/1.0)" },
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
