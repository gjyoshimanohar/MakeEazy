import React from "react";
import { motion } from "motion/react";
import {
  FileCheck,
  ArrowRight,
  Calculator,
  Receipt,
  BookOpen,
  Wallet,
  FileText,
  IndianRupee,
} from "lucide-react";

export default function CompliancesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
              <FileCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-slate-900">
                Compliances
              </h1>
              <p className="text-slate-500 mt-1">
                Stay compliant, avoid penalties, and build trust
              </p>
            </div>
          </div>

          <div className="text-justify space-y-6">
            <h2 className="text-2xl font-bold text-[#3150A0] mb-4">
              Understanding Business Compliances
            </h2>

            <p className="text-slate-700 leading-relaxed">
              In a business context, compliances refer to the legal, regulatory,
              tax, financial, and operational requirements that a business must
              follow as per the applicable laws and authorities. These
              requirements may include business registration, GST filings,
              income tax returns, accounting records, labour law requirements,
              company law filings, licenses, and industry-specific regulations.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Compliance is important because it helps a business operate
              legally, avoid penalties, maintain transparency, and build trust
              with customers, investors, banks, and government authorities. A
              compliant business is better prepared for growth, funding, audits,
              and long-term stability. Proper compliance management also reduces
              legal risks and allows business owners to focus on running and
              expanding their business with confidence.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#3150A0] mb-8 text-center">
              Types of Compliances
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Income Tax",
                  description:
                    "Filing income tax returns, tax audits, advance tax payments, TDS/TCS compliance, and responding to notices.",
                  icon: Calculator,
                },
                {
                  title: "Goods & Services Tax",
                  description:
                    "GST registration, periodic return filings, annual returns, GST audits, E-way bill generation, and ITC reconciliation.",
                  icon: IndianRupee,
                },
                {
                  title: "ROC & Secretarial",
                  description:
                    "Annual filings with the MCA, maintaining statutory registers, conducting board and general meetings, and handling changes in directorship or share capital.",
                  icon: BookOpen,
                },
                {
                  title: "Accounting & Bookkeeping",
                  description:
                    "Maintaining accurate books of accounts, financial statement preparation, ledger scrutiny, and payroll processing.",
                  icon: Wallet,
                },
                {
                  title: "Other Compliances",
                  description:
                    "Labour law compliances (PF, ESI, PT), industry-specific licenses, RBI/FEMA filings, and local municipal registrations.",
                  icon: FileText,
                },
              ].map((model, i) => {
                const IconContent = model.icon;
                return (
                  <motion.div
                    key={i}
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
                      {model.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-normal text-justify line-clamp-5">
                      {model.description}
                    </p>
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
