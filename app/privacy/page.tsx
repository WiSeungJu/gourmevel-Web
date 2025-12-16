"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
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
              Privacy Policy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl text-brand-primary"
            >
              개인정보 처리방침
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
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">1. 총칙</h3>
                <p className="text-base leading-relaxed">
                  Gourmevel(이하 "회사")은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </p>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">2. 수집하는 개인정보 항목 및 방법</h3>
                <p className="text-base leading-relaxed mb-4">
                  회사는 '문의하기' 및 제휴 제안 등을 위해 아래와 같은 최소한의 개인정보를 수집하고 있습니다.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li><strong>수집 항목:</strong> 이름, 이메일 주소, 소속(선택), 문의 내용</li>
                  <li><strong>수집 방법:</strong> 홈페이지 내 'Contact' 문의 양식을 통한 수집</li>
                </ul>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">3. 개인정보의 처리 목적</h3>
                <p className="text-base leading-relaxed">
                  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-base">
                  <li>접수된 문의에 대한 답변 및 결과 발송</li>
                  <li>제휴 및 협업 제안 검토</li>
                  <li>서비스 개선 및 부정 이용 방지</li>
                </ul>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">4. 개인정보의 보유 및 이용기간</h3>
                <p className="text-base leading-relaxed">
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-base">
                  <li><strong>문의 응대 정보:</strong> 문의 처리 완료 후 3년간 보관 (전자상거래 등에서의 소비자보호에 관한 법률 참조)</li>
                  <li><strong>소비자의 불만 또는 분쟁처리에 관한 기록:</strong> 3년</li>
                </ul>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">5. 개인정보의 파기 절차 및 방법</h3>
                <p className="text-base leading-relaxed">
                  회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하며, 종이 문서는 분쇄하거나 소각하여 파기합니다.
                </p>
              </section>

              <section>
                <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">6. 개인정보 보호책임자</h3>
                <p className="text-base leading-relaxed">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="mt-4 p-6 bg-white border border-brand-primary/10">
                  <p className="font-bold text-brand-primary mb-2">개인정보 보호 담당 부서</p>
                  <p className="text-sm">이메일: gourmevel@gmail.com</p>
                </div>
              </section>

              <div className="pt-12 border-t border-brand-primary/10">
                <p className="text-sm text-brand-primary/60">
                  본 개인정보 처리방침은 2024년 1월 1일부터 적용됩니다.
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

