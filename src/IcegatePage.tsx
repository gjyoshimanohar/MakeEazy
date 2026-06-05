import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Ship, 
  Award, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  AlertCircle, 
  Users, 
  Coins, 
  GraduationCap, 
  BookOpen, 
  Building, 
  Briefcase, 
  ShieldCheck, 
  Layers, 
  XOctagon, 
  Check, 
  Sparkles,
  ChevronDown,
  Globe,
  Fingerprint,
  TrendingUp,
  CreditCard
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is it', icon: Ship },
  { id: 'eligibility', name: 'Eligibility', icon: Award },
  { id: 'benefits', name: 'Key Benefits (10 Points)', icon: Sparkles },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'Registration Process', icon: Layers },
  { id: 'common-issues', name: 'Common Issues & FAQs', icon: XOctagon },
  { id: 'why-makeeazy', name: 'Why MakeEazy & Service', icon: ShieldCheck }
];

export default function IcegatePage() {
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
          href="#other-registration"
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
                Indian Customs Electronic Gateway
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                ICEGATE Registration
              </h1>
              <p className="text-blue-100 text-base md:text-lg mt-4 leading-relaxed font-normal">
                ICEGATE stands for <strong className="text-white font-bold">Indian Customs Electronic Gateway</strong>. It is the official digital portal of Indian Customs that enables electronic filing, document submission, customs payment, shipment tracking, and secure custom clearance.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Ship className="w-12 h-12 md:w-16 md:h-16 text-orange-400 animate-pulse" />
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
              className="w-full bg-white border border-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500 cursor-pointer shadow-sm text-sm"
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
                  <Ship className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What is ICEGATE Registration?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  ICEGATE Registration is an important online registration for importers, exporters, customs brokers, logistics service providers, shipping agents, airlines, and other stakeholders involved in international trade and customs clearance in India.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  The ICEGATE portal serves as an electronic gateway connecting trade partners with the Indian Customs Department. By creating a registered profile, businesses can avoid manual custom visits, file mandatory import/export paperwork electronically, utilize digital signatures, and track shipment dispatch status securely.
                </p>

                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mt-4">
                  <h4 className="font-bold text-blue-950 text-base mb-2 flex items-center gap-2">
                    <Fingerprint className="w-4 h-4 text-blue-600 shrink-0" />
                    Essential connection: What is IEC code?
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    IEC stands for <span className="font-bold text-slate-900">Importer Exporter Code</span>, which is issued by DGFT. It is the primary identification number for import-export business in India. For importers and exporters, ICEGATE registration is directly linked with the IEC. Once a business has an IEC, it can apply for ICEGATE to access the customs portal.
                  </p>
                </div>



                <div className="bg-[#3150A0]/5 border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-bold text-[#3150A0] text-base mb-2">Why is ICEGATE Registration Required?</h4>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    Most customs-related activities are now handled electronic. Without proper ICEGATE access, businesses may face severe difficulty in customs documentation and clearance. ICEGATE specifically helps in:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Filing customs documents online</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Uploading documents through e-Sanchit</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Tracking shipping bills & bills of entry</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Online customs duty payment</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Receiving custom messages & warnings</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Secure digital signature filing</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 2. ELIGIBILITY */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Eligibility for ICEGATE</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  Eligibility depends on the registration category selected by the applicant. In general, the applicant should have valid identification and business details relevant to their custom services.
                </p>

                <h3 className="text-[#3150A0] font-bold text-lg mt-6 text-left">General Eligibility Requirements for Importers & Exporters:</h3>
                <div className="space-y-4 pt-2">
                  {[
                    {
                      num: "1",
                      title: "Valid Importer Exporter Code (IEC)",
                      desc: "The applicant must have an active and valid IEC issued by the Directorate General of Foreign Trade (DGFT)."
                    },
                    {
                      num: "2",
                      title: "Valid PAN Card",
                      desc: "A valid Permanent Account Number (PAN) linked with the business entity or applicant is mandatory for portal validation."
                    },
                    {
                      num: "3",
                      title: "Valid Contact Details",
                      desc: "A working official email address and mobile number are required to receive one-time passwords (OTP), communication updates, and verification credentials."
                    },
                    {
                      num: "4",
                      title: "Authorised Person Details",
                      desc: "If completed by a representative, board resolution authorization or official power of attorney documentation details of the authorised person must be presented."
                    },
                    {
                      num: "5",
                      title: "Digital Signature Certificate (DSC)",
                      desc: "A valid Class-3 DSC belongs to the authorized signatory which is compatible with the ICEGATE portal software configurations."
                    },
                    {
                      num: "6",
                      title: "Proof of Business Registration",
                      desc: "Incorporation certificate (for Companies/LLPs), GSTIN Certificate, Partnership deed (for firms), or matching bank verification accounts."
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
                  <h3 className="text-base font-bold text-slate-900 mb-3 text-left">Who Should Apply? (ICEGATE Stakeholders):</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-left text-slate-700 font-semibold pl-2">
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Importers & Exporters</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Customs Brokers (CHAs)</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Shipping Lines & Agents</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Airlines & Aviation Agents</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Consol / Cargo Agents</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Freight Forwarders</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Logistics Service Providers</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Custodians & Port trusts</span>
                    <span className="bg-slate-50 border border-slate-150 p-2.5 rounded-xl">✓ Warehouse Operators</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. KEY BENEFITS */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Sparkles className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Benefits of ICEGATE (10 Key Points)</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Registering on the Indian Customs Electronic Gateway (ICEGATE) unlocks ten substantial administrative and financial efficiencies for businesses engaged in global trade:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. Online Customs Filing",
                      desc: "Registered users can directly file customs documents electronically from their office, greatly cutting manual clerical operations and physical visits."
                    },
                    {
                      title: "2. Faster Customs Clearance",
                      desc: "Electronic documentation processing reduces queuing delays, speeding up verification and clearance by custom officers at designated ports."
                    },
                    {
                      title: "3. e-Sanchit Document Upload",
                      desc: "ICEGATE integrates with the e-Sanchit platform, enabling completely paperless customs filing by electronically appending PDFs of supporting invoices and certificates."
                    },
                    {
                      title: "4. Online Customs Duty Payments",
                      desc: "Allows smooth, secure electronic payments of high-value customs duties directly through verified bank accounts or custom gateways."
                    },
                    {
                      title: "5. Digital Signature Based Filing",
                      desc: "Supports Class-3 Digital Signature Cert (DSC) integration, guaranteeing data authenticity, tamper protection, and legally binding digital submissions."
                    },
                    {
                      title: "6. Track Shipping Bills & Bills of Entry",
                      desc: "Provides real-time online tracking of documents, keeping you constantly informed of cargo status and pending departmental queries."
                    },
                    {
                      title: "7. Direct Customs Messaging",
                      desc: "Receive automated custom-related message alerts, notifications, acknowledgements, error reports, and query responses synchronously."
                    },
                    {
                      title: "8. Eradication of Hard Paper Trails",
                      desc: "Avoid keeping physical dossiers of import-export customs booklets, promoting modern paperfree digital compliance folders."
                    },
                    {
                      title: "9. Consolidated Compliance Center",
                      desc: "Users can manage registrations, custom filings, payments, authorizations, and partner credentials on a single consolidated official panel."
                    },
                    {
                      title: "10. Accessibility to Incentives & Exports",
                      desc: "Simplifies access to valid central Government export schemes, tax drawbacks, duty drawback statuses, and global trade facilitation measures."
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all text-left">
                      <h4 className="font-bold text-[#3150A0] text-base mb-1.5">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed text-justify">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for ICEGATE Setup</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  The documentation varies based on the type of business entity applying:
                </p>

                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1E40AF]"></span>
                      For Private Limited Companies & LLPs
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "Certificate of Incorporation (COI)",
                        "PAN Card of the Company or LLP",
                        "Board Resolution / Authorized Signatory Letter",
                        "GST Registration Certificate",
                        "Aadhaar & PAN of Authorised Director/Designated Partner",
                        "Active Importer Exporter Code (IEC) Details",
                        "Class-3 Digital Signature Certificate (DSC) of Signatory",
                        "Company Bank Account Details with AD Code"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-750">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1E40AF]"></span>
                      For Partnership Firms
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "Registered Partnership Deed",
                        "PAN Card of the Partnership Firm",
                        "Signatory Authorisation Letter signed by partners",
                        "GSTIN Registration papers",
                        "Identity and address proof of the authorised partner",
                        "Valid IEC details & DGFT linkage",
                        "DSC of authorized signing partner"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-705">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1E40AF]"></span>
                      For Proprietorship Concerns
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "PAN Card of the Proprietor",
                        "Aadhaar and Identity proof of Owner",
                        "Business Address proof (Udyam, Trade, or utility)",
                        "GST Certificate of Proprietorship",
                        "IEC details from DGFT",
                        "Class-3 DSC of Proprietor, if applicable"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-705">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 4 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1E40AF]"></span>
                      For Customs Brokers (CHA)
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4 text-left">
                      {[
                        "Customs Broker Licencing Details",
                        "F-card or G-card document copies",
                        "PAN Card of the Broker/Agency",
                        "Identity proofs & Authorisation letters",
                        "Signatory Class-3 DSC",
                        "Registered Contact details & address cards"
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">The ICEGATE Online Registration Process</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Registering on the official Indian Customs Electronic Gateway requires 10 sequence steps:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6">
                  {[
                    {
                      step: "Step 1",
                      title: "Check User Category",
                      desc: "Correctly identify your custom category. Importers, exporters, custom brokers, or shipping agents have distinct application criteria."
                    },
                    {
                      step: "Step 2",
                      title: "Keep Corporate Information Ready",
                      desc: "Keep document scans and particulars (IEC state, PAN, GSTIN, Signatory Aadhaar, address details) clearly formatted."
                    },
                    {
                      step: "Step 3",
                      title: "Visit ICEGATE Portal",
                      desc: "Navigate to the designated Indian Customs Electronic Gateway (ICEGATE) portal registration segment."
                    },
                    {
                      step: "Step 4",
                      title: "Select Registration Type",
                      desc: "Select the correct category (such as IEC holder, authorized partner, custom broker, etc.) according to business eligibility."
                    },
                    {
                      step: "Step 5",
                      title: "Enter Applicant Details",
                      desc: "Carefully key in applicant details - including company name, authorized signatory identity, mobile numbers, and mapped email IDs."
                    },
                    {
                      step: "Step 6",
                      title: "Validate Details with Government Databases",
                      desc: "The e-gateway portal checks entered details against direct regulatory database records. Any typos can cause instant delays."
                    },
                    {
                      step: "Step 7",
                      title: "Register Class-3 Digital Signature (DSC)",
                      desc: "To authenticate electronic submission, register your valid Class-3 Custom-compatible DSC on the ICEGATE software."
                    },
                    {
                      step: "Step 8",
                      title: "Submit Registration Dossier",
                      desc: "Ensure files are securely uploaded, review the fields, and electronically submit the registration."
                    },
                    {
                      step: "Step 9",
                      title: "Scrutiny & Departmental Approval",
                      desc: "The Customs authorities scrutinized the uploaded sheets. Registration awaits verification approval from the department officers."
                    },
                    {
                      step: "Step 10",
                      title: "Receive Portal Credentials",
                      desc: "Upon successful approval, your login ID & credentials are automatically dispatched to the verified email for complete portal access."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="relative text-left">
                      {/* Round Bullet */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-blue-600 rounded-full border-2 border-white ring-4 ring-blue-100 flex items-center justify-center shrink-0"></span>
                      <h4 className="font-bold text-slate-800 text-base">{step.step}: {step.title}</h4>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed text-justify">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. COMMON ISSUES & FAQS */}
            {activeTab === 'common-issues' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <XOctagon className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold text-red-600">Common Issues & Troubleshooting</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Applicants frequently encounter technical bottlenecks on the ICEGATE portal. Knowing these helps prevent custom delays:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
                  {[
                    {
                      title: "IEC & PAN Mismatch",
                      desc: "Names or PAN numbers on DGFT database don't match the income tax PAN records, causing verification checks to fail."
                    },
                    {
                      title: "Invalid or Inactive IEC",
                      desc: "The Importer Exporter Code is suspended, inactive, or unlinked due to un-updated KYC details with DGFT."
                    },
                    {
                      title: "Mobile or Email Linkage Errors",
                      desc: "OTPs are undeliverable because contact details do not match the authorised signatory records registered at DGFT."
                    },
                    {
                      title: "DSC Detection Issues",
                      desc: "The custom portal fails to read the digital signature token due to browser or Java plugin incompatibility on the system."
                    },
                    {
                      title: "DSC Expired or Incorrectly Installed",
                      desc: "Using an outdated DSC or one not registered under the authorized representative name."
                    },
                    {
                      title: "Incorrect User Category Selected",
                      desc: "Filing under the wrong category (e.g., trying to register as a broker instead of IEC Holder)."
                    }
                  ].map((issue, idx) => (
                    <div key={idx} className="flex gap-3 p-4 bg-red-50/50 border border-red-150 rounded-2xl">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
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
                        q: "1. What is ICEGATE Registration?",
                        a: "ICEGATE is the digital e-portal of Indian Customs. Registration is the process of setting up a verified secure user profile on the portal to execute electronic filings, shipments tracking, Customs duty payments, and digital clearances."
                      },
                      {
                        q: "2. Who needs ICEGATE Registration?",
                        a: "All active global trading stakeholders - including importers, exporters, customs brokers (CHAs), logistics service partners, cargo airlines, and shipping lines must maintain a verified profile."
                      },
                      {
                        q: "3. Is IEC required for ICEGATE Registration?",
                        a: "Yes. For importers and exporters, the ICEGATE registration profile is centrally verified through and linked with your DGFT Importer Exporter Code (IEC)."
                      },
                      {
                        q: "4. Is ICEGATE Registration the same as IEC Registration?",
                        a: "No. IEC (Importer Exporter Code) is an identification ID issued by DGFT. ICEGATE Registration is a separate custom portal electronic linkage that enables actual customs filing, tracking, and messaging using that IEC."
                      },
                      {
                        q: "5. Is DSC required for ICEGATE Registration?",
                        a: "Yes, a Class-3 Digital Signature Certificate (DSC) is mandatory for custom filers to authenticate documents securely as per Indian Customs norms."
                      },
                      {
                        q: "6. What documents are required for ICEGATE Registration?",
                        a: "Common details include active IEC code, entity PAN, GSTIN certificate, identity and address proofs of authorized signatories, Class-3 DSC, and entity authorization resolution letters."
                      },
                      {
                        q: "7. Can a proprietor apply for ICEGATE Registration?",
                        a: "Yes. Proprietorship firms active in global import-export can apply easily by matching the personal PAN and GST credentials."
                      },
                      {
                        q: "8. What is the benefit of ICEGATE Registration?",
                        a: "It turns manual compliance digital. It enables paperfree document filing through e-Sanchit, custom status checks, online payment of custom duties, and instant custom status clearances."
                      },
                      {
                        q: "9. How long does the ICEGATE Registration process take?",
                        a: "If documentation matches custom database details and the Class-3 DSC links smoothly, verification typically gets cleared in a few business days under departmental review."
                      },
                      {
                        q: "10. Can MakeEazy help with ICEGATE Registration?",
                        a: "Yes, MakeEazy provides end-to-end, seamless assistance for ICEGATE, custom setup, IEC verification, digital signature Class-3 activation, and post-registration compliance advisory."
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

            {/* 7. WHY MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Navigating icegate systems, system java plugin requirements, digital signature registry validations, and DGFT data mismatches can prove challenging. At MakeEazy, we take care of the entire custom setup process smoothly for you.
                </p>

                <div className="bg-[#3150A0]/5 border border-blue-100 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-[#3150A0] text-left mb-2">Our Comprehensive ICEGATE Support Includes:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700 text-left pt-2">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>ICEGATE Eligibility & user category check</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>IEC active verification & linkage advisory</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Precise Document checklist and prep</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Class-3 Digital Signature (DSC) registration support</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Dossier validation & matching checks</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Direct Custom portal registration assistant</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Responding to Department Scrutiny Queries</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>AD Code advisory and port registrations</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-3xl p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    ICEGATE vs AD Code Registration — Know the difference
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    While both are related to export-import transactions, they serve distinct purposes. <span className="font-bold text-slate-800">ICEGATE Registration</span> gives you core electronic access to custom systems for filing, payment, and tracking. <span className="font-bold text-slate-800">AD Code Registration</span> links your bank's Authorized Dealer code with custom systems at specific port terminals, making it mandatory for exporters to retrieve export incentives and settle trade remittances legally. Move smoothly with MakeEazy!
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to activate your digital custom gate and trade imports smoothly?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for ICEGATE Registration with MakeEazy</span>
                <Ship className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
