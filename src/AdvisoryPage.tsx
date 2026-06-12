import React from "react";
import { motion } from "motion/react";
import {
  Lightbulb,
  Target,
  Calculator,
  FileSearch,
  HandCoins,
  Building2,
  Workflow,
  Network,
  ArrowRight,
} from "lucide-react";

const ADVISORY_SERVICES = [
  {
    icon: Target,
    title: "Business Growth and Financial Strategy",
    description:
      "We help businesses plan and achieve sustainable growth through practical financial analysis and strategic guidance. Our team reviews revenue models, cost structures, profitability, cash flow, and expansion opportunities to help business owners make informed decisions.",
    highlight:
      "This service is ideal for businesses looking to scale operations, enter new markets, improve margins, or build a structured growth plan.",
  },
  {
    icon: Calculator,
    title: "Business Valuation Advisory",
    description:
      "We assist clients in determining the fair value of their business, shares, assets, or startup. Our valuation support considers financial performance, business potential, industry outlook, market conditions, and future projections.",
    highlight:
      "Business valuation is useful for fundraising, investor negotiations, mergers, acquisitions, ownership changes, business sale, succession planning, and internal decision-making.",
  },
  {
    icon: FileSearch,
    title: "Due Diligence Services",
    description:
      "We provide financial, tax, and compliance due diligence services for investors, business owners, acquirers, and companies entering into transactions. Our review helps identify hidden liabilities, pending compliances, tax exposures, financial risks, and the actual financial position of a business.",
    highlight:
      "Due diligence is especially important before investment, acquisition, merger, partnership, business transfer, or strategic collaboration.",
  },
  {
    icon: HandCoins,
    title: "Funding and Loan Advisory",
    description:
      "We support businesses in preparing for funding through bank loans, working capital finance, project finance, investor funding, or applicable government schemes. Our services include preparation of financial projections, project reports, CMA data, valuation inputs, business plans, and other funding-related documents.",
    highlight:
      "This helps businesses present their financial position professionally and improve their readiness for lenders and investors.",
  },
  {
    icon: Building2,
    title: "Virtual CFO and Management Advisory",
    description:
      "We offer Virtual CFO and management advisory services for businesses that require expert financial guidance without appointing a full-time CFO. Our support includes MIS review, budgeting, cash flow monitoring, profitability analysis, cost control, financial planning, and strategic reporting.",
    highlight:
      "This service helps business owners get better visibility of financial performance and take timely, data-driven decisions.",
  },
  {
    icon: Workflow,
    title: "Business Process, Internal Control and SOP Advisory",
    description:
      "We help businesses strengthen their internal operations by reviewing existing processes, identifying gaps, and designing better control systems. Our advisory covers finance, accounting, billing, collections, purchases, payments, vendor management, inventory, payroll coordination, and compliance processes.",
    highlight:
      "We also design and support the implementation of Standard Operating Procedures, or SOPs, to create consistency, accountability, transparency, and efficiency across business functions.",
  },
  {
    icon: Network,
    title: "Merger, Acquisition and Business Restructuring Advisory",
    description:
      "We assist clients in mergers, acquisitions, business sale, ownership restructuring, and corporate reorganization. Our support includes valuation, due diligence, financial analysis, transaction planning, restructuring advice, and documentation coordination.",
    highlight:
      "This service helps businesses and investors evaluate transactions carefully and proceed with clarity, confidence, and proper financial understanding.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                Advisory Services
              </h1>
              <p className="text-slate-500 mt-1">
                Strategic guidance for business growth
              </p>
            </div>
          </div>

          <div className="text-justify space-y-6">
            <p className="text-slate-700 leading-relaxed">
              At Make Eazy Consultants, we provide strategic advisory services
              designed to help businesses grow, improve financial performance,
              strengthen internal systems, and make informed decisions. Our
              advisory solutions are suitable for startups, growing businesses,
              family-owned enterprises, investors, and companies planning
              expansion, funding, restructuring, or business transactions.
            </p>

            <p className="text-slate-700 leading-relaxed">
              With practical experience and professional expertise, we support
              clients in identifying opportunities, managing risks, improving
              operational efficiency, and building a strong foundation for
              sustainable growth.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-center text-[#3150A0] mb-8">
              Our Key Advisory Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVISORY_SERVICES.map((service, index) => {
                const IconContent = service.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden flex flex-col text-left block"
                  >
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors duration-300">
                      <IconContent className="w-7 h-7" />
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#3150A0] mb-2 group-hover:text-orange-500 transition-colors pr-8">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-normal text-justify mb-4 flex-grow">
                      {service.description}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-xl text-xs font-medium border border-slate-100 italic text-slate-600 group-hover:border-orange-100 group-hover:bg-orange-50 group-hover:text-orange-900 transition-colors">
                      {service.highlight}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
