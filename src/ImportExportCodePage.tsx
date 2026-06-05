import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Truck, 
  Award, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  AlertCircle, 
  ShieldCheck, 
  Layers, 
  XOctagon, 
  Check, 
  Sparkles,
  ChevronDown,
  Globe,
  TrendingUp,
  CreditCard,
  Compass,
  FileSignature
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is it', icon: Compass },
  { id: 'eligibility', name: 'Eligibility Criteria', icon: Award },
  { id: 'benefits', name: 'Key Benefits (10 Points)', icon: Sparkles },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'Registration Process', icon: Layers },
  { id: 'validity', name: 'Validity & Annual Update', icon: CheckCircle2 },
  { id: 'rejections-faqs', name: 'Common Issues & FAQs', icon: XOctagon },
  { id: 'why-makeeazy', name: 'Why MakeEazy & service', icon: ShieldCheck }
];

export default function ImportExportCodePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <a 
          href="/other-registration"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Other Registrations
        </a>

        {/* Hero Section Banner */}
        <div className="bg-[#3150A0] rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Globe className="w-3.5 h-3.5" />
                DGFT Import Export Code Scheme
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Import Export Code (IEC)
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Commonly known as <strong className="text-white font-bold">IEC Registration</strong>, it is the primary identity issued by the <strong className="text-white font-bold">Directorate General of Foreign Trade (DGFT)</strong> under the Ministry of Commerce. It acts as a unique identification number required to legally buy or sell goods across Indian borders.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Truck className="w-12 h-12 md:w-16 md:h-16 text-orange-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Desktop Sidebar Layout & Mobile Navigation Tabs */}
        <div className="lg:flex lg:gap-8 items-start">
          
          {/* Sidebar / Left Navigation */}
          <div className="hidden lg:block w-72 shrink-0 sticky top-36 bg-white border border-slate-200 rounded-3xl p-4 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-4 mb-4">Navigations</h3>
            <div className="space-y-1">
              {SECTIONS.map((section) => {
                const IconComponent = section.icon;
                const isActive = activeTab === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all text-left cursor-pointer ${
                      isActive 
                        ? 'bg-blue-50 text-[#3150A0] border-l-4 border-[#3150A0] shadow-sm' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <IconComponent className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-[#3150A0]' : 'text-slate-400'}`} />
                    {section.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Tab Selector */}
          <div className="lg:hidden mb-6">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 text-left">Navigate Content Section:</label>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:border-orange-500 cursor-pointer shadow-sm text-sm"
            >
              {SECTIONS.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>

          {/* Main Informative Content Panes */}
          <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm transition-all text-justify">
            
            {/* 1. OVERVIEW AND DESCRIPTION */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Compass className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What is Import Export Code (IEC)?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  Import Export Code Registration, commonly known as <span className="font-bold text-slate-900">IEC Registration</span>, is one of the most important registrations for any business or individual planning to import goods into India or export goods from India.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  IEC is issued by the <span className="font-bold text-slate-900">Directorate General of Foreign Trade (DGFT)</span>, under the Ministry of Commerce and Industry, Government of India. It acts as a unique business identification number for import-export activities. If you want to start an import-export business, sell products internationally, import goods for business purposes, export manufactured goods, trade through global marketplaces, or deal with customs and banks for foreign trade transactions, IEC Registration is generally required.
                </p>

                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 mt-4">
                  <h4 className="font-bold text-orange-950 text-base mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
                    Key Nature of Import Export Code
                  </h4>
                  <ul className="text-slate-705 text-sm leading-relaxed space-y-2">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>PAN-Based Structure</strong>: IEC is now centrally mapped with the Permanent Account Number (PAN) of the entity, simplifying tracking and verification.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Customs & Bank Integration</strong>: It is verified electronically by customs authorities during shipment clearances and by banks during cross-border monetary transactions.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Foreign Trade Pre-requisite</strong>: Subject to other applicable registrations, licence, product restrictions, and laws, IEC establishes physical and digital business channels globally.</span>
                    </li>
                  </ul>
                </div>



                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-4">
                  <h4 className="font-bold text-slate-900 text-base mb-2">Why is IEC Registration Required?</h4>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                    Without IEC, a person or business generally cannot import goods into India or export goods outside India. It serves as code verification for critical business milestones:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-750 font-medium pl-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>Importing raw/finished goods physically</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>Exporting manufactured items or crops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>Clearing customs declarations smoothly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>Authenticating export receipts with banks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>Receiving international trade remittances</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>Seeking benefits of Foreign Trade Policy</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ELIGIBILITY */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Eligibility for IEC Registration</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  The eligibility requirements for IEC Registration are incredibly simple and friendly. Any individual or business planning to engage in cross-border trade can register, as long as they hold correct baseline documents and identification proofs.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    {
                      num: "1",
                      title: "Valid PAN Card",
                      desc: "The applicant must have a valid PAN card. Since IEC is now PAN-based, the final certificate is directly linked with the income tax PAN of the applicant or corporate entity."
                    },
                    {
                      num: "2",
                      title: "Valid Business Details & Legal Entity Proof",
                      desc: "The applicant must provide accurate business descriptions, entity titles (Private Company, Partnership, LLP, or proprietorship name), and matching addresses."
                    },
                    {
                      num: "3",
                      title: "Valid Bank Account",
                      desc: "A working and active bank account (current or savings) in the name of the applicant or business entity is mandatory to authenticate transaction flows during registration."
                    },
                    {
                      num: "4",
                      title: "Official Contact Details",
                      desc: "An active mobile number and official email address are mandatory to complete online OTP clearances, receive DGFT notifications, and fetch secure code updates."
                    },
                    {
                      num: "5",
                      title: "Correct Accompanying Documents",
                      desc: "Submitting accurate identity proofs, proof of business premises, and matching banking credentials directly on the unified DGFT integrated services portal."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all">
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-[#3150A0] font-bold flex items-center justify-center shrink-0">
                        {item.num}
                      </span>
                      <div className="text-left">
                        <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                        <p className="text-slate-600 text-sm mt-1 leading-relaxed text-justify">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 text-left">Who Should Apply for IEC Registration?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                    IEC can be obtained by different types of business structures, provided the applicant has valid documents:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-left text-slate-700 font-semibold">
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Proprietorship Firms</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Partnership Firms</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Limited Liability Partnerships (LLPs)</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Private Limited Companies</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Public Limited Companies</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ One Person Companies (OPC)</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Registered Trusts & Societies</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Hindu Undivided Families (HUFs)</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Manufacturers & Importers</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ E-commerce Exporters</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Merchant Exporters & Traders</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ FTP Scheme Claiming Service Providers</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. KEY BENEFITS */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Sparkles className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Benefits of IEC Registration (10 Major Points)</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                  Obtaining an Import Export Code unlocks ten immediate administrative, financial, and strategic advantages for active international merchants:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. Start Import-Export Business",
                      desc: "Acts as the official keys to legally start import or export activities in India, keeping you compliant under central customs and DGFT regulations from day one."
                    },
                    {
                      title: "2. Global Business Expansion",
                      desc: "Allows businesses to seamlessly expand beyond the domestic Indian market, pitch to international buyers, connect with foreign suppliers, and register on cross-border marketplaces."
                    },
                    {
                      title: "3. Smooth Customs Clearance",
                      desc: "Enables hassle-free custom clearances at sea, air, and land ports, serving as the unique core identifier on shipping bills and bills of entry."
                    },
                    {
                      title: "4. Fast Bank Transactions",
                      desc: "Required by banks to route import/export payments, process outward remittances, clear pending export proceeds, and open dedicated foreign currency accounts."
                    },
                    {
                      title: "5. Export Incentives & DGFT Subsidies",
                      desc: "Serves as the mandatory gateway to claim export benefits, tax refunds, interest equalization, duty drawbacks, and matching schemes offered under the Foreign Trade Policy."
                    },
                    {
                      title: "6. Online Import-Export Compliance",
                      desc: "Grants instant digital access to file declarations, update parameters, map custom agents, and access other cross-portal services hosted on the DGFT dashboard."
                    },
                    {
                      title: "7. Ideal for E-Commerce Global Export",
                      desc: "For small businesses and individual creators planning to ship internationally via global marketplaces or foreign websites, IEC acts as the first, vital step toward courier export approval."
                    },
                    {
                      title: "8. Corporate Business Credibility",
                      desc: "Strengthens vendor trust, enhances global brand reputation with overseas clients, and solidifies your legitimacy with customs brokers, airlines, and logistics partners."
                    },
                    {
                      title: "9. Lifetime Validity with No Renewals",
                      desc: "Once successfully registered, the Import Export Code boasts lifetime validity. There is no requirement for cumbersome renewals, saving substantial compliance fees over time."
                    },
                    {
                      title: "10. Seamless & Simple Filing",
                      desc: "The entire application is online, meaning startups, small factories, and trade units can obtain it quickly without physical office visits."
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all text-left">
                      <h4 className="font-bold text-[#3150A0] text-base mb-1.5">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed text-justify">{benefit.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Importer vs Exporter comparison container */}
                <div className="bg-[#3150A0]/5 border border-slate-200 rounded-3xl p-6 mt-6">
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-4 text-left">Detailed Use Cases of IEC</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h4 className="font-bold text-[#3150A0] text-sm uppercase tracking-wide border-b border-slate-200 pb-1.5 mb-2">For Importers</h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>• Clearing import customs parcels</li>
                        <li>• Filing mandatory Bills of Entry</li>
                        <li>• Settling import duties at ports</li>
                        <li>• Verifying inward bank remittances</li>
                        <li>• Linking with ICEGATE and tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3150A0] text-sm uppercase tracking-wide border-b border-slate-200 pb-1.5 mb-2">For Exporters</h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>• Filing active Shipping Bills</li>
                        <li>• Releasing outward cargo lines</li>
                        <li>• Bank AD Code port registration</li>
                        <li>• Claiming export tax incentive plans</li>
                        <li>• Verifying international customer dossiers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3150A0] text-sm uppercase tracking-wide border-b border-slate-200 pb-1.5 mb-2">For E-Commerce Exporters</h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>• Marketplace compliance verification</li>
                        <li>• Fast air-courier customs channels</li>
                        <li>• Legally shipping product samples</li>
                        <li>• Registering on e-commerce portals</li>
                        <li>• Easy small-value claim filing</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* 4. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for IEC</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                  The documents required for IEC Registration depend on your underlying business structure. Keeping clear, uncropped colored scans of files saves applications from being flagged by DGFT officers.
                </p>

                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      For Proprietorship Firms
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "PAN Card of the proprietor",
                        "Aadhaar Card or valid identity proof of owner",
                        "Business premises address proof (rent deed/electricity bill/Udyam)",
                        "Copy of cancelled cheque or verified bank statement",
                        "Active mobile number and official email address",
                        "GST registration certificate (if already available)",
                        "Shop and Establishment certificate or trade license (optional proof)",
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      For Partnership Firms
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "PAN Card of the Partnership Firm",
                        "Copy of registered Partnership Deed",
                        "Identity and PAN Card proofs of all partner nodes",
                        "Corporate business address proof",
                        "Cancelled cheque of the firm's bank account",
                        "Signing authorization letter signed by all partner nodes",
                        "Firm's GST registration certificate (if available)",
                        "Mobile number and email ID mapped with primary signatory"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      For Companies & LLPs
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "PAN Card of the Private/Public Company or LLP",
                        "Certificate of Incorporation (COI)",
                        "Memorandum & Articles of Association (MOA/AOA) / LLP Agreement",
                        "PAN and Aadhaar card copies of all Board Directors / Partners",
                        "Board Resolution or authorized signatory authority letter",
                        "Registered address proof in the name of company/LLP",
                        "Corporate current account cancelled cheque / bank statement",
                        "GST certificate matching company/LLP registrations"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 4 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      For Trusts, Societies & HUF Nodes
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "PAN Card of the Trust/Society/HUF entity",
                        "Official Registration certificate under trust acts/societies act",
                        "Trust Deed, Society Rules copy, or Karta identification",
                        "Core premise address proofs matching registration",
                        "Signatory authorization letter approved by trustees/board",
                        "Cancelled cheque of the organizational account",
                        "Aadhaar & PAN of the primary verified representative"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-705">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">IEC Online Registration Process</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                  The Import Export Code application is submitted and approved via the central online system managed by DGFT. The workflow consists of 9 key milestones:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6">
                  {[
                    {
                      step: "Step 1",
                      title: "Check Business Requirement",
                      desc: "Recognize the core intent and business structure. Goods-related traders almost always need IEC, whereas service exports require it primarily to claim foreign trade benefits and rewards."
                    },
                    {
                      step: "Step 2",
                      title: "Prepare Necessary Documents",
                      desc: "Keep all required corporate details and clear PDFs/JPEGs (PAN, address proofs, cheques, signatory authorisations) ready to ensure clean submissions."
                    },
                    {
                      step: "Step 3",
                      title: "Create DGFT Portal Login",
                      desc: "Navigate directly to the official DGFT services hub. Create or register your authorized login credentials linked to primary PAN numbers."
                    },
                    {
                      step: "Step 4",
                      title: "Complete the IEC Application Form",
                      desc: "Draft the comprehensive online form with correct business coordinates, directors/proprietor details, banking accounts, and mapped categories."
                    },
                    {
                      step: "Step 5",
                      title: "Upload Mapped Scans",
                      desc: "Strictly upload your documents in the prescribed file sizes and formats. Unclear or truncated uploads of CAN cheques/premises proofs trigger instant officer queries."
                    },
                    {
                      step: "Step 6",
                      title: "Settle Government Fee Online",
                      desc: "Process the nominal prescribed statutory government application fee using the portal's integrated online banking gateway."
                    },
                    {
                      step: "Step 7",
                      title: "Submit Application with Digital Verification",
                      desc: "Double-check entity parameters against matching PAN cards, sign electronically (using DSC or Aadhaar-linked OTP verification), and submit the application."
                    },
                    {
                      step: "Step 8",
                      title: "Verification by DGFT System",
                      desc: "The application is processed by the DGFT systems. Scrutiny algorithmically checks matched PAN, name indices, and bank accounts in real-time."
                    },
                    {
                      step: "Step 9",
                      title: "Approval & IEC Certificate Download",
                      desc: "Once the DGFT system evaluates details as correct, the Import Export Code certificate is issued electronically. You can instantly download the PDF from your logged-in dashboard."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="relative text-left">
                      {/* Round Bullet */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white ring-4 ring-orange-100 flex items-center justify-center shrink-0"></span>
                      <h4 className="font-bold text-slate-800 text-base">{step.step}: {step.title}</h4>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed text-justify">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. VALIDITY & ANNUAL UPDATE */}
            {activeTab === 'validity' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Validity & Annual IEC Update</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  One of the greatest benefits of the Import Export Code is its **lifetime validity**. However, with recent digital transformations, the Ministry of Commerce requires regular maintenance to prevent misuse and secure trade.
                </p>

                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
                  <h4 className="font-bold text-blue-950 text-base mb-2">The Lifetime Validity Clause</h4>
                  <p className="text-slate-750 text-sm leading-relaxed text-justify">
                    Unlike traditional commercial licenses, **IEC does not require recurring renewal applications or renewal fees**. Once successfully allocated to your PAN code, it remains valid forever as long as the underlying PAN is active and updated.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 mt-4">
                  <h4 className="font-bold text-slate-900 text-base mb-3 text-[#3150A0]">Annual IEC Update Requirement (Crucial)</h4>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                    As mandated by the DGFT, **every Import Export Code holder must confirm or update their business details on the portal annually**. This update window falls in the first quarter of every financial year (April to June).
                  </p>
                  
                  <h5 className="font-bold text-slate-800 text-sm mb-2">Key points regarding the annual update:</h5>
                  <ul className="space-y-2.5 text-sm text-slate-650 pl-2 text-left">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2"></span>
                      <span><strong>Even If No Changes Exist</strong>: Even if your address, bank account, and partner names have not changed, you **must still log in** and officially confirm that existing details remain correct.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2"></span>
                      <span><strong>Deactivation for Non-Compliance</strong>: Failing to update your profile within the prescribed window results in your IEC status being marked as inactive or suspended, which stops electronic customs clearances immediately.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2"></span>
                      <span><strong>Instant Reactivation</strong>: If your IEC is deactivated due to non-update, it can be instantly reactivated by logging into the DGFT dashboard and submitting the updated profile credentials.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pt-4 text-center">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <span className="text-[#3150A0] font-bold text-lg block">Prevents Suspensions</span>
                    <p className="text-slate-600 text-xs mt-1 leading-normal">Maintains your active status for continuous online custom filing clearances.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <span className="text-[#3150A0] font-bold text-lg block">Matches Customs Records</span>
                    <p className="text-slate-600 text-xs mt-1 leading-normal">Keeps your phone, email, and bank details mapped for cargo notifications.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <span className="text-[#3150A0] font-bold text-lg block">Lifetime Security</span>
                    <p className="text-slate-600 text-xs mt-1 leading-normal">Secures your foreign trade credentials under direct DGFT parameters.</p>
                  </div>
                </div>

              </div>
            )}

            {/* 7. REJECTIONS & FAQS */}
            {activeTab === 'rejections-faqs' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <XOctagon className="w-6 h-6 text-red-650" />
                  <h2 className="text-2xl font-bold text-red-650">Common Issue Diagnostics & FAQs</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                  Sometimes, online submissions are rejected or put on hold by the automated system. Recognizing these issues helps ensure quick approvals with first-time compliance.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-left mb-6">
                  {[
                    {
                      title: "PAN Card Mismatch",
                      desc: "The name entered in the application does not match the name on the PAN databases due to spelling differences or initials."
                    },
                    {
                      title: "Incorrect Corporate Entity Category",
                      desc: "Selecting 'Proprietorship' when uploading document deeds of a Partnership, or registering corporate accounts as an individual."
                    },
                    {
                      title: "Cheque / Bank Account Mismatch",
                      desc: "Details printed on the cancelled cheque (such as bank name, account number, or corporate name) do not match application details."
                    },
                    {
                      title: "Unclear or Blurry Document uploads",
                      desc: "DGFT algorithms flag and reject blurred scan copies, cropped margins, or files where important text is illegible."
                    },
                    {
                      title: "Invalid mobile number or email linkage",
                      desc: "Errors prevent OTP validation screens during final signature clearances."
                    },
                    {
                      title: "Duplicate application submissions",
                      desc: "Re-applying for a new IEC under the same PAN when there is already an active registration mapped in the system."
                    }
                  ].map((issue, idx) => (
                    <div key={idx} className="flex gap-3 p-4 bg-red-50/50 border border-red-150 rounded-2xl">
                      <AlertCircle className="w-5 h-5 text-red-650 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-red-950 text-sm">{issue.title}</h4>
                        <p className="text-red-900/80 text-xs mt-1 leading-normal text-justify">{issue.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-xl font-bold text-[#3150A0] flex items-center gap-2 mb-4 text-left">
                    <HelpCircle className="w-5 h-5 text-blue-500" />
                    Frequently Asked Questions (FAQs)
                  </h3>

                  <div className="space-y-3">
                    {[
                      {
                        q: "1. What is IEC Registration?",
                        a: "IEC Registration is the process of obtaining a unique Importer Exporter Code from the Directorate General of Foreign Trade (DGFT) to conduct legal, foreign-trade business physically or digitally."
                      },
                      {
                        q: "2. Who issues the Import Export Code?",
                        a: "IEC is officially issued and vetted by the Directorate General of Foreign Trade (DGFT), which operates under the Ministry of Commerce and Industry, Government of India."
                      },
                      {
                        q: "3. Is IEC mandatory for import and export?",
                        a: "Yes. IEC is generally mandatory for importing goods into India or exporting goods from India, unless specifically exempted by custom laws."
                      },
                      {
                        q: "4. Is IEC required for service exports?",
                        a: "IEC is not mandatory in all cases for services. However, if a service provider wants to claim promotional benefits and subsidies under the Foreign Trade Policy, IEC is required."
                      },
                      {
                        q: "5. Can a proprietor apply for an Import Export Code?",
                        a: "Yes. Proprietorship firms can apply for IEC using the proprietor's individual PAN card and business premises details."
                      },
                      {
                        q: "6. Is GST registration mandatory for IEC?",
                        a: "No, GST registration is not mandatory for IEC. However, if your business is legally required to hold a GSTIN for other domestic trade operations, it is best to provide it on the portal."
                      },
                      {
                        q: "7. Is IEC different from GST?",
                        a: "Yes. IEC is a trade identity issued by DGFT specifically for international import-export activities, whereas GST is an indirect tax compliance registration issued by the Ministry of Finance."
                      },
                      {
                        q: "8. Is IEC different from ICEGATE Registration?",
                        a: "Yes. IEC is issued by DGFT for import-export identification. ICEGATE is a separate customs portal used to track, file, pay duties, and manage electronic communications with Indian Customs, linking with that IEC."
                      },
                      {
                        q: "9. What is the validity of the Import Export Code?",
                        a: "IEC registration holds lifetime validity and does not require periodic renewal. However, you must update or confirm your profile details on the portal annually."
                      },
                      {
                        q: "10. Does IEC need renewal every year?",
                        a: "No traditional renewal is required, but you must complete your annual update on the DGFT dashboard within the designated window to prevent deactivation."
                      },
                      {
                        q: "11. What files are required for IEC Registration?",
                        a: "Common files include PAN card of applicant/firm, Aadhaar/ID proof, registered business address proof, and a cancelled cheque or bank statement."
                      },
                      {
                        q: "12. How long does the IEC process take?",
                        a: "If all details are correct and PAN matches bank details, the DGFT system can issue the IEC certificate electronically in as little as 1-2 business days."
                      },
                      {
                        q: "13. Can IEC details be modified after registration?",
                        a: "Yes. Modifications, bank shifts, or address additions can be completed online on the DGFT portal by placing a minor amendment request."
                      },
                      {
                        q: "14. How can MakeEazy help with Import Export Code?",
                        a: "MakeEazy provides end-to-end, hassle-free processing of your IEC registration, documents optimization, DGFT application filing, and post-registration support."
                      }
                    ].map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-slate-100/80 transition-all focus:outline-none cursor-pointer"
                          >
                            <span className="pr-4">{faq.q}</span>
                            <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="p-5 pt-0 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed text-justify">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 8. WHY MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Filing applications on the DGFT portal, ensuring your PAN matches your cancelled cheque details, clearing OTP thresholds, and managing annual compliance updates can be challenging for busy founders. At MakeEazy, we manage the entire setup process for you, fast-tracking your global trade plans.
                </p>

                <div className="bg-[#3150A0]/5 border border-blue-100 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-[#3150A0] text-left mb-2">Our Comprehensive IEC Service Includes:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-705 text-left pt-2">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>IEC Eligibility & detailed requirement checklist pre-screening</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Verification and alignment of bank account & PAN registrations</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>DGFT portal workspace account creation and credential setup</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Filing the online application with 100% precision</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Document scanning, compression, and upload optimization</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Tracking your application status and resolving queries</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Assistance downloading the lifetime IEC certificate PDF</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Guidance regarding ICEGATE, AD Code registrations, and annual updates</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-3xl p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    IEC vs ICEGATE vs AD Code — Understanding the differences
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify mb-2">
                    Understanding these distinct foreign trade registrations will help keep your global shipping processes running smoothly:
                  </p>
                  <ul className="space-y-3.5 text-sm text-slate-700 pl-2 text-left">
                    <li>• <span className="font-bold text-slate-900">1. IEC Registration</span>: Issued by the DGFT. It acts as your core international trade identity card, which is the foundational prerequisite before starting imports or exports.</li>
                    <li>• <span className="font-bold text-slate-900">2. ICEGATE Registration</span>: Hosted by the Customs Department. It is the electronic portal where you configure Class-3 Digital Signatures to file shipping papers, track container cargo, and pay customs duties online.</li>
                    <li>• <span className="font-bold text-slate-900">3. AD Code Registration</span>: Mapped between your corporate bank and customs ports. It links bank accounts with ports, and is required by exporters to receive export proceeds and tax refunds seamlessly.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to launch your global import-export business?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for IEC Registration with MakeEazy</span>
                <Truck className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
