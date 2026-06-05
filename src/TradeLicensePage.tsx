import React, { useState } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  Info, 
  Lock, 
  UserCheck, 
  Globe, 
  Building, 
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
  XCircle,
  Home,
  CheckCircle,
  Building2,
  Activity,
  HeartPulse
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & Authority', icon: Info },
  { id: 'why-required', name: 'Why Required & Regulated', icon: Lock },
  { id: 'who-needs-it', name: 'Who Needs It?', icon: UserCheck },
  { id: 'license-types', name: 'Types of Trade Licenses', icon: Award },
  { id: 'applicability-zoning', name: 'Applicability & Zoning', icon: Globe },
  { id: 'mandatory', name: 'Is It Mandatory?', icon: ShieldCheck },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: '10-Step Registration Process', icon: TrendingUp },
  { id: 'validity-renewal', name: 'Validity & Renewal', icon: Clock },
  { id: 'amendment', name: 'Amendments & Closure', icon: FileSignature },
  { id: 'specific-industry', name: 'Restaurant & Industrial Focus', icon: Briefcase },
  { id: 'rejection-consequences', name: 'Rejection & Liability Risks', icon: XCircle },
  { id: 'faqs', name: 'Frequently Asked Questions', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

export default function TradeLicensePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is a Trade License?",
      a: "A Trade License is a permission or certificate issued by the local municipal authority (such as Municipal Corporation, Nagar Nigam, or Nagar Palika) allowing a person or business to carry on a specific trade, business, or commercial activity at a particular physical location. It regulates public safety, health, hygiene, environmental rules, and zoning."
    },
    {
      q: "Who needs a Trade License?",
      a: "Shops, restaurants, cafes, hotels, warehouses, workshops, clinics, salons, food businesses, manufacturing units, service providers, and other commercial establishments may need a Trade License, depending on local municipal rules and state guidelines."
    },
    {
      q: "Is a Trade License mandatory?",
      a: "Yes, it is strictly mandatory for businesses and trades covered under the applicable local municipal law. The exact coverage depends heavily on the jurisdiction and type of commercial activity."
    },
    {
      q: "Who issues the Trade License?",
      a: "It is generally issued by municipal corporations, municipalities, urban local bodies, village panchayat authorities, or health departments depending on the town or city borders."
    },
    {
      q: "Is a Trade License the same as Shop and Establishment Registration?",
      a: "No. A Trade License is issued by municipal authorities to permit carrying out a specific trade at a particular site with a focus on public safety and urban regulation. In contrast, Shop and Establishment Registration is a state labour department registration focused on employee working conditions, leave policies, and wages."
    },
    {
      q: "Is a Trade License the same as GST Registration?",
      a: "No. A Trade License is local municipal permission to operate your specific business activity physically on-site. GST Registration is a central/state indirect tax registration to monitor and pay tax on commercial sales transactions above threshold limits."
    },
    {
      q: "Is a Trade License required for restaurants and food businesses?",
      a: "Yes. Food businesses commonly need either a general Trade License or a specialized Health Trade License issued by the municipality, alongside FSSAI registrations, fire safety NOCs, and other mandatory certificates."
    },
    {
      q: "Is a Trade License required for home-based businesses?",
      a: "Home-based businesses (e.g. cloud kitchens, online boutiques, freelance studios) may require a Trade License if commercial activity is conducted from the residential site and local municipal zoning rules permit such activities."
    },
    {
      q: "What documents are required for a Trade License?",
      a: "Common documents include the owner's PAN and Aadhaar, entity incorporation deeds, premises proof (rent agreement or land ownership document), latest municipal utility or property tax bills, site layout plans, front-signage photographs, and category-specific NOCs (such as Fire NOC or Pollution Board consent)."
    },
    {
      q: "What is the validity of a Trade License?",
      a: "The validity depends on local guidelines. In most municipalities across India, a Trade License is valid for one financial year and must be renewed annually."
    },
    {
      q: "Can a Trade License be renewed?",
      a: "Yes. It can be renewed online or offline by submitting a renewal application form, paying the prescribed municipal fee, and confirming local compliance parameters before the expiry date."
    },
    {
      q: "Can Trade License details be changed?",
      a: "Yes. Amendments can be filed for changes in business name, ownership details, specific layout/area, or transition of trade category upon submitting supporting proof."
    },
    {
      q: "What happens if a business operates without a Trade License?",
      a: "Operating without a required Trade License can lead to heavy municipal penalties, late fees, temporary or permanent closure notices, sealing of business premises, or other municipal actions."
    },
    {
      q: "Can one Trade License be used for multiple branches?",
      a: "No. A Trade License is location-specific, tied to the exact commercial premises where the trade is conducted. Separate licenses are required if you operate multiple branches."
    },
    {
      q: "Can MakeEazy help with obtaining a Trade License?",
      a: "Yes! MakeEazy provides complete support including municipal jurisdiction identification, correct category mapping, document review, application drafting, online portal submission, query resolution, and future renewal tracking."
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
                <FileSignature className="w-3.5 h-3.5" />
                Municipal Business Authority
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Trade License Registration
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                SECURE MUNICIPAL PERMISSION to conduct your business. Ensure total alignment with local safety, health, environmental, and zoning rules under municipal corporation limits.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <FileSignature className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">Trade License Overview</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify animate-slideDown">
                  A <strong>Trade License</strong> is an important local business license required for carrying out certain trades, businesses, or commercial activities within the jurisdiction of a municipal corporation, municipality, panchayat, urban local body, or other local authority.
                </p>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  It grants explicit permission to a business to operate a particular trade or activity at a specific premises. It helps the local authority ensure that the business activity is conducted in accordance with public safety, health, hygiene, zoning, environmental, and municipal rules.
                </p>

                <p className="text-slate-700 leading-relaxed text-justify hidden md:block">
                  It is commonly required for shops, restaurants, hotels, factories, warehouses, workshops, healthcare establishments, food businesses, service providers, traders, and other commercial establishments, depending on the nature of business and local rules.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl mt-6">
                  <h3 className="text-[#3150A0] font-bold text-lg mb-2">What is a Trade License?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    A Trade License is a permission or certificate issued by the local municipal authority allowing a person or business to carry on a specific trade, business, or commercial activity at a particular location. It does not provide ownership rights over the premises. It only permits the business activity to be carried out legally from the registered location.
                  </p>
                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-2xl mt-4">
                  <h3 className="text-orange-950 font-bold text-lg mb-2">Typically Issued By Local Civic Bodies:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs font-semibold text-slate-750">
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Municipal Corporation (MCD, BMC, etc.)</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Local Municipality / Municipal Council</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Nagar Nigam / Nagar Palika</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Gram Panchayat Authority</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-200/0 bg-orange-500/10 rounded" />
                      <strong>Health Department</strong> (for health & food-related trades)
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Urban Local Bodies (ULBs) & licensing authorities</span>
                    </div>
                  </div>
                </div>


              </div>
            )}

            {/* 2. WHY REQUIRED */}
            {activeTab === 'why-required' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Lock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why is a Trade License Required?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Trade Licenses are required to ensure that commercial activities are carried out safely and legally within municipal areas. It ensures businesses do not create hazards for city residents.
                </p>

                <div className="bg-[#3150A0]/5 border border-[#3150A0]/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">What Municipal Authorities Regulate:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
                    {[
                      "Public health protection in consumer environments",
                      "Public safety, building standards, and structural load rules",
                      "Hygiene, waste disposal, and clean sanitation setups",
                      "Fire rescue and prevention checks",
                      "Nuisance control (smoke, noise, smells, pollution)",
                      "Environmental guidelines and waste treatment checks",
                      "Zoning restrictions (commercial operations in residential lanes)",
                      "Discharge of hazardous or dangerous commercial items",
                      "Operations within municipal jurisdiction maps"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2.5">
                        <Check className="w-4 h-4 text-[#3150A0] mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 border border-red-100 bg-red-50/5 text-slate-700 rounded-2xl text-sm leading-relaxed text-left">
                  <h3 className="font-bold text-red-700 mb-2">Consequences of Operating Without a Valid Licence:</h3>
                  <p className="text-xs text-justify">
                    A business operating without its mandatory municipal permissions faces heavy administrative penalties, instant closure notices, business sealing actions, refusal of subsequent licensing (like GST or excise), and severe blocks on government approvals.
                  </p>
                </div>
              </div>
            )}

            {/* 3. WHO NEEDS IT */}
            {activeTab === 'who-needs-it' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <UserCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Needs a Trade License?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Depending on local guidelines, almost all brick-and-mortar operations and notified trades require valid municipal permission lists:
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-700 mt-4">
                  {[
                    "Retail stores & general shops",
                    "Wholesale centers & godowns",
                    "Restaurants, Cafes, & Pubs",
                    "Bakehouses & sweet shops",
                    "Cloud Kitchen operations & food trucks",
                    "Food stalls & catering units",
                    "Grocery & departmental marts",
                    "Medical retail stores",
                    "Clinics & diagnostic setups",
                    "Salons, Spas, & Beauty lanes",
                    "Gyms & wellness fitness points",
                    "Commercial offices & bureaus",
                    "Manufacturing factories & workshops",
                    "Industrial processing centers",
                    "Entertainment centers & cinemas",
                    "Event locations & convention lawns"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-150 rounded-xl hover:bg-blue-50/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#3150A0] shrink-0" />
                      <span className="font-semibold text-xs leading-none text-slate-705">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. TYPES OF TRADE LICENSES */}
            {activeTab === 'license-types' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Types of Trade Licenses</h2>
                </div>

                <p className="text-slate-707 leading-relaxed text-justify">
                  Categories differ across urban local bodies, but cities generally segment approvals based on the activity profile:
                </p>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-white shadow-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500" />
                      1. General Trade License
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Required for general retail, trade, or administrative offices. Covers general items like stationery counters, garment shops, clothing boutiques, cargo companies, and general consultants.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-white shadow-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500" />
                      2. Health Trade License
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Mandatory for operations directly dealing with public consumption or bodily services. Includes cafeterias, restaurants, lodges, grocery shops, medical clinics, gyms, salons, and beauty spas.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-white shadow-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500" />
                      3. Industrial Trade License
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Required for manufacturing hubs, heavy equipment garages, repair units, smelting yards, and core industrial processing blocks dealing with power loads or boilers.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-white shadow-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500" />
                      4. Food Business & Dangerous Offensive Licenses
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Requires special permissions if dealing with highly combustible solvents, chemical storages, fireworks, boilers, charcoal, or processing environments prone to emission hazards.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. APPLICABILITY & ZONING */}
            {activeTab === 'applicability-zoning' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Globe className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Applicability & Municipal Zoning Rules</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Trade Licenses are strictly linked to the physical location of the business. Local authorities match your structural premises against city development maps to declare commercial permissions.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl">
                  <h3 className="text-[#3150A0] font-bold text-base mb-3">Zoning Verifications - Before You Key in an Address:</h3>
                  <div className="space-y-3 text-xs text-slate-650">
                    <p className="text-justify">
                      Ensure your building has permissions for commercial activity. Commencing operations within designated residential lanes without conversion approval is a major cause of municipal seals and rejections.
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-justify">
                      <li>Check whether the zone permits commercial activity map lines.</li>
                      <li>Check if building usage permissions are on active records.</li>
                      <li>Consult local rules on noise-related restrictions and public parking margins.</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-slate-150 p-5 rounded-2xl">
                  <h3 className="font-bold text-sm text-[#3150A0] mb-2">Are Home-Based Businesses Covered?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Yes, home boutique owners, local bakers, home catering services, and online suppliers must obtain a local Trade License if their scale generates utility changes, public customer footfalls, or noise profiles that alter residential parameters.
                  </p>
                </div>
              </div>
            )}

            {/* 6. IS IT MANDATORY */}
            {activeTab === 'mandatory' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Is a Trade License Mandatory?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Yes, is completely mandatory for every legal entity operating commercially within designated municipal, semi-urban, or rural zones matching local town rules.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Liabilities of Deficit Licenses:</h3>
                    <ul className="space-y-2 text-xs text-slate-650 list-disc pl-4 text-justify">
                      <li>Heavy financial penalties relative to business duration.</li>
                      <li>Immediate business closure warnings.</li>
                      <li>Premises boundaries sealed by municipal law.</li>
                      <li>Court proceedings for hazardous or unauthorized commercial acts.</li>
                      <li>Rejection in high-ticket bids, and supplier validations.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Check local variables:</h3>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify mb-2">
                      Before starting commercial activity, verify city requirements. Permitted trades differ depending on:
                    </p>
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc pl-4 text-justify">
                      <li>City-specific municipal master plan lines</li>
                      <li>Specific category hazards (machinery usage or storage)</li>
                      <li>Total square footage used for trade operations</li>
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for Trade License</h2>
                </div>

                <p className="text-slate-755 leading-relaxed text-justify font-medium text-sm">
                  Submitting accurate documentation prevents administrative delays. Common document requirements include:
                </p>

                <div className="space-y-4 text-xs">
                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50/50">
                    <h4 className="font-bold text-[#3150A0] text-sm mb-3">1. Basic Applicant & Identity Scans</h4>
                    <ul className="space-y-2 text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>PAN Card copy of the company, LLP, firm, or individual promoter.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Aadhaar card scan or verified identity proof of directors/partners.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Passport-size photo of the official applicant.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Official board resolution or partner authorization letters.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50/50">
                    <h4 className="font-bold text-[#3150A0] text-sm mb-3">2. Premises & Structural Address Proofs</h4>
                    <ul className="space-y-2 text-slate-650 font-normal">
                      <li>Recent electricity receipt, property tax invoice, or land water bill.</li>
                      <li>Full rental agreement copy (if rented) or land deed files (if self-owned).</li>
                      <li>NOC from the property landlord confirming commercial activity.</li>
                      <li>Site layout outline plan indicating the square footage of the premises.</li>
                      <li>Occupancy approval (OC) or building permission from land planning bodies.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50/50">
                    <h4 className="font-bold text-[#3150A0] text-sm mb-3">3. Category-Specific & Business NOCs</h4>
                    <ul className="space-y-2 text-slate-650 font-normal">
                      <li><strong>Food / Sweet Shops:</strong> FSSAI License, Health Dept NOC, water analysis.</li>
                      <li><strong>Manufacturing / Processing:</strong> Pollution Control Board consent (air/water), machinery specs, load proof.</li>
                      <li><strong>Cinemas / Pubs:</strong> Fire Safety NOC, structural clearance certificates.</li>
                      <li><strong>Medical shops:</strong> Drug License credentials alongside pharmacist IDs.</li>
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">Online Trade License Registration Process</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Our professional compliance team processes municipal submissions smoothly. The typical 10-step online process:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6 mt-6">
                  {[
                    { title: "Step 1: Check Local Applicability", desc: "Evaluate whether a municipal license is required based on the nature of your trade and precise physical spot coordinates." },
                    { title: "Step 2: Identify License Category", desc: "Choose the correct class (General, Health, Industrial, or Food/Dangerous Goods) to avoid immediate rejections." },
                    { title: "Step 3: Collect Documentation Scans", desc: "Gather rental agreements, owner PAN/Aadhaar cards, utility bills, site layouts, and required NOCs." },
                    { title: "Step 4: Create Municipal Portal Profile", desc: "Set up a verified profile account on the respective local municipal authority's single-window portal page." },
                    { title: "Step 5: Fill Out Detailed Forms", desc: "Input physical business name, structure, address details, power load (if industrial), and worker count numbers." },
                    { title: "Step 6: Upload Verifiable Scans", desc: "Upload premises proof, local landlord NOC, and signage photographs looking readable from the front lane." },
                    { title: "Step 7: Pay Government / Municipal Fee", desc: "Process the official state municipal fee securely online. Rates are determined by region, lane width, and square footage." },
                    { title: "Step 8: Department Layout Screening", desc: "Government clerks and municipal inspectors inspect documents for compliance matching." },
                    { title: "Step 9: Site Inspection (If Required)", desc: "Inspectors may visit the physical site (especially for hotels, food complexes, or medical labs) to evaluate safety protocols." },
                    { title: "Step 10: Trade License Certification Issuance", desc: "Upon verification, the local municipal body generates and issues the official Trade License online." }
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
                <div className="flex items-center gap-3 border-b border-slate-105 pb-4">
                  <Clock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Validity & Renewal Guidelines</h2>
                </div>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-200 rounded-2xl bg-slate-55 text-justify text-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Annual Financial Year Cycles</h3>
                    <p className="text-slate-600 leading-relaxed">
                      In the vast majority of Indian municipalities, a Trade License is issued with validity tied to the current <strong>Financial Year (April 1st to March 31st)</strong>. This means you must renew your license annually, usually with online portal applications due before April or May to avoid late fees.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-200 rounded-2xl bg-slate-55 text-justify text-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Required for Licence Renewal:</h3>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-2">
                      <li>Your original/previous Trade License certificate file</li>
                      <li>Proof of cleared municipal property taxes</li>
                      <li>Updated Fire safety audit checkups, if applicable</li>
                      <li>Rent receipts or proof of continued lease tenure</li>
                      <li>Consent declaration representing no change in business operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 10. AMENDMENTS & CLOSURE */}
            {activeTab === 'amendment' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileSignature className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Amendments & Closure filings</h2>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50 text-justify">
                    <h3 className="font-semibold text-sm text-[#3150A0] mb-2">Amending Your Licence details</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      If business setups change, you must file for database amendments with municipal corporations within 30 days. Common amendment causes include:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700">
                      <li>Change in the trade brand or name.</li>
                      <li>Ownership transitions or partner alterations.</li>
                      <li>Adding new commercial items inside the same premises.</li>
                      <li>Expanding physical square footage or power loads.</li>
                    </ul>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50 text-justify">
                    <h3 className="font-semibold text-sm text-[#3150A0] mb-2">Official Licensing Cancellation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      If you vacate properties or permanently wind up commercial setups, you must notify municipal bodies to cancel the Trade License. This shields you from ongoing civic audits, pending property taxes, or recurring municipal fee liability demands.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 11. RESTAURANT & INDUSTRIAL FOCUS */}
            {activeTab === 'specific-industry' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Briefcase className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Specific Industry Licensing Focus</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="border border-slate-150 rounded-2xl p-5 bg-white shadow-xs text-justify">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Restaurants & Food Operations</h3>
                    <p className="text-slate-655 leading-relaxed mb-2">
                      F&B setups require strict civic compliance. Ensure you possess:
                    </p>
                    <ul className="space-y-1 list-disc pl-4 text-slate-600">
                      <li>A Health Trade License from municipal authorities.</li>
                      <li>Valid FSSAI Central/State registration numbers.</li>
                      <li>Fire safety NOCs from state emergency stations.</li>
                      <li>Local authority NOC matching proper kitchen layouts.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 rounded-2xl p-5 bg-white shadow-xs text-justify">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Workshops & Industrial Units</h3>
                    <p className="text-slate-655 leading-relaxed mb-2">
                      Manufacturing lines must verify the following items before beginning:
                    </p>
                    <ul className="space-y-1 list-disc pl-4 text-slate-600">
                      <li>An Industrial Trade License or Factory License.</li>
                      <li>State Pollution Control Board clearances (consent to establish & operate).</li>
                      <li>Machinery and power load alignment specs.</li>
                      <li>Proper ventilation and toxic waste clearance agreements.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 12. REJECTION & RISKS */}
            {activeTab === 'rejection-consequences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <XCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Rejection reasons & Liability Risks</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify font-medium text-sm">
                  Civic licensing checks have low tolerances. Watch out for these absolute rejection triggers:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {[
                    "Wrong Municipal Jurisdiction: Selecting the wrong Nagar Nigam or ward council office.",
                    "Incorrect Category Selection: Selecting a standard shop license instead of a food/health license.",
                    "Incomplete / Outdated Records: Uploading expired rental deeds or uncleared electricity tax statements.",
                    "Non-Commercial Premises Use: Operating heavy trades in strictly residential-only zoning maps.",
                    "Landlord NOC Gaps: Missing explicit tenant-usage consent papers from land owners."
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 p-3 bg-red-50/15 border border-red-100 rounded-xl">
                      <span className="text-red-500 font-bold shrink-0 text-sm mt-0.5">!</span>
                      <p className="text-xs text-slate-650 leading-relaxed text-justify">{item}</p>
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

            {/* 14. WHY CHOOSE MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for Trade License?</h2>
                </div>
                
                <p className="text-slate-705 leading-relaxed text-justify animate-slideDown">
                  Our expert civic compliance team removes the regulatory headache. We accurately identify municipal borders, map your trade to the correct licensing class, assemble complete package checklists, file on state portals, and directly handle department queries for seamless processing.
                </p>

                <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our Comprehensive Civic Service:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                    {[
                      "Accurate city municipal board jurisdiction mapping",
                      "Correct Trade License category selection matches",
                      "Instant document and landlord NOC check",
                      "Online and offline filing support with tracking",
                      "Professional FSSAI, Fire NOC, and Pollution Board support",
                      "Proactive reminders for upcoming annual renewals",
                      "Unified advisory for full-portfolio registrations"
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
                  <h3 className="text-2xl font-bold mb-3 font-display">Secure Your Official Trade License Today</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed text-justify md:text-center">
                    Ready to trade legally, pass municipal audits, and establish official business credibility on physical premises? Procure your municipal Trade License with MakeEazy compliance advisors today!
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer text-sm">
                    Get Your Trade License Now
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to secure your municipal trade license and run operations legally?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for Trade License Registration with MakeEazy</span>
                <FileSignature className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
