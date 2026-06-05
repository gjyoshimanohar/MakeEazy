import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Fingerprint, 
  Info, 
  Lock, 
  UserCheck, 
  Globe, 
  Building, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Award, 
  TrendingUp, 
  ChevronDown, 
  Check, 
  BookOpen, 
  ShieldCheck,
  Scale,
  Clock,
  Briefcase
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is LEI', icon: Info },
  { id: 'requirements', name: 'Why Required & Purpose', icon: Lock },
  { id: 'who-should-apply', name: 'Who Should Apply & Applicability', icon: UserCheck },
  { id: 'mandatory', name: 'Is LEI Mandatory?', icon: ShieldCheck },
  { id: 'issuing-bodies', name: 'Who Issues LEI? (LEIL, GLEIF)', icon: Globe },
  { id: 'eligibility', name: 'Eligibility for LEI', icon: Award },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'LEI Registration Process', icon: TrendingUp },
  { id: 'statuses', name: 'LEI Statuses Explained', icon: CheckCircle2 },
  { id: 'parent-reporting', name: 'Parent Entity Reporting', icon: Building },
  { id: 'differences', name: 'LEI vs PAN, CIN, Udyam', icon: Scale },
  { id: 'rejection-reasons', name: 'Delay & Rejection Reasons', icon: Clock },
  { id: 'faqs', name: 'Frequently Asked Questions', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

export default function LeiRegistrationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is LEI Registration?",
      a: "LEI Registration is the process of obtaining a Legal Entity Identifier, which is a unique 20-character alphanumeric code used to identify legal entities in financial transactions."
    },
    {
      q: "Who needs LEI Registration?",
      a: "Companies, LLPs, partnership firms, trusts, funds, banks, financial institutions, borrowers, and other legal entities may need LEI if they participate in financial transactions where LEI is required."
    },
    {
      q: "Is LEI mandatory in India?",
      a: "LEI is mandatory for entities falling under specific regulatory or transaction-based requirements. Banks, regulators, or financial institutions may require LEI for certain transactions."
    },
    {
      q: "Can individuals apply for LEI?",
      a: "LEI is generally meant for legal entities and legal structures. Individuals acting in their personal capacity are generally not eligible for LEI."
    },
    {
      q: "What is the full form of LEI?",
      a: "LEI stands for Legal Entity Identifier."
    },
    {
      q: "How many characters are there in an LEI code?",
      a: "An LEI code contains 20 alphanumeric characters."
    },
    {
      q: "Who issues LEI in India?",
      a: "LEI is issued by authorised LEI issuing organisations. In India, Legal Entity Identifier India Limited, also known as LEIL, is one of the authorised issuers."
    },
    {
      q: "What documents are required for LEI Registration?",
      a: "Common documents include PAN of the entity, incorporation or registration certificate, address proof, authorisation letter or board resolution, authorised signatory details, and parent entity details, if applicable."
    },
    {
      q: "What is the validity of LEI?",
      a: "LEI is generally valid for one year and must be renewed annually to keep it active."
    },
    {
      q: "What happens if LEI is not renewed?",
      a: "If LEI is not renewed, its status may become lapsed. A lapsed LEI may not be accepted by banks, regulators, or financial institutions for transactions where an active LEI is required."
    },
    {
      q: "Is LEI the same as PAN?",
      a: "No. PAN is an Indian tax identification number, while LEI is a global legal entity identifier used for financial transactions."
    },
    {
      q: "Is LEI the same as CIN?",
      a: "No. CIN is issued to companies registered in India, while LEI is a global identifier for legal entities involved in financial transactions."
    },
    {
      q: "Can LEI details be updated?",
      a: "Yes. LEI details can be updated when there are changes in legal name, address, ownership, parent entity information, or other reference data."
    },
    {
      q: "Can MakeEazy help with LEI Registration?",
      a: "Yes. MakeEazy provides complete assistance for LEI Registration, including document guidance, application filing support, parent entity reporting guidance, renewal support, and record update assistance."
    }
  ];

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
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#1034A6]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Fingerprint className="w-3.5 h-3.5 animate-pulse" />
                Global Financial Compliance
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Legal Entity Identifier (LEI) Registration
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Easily procure and renew your 20-digit Legal Entity Identifier. Ensure uninterrupted global or large-value financial transactions, banking arrangements, and regulatory reporting in compliance with RBI guidelines.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Fingerprint className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
            </div>
          </div>
        </div>

        {/* Sidebar and Main content columns */}
        <div className="lg:flex lg:gap-8 items-start">
          
          {/* Sidebar Left Navigation */}
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

          {/* Mobile Filter select layout */}
          <div className="lg:hidden mb-8">
            <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 text-left">Navigate Sections</label>
            <div className="relative">
              <select 
                value={activeTab} 
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-4 pr-10 rounded-2xl appearance-none focus:outline-none focus:border-[#3150A0]"
              >
                {SECTIONS.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm min-h-[500px]">
            
            {/* 1. OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Info className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">LEI Registration Overview</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Legal Entity Identifier Registration, commonly known as <strong>LEI Registration</strong>, is an important registration for legal entities that participate in financial transactions, securities transactions, large-value payments, borrowing arrangements, foreign exchange transactions, and other regulated financial market activities.
                </p>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  A Legal Entity Identifier is a globally recognised identification code that uniquely identifies a legal entity involved in financial transactions. It helps banks, regulators, financial institutions, stock exchanges, and other market participants identify entities clearly and reduce risk in the global financial system.
                </p>

                <p className="text-slate-700 leading-relaxed text-justify">
                  In India, LEI has become important for companies, LLPs, partnership firms, trusts, societies, funds, financial institutions, borrowers, and other legal entities involved in regulated financial transactions.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl mt-6">
                  <h3 className="text-[#3150A0] font-bold text-lg mb-2">What is a Legal Entity Identifier?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    A Legal Entity Identifier, or LEI, is a unique 20-character alphanumeric code assigned to a legal entity. It is used globally to identify legal entities participating in financial transactions. Each LEI is unique and linked strictly to vital reference information, such as the legal name, registered address, entity status, registration details, and parent ownership structures.
                  </p>
                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-2xl mt-4">
                  <h3 className="text-orange-950 font-bold text-lg mb-2">Key Questions LEI Answers:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Who is the legal entity?</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Where is the entity registered?</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>What is the entity's legal structure?</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>What is the entity's ownership relationship?</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Is the entity active and validly identified?</span>
                    </div>
                  </div>
                </div>


              </div>
            )}

            {/* 2. REQUIREMENTS & PURPOSE */}
            {activeTab === 'requirements' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Lock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why is LEI Registration Required?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  LEI Registration is required because regulators, banks, and financial institutions need a standard, globally accessible, and highly secure identification system for legal entities involved in financial transactions.
                </p>

                <div className="bg-[#3150A0]/5 border border-[#3150A0]/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">How LEI Benefits the Financial Ecosystem:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-755 leading-relaxed">
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-[#3150A0] mt-1 shrink-0" />
                      <span><strong>Identifying transaction parties:</strong> Promotes flawless and unambiguous digital confirmation of counterparties.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-[#3150A0] mt-1 shrink-0" />
                      <span><strong>Improving transparency:</strong> Enables real-time reference audit trails for international trade, banking, and settlement.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-[#3150A0] mt-1 shrink-0" />
                      <span><strong>Reducing fraud and risk:</strong> Prevents entity identity confusion, fake-registration attempts, and financial misrepresentations.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-[#3150A0] mt-1 shrink-0" />
                      <span><strong>Accelerating credit approval:</strong> Aids commercial banks during borrower verification, accelerating overall credit assessment cycles.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-5 rounded-2xl">
                  <p className="text-sm text-slate-750 font-medium">
                    ⚠️ <strong>Please note:</strong> LEI is strictly a global corporate identifier and financial transaction safeguard. It is not a business incorporation certificate or a tax registration number.
                  </p>
                </div>
              </div>
            )}

            {/* 3. WHO SHOULD APPLY & APPLICABILITY */}
            {activeTab === 'who-should-apply' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <UserCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Should Apply & Applicability in India</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  LEI Registration is applicable to legal entities engaged in specific transaction volumes or regulatory reporting boundaries. Individuals acting in their personal private capacity are generally not eligible and do not require an LEI.
                </p>

                <h3 className="text-lg font-bold text-[#3150A0] mt-6">Entities who can apply:</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-700 mt-4">
                  {[
                    "Private Limited Companies",
                    "Public Limited Companies",
                    "One Person Companies (OPC)",
                    "Limited Liability Partnerships (LLPs)",
                    "Partnership firms & Sole Proprietorships",
                    "Trusts & Societies",
                    "Commercial Banks & NBFCs",
                    "Mutual Funds & Alternative Investment Funds",
                    "Insurance Companies & Pension Funds",
                    "Foreign Portfolio Investors (FPI)",
                    "Co-operative Societies",
                    "Bank Borrowers (based on limits)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-[#3150A0] shrink-0" />
                      <span className="font-semibold text-xs leading-none">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-55 border border-slate-200 p-6 rounded-2xl mt-6">
                  <h3 className="font-bold text-slate-800 text-sm mb-3">RBI Applicability and Mandates in India:</h3>
                  <ul className="space-y-2.5 text-xs text-slate-650">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Large-Value Transactions:</strong> Entities conducting transactions of ₹50 Crore (Indian Rupees Fifty Crore) and above through NEFT or RTGS payment systems must obtain an LEI.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Bank Borrowers:</strong> Corporate borrowers with aggregate fund and non-fund-based credit exposure from commercial banks above certain threshold limits (such as ₹5 Crore and above) must register for LEI.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Securities Market & Derivatives:</strong> Under SEBI directives, various participants in the non-derivative OTC and physical securities market have strict LEI requirements.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* 4. IS LEI MANDATORY */}
            {activeTab === 'mandatory' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Is LEI Registration Mandatory?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Yes, LEI Registration is completely mandatory for legal entities that fall under the boundaries prescribed by Indian regulators (primarily the Reserve Bank of India, SEBI, and IRDAI).
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] mb-3">Where It Is Mandatory:</h3>
                    <ul className="space-y-2 text-xs text-slate-650 list-disc pl-4">
                      <li>NEFT/RTGS payments equal to or exceeding ₹50 Crore.</li>
                      <li>Bank credit exposure of ₹5 Crore and above.</li>
                      <li>Non-derivative OTC financial market participants.</li>
                      <li>Specified international/cross-border trade remittances.</li>
                      <li>Regulated insurance insurers and corporate agents.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] mb-3">Lender & Bank Demands:</h3>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify">
                      Even if some entities fall slightly below regulatory lines, banks, credit issuers, or financial platforms can demand a valid, active LEI registration before processing credit limits, foreign exchange facilities, or trade accounts.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. ISSUING BODIES */}
            {activeTab === 'issuing-bodies' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Globe className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Issues LEI in India and Globally?</h2>
                </div>

                <p className="text-slate-705 leading-relaxed text-justify">
                  The LEI system is governed globally, ensuring high standards across multiple countries. The key organizations involved are:
                </p>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">1. GLEIF (Global Legal Entity Identifier Foundation)</h3>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify">
                      Established by the Financial Stability Board in 2014, GLEIF is a non-profit organization that supports, maintains, and oversees the implementation of the Global LEI System. It maintains the master Global LEI Index, containing all current active LEI metadata records globally.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">2. Local Operating Units (LOUs)</h3>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify">
                      An LOU is a Local Operating Unit accredited by GLEIF to issue, validate, and manage LEI identifiers for companies and entities within designated regional territories.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">3. LEIL (Legal Entity Identifier India Limited)</h3>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify">
                      In India, LEIL is the premier accredited LOU. It is a wholly-owned subsidiary of <strong>The Clearing Corporation of India Limited (CCIL)</strong> and is recognized as the official local operating unit for LEI administration in India under RBI guidelines.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. ELIGIBILITY */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Eligibility for LEI Registration</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  LEI Registration is available for legal entities and legal structures that can be successfully identified through official registration records. To meet eligibility criteria, an applicant must have:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4 text-xs">
                  <div className="p-4 border border-slate-150 rounded-xl bg-slate-50">
                    <h4 className="font-bold text-[#3150A0] mb-1">1. Valid Legal Existence</h4>
                    <p className="text-slate-600">The applicant must be a legally recognized entity (company, LLP, trust, registered partnership) with active operational status in government data.</p>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-xl bg-slate-50">
                    <h4 className="font-bold text-[#3150A0] mb-1">2. Valid Registration Documents</h4>
                    <p className="text-slate-600">Must have incorporation certificates, deeds, or official registration extracts issued by competent local or central authorities (e.g. MCA, Registrar of Firms).</p>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-xl bg-slate-50">
                    <h4 className="font-bold text-[#3150A0] mb-1">3. Valid Tax Identity (PAN)</h4>
                    <p className="text-slate-600">Indian legal entities must submit their active Permanent Account Number (PAN) for identity verification and structural checking.</p>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-xl bg-slate-50">
                    <h4 className="font-bold text-[#3150A0] mb-1">4. Authorised Signatory & Parent Info</h4>
                    <p className="text-slate-600">The request form should be verified and submitted by a designated authorized officer, including details on parent holding structures.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 7. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for LEI Registration</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Gathering correct documentation prevents mismatch errors. Common structured requirements depending on the type of legal entity include:
                </p>

                <div className="space-y-4 text-xs">
                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Basic Entity Documents</h3>
                    <ul className="space-y-2.5 text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Active PAN Card of the company, society, or firm.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Certificate of Incorporation or official Registration Deed.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>MoA and AoA copies (for Companies) or LLP agreement / Partnership deed.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Registered Corporate Office Address proof (utility bills or rent agreements).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Active GSTIN Registration certificate, if available.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Authorised Signatory Documents</h3>
                    <ul className="space-y-2.5 text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>KYC identification (PAN card, Aadhaar, Passport, or Voter ID).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Official Authorisation letter or certified Board Resolution authorizing the signatory.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Signatory active email ID, mobile number, and designation matching authority records.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 8. LEI PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <TrendingUp className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Online LEI Registration Process</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Obtaining your 20-digit Legal Entity Identifier follows an structured verification process. Key steps in the workflow:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6 mt-6">
                  {[
                    { title: "Step 1: Check LEI Requirement", desc: "Ensure your entity requires code activation based on banks limits, transaction value, or regulatory directives." },
                    { title: "Step 2: Select Authorised LEI Issuer", desc: "Choose an approved local operating partner or registration agent (such as MakeEazy) to fast-track verification." },
                    { title: "Step 3: Prepare Documents", desc: "Collect the PAN of your entity, incorporation credentials, signatory authorizations, and board resolutions." },
                    { title: "Step 4: Fill Online LEI Application Form", desc: "Input official details such as registered office address, legal name, PAN, registration numbers, and contact details." },
                    { title: "Step 5: Provide Parent Entity Information", desc: "Clearly declare structural relationships (Direct and Ultimate parents) or list logical validation exceptions." },
                    { title: "Step 6: Upload Supporting Documents", desc: "Submit scanned copies of certificate of incorporation, PAN, address proofs, and authorization codes." },
                    { title: "Step 7: Pay Online Registration Fees", desc: "Complete payment securely online. Fees vary depending on processing packages or validity spans." },
                    { title: "Step 8: Registry Verification Process", desc: "LOU or issuing authorities verify document uploads against public registries to isolate discrepancies." },
                    { title: "Step 9: LEI Code Issuance", desc: "Upon verification, a unique 20-digit structural alphanumeric LEI is successfully generated." },
                    { title: "Step 10: GLEIF Database Publication", desc: "Your completed LEI dataset is instantly mapped to the master global index database, making it fully searchable." }
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 border-2 border-[#3150A0] text-[10px] font-bold text-[#3150A0]">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-sm text-[#3150A0]">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed text-justify">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. LEI STATUSES */}
            {activeTab === 'statuses' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">LEI Statuses Explained</h2>
                </div>

                <p className="text-slate-705 leading-relaxed text-justify">
                  Every LEI is constantly monitored and tracked under specific lifecycle states in the GLEIF database. Familiarize yourself with the common classifications:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4 text-xs text-slate-700">
                  <div className="p-4 border border-slate-150 rounded-2xl bg-slate-50">
                    <h4 className="font-bold text-emerald-800 flex items-center gap-1.5 mb-1">
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                      Active / Issued
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-justify">Your code is successfully validated, active, and fully cleared by financial institutions and regulators.</p>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-2xl bg-slate-50">
                    <h4 className="font-bold text-amber-700 flex items-center gap-1.5 mb-1">
                      <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
                      Lapsed
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-justify">Validity period has expired because annual renewal steps were not finished. Banks may block payments in this state.</p>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-2xl bg-slate-50">
                    <h4 className="font-bold text-slate-700 flex items-center gap-1.5 mb-1">
                      <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
                      Retired
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-justify">The corporate entity no longer exists in commerce due to corporate merger, closure, or official business liquidation.</p>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-2xl bg-slate-50">
                    <h4 className="font-bold text-blue-700 flex items-center gap-1.5 mb-1">
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"></span>
                      Pending Transfer
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-justify">The client dataset is currently undergoing a relocation request from one operating partner/issuer to another.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 10. PARENT ENTITY REPORTING */}
            {activeTab === 'parent-reporting' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Building className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Parent Entity Reporting</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  To achieve total financial transparency, the LEI application model captures structural relationship details within corporate parent chains. Applicants must report:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="p-5 border border-slate-150 rounded-xl bg-[#3150A0]/5">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-2">1. Direct Parent</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Indicates the immediate legal entity holding a majority control, voting rights, or consolidated shareholdings (typically above 50%) of the applying organization.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-xl bg-[#3150A0]/5">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-2">2. Ultimate Parent</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Indicates the final head organization at the top of the entire corporate ownership tree that consolidates the accounts of the direct parent and children structures.
                    </p>
                  </div>
                </div>

                <div className="p-5 border border-orange-100 rounded-2xl bg-orange-50/20 text-xs text-slate-700 mt-4 leading-relaxed">
                  📢 <strong>Note on Exceptions:</strong> If your entity does not have a corporate parent (e.g. single standalone enterprise, private structures owned purely by natural individuals) or is legally restricted, a valid <strong>reporting exception reason</strong> card is prepared and submitted.
                </div>
              </div>
            )}

            {/* 11. DIFFERENCES */}
            {activeTab === 'differences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">LEI Compared to PAN, CIN & Udyam</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Many businesses confuse regional tax identification numbers with global financial codes. Here is the clear structural breakdown:
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Legal Entity Identifier (LEI)", role: "Global Compliance ID", desc: "A 20-character global alphanumeric code mapping corporate financial transactions to ensure transparency with lenders, regulators, and exchanges globally." },
                    { title: "Permanent Account Number (PAN)", role: "National Tax ID", desc: "A 10-character alphanumeric code issued exclusively by the Income Tax Department of India for tax assessment, local GST mapping, and domestic bookkeeping." },
                    { title: "Corporate Identification Number (CIN)", role: "National Registration ID", desc: "A 21-character alphanumeric code indicating company registration, entity type, and incorporation year under the Indian Ministry of Corporate Affairs (MCA)." },
                    { title: "Udyam Registration", role: "MSME Benefits ID", desc: "A regional certificate recognizing small, micro, or medium businesses in order to offer institutional credit subsidies, interest concessions, and government tenders." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-150 rounded-2xl bg-slate-50/50">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-sm text-[#3150A0]">{item.title}</h3>
                        <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full">{item.role}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 12. DELAY & REJECTION REASONS */}
            {activeTab === 'rejection-reasons' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Clock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Common LEI Delay & Rejection Reasons</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Since LEI details must align with global and public record indices, even small documentation issues can result in administrative delays:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {[
                    "Legal Name Mismatches: Spelling variations between PAN, MCA database, and the LEI application form.",
                    "PAN Code Discrepancy: Uploading incorrect cards or mismatching numbers between corporate and individual entities.",
                    "Signatory Authorisation Deficit: Missing power of attorney format, draft mistakes, or lack of certified board signatures.",
                    "Omission of Parent Details: Failing to state ultimate/direct parent structures or skipping exceptions declaration.",
                    "Expired Documentation: Submitting outdated office rent agreements, utility bills, or revoked master data extracts.",
                    "Entity Type Errors: Selecting an incorrect company category or mismatching structural codes in the form."
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 p-3 bg-red-50/10 border border-red-100 rounded-xl">
                      <span className="text-red-500 font-bold shrink-0 text-sm mt-0.5">!</span>
                      <p className="text-xs text-slate-650 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 13. FAQS */}
            {activeTab === 'faqs' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <HelpCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3 mt-6">
                  {FAQS.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index}
                        className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex justify-between items-center p-5 text-left font-bold text-sm md:text-base text-slate-800 hover:text-orange-500 focus:outline-none transition-colors"
                        >
                          <span className="pr-4">{`${index + 1}. ${faq.q}`}</span>
                          <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 text-justify animate-fadeIn">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 14. WHY CHOOSE MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for LEI Registration?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Our professional team guarantees a seamless, hassle-free online experience. We analyze your requirements, verify documentation details against the MCA/PAN registries, provide direct mapping support for holding company relationships, and resolve any issuing discrepancies instantly.
                </p>

                <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our End-to-End Compliance Advantage:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                    {[
                      "Complete LEI eligibility review",
                      "Instant document checklist and verification auditing",
                      "Correct parent relationship and exception mapping",
                      "Hassle-free online system application handling",
                      "Comprehensive real-time status and issuance tracking",
                      "Assistance in resolving LOU objections or details discrepancies",
                      "Timely annual renewal automation reminders"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#3150A0] text-white p-8 rounded-3xl mt-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Get Your 20-digit LEI Code Now</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                    Ready to complete high-value financial transfers and secure bank borrowings with fully compliant Legal Entity Identifier codes? Complete your LEI with India's most trusted corporate consulting team at MakeEazy today!
                  </p>
                  <p className="text-xs text-orange-300 font-bold uppercase tracking-wider mb-2">
                    Start Your Process Seamlessly Today!
                  </p>
                  <a 
                    href="https://desk.makeeazy.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white hover:bg-slate-100 text-[#3150A0] font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95 duration-150"
                  >
                    Register Online Now
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to secure your global financial identity and legal entity code?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for LEI Registration with MakeEazy</span>
                <Fingerprint className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
