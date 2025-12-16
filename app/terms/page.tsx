"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-beige selection:bg-brand-primary selection:text-brand-secondary">
      <Header />

      <main className="flex-grow pt-40 pb-32 px-6">
        <div className="max-w-screen-md mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs font-bold tracking-[0.3em] text-brand-secondary uppercase mb-6"
            >
              Terms of Service
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl text-brand-primary"
            >
              이용약관
            </motion.h1>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-stone prose-lg max-w-none font-serif text-brand-primary/80"
          >
            <div className="space-y-12">
              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">제1조 (목적)</h3>
                <p className="text-base leading-relaxed">
                  본 약관은 Gourmevel(이하 "회사")이 제공하는 웹사이트 및 제반 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">제2조 (정의)</h3>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>"서비스"라 함은 구현되는 단말기(PC, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 "이용자"가 이용할 수 있는 Gourmevel 관련 제반 서비스를 의미합니다.</li>
                  <li>"이용자"라 함은 회사의 서비스에 접속하여 본 약관에 따라 회사가 제공하는 콘텐츠를 이용하는 자를 말합니다.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">제3조 (지식재산권의 귀속 및 이용제한)</h3>
                <p className="text-base leading-relaxed mb-4">
                  1. 회사가 작성한 저작물(텍스트, 이미지, 영상 등)에 대한 저작권 및 기타 지식재산권은 회사에 귀속됩니다.
                </p>
                <p className="text-base leading-relaxed">
                  2. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                </p>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">제4조 (서비스의 내용 및 변경)</h3>
                <p className="text-base leading-relaxed">
                  회사는 맛집 정보 제공, 에세이 큐레이션 등의 서비스를 제공합니다. 회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.
                </p>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">제5조 (책임의 제한)</h3>
                <p className="text-base leading-relaxed mb-4">
                  1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  2. 회사는 서비스에서 제공되는 정보의 신뢰도, 정확성 등 내용에 관하여는 보증하지 않습니다. 특히 소개된 레스토랑의 영업 여부, 가격 변동 등은 해당 업체의 사정에 따라 예고 없이 변경될 수 있습니다.
                </p>
                <p className="text-base leading-relaxed">
                  3. 회사는 이용자 상호간 또는 이용자와 제3자 상호간에 서비스를 매개로 하여 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다.
                </p>
              </section>

              <div className="pt-12 border-t border-brand-primary/10">
                <p className="text-sm text-brand-primary/60">
                  본 약관은 2024년 1월 1일부터 시행됩니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

