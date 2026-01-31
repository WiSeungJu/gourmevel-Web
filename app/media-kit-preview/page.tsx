"use client";

import Image from "next/image";

export default function MediaKitPage() {
    return (
        <div className="bg-[#e5e5e5] min-h-screen text-[#111] print:bg-white print:text-black p-10 print:p-0">

            {/* 
        Container Utilities
        - Wrapper: Center on screen for preview
        - Slide: 16:9 Aspect Ratio (PPT Style)
        - Print: Force page breaks and full size
      */}
            <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            background-color: white;
            margin: 0;
            padding: 0;
          }
           section {
             width: 297mm !important;
             height: 210mm !important;
             page-break-after: always !important;
             break-after: page !important;
             overflow: hidden !important;
           }
           .print\:hidden {
             display: none !important;
           }
        }
      `}</style>

            {/* A4 Landscape Ratio: 297mm / 210mm = ~1.414 */}
            <div className="max-w-[1123px] mx-auto space-y-20 print:space-y-0 print:max-w-none">

                {/* PAGE 1: COVER */}
                <section className="relative w-full aspect-[297/210] bg-black text-[#F2F1ED] overflow-hidden flex flex-col justify-between p-16 shadow-2xl bg-white">
                    {/* Background Image Placeholder */}
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-gradient-to-br from-black/80 via-gray-900 to-black/90 absolute inset-0 z-10" />
                        {/* Placeholder visual */}
                        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center border-2 border-dashed border-white/20">
                                <span className="font-sans text-xl tracking-[0.2em] uppercase">Cover Image Placeholder (Low Saturation)</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Title (Centered) */}
                    <div className="relative z-20 flex-1 flex flex-col items-center justify-center w-full">
                        <div className="relative w-96 h-24 mb-6">
                            <Image src="/logo white.png" alt="GOURMEVEL" fill className="object-contain" priority />
                        </div>
                        <p className="font-serif italic text-lg opacity-80">Taste the extraordinary.</p>
                    </div>

                    {/* Footer Content (Bottom) */}
                    <div className="relative z-20 w-full mt-auto">
                        <div className="border-t border-white/20 pt-8 flex justify-between items-end opacity-70">
                            <p className="font-sans text-xs tracking-[0.3em] uppercase">Media Kit</p>
                            <p className="font-display text-xl">2026 Collaboration Proposal</p>
                        </div>
                    </div>
                </section>

                {/* PAGE 2: CONTENTS */}
                <section className="relative w-full aspect-[297/210] flex shadow-2xl bg-[#E5E5E5]">

                    {/* Left Side: Image (50%) */}
                    <div className="w-1/2 relative bg-gray-300 overflow-hidden">
                        <Image src="/Content.JPG" alt="Content Image" fill className="object-cover" />
                    </div>

                    {/* Right Side: Content List (50%) */}
                    <div className="w-1/2 bg-[#E5E5E5] p-16 flex flex-col relative justify-center">
                        {/* Header */}
                        <h2 className="font-display text-8xl mb-16 tracking-tight text-[#111]">CONTENT</h2>

                        {/* List */}
                        <ul className="w-full flex flex-col h-[50%] justify-between">
                            <li className="group border-b border-black/20 pb-4 flex items-baseline">
                                <span className="font-sans text-sm font-bold w-12 opacity-40">01.</span>
                                <span className="font-sans text-sm font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">PHILOSOPHY</span>
                            </li>
                            <li className="group border-b border-black/20 pb-4 flex items-baseline">
                                <span className="font-sans text-sm font-bold w-12 opacity-40">02.</span>
                                <span className="font-sans text-sm font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">EDITOR</span>
                            </li>
                            <li className="group border-b border-black/20 pb-4 flex items-baseline">
                                <span className="font-sans text-sm font-bold w-12 opacity-40">03.</span>
                                <span className="font-sans text-sm font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">AUDIENCE</span>
                            </li>
                            <li className="group border-b border-black/20 pb-4 flex items-baseline">
                                <span className="font-sans text-sm font-bold w-12 opacity-40">04.</span>
                                <span className="font-sans text-sm font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">DINING ARCHIVE</span>
                            </li>
                            <li className="group border-b border-black/20 pb-4 flex items-baseline">
                                <span className="font-sans text-sm font-bold w-12 opacity-40">05.</span>
                                <span className="font-sans text-sm font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">ARCHIVE</span>
                            </li>
                            <li className="group border-b border-black/20 pb-4 flex items-baseline">
                                <span className="font-sans text-sm font-bold w-12 opacity-40">06.</span>
                                <span className="font-sans text-sm font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">SERVICE</span>
                            </li>
                            <li className="group border-b border-black/20 pb-4 flex items-baseline">
                                <span className="font-sans text-sm font-bold w-12 opacity-40">07.</span>
                                <span className="font-sans text-sm font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">PHOTOGRAPHY</span>
                            </li>
                        </ul>

                        {/* Footer */}
                        <div className="absolute bottom-12 right-16">
                            <p className="font-sans text-[10px] font-bold tracking-widest text-[#111]/40 uppercase">@2026 GOURMEVEL</p>
                        </div>
                    </div>
                </section>

                {/* PAGE 3: BRAND PHILOSOPHY */}
                <section className="relative w-full aspect-[297/210] bg-[#111] text-[#F2F1ED] flex flex-col p-16 shadow-2xl">
                    <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
                        <div>
                            <span className="font-sans text-xs tracking-[0.3em] opacity-40 block mb-2">01. BRAND PHILOSOPHY</span>
                            <h2 className="font-display text-4xl">
                                향유하고 사유하는 미식 문화
                            </h2>
                        </div>
                        <p className="font-serif text-sm opacity-60 text-right">
                            Gourmevel은 미식과 여행의 경계에서<br />문화와 이야기를 탐구합니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 flex-1 h-full">
                        {/* Column 1: RESONANCE */}
                        <div className="flex flex-col h-full group bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                            {/* Image Area - SVG (No Background) */}
                            <div className="w-full flex-1 relative overflow-hidden flex items-center justify-center mb-6">
                                <div className="w-40 h-40 relative opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                                    <svg viewBox="0 0 200 200" className="w-full h-full">
                                        <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                                        <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        {/* Floating Particles */}
                                        <circle cx="140" cy="60" r="2.5" fill="currentColor" opacity="0.8" />
                                        <circle cx="60" cy="140" r="3" fill="currentColor" opacity="0.6" />
                                        <circle cx="160" cy="120" r="2.5" fill="currentColor" opacity="0.7" />
                                    </svg>
                                </div>
                            </div>
                            {/* Text Area */}
                            <div>
                                <h3 className="font-display text-3xl mb-2">RESONANCE</h3>
                                <span className="font-serif text-sm opacity-50 block mb-4">맛의 공명</span>
                                <p className="font-sans text-xs leading-relaxed opacity-60 break-keep">
                                    맛이 주는 깊은 여운에 주목합니다. 공간과 사람, 시간이 빚어내는 총체적 경험이 내면에 공명하는 순간을 기록합니다.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: HARMONY */}
                        <div className="flex flex-col h-full group bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                            {/* Image Area - SVG (No Background) */}
                            <div className="w-full flex-1 relative overflow-hidden flex items-center justify-center mb-6">
                                <div className="w-40 h-40 relative opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                                    <svg viewBox="0 0 200 200" className="w-full h-full">
                                        <path d="M20,100 Q100,20 180,100 T20,100" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M20,110 Q100,30 180,110 T20,110" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
                                        <path d="M20,120 Q100,40 180,120 T20,120" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                                        <path d="M20,90 Q100,10 180,90 T20,90" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                                    </svg>
                                </div>
                            </div>
                            {/* Text Area */}
                            <div>
                                <h3 className="font-display text-3xl mb-2">HARMONY</h3>
                                <span className="font-serif text-sm opacity-50 block mb-4">문화의 융합</span>
                                <p className="font-sans text-xs leading-relaxed opacity-60 break-keep">
                                    식탁은 서로 다른 문화가 만나는 가장 평화로운 장소입니다. 로컬 식재료와 셰프의 철학이 만나 새로운 가치를 만드는 융합의 순간을 포착합니다.
                                </p>
                            </div>
                        </div>

                        {/* Column 3: ESSENCE */}
                        <div className="flex flex-col h-full group bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                            {/* Image Area - Shape (No Background) */}
                            <div className="w-full flex-1 relative overflow-hidden flex items-center justify-center mb-6">
                                <div className="w-28 h-28 border-2 border-white/60 rotate-45 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                            {/* Text Area */}
                            <div>
                                <h3 className="font-display text-3xl mb-2">ESSENCE</h3>
                                <span className="font-serif text-sm opacity-50 block mb-4">본질의 탐구</span>
                                <p className="font-sans text-xs leading-relaxed opacity-60 break-keep">
                                    트렌드에 휩쓸리지 않고, 요리의 본질에 집중합니다. 화려한 연출보다 재료 본연의 맛과 진정성 있는 이야기를 전달합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PAGE 4: EDITOR'S NOTE */}
                <section className="relative w-full aspect-[297/210] bg-[#F2F1ED] text-[#111] flex shadow-2xl">
                    {/* Left Image 40% */}
                    <div className="w-5/12 relative bg-gray-200">
                        <Image src="/profile.jpg" alt="Editor" fill className="object-cover grayscale" />
                    </div>

                    {/* Right Text 60% */}
                    <div className="w-7/12 p-16 flex flex-col justify-center">
                        <span className="font-sans text-xs tracking-[0.3em] opacity-40 block mb-8">02. EDITOR’S NOTE</span>

                        <h3 className="font-display text-4xl mb-8 leading-tight">
                            미식은 오감으로 즐기는<br />가장 고차원적인 예술입니다.
                        </h3>

                        <div className="font-serif text-sm leading-relaxed opacity-70 space-y-4 text-justify max-w-lg">
                            <p>
                                저에게 미식(Gastronomy)은 단순히 배를 채우는 행위가 아닙니다.
                                접시 위에 펼쳐진 시각적 미학, 코끝을 스치는 섬세한 향, 혀끝에서 느껴지는 다채로운 질감,
                                그리고 공간을 채우는 음악까지.
                                오감이 완벽하게 조화를 이룰 때 비로소 완성되는 예술이라고 믿습니다.
                            </p>
                            <p>
                                고메블은 겉으로만 화려한 유행을 좇지 않습니다.
                                대신 남들과는 다른 시선으로, 저만의 기준에서 진정으로 마음을 움직였던 경험들을 수집합니다.
                            </p>
                        </div>

                        <div className="mt-12 pt-6 border-t border-black/10 flex justify-between items-end">
                            <div>
                                <p className="font-display text-xl mb-1">Seungju Wi</p>
                                <p className="font-sans text-[10px] tracking-widest uppercase opacity-50">Director & Editor</p>
                            </div>
                            <p className="font-serif italic text-base">Taste the extraordinary, Gourmevel</p>
                        </div>
                    </div>
                </section>

                {/* PAGE 5: AUDIENCE INSIGHT */}
                <section className="relative w-full aspect-[297/210] bg-[#F2F1ED] text-[#111] flex flex-col p-20 shadow-2xl">

                    <div className="flex justify-between items-end border-b border-black/10 pb-12 mb-20">
                        <div>
                            <span className="font-sans text-xs tracking-[0.3em] opacity-40 block mb-6">03. AUDIENCE INSIGHT</span>
                            <h2 className="font-display text-8xl mb-2">10,800</h2>
                            <p className="font-serif text-3xl italic">Opinion Leaders</p>
                        </div>
                        <p className="font-sans text-base opacity-60 max-w-md text-right pb-2">
                            자극적인 후킹 없이, 4년의 시간 동안 진정성 하나로 모인 단단한 팬덤
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-16">
                        <div className="space-y-6">
                            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center font-display text-2xl">01</div>
                            <div>
                                <h3 className="font-display text-3xl mb-3">High Loyalty</h3>
                                <p className="font-serif text-lg opacity-50 mb-4">압도적인 신뢰도</p>
                                <p className="font-sans text-xs leading-relaxed opacity-60">
                                    자극적인 숏폼 없이 긴 호흡의 글로 오가닉하게 성장했습니다.
                                    낮은 이탈률과 높은 저장 수는 구독자들의 깊은 신뢰를 증명합니다.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center font-display text-2xl">02</div>
                            <div>
                                <h3 className="font-display text-3xl mb-3">Opinion Leaders</h3>
                                <p className="font-serif text-lg opacity-50 mb-4">업계가 주목하는 채널</p>
                                <p className="font-sans text-xs leading-relaxed opacity-60">
                                    팔로워의 상당수가 현직 셰프, 소믈리에, F&B 관계자로 구성되어 있습니다.
                                    단순 소비자가 아닌, 미식 트렌드를 이끄는 전문가들이 레퍼런스로 삼는 매거진입니다.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center font-display text-2xl">03</div>
                            <div>
                                <h3 className="font-display text-3xl mb-3">Genuine Taste</h3>
                                <p className="font-serif text-lg opacity-50 mb-4">진정성 있는 소통</p>
                                <p className="font-sans text-xs leading-relaxed opacity-60">
                                    광고성 콘텐츠조차 에디터의 '큐레이션'으로 받아들이며,
                                    브랜드가 가진 철학에 깊게 공감하고 반응합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PAGE 6: DINING ARCHIVE */}
                <section className="relative w-full aspect-[297/210] bg-[#111] text-[#F2F1ED] flex shadow-2xl">
                    <div className="w-5/12 bg-gray-800 relative">
                        <Image src="/Dining.jpg" alt="Dining Archive" fill className="object-cover" />
                    </div>
                    <div className="w-7/12 p-16 flex flex-col justify-center">
                        <span className="font-sans text-xs tracking-[0.3em] opacity-40 block mb-6">04. DINING ARCHIVE</span>
                        <h2 className="font-display text-6xl mb-6">The Taste</h2>
                        <p className="font-serif italic text-2xl opacity-60 mb-12">접시 위의 철학</p>

                        <div className="space-y-8 max-w-lg">
                            <p className="font-serif text-2xl leading-relaxed opacity-90 decoration-slice break-keep">
                                "요리는 혀끝에서 사라지지만, 그 안에 담긴 셰프의 고뇌와 철학은 기억에 남습니다."
                            </p>
                            <div className="w-20 h-[1px] bg-white/20" />
                            <p className="font-sans text-sm mt-4 opacity-50 leading-relaxed break-keep">
                                단순히 화려한 비주얼을 넘어, 그 이면에 숨겨진 재료의 본질과 셰프의 철학이 담긴 조리 과정의 디테일을 심도 있게 조명합니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PAGE 7: SPACE ARCHIVE */}
                <section className="relative w-full aspect-[297/210] bg-[#F2F1ED] text-[#111] flex shadow-2xl">
                    <div className="w-7/12 p-16 flex flex-col justify-center items-end text-right">
                        <span className="font-sans text-xs tracking-[0.3em] opacity-40 block mb-6">05. SPACE ARCHIVE</span>
                        <h2 className="font-display text-6xl mb-6">The Atmosphere</h2>
                        <p className="font-serif italic text-2xl opacity-60 mb-12">공간이 건네는 위로</p>

                        <div className="space-y-8 max-w-lg">
                            <p className="font-serif text-2xl leading-relaxed opacity-90 decoration-slice break-keep">
                                &quot;맛을 완성하는 것은 결국 공간의 공기와 온도입니다.&quot;
                            </p>
                            <div className="w-20 h-[1px] bg-black/20 ml-auto" />
                            <p className="font-sans text-sm mt-4 opacity-50 leading-relaxed break-keep">
                                식사하는 동안 온전히 느낄 수 있는 공간 고유의 무드(Mood)를 포착하여, 감각적인 사진과 깊이 있는 문학적 에세이로 시각화합니다.
                            </p>
                        </div>
                    </div>
                    <div className="w-5/12 bg-gray-300 relative">
                        <Image src="/place.jpg" alt="Space Archive" fill className="object-cover" />
                    </div>
                </section>

                {/* PAGE 8: PARTNERSHIP PROPOSAL */}
                <section className="relative w-full aspect-[297/210] bg-white text-[#111] flex flex-col p-20 shadow-2xl">
                    <div className="flex justify-between items-center mb-16">
                        <div>
                            <span className="font-sans text-xs tracking-[0.3em] opacity-40 block mb-4">06. PARTNERSHIP PROPOSAL</span>
                            <h2 className="font-display text-5xl">Collaboration Types</h2>
                        </div>
                        <div className="text-right opacity-60 text-sm font-sans">
                            <p>예산 및 진행 범위에 따라 견적 협의 가능</p>
                            <p>세금계산서 발행 가능 (VAT 별도)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 flex-1 mb-12">
                        {/* TYPE A */}
                        <div className="border border-black/10 p-12 flex flex-col justify-between hover:bg-gray-50 transition-colors relative group">
                            <div>
                                <div className="mb-8 border-b border-black/10 pb-6">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-display text-4xl">Type A</h3>
                                        <span className="font-display text-2xl opacity-40">₩ 300,000</span>
                                    </div>
                                    <p className="font-serif text-xl opacity-60 mb-1">Brand Essay</p>
                                    <p className="font-sans text-xs opacity-40 uppercase tracking-widest">브랜드 에세이</p>
                                </div>

                                <div className="space-y-6 font-sans text-sm leading-relaxed">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Concept</span>
                                        <span className="opacity-80 font-medium text-base">"Re-interpretation" <span className="opacity-50 font-normal text-sm ml-1">(소재 재해석)</span></span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Process</span>
                                        <span className="opacity-80 block w-full">소재 수령 <span className="mx-1 opacity-30">→</span> 톤앤매너 보정 <span className="mx-1 opacity-30">→</span> 원고 집필 <span className="mx-1 opacity-30">→</span> 발행</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Includes</span>
                                        <ul className="space-y-1 opacity-80">
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-black/20 mr-2"></span> 인스타그램 피드 업로드 (High-quality)</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-black/20 mr-2"></span> 고메블 특유의 스토리텔링 원고</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-black/20 mr-2"></span> Social SEO 및 타겟 키워드 세팅</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TYPE B */}
                        <div className="bg-[#111] text-[#F2F1ED] p-12 flex flex-col justify-between relative">
                            <div>
                                <div className="mb-8 border-b border-white/20 pb-6">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-display text-4xl">Type B</h3>
                                        <span className="font-display text-2xl opacity-40">₩ 600,000</span>
                                    </div>
                                    <p className="font-serif text-xl opacity-80 mb-1">Director's Feature</p>
                                    <p className="font-sans text-xs opacity-40 uppercase tracking-widest">기획 취재</p>
                                </div>

                                <div className="space-y-6 font-sans text-sm leading-relaxed">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Concept</span>
                                        <span className="opacity-90 font-medium text-base">"Authentic Experience" <span className="opacity-50 font-normal text-sm ml-1">(현장 경험)</span></span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Process</span>
                                        <span className="opacity-80 block w-full">사전 기획 <span className="mx-1 opacity-30">→</span> 현장 방문 <span className="mx-1 opacity-30">→</span> 집필 <span className="mx-1 opacity-30">→</span> 발행</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Includes</span>
                                        <ul className="space-y-1 opacity-80">
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2"></span> 에디터 직접 촬영 및 보정 (Mood Cuts)</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2"></span> 현장감과 디테일을 살린 심층 기획 원고</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2"></span> 인스타그램 스토리 업로드 (Link 포함)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                {/* PAGE 9: PHOTOGRAPHY SERVICE */}
                <section className="relative w-full aspect-[297/210] bg-[#F2F1ED] text-[#111] flex flex-col p-20 shadow-2xl">
                    <div className="flex justify-between items-center mb-16">
                        <div>
                            <span className="font-sans text-xs tracking-[0.3em] opacity-40 block mb-4">07. PHOTOGRAPHY</span>
                            <h2 className="font-display text-5xl">Visual Directing</h2>
                        </div>
                        <div className="text-right opacity-60 text-sm font-sans">
                            <p>단순 촬영이 아닌, 브랜드의 무드를 담아냅니다.</p>
                        </div>
                    </div>

                    <div className="flex-1 flex gap-16 items-center">
                        {/* Left: Description */}
                        <div className="w-1/2 space-y-12">
                            <div>
                                <h3 className="font-display text-3xl mb-4">Mood Of The Moment</h3>
                                <p className="font-serif text-xl leading-relaxed opacity-80 break-keep">
                                    &quot;숨겨진 매력을 찾아내어, 브랜드의 본질을 시각화합니다.&quot;
                                </p>
                                <p className="font-sans text-sm mt-4 opacity-60 leading-relaxed break-keep">
                                    과한 보정은 오히려 실제 음식과의 괴리감을 만들어 실망을 줄 수 있습니다. 고메블은 현장에서만 느낄 수 있는 고유의 아름다움과 공기를 있는 그대로 포착하여, 브랜드가 가진 숨겨진 매력을 찾아냅니다.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-8">
                                <div className="flex justify-between items-baseline mb-6 border-b border-black/10 pb-4">
                                    <h4 className="font-display text-2xl">Type C</h4>
                                    <div className="text-right">
                                        <span className="font-display text-2xl">₩ 300,000</span>
                                        <span className="font-sans text-xs opacity-50 block mt-1">+ 출장비 별도</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 font-sans text-sm opacity-80">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black/20 mr-3 mt-1.5"></span>
                                        <span><strong>10 Cuts</strong> (Gourmevel Signature Grading A-Cut)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black/20 mr-3 mt-1.5"></span>
                                        <span><strong>1 Hour</strong> 현장 촬영 및 디렉팅</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black/20 mr-3 mt-1.5"></span>
                                        <span>추가 1컷당 33,000원</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Abstract/Mood Image Placeholder */}
                        <div className="w-1/2 h-full relative overflow-hidden">
                            <Image src="/Photograpy.jpg" alt="Photography Mood" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* PAGE 10: CLOSING */}
                <section className="relative w-full aspect-[297/210] bg-[#111] text-[#F2F1ED] flex flex-col items-center justify-center shadow-2xl">
                    <div className="text-center">

                        <p className="font-display text-6xl mb-8 leading-tight">
                            Let’s create<br />something extraordinary.
                        </p>
                        <p className="font-serif text-2xl opacity-60 mb-16">
                            진심을 담은 시선으로, 당신의 브랜드와 함께합니다.
                        </p>

                        <div className="inline-block border border-white/20 px-12 py-6 rounded-full">
                            <p className="font-sans text-xl tracking-wider opacity-80">gourmevel@gmail.com</p>
                        </div>
                    </div>

                    <div className="absolute bottom-12 text-center opacity-30 font-sans text-xs tracking-[0.2em]">
                        <p>GOURMEVEL MEDIA KIT 2025</p>
                    </div>
                </section>
            </div>

            {/* Print helper */}
            <div className="fixed bottom-10 right-10 print:hidden z-50">
                <div className="bg-black text-white p-6 rounded-lg shadow-xl max-w-sm">
                    <h3 className="font-bold mb-2">Save as PDF (Landscape)</h3>
                    <ol className="list-decimal pl-4 text-sm space-y-2 opacity-80">
                        <li>Right Click → Print (or Cmd+P)</li>
                        <li>Destination: <strong>Save as PDF</strong></li>
                        <li>Layout: <strong>Landscape (가로 방향)</strong></li>
                        <li>Paper Size: <strong>A4</strong> (or Letter)</li>
                        <li><strong>Enable "Background graphics"</strong></li>
                        <li>Margins: <strong>None</strong></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
