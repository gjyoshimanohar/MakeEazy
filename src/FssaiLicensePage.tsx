import React, { useState } from 'react';
import { 
  ArrowLeft, 
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
  XCircle,
  Home,
  Utensils,
  PlusCircle,
  RotateCcw,
  FileSpreadsheet,
  Tag
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & Basic FBO', icon: Info },
  { id: 'types', name: 'FSSAI License Types', icon: Award },
  { id: 'why-required', name: 'Why Required & Benefits', icon: Lock },
  { id: 'who-needs-it', name: 'Who Needs Registration?', icon: UserCheck },
  { id: 'home-food', name: 'Home-Based Food Sellers', icon: Home },
  { id: 'restaurants-cafes', name: 'Restaurants & Cafes', icon: Utensils },
  { id: 'manufacturers-traders', name: 'Manufacturers & Traders', icon: Briefcase },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'FoSCoS Online Process', icon: TrendingUp },
  { id: 'validity-renewal', name: 'Validity & Renewal Reform', icon: Clock },
  { id: 'modification-returns', name: 'Modification & Returns', icon: FileSignature },
  { id: 'labelling-hygiene', name: 'Labelling & Safety Rules', icon: FileSpreadsheet },
  { id: 'differences', name: 'FSSAI vs GST vs Trade', icon: Scale },
  { id: 'mistakes-rejection', name: 'Common Mistakes & Risks', icon: XCircle },
  { id: 'faqs', name: 'Frequently Asked Questions', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

export default function FssaiLicensePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is FSSAI Registration?",
      a: "FSSAI Registration is the basic food safety registration required for small food business operators (FBOs) such as dry-goods retailers, home bakers, temporary stall holders, hawkers, small food traders, and other businesses whose annual turnover is below the revised basic eligibility limit of ₹1.5 Crore/year (formerly ₹12 Lakhs)."
    },
    {
      q: "What is FSSAI License?",
      a: "FSSAI License is a food safety permission required for food businesses that operate on a larger scale or fall under specified categories. Depending on production capacity, turnover, and location, it is divided into FSSAI State License (such as for turnovers between ₹1.5 Crore and ₹50 Crore) and FSSAI Central License (for turnovers above ₹50 Crore)."
    },
    {
      q: "Who needs FSSAI Registration or License?",
      a: "Any person or entity involved in manufacturing, processing, packaging, storing, distributing, transporting, selling, importing, exporting, or serving food products must legally acquire appropriate FSSAI credentials."
    },
    {
      q: "Is FSSAI mandatory for food businesses?",
      a: "Yes. Food safety compliance is strictly mandatory for any Food Business Operator (FBO) in India under the Food Safety and Standards Act, 2006. Operating a food business without it can invite heavy penal coordinates or immediate legal closure."
    },
    {
      q: "Is FSSAI required for home bakers?",
      a: "Yes. Home bakers, home chefs, cloud kitchens, and home-based snack or pickle makers who sell directly to consumers online (such as via WhatsApp, Instagram, or food delivery apps) or supply to local shops must obtain FSSAI basic registration to ensure legal operations."
    },
    {
      q: "Is FSSAI required for restaurants?",
      a: "Yes. Restaurants, cafes, hotels, catering companies, cloud kitchens, and event canteens must obtain a custom FSSAI Registration or License (State/Central) depending on their exact capacity and turnover bounds."
    },
    {
      q: "What are the types of FSSAI registrations and licenses?",
      a: "Under the latest limits effective from 01-04-2026, the main categories are FSSAI Basic Registration (turnover up to ₹1.5 Crore, previously ₹12 Lakhs), FSSAI State License (turnover between ₹1.5 Crore and ₹50 Crore, previously ₹12 Lakhs – ₹20 Crores), and FSSAI Central License (turnover above ₹50 Crore, previously above ₹20 Crores, or specialized categories like importers, exporters, and multi-state operators)."
    },
    {
      q: "What is FoSCoS?",
      a: "FoSCoS stands for Food Safety Compliance System. It is the official central online portal designed and handled by the government for food registration, licensing, modification renewals, and relative statutory filings."
    },
    {
      q: "What documents are required for FSSAI?",
      a: "Common documents include PAN card of the entity, Aadhaar/identity proof of the operator, clear photographs, detailed business address proof (such as a rent agreement or utility bill), list of food categories/products, and business constitution records. Larger licenses demand Layout plans, water analysis reports, lists of equipment, and FSMS plans."
    },
    {
      q: "What is the FSSAI number?",
      a: "The FSSAI number is a unique 14-digit registration or license number issued to Food Business Operators. This number must be prominently displayed at the physical shop premises and printed on all retail labels, invoices, menu cards, websites, and packaging bills."
    },
    {
      q: "Is FSSAI required for packaged food?",
      a: "Yes. Businesses involved in manufacturing, packing, selling, or distributing packaged foods must legally register with FSSAI and strictly follow mandatory packaging and labeling rules."
    },
    {
      q: "Is FSSAI required for food importers/exporters?",
      a: "Yes. Importers and exporters of food products must procure a mandatory FSSAI Central License to handle customs clearance, labeling, and international trade safety compliance successfully."
    },
    {
      q: "Can one FSSAI License be used for multiple branches?",
      a: "No. FSSAI licenses are strictly location-specific. Each separate food branch, warehouse, or retail shop must obtain its independent state registration or license depending on regional parameters. Multi-state operators must have a Central License for their Head Office in addition to individual state clearances."
    },
    {
      q: "Can FSSAI details be modified?",
      a: "Yes. Changes such as business name, office address, product category addition, capacity expansion, or constitution shifts must be modified online via the FoSCoS portal with supporting doc proofs."
    },
    {
      q: "Is FSSAI the same as a Trade License?",
      a: "No. FSSAI directly regulates food safety, quality standards, and hygiene rules for consumption. A Trade License is issued by local municipal corporations to authorize basic commercial on-site trade operations under urban planning and municipal safety guidelines."
    },
    {
      q: "Can MakeEazy help with FSSAI Registration and License?",
      a: "Yes! MakeEazy handles the entire lifecycle of food safety compliance, including state eligibility screening, Kind-of-Business (KoB) selection, document compilation, FSMS plan design, FoSCoS submission, handling department queries, and automated renewal monitoring."
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
                <Utensils className="w-3.5 h-3.5" />
                Food Safety Authority (FSSAI)
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                FSSAI Registration & License
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                LEGALLY COMPLY WITH FOOD SAFETY LAWS. Secure basic FSSAI registration, State License, or Central License for your food outlet, manufacturing unit, cloud kitchen, or import/export channel.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Utensils className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">FSSAI Registration and License</h2>
                </div>
                
                <p className="text-slate-705 leading-relaxed text-justify">
                  FSSAI Registration or License is a critical legal mandate for all food businesses operating in India. Any individual or corporate entity involved in manufacturing, processing, packaging, storing, distributing, transporting, selling, importing, or serving food products must secure FSSAI credentials before triggering operations.
                </p>
                
                <p className="text-slate-705 leading-relaxed text-justify">
                  <strong>FSSAI</strong> stands for <strong>Food Safety and Standards Authority of India</strong>. It is the supreme statutory body responsible for regulating and supervising food safety throughout the nation under the comprehensive <strong>Food Safety and Standards Act, 2006</strong>.
                </p>

                <p className="text-slate-705 leading-relaxed text-justify hidden md:block">
                  Through quality checking, hygiene compliance, labeling audits, and food-handling reviews, FSSAI ensures consumers obtain pure, unadulterated food. It provides important legal recognition to food businesses and builds trust among retail buyers, online aggregators, and corporate partners.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl mt-6">
                  <h3 className="text-[#3150A0] font-bold text-lg mb-2">What is FSSAI Registration?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    A basic food safety registration required for small Food Business Operators (FBOs) such as retail grocers, petty manufacturers, pocket traders, dairy centers, and small-scale processors that fit within limited turnover or output bounds.
                  </p>
                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-2xl mt-4">
                  <h3 className="text-orange-950 font-bold text-lg mb-2">Statutory 14-Digit Identity:</h3>
                  <p className="text-slate-655 text-xs text-justify">
                    Upon approval, the entity receives a unique 14-digit FSSAI number which must be prominently displayed on-site and printed clearly on food labels, retail packaging, shipping bills, and restaurant menus.
                  </p>
                </div>
              </div>
            )}

            {/* 2. TYPES */}
            {activeTab === 'types' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">FSSAI License Types & Criteria (Revised Framework)</h2>
                </div>

                <p className="text-slate-707 leading-relaxed text-justify">
                  FSSAI structures compliance based on operational turnover, location footprints, and daily production volumes. Select the appropriate classification:
                </p>

                {/* Latest FSSAI Limits Revision Comparison Table */}
                <div className="my-6 border border-orange-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <div className="bg-orange-50/70 p-4 border-b border-orange-100">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-orange-200 text-orange-850 font-bold text-[10px] rounded-full uppercase tracking-wider">Latest Update</span>
                      <h3 className="font-bold text-slate-900 text-sm">FSSAI Registration & License Limit Changes</h3>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Under the latest government directive applicable starting <strong>01-04-2026</strong>, thresholds have been heavily increased and validity terms simplified.</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/80 text-slate-500 border-b border-orange-100">
                          <th className="p-4 font-bold text-slate-700">Category</th>
                          <th className="p-4 font-bold text-[#3150A0] bg-orange-50/20">New Limit (From 01-04-2026)</th>
                          <th className="p-4 font-semibold text-slate-450">Old Limit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-4 font-semibold text-slate-900">Registration (Basic)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-orange-50/10">Up to ₹1.5 crore</td>
                          <td className="p-4 text-slate-500">Up to ₹12 lakh</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-4 font-semibold text-slate-900">State License</td>
                          <td className="p-4 font-bold text-emerald-700 bg-orange-50/10">₹1.5 crore – ₹50 crore</td>
                          <td className="p-4 text-slate-500">₹12 lakh – ₹20 crore</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-4 font-semibold text-slate-900">Central License</td>
                          <td className="p-4 font-bold text-emerald-700 bg-orange-50/10">Above ₹50 crore</td>
                          <td className="p-4 text-slate-500">Above ₹20 crore</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-4 font-semibold text-slate-900">Validity</td>
                          <td className="p-4 font-bold text-orange-650 bg-orange-50/10">Perpetual</td>
                          <td className="p-4 text-slate-500">1–5 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      1. FSSAI Basic Registration (Revised)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Applicable to micro-scale Food Business Operators with annual turnovers up to <strong>₹1.5 Crore</strong> (previously ₹12 Lakhs). This covers local hawkers, cart owners, temporary canteens, home bakeries, petty retailers, and micro processors. This is now valid **perpetually** subject to annual continuation.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      2. FSSAI State License (Revised)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1">
                      Designed for medium-scale manufacturers, large restaurants, hotels (under 3-star categories), distributors, cold storage plants, repackers, and storage facilities operating inside a single state, with turnovers between <strong>₹1.5 Crore and ₹50 Crore</strong> (previously ₹12 Lakhs and ₹20 Crores).
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping"></span>
                      3. FSSAI Central License (Revised)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify mt-1 text-slate-605">
                      Mandatory for large-scale operators with annual turnovers exceeding <strong>₹50 Crore</strong> (previously ₹20 Crores). Also mandatory for high-category operations regardless of scale: Importers, Exporters, e-commerce brands, central government offices, hotels (5-star and above), and multi-state operations (head office with food units in multiple states).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. WHY REQUIRED & BENEFITS */}
            {activeTab === 'why-required' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Lock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why FSSAI is Required & Its Benefits</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify animate-slideDown">
                  Apart from fulfilling important statutory obligations to avoid shut-down orders, retaining a valid FSSAI certificate grants valuable advantages:
                </p>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/30">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">1. Establish high customer & brand trust</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      The FSSAI logo and 14-digit print confirm rigorous hygiene safety standards, driving higher buyer satisfaction and commercial credibility.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/30">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">2. Mandatory for online food delivery aggregators</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Top delivery platforms (e.g., Swiggy, Zomato) and online grocery spaces (e.g., Blinkit, Zepto, Amazon) require FSSAI registration to unlock seller listings.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/30">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">3. Legal protection & penalty avoidance</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Protects FBOs from surprise raids, product seizure, severe court penalties, criminal lawsuits, or permanent shut-down notices.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/30">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">4. Support import-export operations & expansion</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Required for customs clearance, international food supply contracts, retail chain onboarding, and accessing institutional buyers.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. WHO NEEDS IT */}
            {activeTab === 'who-needs-it' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <UserCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Needs FSSAI Registration or License?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  FSSAI covers virtually every segment of the commercial food supply chain. Any entity involved in food operations needs appropriate alignment:
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-700 mt-4">
                  {[
                    "Traditional Restaurants & Diners",
                    "Cafes, Lounges, & Bakeries",
                    "Cloud Kitchen operations",
                    "Home Bakers & Chocolatiers",
                    "F&B Manufacturers & Processors",
                    "Dry and Packaged repackers",
                    "Wholesalers, Traders, & Stockists",
                    "F&B Distributors & Logisticians",
                    "Grocery stores & Supermarts",
                    "Sweet & Savory shops",
                    "Caterers & Canteen managers",
                    "Food truck & temporary stall operators",
                    "E-commerce food platforms",
                    "F&B Importers & Exporters",
                    "Transporters (F&B vehicle networks)",
                    "Gold/Cold storage operators"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-150 rounded-xl hover:bg-emerald-50/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-xs leading-none text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. HOME FOOD */}
            {activeTab === 'home-food' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Home className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">FSSAI for Home-Based Food Businesses</h2>
                </div>

                <p className="text-slate-707 leading-relaxed text-justify animate-slideDown">
                  The boom in social-commerce has made FSSAI Basic Registration highly mandatory for micro-scale food operators who prepare items at home. Home-based chefs, chocolate makers, pickle planners, and bakers must buy basic FSSAI certificates to sell legally.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-bold text-[#3150A0] text-sm mb-3">Home Food Operators Require FSSAI for:</h4>
                  <ul className="space-y-2 text-xs text-slate-655 text-justify">
                    <li>Selling items directly through Instagram, WhatsApp, or proprietary blogs.</li>
                    <li>Listing custom goods on local delivery applications.</li>
                    <li>Supplying regional sweet stalls, gift counters, or event organisers.</li>
                    <li>Participating in food exhibitions, seasonal pop-ups, or weekend markets.</li>
                    <li>Building crucial consumer confidence regarding raw-material purity.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 6. RESTAURANTS & CAFES */}
            {activeTab === 'restaurants-cafes' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Utensils className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">FSSAI License for Restaurants & Cafes</h2>
                </div>

                <p className="text-slate-707 leading-relaxed text-justify animate-slideDown">
                  Commercial food eating complexes, diners, cafes, and cloud kitchens operate under tight public health oversight. Maintaining a valid FSSAI State or Central License (based on seating counts and turnover bounds) is a must before hiring staff.
                </p>

                <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                  <h4 className="font-bold text-sm text-[#3150A0] mb-3">Related Approvals Needed alongside FSSAI:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-650">
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>Shop & Establishment Registration</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>Municipal Trade License / Eating House License</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>GST Registration credentials</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>State Fire Safety Department NOC</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. MANUFACTURERS & TRADERS */}
            {activeTab === 'manufacturers-traders' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Briefcase className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">FSSAI for Manufacturers, Traders & Importers</h2>
                </div>

                <div className="space-y-4 text-xs font-normal">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-1">1. Food Manufacturing Units</h3>
                    <p className="text-slate-655 leading-relaxed text-justify mb-2">
                      F&B manufacturers are evaluated by active production throughput rates (tonnes/day). They must submit processing machinery specs, floor layouts, water source analysis reports, and structured recall frameworks.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-1">2. Traders, Wholesalers & Distributors</h3>
                    <p className="text-slate-655 leading-relaxed text-justify mb-2">
                      Even if not fabricating food items, companies holding, packing, or moving F&B components require FSSAI certification. FSSAI treats distribution as a baseline food handling transaction.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-1">3. Food Importers & Exporters</h3>
                    <p className="text-slate-655 leading-relaxed text-justify">
                      F&B international trade operators must obtain an FSSAI Central License. FSSAI Central verification is mandatory for customs clearance, cargo checks, and importing nutraceutical products.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 8. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for FSSAI</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify font-medium text-sm">
                  The documents required depend on the type of registration or license and the nature of the food business. Selecting the correct layout is necessary:
                </p>

                <div className="space-y-4 text-xs font-normal">
                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50/50">
                    <h4 className="font-bold text-sm text-[#3150A0] mb-3">A. Basic FSSAI Registration</h4>
                    <ul className="space-y-2 text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>PAN Card copy and Aadhaar verification scan of the promoter.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>A high-resolution passport-size photograph.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Rent agreement (if rented) or land possession deed (if self-owned).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Latest utility statement (such as electricity bill or land tax slip).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Detailed list of food categories to be processed or sold.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50/50">
                    <h4 className="font-bold text-sm text-[#3150A0] mb-3">B. Additional Documents for State/Central Licenses</h4>
                    <ul className="space-y-2 text-slate-650">
                      <li>Form-B signed copy.</li>
                      <li>Blueprint layout plan of the preparation site indicating operational chambers.</li>
                      <li>Complete list of processing machinery and power usage inputs.</li>
                      <li>Water analysis report confirming chemical and bacteriological purity.</li>
                      <li>FSMS (Food Safety Management System) layout plan or certificate.</li>
                      <li>Import Export Code (IEC) (for importers or exporters).</li>
                      <li>Product testing reports from accredited labs.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 9. PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <TrendingUp className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Online Step-by-Step FoSCoS Process</h2>
                </div>

                <p className="text-slate-707 leading-relaxed text-justify animate-slideDown">
                  Our dedicated food safety experts guide you seamlessly through the official FoSCoS platform:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6 mt-6">
                  {[
                    { title: "Step 1: Check FSSAI Applicability", desc: "Evaluate operational turnover, states of interest, and production capabilities to determine eligibility bounds." },
                    { title: "Step 2: Choose Correct Kind of Business (KoB)", desc: "Pinpoint your class description (e.g., Manufacturer vs Wholesaler vs Retailer) on the FoSCoS platform." },
                    { title: "Step 3: Document Compilation", desc: "Construct rent deeds, site maps, product category specs, utility bills, and FSMS setups." },
                    { title: "Step 4: Create FoSCoS Portal Profile", desc: "Formulate a verified corporate or individual login profile on the FoSCoS single-window platform." },
                    { title: "Step 5: Fill Out Online Form", desc: "Input detailed address, contact info, responsible person metrics, and category lists." },
                    { title: "Step 6: Upload Verifiable Scans", desc: "Upload identity papers, landlord NOCs, layout blueprints, and water purity certificate scans." },
                    { title: "Step 7: Pay Government Licensing Fee", desc: "Process the official state FSSAI fee securely online. Rates are determined by category type (State/Central/Basic) and tenure." },
                    { title: "Step 8: Department Review & Screenings", desc: "Food Safety Officers evaluate documents. They might issue clarifications if data mismatches are found." },
                    { title: "Step 9: On-Site Food Health Inspections", desc: "For manufacturing blocks, state inspectors may conduct physical audits to certify sanitary setups." },
                    { title: "Step 10: Generation of 14-Digit Certificate", desc: "After final approval, the board generates the digital FSSAI Certificate containing details and the logo." }
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

            {/* 10. VALIDITY-RENEWAL */}
            {activeTab === 'validity-renewal' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Clock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Validity & FOSTAC Renewal Reforms</h2>
                </div>

                <div className="space-y-4">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50 text-justify text-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Introduction of Perpetual Validity</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Earlier FSSAI certificates required explicit renewals before expiry. Under updated FSSAI reforms, the body has introduced <strong>perpetual validity</strong> subject to continued compliance checks, risk-based on-site inspections, declaration filings, and timely payments of prescribed dues.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50 text-justify text-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Annual Continuation Requirements:</h3>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-2">
                      <li>Payment of annual continuation fees/charges on FoSCoS.</li>
                      <li>Periodic food activity declarations.</li>
                      <li>Ensuring no category or output capacity limit breaches.</li>
                      <li>Ensuring active hygiene ratings matches.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 11. MODIFICATION & RETURNS */}
            {activeTab === 'modification-returns' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileSignature className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">FSSAI Modifications & Annual Returns</h2>
                </div>

                <div className="space-y-4 text-xs font-normal">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50 text-justify">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">1. When Modification is Mandatory:</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      If business components undergo transition, you must apply for online modifications within 30 days. Triggers include:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700">
                      <li>Change in the food brand or corporate name.</li>
                      <li>Relocating preparation warehouses/kitchens.</li>
                      <li>Transitioning scales (e.g., transitioning Basic model into State License due to turnover growth).</li>
                      <li>Adding new food categories or customized products to your list.</li>
                    </ul>
                  </div>

                  <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50 text-justify">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">2. Mandatory Annual Returns</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Food manufacturers, processors, and importers must file structured annual returns to disclose final F&B quantity throughputs. Delayed return filings can draw penalty charges.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 12. LABELLING-HYGIENE */}
            {activeTab === 'labelling-hygiene' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileSpreadsheet className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Label Mandates & On-Site Hygiene Standards</h2>
                </div>

                <div className="space-y-4 font-normal text-xs text-justify">
                  <div className="p-5 border border-slate-150 rounded-2xl bg-white shadow-xs">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">FSSAI Packaging Label Mandates</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Packaged foods must display the following items:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-semibold text-[11px]">
                      <li>14-digit FSSAI number & official logo</li>
                      <li>Common generic name of the food item</li>
                      <li>Compulsory Ingredient listing hierarchy</li>
                      <li>Veg or Non-Veg symbol tags</li>
                      <li>Complete Nutritional Facts breakdown panel</li>
                      <li>Best Before or Expiry dates</li>
                      <li>Batch, lot, or consignment number code</li>
                      <li>Country of origin and importer details (if imported)</li>
                    </div>
                  </div>

                  <div className="p-5 border border-[#3150A0]/10 rounded-2xl bg-[#3150A0]/2">
                    <h3 className="font-bold text-sm text-[#3150A0] mb-2">Clean Hygiene standards: Schedule 4 Checks</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Food licenses are tied to strict sanitary habits. Ensure your workspace complies with clean waste disposal, pest control records, clean water checks, staff medical health certifications, and temperature monitoring logs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 13. DIFFERENCES */}
            {activeTab === 'differences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">FSSAI compared with other registrations</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Understand the regulatory boundaries of food safety and other business registrations:
                </p>

                <div className="space-y-4 text-xs font-normal text-justify">
                  {[
                    { title: "FSSAI License / Registration", type: "Food Safety Protection", desc: "Regulates physical and chemical purity of edible items, hygiene bounds of kitchens, labelling compliance, and safety parameters." },
                    { title: "Municipal Trade License", type: "Civic Zone Permission", desc: "Issued by municipal corporations permitting the general operation of the commercial shop at that spot, ensuring public safety and waste treatment zones." },
                    { title: "Shop & Establishment Registration", type: "Labor welfare tracking", desc: "State labor department registry monitoring worker welfare, leave, salary cycles, working shifts, and display calendars." },
                    { title: "GST Registration", type: "Indirect Tax compliance", desc: "Central taxation registry to collect and clear indirect tax liabilities based on transaction turnovers over threshold guidelines." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-150 rounded-2xl bg-slate-50/50">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-sm text-[#3150A0]">{item.title}</h3>
                        <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full">{item.type}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 14. MISTAKES-REJECTION */}
            {activeTab === 'mistakes-rejection' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <XCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3155A0] text-slate-800">Common Rejection Reasons</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  FSSAI inspectors maintain low error tolerances. Avoid these common application mistakes:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4 text-justify">
                  {[
                    "Incorrect Kind of Business: Selecting retailer instead of manufacturer, triggering inspection queries.",
                    "Deficient Address Proofs: Uploading expired rental agreements or utility bills with spelling errors.",
                    "Layout Blueprint Deficits: Submitting manufacturing floor plans that miss clear pathway divisions.",
                    "Water Analysis Failures: Submitting reports lacking chemical and microbiological test columns.",
                    "Inaccurate Product Mapping: Misaligning packaged food items with official FSSAI index categories."
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 p-3 bg-red-50/15 border border-red-101 rounded-xl">
                      <span className="text-red-500 font-bold shrink-0 text-sm mt-0.5">!</span>
                      <p className="text-xs text-slate-650 leading-relaxed">{item}</p>
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

            {/* 16. WHY MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for FSSAI?</h2>
                </div>
                
                <p className="text-slate-705 leading-relaxed text-justify animate-slideDown">
                  Our professional food safety compliance crew processes your FoSCoS portal submissions with clinical precision. We screen state eligibility norms, map correct Kind-of-Business sectors, design FSMS plans, draft layouts, coordinate water analysis, handle officer queries, and track renewals so your food operation operates securely without interruption.
                </p>

                <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our Comprehensive F&B Compliance Support:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-705">
                    {[
                      "Accurate category checking matches (Basic, State, Central)",
                      "Precise Kind-of-Business (KoB) profile selection",
                      "Professional FSMS plan drafting assistance",
                      "Coordinating NABL water analysis reports and testing lists",
                      "FoSCos platform submission and documentation mapping",
                      "Hands-on query handling with licensing inspectors",
                      "Unified advisory for full food safety protocols"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#3150A0] text-white p-8 rounded-3xl mt-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Secure Your Official FSSAI License Today</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed text-justify md:text-center">
                    Ready to trade legally on delivery portals, pass food safety audits, and print your FSSAI 14-digit pride on every product label? Let MakeEazy handle your FSSAI compliance!
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer text-sm">
                    Get Your FSSAI License
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to secure your official food safety FSSAI license or registration?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for FSSAI License with MakeEazy</span>
                <Utensils className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
