import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Store, 
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
  ShieldCheck,
  Scale,
  Clock,
  Briefcase,
  AlertTriangle,
  FileSignature,
  FileSpreadsheet,
  XCircle,
  Home
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & Shop Act', icon: Info },
  { id: 'act-coverage', name: 'What the Act Covers', icon: Briefcase },
  { id: 'why-required', name: 'Why Required & Benefits', icon: Lock },
  { id: 'who-needs-it', name: 'Who Needs Registration?', icon: UserCheck },
  { id: 'applicability', name: 'Category Applicability', icon: Globe },
  { id: 'mandatory', name: 'Is It Mandatory?', icon: ShieldCheck },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: '10-Step Online Process', icon: TrendingUp },
  { id: 'validity-renewal', name: 'Validity & Renewal', icon: Clock },
  { id: 'amendment-closure', name: 'Amendment & Closure', icon: FileSignature },
  { id: 'registers-records', name: 'Registers to Maintain', icon: FileSpreadsheet },
  { id: 'specific-business', name: 'Online & Home Businesses', icon: Home },
  { id: 'differences', name: 'Differences Explained', icon: Scale },
  { id: 'delay-rerejection', name: 'Delay & Rejection reasons', icon: XCircle },
  { id: 'faqs', name: 'Frequently Asked Questions', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

export default function ShopEstablishmentPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Shop and Establishment Registration?",
      a: "Shop and Establishment Registration is a state-level labour law registration obtained by physical and commercial businesses operating from commercial premises, under the applicable state Shops and Establishments Act."
    },
    {
      q: "Who needs Shop and Establishment Registration?",
      a: "Retail shops, wholesale outlets, offices, restaurants, cafes, hotels, service centres, warehouses, clinics, theatres, and other commercial establishments operating from a commercial premises require registration."
    },
    {
      q: "Is Shop and Establishment Registration mandatory?",
      a: "Yes, it is entirely mandatory in most Indian states for covered establishments. However, applicability thresholds, fees, and rules can differ across state boundaries."
    },
    {
      q: "Is Shop and Establishment Registration the same in every state?",
      a: "No. Since labour regulation in this space is state-specific, each state enacts its own unique Shops and Establishments Act, rules, online portal, registration process, fee structure, and validity/renewal system."
    },
    {
      q: "What documents are required for Shop and Establishment Registration?",
      a: "Common documents include PAN card of the entity, identity/Aadhaar proof of the owner, business address proof (rent deed/utility bill), photographs of the shop premises, employee listing, and target business categories."
    },
    {
      q: "Can a home-based business apply for Shop and Establishment Registration?",
      a: "Yes. Home-based businesses such as freelancers, consultants, boutique creators, and online retailers can apply for this registration if it is permitted under local municipal or state guidelines."
    },
    {
      q: "Is Shop and Establishment Registration required for online businesses?",
      a: "Yes. Online businesses, including e-commerce sellers, remote services, and digital agencies, require this if they run corporate operations from a physical office, warehouse, or fulfillment space."
    },
    {
      q: "Is Shop and Establishment Registration required for a company?",
      a: "Yes. Even if a company is incorporated with the Ministry of Corporate Affairs (MCA), it still must legally register its offices, showrooms, or branch premises under state labour laws."
    },
    {
      q: "Is Shop and Establishment Registration the same as GST Registration?",
      a: "No. Shop and Establishment is a state labour law registration regulating premises and employment, while GST Registration is an indirect tax compliance number linked to transactional sales turnover."
    },
    {
      q: "Is Shop and Establishment Registration the same as a Trade Licence?",
      a: "No. Shop and Establishment Registration focuses on employee protection, registers, and working hours, whereas a Trade Licence is issued by municipal corporations permitting you to trade specific sensitive items in that city."
    },
    {
      q: "What is a Gumasta Licence?",
      a: "Gumasta Licence is simply the term used to describe the official Shop and Establishment Registration template in the state of Maharashtra."
    },
    {
      q: "How long does Shop and Establishment Registration take?",
      a: "The duration depends on state-specific processing. Some states offer instant automated online registrations, while others take several business days to verify documents."
    },
    {
      q: "Does Shop and Establishment Registration need regular renewal?",
      a: "Yes, in several states, certificates are valid for a fixed span (e.g., 1 to 5 years) and require formal renewal. In other states, it remains valid for a lifetime unless amended or closed."
    },
    {
      q: "Can registration details be changed after issuance?",
      a: "Yes. Amendments can be made online for changes in company name, registered office address, partner count, manager names, employee count, working hours, and target business category."
    },
    {
      q: "Can MakeEazy help with Shop and Establishment Registration?",
      a: "Yes! MakeEazy provides end-to-end guidance including state applicability checks, document preparation, online submission, governmental fee processing, renewal management, and labour compliance tracking."
    }
  ];

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
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#1034A6]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Store className="w-3.5 h-3.5" />
                State Labor Compliance
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Shop & Establishment Registration
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                LEGALLY SECURE YOUR COMMERCIAL PREMISES with state-level Shops & Establishment Registration. Ensure total compliance with local state labor laws, display rules, and branch guidelines.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Store className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">Shop and Establishment Overview</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Shop and Establishment Registration is one of the most common and important registrations required for businesses operating from a shop, office, commercial premises, restaurant, warehouse, service centre, clinic, showroom, or other business establishment.
                </p>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  This registration is issued under the respective state’s <strong>Shops and Establishments Act</strong>. Since labour law is largely state-specific in this area, every state has its own rules, registration process, fee structure, renewal requirement, and compliance procedure.
                </p>

                <p className="text-slate-700 leading-relaxed text-justify hidden md:block">
                  Shop and Establishment Registration helps provide legal recognition to the business premises and ensures compliance with labour laws relating to working hours, holidays, employee conditions, wage payment, leave rules, and workplace records.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl mt-6">
                  <h3 className="text-[#3150A0] font-bold text-lg mb-2">What is Shop and Establishment Registration?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    It is a state-level labor law registration obtained by commercial operations running within physical commercial premises. This confirms legal existence with regional state labor departments.
                  </p>
                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-2xl mt-4">
                  <h3 className="text-orange-950 font-bold text-lg mb-2">Common Regional Names:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs font-semibold text-slate-750">
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Shop Act Registration</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Shop & Establishment Licence</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Shops & Establishments Certificate</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Gumasta Licence (in Maharashtra)</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Labour Department Shop Registration</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Commercial Establishment Registration</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. WHAT THE ACT COVERS */}
            {activeTab === 'act-coverage' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Briefcase className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What is the Shops and Establishments Act?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  The Shops and Establishments Act is a state-level system designed to regulate and govern working environments in commercial organizations, shops, warehouses, and offices. It protects and maintains employee safety, fair payouts, and balanced shifts.
                </p>

                <div className="bg-[#3150A0]/5 border border-[#3150A0]/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Core Matters Controlled by the Act:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
                    {[
                      "Daily and weekly working hours limits",
                      "Rest breaks and meal intervals",
                      "Official opening and closing hours of shops",
                      "Compulsory weekly holidays",
                      "Adoption of earned leave, casual leave, and sick leaves",
                      "Timely salary distribution and wage payouts",
                      "Fair employment guidelines for women staff",
                      "Total prohibition of underage/child labor",
                      "Overtime calculations and double-pay rates",
                      "Notice requirements for termination/resignation",
                      "Mandatory registers and bookkeeping records",
                      "Labor welfare norms and workspace hygiene audits"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2.5">
                        <Check className="w-4 h-4 text-[#3150A0] mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. WHY REQUIRED & BENEFITS */}
            {activeTab === 'why-required' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Lock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Registration is Required & Its Benefits</h2>
                </div>

                <p className="text-slate-705 leading-relaxed text-justify">
                  Every business must procure this registration soon after commencing commercial operations to achieve multiple regulatory and operational advantages:
                </p>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">1. Legal recognition representation</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Establishes a solid proof of physical business existence, location address, and active local commerce, protecting you from random inspections.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">2. Hassle-free bank account processing</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      To open a secure business Current Bank Account, financial institutions strictly demand Shop Act credentials as solid address validations.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">3. Primary bridge for other licenses</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Acts as a baseline validation document when applying for GST registration, professional tax profiles, state trade licenses, or FSSAI certificates.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">4. Build vendor credibility and tender accessibility</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Crucial during corporate vendor onboarding programs, online e-commerce marketplace signup gates, and government tender submissions where compliance certifications are scrutinized.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. WHO NEEDS REGISTRATION */}
            {activeTab === 'who-needs-it' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <UserCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Needs Shop and Establishment Registration?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify animate-slideDown">
                  Practically every commercial endeavor functioning in a brick-and-mortar office, retail outlet, showroom, food center, or corporate building should obtain state-level certification:
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-700 mt-4">
                  {[
                    "Traditional Retail shops",
                    "Wholesale outlets & Traders",
                    "Corporate Head & Branch Offices",
                    "Commercial Warehouses & Godowns",
                    "Restaurants, Cafes, & Pubs",
                    "Co-living, Hotels, & Bakeries",
                    "Cloud Kitchen operations",
                    "Theatres & Entertainment zones",
                    "Salons, Spas, & Parlours",
                    "Gyms & Health Fitness facilities",
                    "Clinics & Hospital centers",
                    "Coaching classes & Study lounges",
                    "IT, Software, & Tech centers",
                    "Professional consulting firms",
                    "E-commerce offices & logistic hubs",
                    "Startups & MSME establishments"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-[#3150A0] shrink-0" />
                      <span className="font-semibold text-xs leading-none text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. CATEGORY APPLICABILITY */}
            {activeTab === 'applicability' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Globe className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Applicability Matrix across Categories</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  The system divides compliance based on structural functions. Review these localized definitions to align your business with the appropriate category:
                </p>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping"></span>
                      1. Retail and Wholesale Shops
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Premises where consumer goods or items are sold on a retail or wholesale scale, or where diagnostic services are rendered to customers. Examples include clothing stores, grocery hubs, stationery shops, and retail medical panels.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      2. Commercial Establishments
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Places where commercial trade, software development, technical, real estate, or administrative activity is executed. Includes tech-support blocks, advertising agencies, consultancy centers, and legal suites.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      3. Restaurants and Lodges
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Commercial eating places preparing or serving cooked meals, items, snacks, or providing stay services. Examples include cloud kitchens, fast food bakeries, restaurants, hotels, and tourist camps.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      4. Branch & Employee-Based Applicability
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Commercial entities with multi-state footprints demand separate certifications in each respective state. Certain states also adjust compliance steps, records, or fees depending on active staff headcount ranges.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. IS IT MANDATORY */}
            {activeTab === 'mandatory' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Is Shop Act Registration Mandatory?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Yes, is completely mandatory for every legal entity operating commercially within designated municipal, semi-urban, or rural zones matching state criteria.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Consequences of Ignoring Registry:</h3>
                    <ul className="space-y-2 text-xs text-slate-650 list-disc pl-4 text-justify">
                      <li>Hefty financial fines on business proprietors.</li>
                      <li>Department warnings, inspections, and seals.</li>
                      <li>Total inability to open a corporate bank account.</li>
                      <li>Ineligibility during vendor audit checks.</li>
                      <li>Difficulties procuring fire safety clearance or trade licenses.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Check local variables:</h3>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify mb-2">
                      A business proprietor should always verify state-wise applicability before starting. The rules depend heavily on:
                    </p>
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc pl-4 text-justify">
                      <li>Local state regulations & classifications</li>
                      <li>Volume of active hired workers</li>
                      <li>Target commercial structure or operation type</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 7. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for Shop Act Registration</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify font-medium text-sm">
                  Submitting accurate documentation prevents administrative delays. Common layout of requirements includes:
                </p>

                <div className="space-y-4 text-xs">
                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Basic Business Documents</h3>
                    <ul className="space-y-2.5 text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Active PAN Card of the company, society, or individual firm.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Aadhaar card or identity proof of Owner/Partners/Directors.</span>
                      </li>
                      <li className="flex gap-2">
                        <span><strong>Detailed premises address proof:</strong> Rent agreement copy (if rented), ownership sale deed, or NOC from landlord.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Latest utility bill (electricity receipt, water bill, or land tax slip).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>A clear, high-resolution color photograph showcasing the front shop premises displaying the signboard name in local language, if required.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Entity-Specific Requirements</h3>
                    <ul className="space-y-2.5 text-slate-650">
                      <li className="flex gap-2">
                        <strong>For Partnership Firms:</strong> Partnership deed scan, PAN card, and identity proof of all active partners.
                      </li>
                      <li className="flex gap-2">
                        <strong>For LLPs:</strong> Certificate of incorporation, LLP agreement details, partners listing, and board authorization.
                      </li>
                      <li className="flex gap-2">
                        <strong>For Private Companies:</strong> MoA & AoA copies, MCA Master data scan, and lists of active Directors matching records.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 8. PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <TrendingUp className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Online Shop Act Registration Process</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify animate-slideDown">
                  We handle the complex state submission portals seamlessly. The typical 10-step online compliance process:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6 mt-6">
                  {[
                    { title: "Step 1: Check State Applicability", desc: "Confirm whether a Shop Act Certificate is required based on your exact commercial location map." },
                    { title: "Step 2: Identify the Correct Authority", desc: "Determine if processing is handled by state labor departments, municipal corporations, or single-window platforms." },
                    { title: "Step 3: Collect Required business Documents", desc: "Acquire address proof, landlord NOCs, electricity bills, and front premises photographs." },
                    { title: "Step 4: Create Portal Profile", desc: "Register a verified user profile page on the respective state labor or commercial department portal." },
                    { title: "Step 5: Fill Out Online Form", desc: "Input name of the establishment, manager details, nature of work, holiday details, and list of workers." },
                    { title: "Step 6: Upload Document Scans", desc: "Upload PAN cards, address utility bills, rent agreements, and owner photographs in the required formats." },
                    { title: "Step 7: Pay Government Fee", desc: "Process the official state government application fee securely online. Rates vary based on the number of workers." },
                    { title: "Step 8: Labor Department Verification", desc: "Government officers inspect the documents and application sheets to check for discrepancies." },
                    { title: "Step 9: Review and Corrections", desc: "Address any queries raised by department inspectors, such as address clarifications or photo resubmissions." },
                    { title: "Step 10: Digital Certificate Generation", desc: "Upon approval, the state department generates the Shop and Establishment Registration Certificate online." }
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

            {/* 9. VALIDITY & RENEWAL */}
            {activeTab === 'validity-renewal' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Clock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Validity & Renewal Period</h2>
                </div>

                <p className="text-slate-705 leading-relaxed text-justify">
                  Since rules are state-specific, the validity period of your Shop Act certificate can vary significantly:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 border border-slate-150 rounded-2xl bg-slate-50 text-justify">
                    <h4 className="font-bold text-[#3150A0] mb-2">Fixed-term Validity</h4>
                    <p className="text-slate-600">
                      In many states, certifications are valid for a fixed span of years (e.g., 1 to 5 years). Businesses must apply for renewal before the expiry date to avoid high late-filing fines.
                    </p>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-2xl bg-slate-50 text-justify">
                    <h4 className="font-bold text-[#3150A0] mb-2">Lifetime Validity</h4>
                    <p className="text-slate-600">
                      Certain progressive states now offer lifetime validity until business closure, requiring renewals only if there are database changes such as employee count spikes or address modifications.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 10. AMENDMENT & CLOSURE */}
            {activeTab === 'amendment-closure' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileSignature className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Amendments & Closure filings</h2>
                </div>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">1. Filing Database Amendments</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mb-2">
                      If business structures undergo change after issuance, you must apply for an online database amendment within 30 days. Common triggers include:
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4 text-justify">
                      <li>Change in target business name or brand.</li>
                      <li>Relocating the commercial office address.</li>
                      <li>Change in the count of working partners, directors, or managers.</li>
                      <li>Significant rise or drop in staff headcount parameters.</li>
                    </ul>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">2. Official Business Closure</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      If you permanently shut down operations or vacate your physical premises, filing for official registration cancellation is mandatory. This protects you from future labor tax audits or department notices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 11. REGISTERS & RECORDS */}
            {activeTab === 'registers-records' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileSpreadsheet className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Statutory Registers to Maintain</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Under state labor regulations, registered establishments must maintain mandatory registers to record working conditions. These are verified by labor inspectors during compliance checkups:
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-700">
                  {[
                    "Employee roll-call Register",
                    "Daily Attendance register",
                    "Wage & Salary payment ledger",
                    "Leave details log-book",
                    "Overtime recording log",
                    "Fine and Deduction details register",
                    "National & Weekly Holidays list",
                    "Official Inspector's visit book",
                    "Opening & Closing hours notice display"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-150 rounded-xl">
                      <span className="w-1.5 h-1.5 bg-[#3150A0] rounded-full"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 12. ONLINE & HOME BUSINESSES */}
            {activeTab === 'specific-business' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Home className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Online & Home-Based Businesses</h2>
                </div>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50 text-justify">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Online Enterprises</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      E-commerce sellers, digital consulting agencies, and virtual service providers must obtain this registration if they run operations from physical structures such as warehouses, fulfillment points, or billing offices.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50 text-justify">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Home-Based Operations</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Even if running commercially from a residential space, several state guidelines mandate registering to track self-employed parameters. Typical categories:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-705">
                      <li>Freelance programmers</li>
                      <li>Consulting practitioners</li>
                      <li>Cloud cooks / home kitchens</li>
                      <li>Home-based micro boutiques</li>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 13. DIFFERENCES EXPLAINED */}
            {activeTab === 'differences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Comparing Shop Act to Other Registrations</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Avoid common confusion between different business registrations. Here is the comparative breakdown:
                </p>

                <div className="space-y-4 text-xs">
                  {[
                    { title: "Shop & Establishment Registration", type: "State Labour Compliance", desc: "Registers business physical structures under labor rules. Evaluates shifting patterns, registers, and protection policies for employees." },
                    { title: "Company MCA Registration", type: "Federal Corporation Form", desc: "Incorporates a distinct legal company identity under the Companies Act via MCA. Gives your corporate entity legal existence." },
                    { title: "GST Registration", type: "Indirect Tax compliance", desc: "Registers your company for indirect tax compliance. Required for selling items or services above turnover limits." },
                    { title: "Trade Licence", type: "Municipal Sanitation Clearance", desc: "Issued by municipals allowing structural trading in specific areas. Checks safety, sanitation, and municipal zone alignment." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-150 rounded-2xl bg-slate-50/50">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-sm text-[#3150A0]">{item.title}</h3>
                        <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full">{item.type}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 14. DELAY & REJECTION REASONS */}
            {activeTab === 'delay-rerejection' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <XCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Common Delay & Rejection Causes</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Since details must align with local state municipal registries, minor document mistakes can trigger delay queries:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {[
                    "Business Name Mismatches: Spellings differing between PAN card details, utility bills, and application forms.",
                    "Premises proof deficit: Uploading incomplete, outdated, or blurred rent deeds and electricity statements.",
                    "Signboard Photo Issues: Photo copy lacking clear visibility of owner name displays or missing required regional sign languages.",
                    "Incorrect categorization: Choosing the wrong type profile (e.g., lodging vs café vs commercial office).",
                    "Signatory Authorisation Gaps: Missing official board resolutions or partner signatures on verification documents."
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 p-3 bg-red-50/15 border border-red-100 rounded-xl">
                      <span className="text-red-500 font-bold shrink-0 text-sm mt-0.5">!</span>
                      <p className="text-xs text-slate-650 leading-relaxed text-justify">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 15. FAQS */}
            {activeTab === 'faqs' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <HelpCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3 mt-6 animate-slideUp">
                  {FAQS.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index}
                        className="bg-slate-55 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
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

            {/* 16. WHY CHOOSE MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for Shop Act?</h2>
                </div>
                
                <p className="text-slate-705 leading-relaxed text-justify animate-slideDown">
                  Our professional compliance team removes the regulatory headache. We map local state rules, assemble your document checklist, submit filings accurately, and track application progress to ensure a smooth, worry-free registration.
                </p>

                <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our End-to-End Compliance Advantage:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                    {[
                      "Complete state applicability and threshold review",
                      "Instant, error-free documentation checklist assembly",
                      "Correct commercial category categorization (office vs shop vs cafeteria)",
                      "End-to-end online government portal application filing",
                      "Fast resolution of queries raised by inspectors",
                      "Timely notifications and reminders for future renewals",
                      "Unified advisory for Pf, Esi, GST, and trade licenses"
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
                  <h3 className="text-2xl font-bold mb-3 font-display">Fast-Track Your Shop Act Certification Today</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed text-justify md:text-center">
                    Ready to protect your commercial operations, establish valid local address proof, and keep state labor auditors happy? Secure your digital Shop Act Certificate with MakeEazy compliance advisors today!
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer text-sm">
                    Register Your Premises
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to register your commercial shop or establishment under the Shop Act?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for Shop & Establishment Registration with MakeEazy</span>
                <Store className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
