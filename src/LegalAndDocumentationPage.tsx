import React from "react";
import { motion } from "motion/react";
import {
  Scale,
  ShieldAlert,
  FileWarning,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function LegalAndDocumentationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-[#3150A0] leading-tight">
                Safeguarding Your Future
              </h1>
              <p className="text-slate-500 mt-1">
                The Power of Precision in Legal Documents
              </p>
            </div>
          </div>

          <div className="text-justify space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              In the landscape of modern business, a handshake is a great start,
              but a well-drafted legal document is the ultimate foundation.
              Whether you are scaling operations, structuring a new entity, or
              onboarding vendors, the contracts you sign dictate your exposure
              to risk, tax liabilities, and regulatory scrutiny.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              Legal documents are not just formalities—they are strategic tools
              that define relationships, secure assets, and ensure your
              operational continuity.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-center text-[#3150A0] mb-6">
              Why Legal Documents Are Your Strongest Asset
            </h2>
            <p className="text-slate-600 text-lg text-center max-w-3xl mx-auto mb-12">
              A robust legal framework does more than just bind parties to an
              agreement; it acts as a pre-emptive shield for your business
              operations.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden flex flex-col text-left block">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors duration-300">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#3150A0] mb-2 group-hover:text-orange-500 transition-colors">
                  Risk Mitigation
                </h3>
                <p className="text-sm text-slate-600 leading-normal text-justify">
                  Clear documentation eliminates ambiguity. It defines the exact
                  boundaries of a relationship, outlines deliverables, and
                  provides a clear roadmap for resolving disputes before they
                  escalate into costly litigation or arbitration.
                </p>
              </div>
              <div className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden flex flex-col text-left block">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors duration-300">
                  <FileWarning className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#3150A0] mb-2 group-hover:text-orange-500 transition-colors">
                  Regulatory Alignment
                </h3>
                <p className="text-sm text-slate-600 leading-normal text-justify">
                  In an environment where tax laws, corporate statutes, and
                  audit requirements frequently shift, your agreements must
                  seamlessly align with current statutory frameworks to prevent
                  penalties.
                </p>
              </div>
              <div className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden flex flex-col text-left block">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors duration-300">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#3150A0] mb-2 group-hover:text-orange-500 transition-colors">
                  Protecting Financial Interests
                </h3>
                <p className="text-sm text-slate-600 leading-normal text-justify">
                  From strict payment schedules and confidentiality clauses to
                  intellectual property rights, legal contracts safeguard the
                  financial health and proprietary edge of your business.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-[#3150A0] mb-6">
              The Danger of the "Copy-Paste" Approach
            </h2>
            <div className="space-y-4 text-justify mb-10">
              <p className="text-slate-700 text-lg leading-relaxed">
                It is a common misconception that any legal template will
                suffice. However, downloading a generic document online is a
                significant liability. Appropriate drafting is not about
                stringing together complex legal jargon; it is about applying
                strategic foresight to your specific situation.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                A single misplaced word or an omitted clause regarding tax
                liabilities can fundamentally alter the risk profile of a
                transaction.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <thead>
                  <tr className="bg-[#3150A0] text-white">
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm w-1/4">
                      Aspect
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm border-l border-white/20">
                      Generic Templates
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm border-l border-white/20">
                      Custom Drafting
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#3150A0] border-r border-slate-200">
                      Protection
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 text-orange-600 font-medium">
                      Leaves operational and legal loopholes open
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Closes specific liability gaps</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#3150A0] border-r border-slate-200">
                      Compliance
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 text-orange-600 font-medium">
                      Often outdated or region-agnostic
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>
                          Aligned with current corporate and tax frameworks
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#3150A0] border-r border-slate-200">
                      Clarity
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 text-orange-600 font-medium">
                      Broad, vague terms open to interpretation
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>
                          Precise definitions tailored to your exact transaction
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
