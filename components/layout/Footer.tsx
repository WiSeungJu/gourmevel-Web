/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] text-black pt-24 pb-12 border-t border-black/5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-16 mb-16 md:mb-20 text-center md:text-left">
          <div className="max-w-md flex flex-col items-center md:items-start">
            <div className="mb-8 w-40 md:w-48">
               {/* Footer 배경이 밝으므로 invert 적용하여 검은색 로고로 변경 */}
              <img 
                src="/logo.png" 
                alt="Gourmevel" 
                className="w-full h-auto object-contain opacity-90 filter invert"
              />
            </div>
            <p className="font-serif text-black/60 leading-relaxed text-base md:text-lg">
              &quot;Taste The Extraordinary.&quot; <br/>
              <span className="text-xs md:text-sm mt-2 block opacity-70">
                평범한 일상 속 특별한 미식 경험을 찾는 당신을 위한 가이드.
              </span>
            </p>
          </div>
          
          <div className="flex justify-center gap-12 md:gap-16 w-full md:w-auto">
            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-black mb-6">Explore</h3>
              <ul className="space-y-4 font-serif text-black/70">
                <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
                <li><Link href="/stories" className="hover:text-black transition-colors">Stories</Link></li>
                <li><Link href="/reviews" className="hover:text-black transition-colors">Reviews</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-black mb-6">Connect</h3>
              <ul className="space-y-4 font-serif text-black/70">
                <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                <li><a href="https://www.instagram.com/gourmevel/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 사업자 정보 및 Copyright 섹션 */}
        <div className="pt-8 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left">
            {/* 사업자 정보 */}
            <div className="text-[11px] font-serif text-black/50 leading-relaxed space-y-1">
              <p>
                <span className="font-sans font-bold text-black/70 mr-2">상호명</span> 고메블
                <span className="mx-2 text-black/20">|</span>
                <span className="font-sans font-bold text-black/70 mr-2">대표자</span> 위승주
              </p>
              <p>
                <span className="font-sans font-bold text-black/70 mr-2">사업자등록번호</span> 342-15-02376
              </p>
              <p>
                <span className="font-sans font-bold text-black/70 mr-2">주소</span> 서울특별시 서대문구 가재울미래로 2
              </p>
              <p>
                <span className="font-sans font-bold text-black/70 mr-2">이메일</span> gourmevel@gmail.com
              </p>
            </div>

            {/* 링크 및 Copyright */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-6 font-sans text-[10px] tracking-widest uppercase text-black/60">
                <Link href="/privacy" className="font-bold hover:text-black transition-colors">개인정보처리방침</Link>
                <Link href="/terms" className="hover:text-black transition-colors">이용약관</Link>
              </div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-black/40">
                &copy; {new Date().getFullYear()} GOURMEVEL. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
