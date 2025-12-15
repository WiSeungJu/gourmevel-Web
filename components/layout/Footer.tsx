/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] text-black pt-24 pb-12 border-t border-black/5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-md">
            <div className="mb-8 w-48">
               {/* Footer 배경이 밝으므로 invert 적용하여 검은색 로고로 변경 */}
              <img 
                src="/logo.png" 
                alt="Gourmevel" 
                className="w-full h-auto object-contain opacity-90 filter invert"
              />
            </div>
            <p className="font-serif text-black/60 leading-relaxed text-lg">
              &quot;Taste The Extraordinary.&quot; <br/>
              <span className="text-sm mt-2 block opacity-70">
                A curated journal for the modern epicurean, exploring the intersection of culinary art and atmosphere.
              </span>
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-black mb-6">Explore</h3>
              <ul className="space-y-4 font-serif text-black/70">
                <li><Link href="/reviews" className="hover:text-black transition-colors">Fine Dining</Link></li>
                <li><Link href="/essays" className="hover:text-black transition-colors">Essays</Link></li>
                <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-black mb-6">Connect</h3>
              <ul className="space-y-4 font-serif text-black/70">
                <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans tracking-widest uppercase text-black/40">
          <p>&copy; {new Date().getFullYear()} GOURMEVEL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
