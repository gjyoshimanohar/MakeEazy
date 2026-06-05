import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calculator, 
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
  Briefcase,
  AlertTriangle,
  Percent,
  Coins
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is PT', icon: Info },
  { id: 'ptrc-ptec', name: 'PTRC vs PTEC', icon: Scale },
  { id: 'why-required', name: 'Why Required & Rates', icon: Lock },
  { id: 'applicability', name: 'State Applicability', icon: Globe },
  { id: 'who-needs-it', name: 'Who Needs PT Registration?', icon: UserCheck },
  { id: 'roles', name: 'Employers & Employees Roles', icon: Briefcase },
  { id: 'eligibility', name: 'Registration Eligibility', icon: Award },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: '10-Step Online Process', icon: TrendingUp },
  { id: 'exemptions', name: 'Exemptions & Salaries', icon: Coins },
  { id: 'consequences', name: 'Penalties & Consequences', icon: AlertTriangle },
  { id: 'differences', name: 'PT vs IT, GST, PF, ESI', icon: Scale },
  { id: 'faqs', name: 'Frequently Asked Questions', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

export default function ProfessionalTaxPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Professional Tax Registration?",
      a: "Professional Tax Registration is the process of registering with the state tax department or local authority for professional tax compliance."
    },
    {
      q: "Who needs Professional Tax Registration?",
      a: "Employers, businesses, professionals, self-employed persons, companies, LLPs, firms, and other persons may need registration if professional tax is applicable in their state."
    },
    {
      q: "Is Professional Tax applicable in all states?",
      a: "No. Professional Tax is not applicable in all Indian states. It applies only in states and union territories that have professional tax laws."
    },
    {
      q: "Is Professional Tax Registration mandatory?",
      a: "Yes, it is mandatory where the applicable state law requires the employer, business, or professional to register or enrol."
    },
    {
      q: "What is PTRC?",
      a: "PTRC generally refers to Professional Tax Registration Certificate. It is commonly required by employers for deducting professional tax from employee salaries and depositing it with the government."
    },
    {
      q: "What is PTEC?",
      a: "PTEC generally refers to Professional Tax Enrolment Certificate. It is commonly required by professionals, business owners, companies, firms, LLPs, and self-employed persons for paying their own professional tax liability."
    },
    {
      q: "Can a business require both PTRC and PTEC?",
      a: "Yes. In some states, a business may require both PTRC and PTEC depending on whether it has employees and whether the entity itself is liable to pay professional tax."
    },
    {
      q: "What is the maximum Professional Tax payable?",
      a: "Professional Tax is generally capped at ₹2,500 per person per year in any state."
    },
    {
      q: "Who deducts Professional Tax from salary?",
      a: "The employer deducts professional tax from the employee's salary and deposits it with the state government, where applicable."
    },
    {
      q: "What documents are required for Professional Tax Registration?",
      a: "Common documents include PAN, business registration proof, address proof, bank details, authorised signatory details, employee details, salary details, and state-specific documents."
    },
    {
      q: "What happens after Professional Tax Registration?",
      a: "After registration, the employer or applicant must deduct, pay, and file professional tax returns as per the applicable state rules and due dates."
    },
    {
      q: "Is Professional Tax the same as Income Tax?",
      a: "No. Professional Tax is a state-level tax, while Income Tax is a central tax levied by the Central Government of India on total income."
    },
    {
      q: "Is Professional Tax Registration the same as GST Registration?",
      a: "No. Professional Tax Registration and GST Registration are entirely different compliances. GST is an indirect tax on the supply of goods and services."
    },
    {
      q: "Is Professional Tax Registration required for freelancers?",
      a: "Freelancers and self-employed professionals may need professional tax enrolment (PTEC) if they operate in a state where professional tax applies and fall under the relevant category."
    },
    {
      q: "Can MakeEazy help with Professional Tax Registration?",
      a: "Yes. MakeEazy provides complete assistance for Professional Tax Registration, including applicability check, document preparation, online filing support, PTRC/PTEC guidance, payment guidance, and return filing support."
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
                <Percent className="w-3.5 h-3.5" />
                State Government Compliance
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Professional Tax Registration
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Quickly register your business or professional practice for Professional Tax. Navigate PTRC & PTEC requirements seamlessly in all applicable Indian states and maintain legal payroll compliance.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Calculator className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">Professional Tax Overview</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Professional Tax Registration is an important state-level statutory registration for employers, businesses, professionals, and self-employed persons in states where Professional Tax is applicable.
                </p>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Professional Tax is a tax levied by state governments on income earned through salary, profession, trade, calling, or employment. It applies differently from state to state. In some states, employers are required to deduct professional tax from employees' salaries and deposit it with the government. In other cases, business owners, professionals, and self-employed persons may be required to pay professional tax directly.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl mt-6">
                  <h3 className="text-[#3150A0] font-bold text-lg mb-2">What is Professional Tax?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Professional Tax is a state-level tax imposed on persons earning income from salary, employment, profession, trade, calling, or business. Although the name includes the word "professional," it is not limited only to traditional professionals like doctors, lawyers, chartered accountants, or consultants. It can also apply to salaried employees, business owners, traders, contractors, companies, LLPs, and firms.
                  </p>
                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-2xl mt-4">
                  <h3 className="text-orange-950 font-bold text-lg mb-2">What is Professional Tax Registration?</h3>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                    Professional Tax Registration is the process of registering a business, employer, or professional with the concerned state tax department or local authority for professional tax compliance. After registration, the applicant receives a Professional Tax Registration Certificate, enrolment number, or registration number, depending on state guidelines.
                  </p>
                  <p className="text-xs text-slate-650 font-bold">
                    Professional Tax Registration allows the registered person or employer to:
                  </p>
                  <ul className="list-disc pl-4 mt-2 text-xs text-slate-705 space-y-1">
                    <li>Deduct professional tax from employee salaries, where applicable</li>
                    <li>Pay professional tax securely online to the state government</li>
                    <li>File periodic professional tax returns seamlessly</li>
                    <li>Avoid heavy compliance penalties and legal action</li>
                    <li>Deliver the certificates required for corporate tenders, audits, and business contracts</li>
                  </ul>
                </div>


              </div>
            )}

            {/* 2. PTRC VS PTEC */}
            {activeTab === 'ptrc-ptec' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Difference Between PTRC and PTEC</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Professional Tax compliance generally involves two types of registration certifications, which vary entirely depending on the role of the applicant:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  
                  {/* PTRC */}
                  <div className="bg-orange-50/15 border border-orange-200/50 p-6 rounded-2xl space-y-4">
                    <h3 className="font-bold text-base text-orange-950 flex items-center gap-2 border-b border-orange-100 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      PTRC (Registration Certificate)
                    </h3>
                    <p className="text-xs text-slate-600 text-justify">
                      PTRC is generally taken by <strong>employers</strong> who employ staff and are responsible for deducting professional tax from employee salaries and depositing it with the state government.
                    </p>
                    <div className="text-xs text-slate-700 bg-white/80 p-3 rounded-xl border border-slate-150">
                      <strong>When required:</strong> When a business has employees whose monthly gross salary falls within the taxable professional tax slab of that state.
                    </div>
                  </div>

                  {/* PTEC */}
                  <div className="bg-blue-50/10 border border-blue-200/50 p-6 rounded-2xl space-y-4">
                    <h3 className="font-bold text-base text-[#3150A0] flex items-center gap-2 border-b border-blue-100 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      PTEC (Enrolment Certificate)
                    </h3>
                    <p className="text-xs text-slate-600 text-justify">
                      PTEC is generally taken by <strong>business owners, professionals, companies, firms, LLPs, and self-employed persons</strong> who are liable to pay professional tax for themselves (to practice as a legal entity).
                    </p>
                    <div className="text-xs text-slate-750 bg-white/80 p-3 rounded-xl border border-slate-150">
                      <strong>When required:</strong> Mandatory for practicing professionals or corporations to exist and trade, irrespective of whether they have employees or not.
                    </div>
                  </div>

                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-650 leading-relaxed mt-4">
                  💡 <strong>Important Note:</strong> A business may need <strong>BOTH</strong> PTRC (for employee salary deductions) and PTEC (for its own corporate entity tax liability) depending entirely on state regulations.
                </div>
              </div>
            )}

            {/* 3. WHY REQUIRED & RATES */}
            {activeTab === 'why-required' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Lock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why PT is Required & Tax Rates</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify font-medium text-sm">
                  Professional Tax Registration is required to comply with the professional tax law of the state where a business operates or has an establishment.
                </p>

                <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-[#3150A0] mb-4">How Professional Tax is Charged:</h3>
                  <p className="text-xs text-slate-650 leading-relaxed text-justify mb-4">
                    Professional Tax rates are decided by individual state governments. Therefore, the specific tax slabs, payment frequencies (monthly, half-yearly, or annual), and due dates differ across states.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>State-driven slabs:</strong> Calculators are mapped according to salary slabs or professional brackets.</span>
                    </div>
                    <div className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Maximum Cap:</strong> Under Article 276 of the Indian Constitution, the maximum professional tax is strictly capped at <strong>₹2,500 per person per year</strong>.</span>
                    </div>
                    <div className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>State specific:</strong> Businesses operating in multiple states must obtain separate professional tax registrations in each applicable state.</span>
                    </div>
                    <div className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Compulsory for Startups:</strong> Essential for maintaining audit compliance, payroll clearance audits, and commercial deal filings.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. APPLICABILITY */}
            {activeTab === 'applicability' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Globe className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Professional Tax Applicability in India</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Professional Tax is not applicable in every Indian state. It is levied only by states and union territories that have enacted specialized professional tax laws.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="border border-slate-150 p-5 rounded-2xl bg-orange-50/10">
                    <h3 className="font-bold text-orange-950 text-sm mb-3">States Levying Professional Tax:</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                      {[
                        "Maharashtra",
                        "Karnataka",
                        "West Bengal",
                        "Tamil Nadu",
                        "Andhra Pradesh",
                        "Telangana",
                        "Gujarat",
                        "Madhya Pradesh",
                        "Kerala",
                        "Odisha",
                        "Assam",
                        "Goa",
                        "Sikkim",
                        "Jharkhand",
                        "Bihar",
                        "Chhattisgarh"
                      ].map((state, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 p-1 bg-white border border-slate-100 rounded-lg">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                          <span>{state}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                      <h3 className="font-bold text-[#3150A0] text-sm mb-2">First Step Checklist:</h3>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify font-medium">
                        Before hiring remote staff, structuring payroll, or renting branch offices, check if professional tax is levied in that state so you can integrate the PTRC calculations on time.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50/25 border border-blue-100 rounded-xl text-xs text-slate-700 leading-relaxed">
                      ❌ <strong>Union Territories & Excluded States:</strong> Slabs are not configured in Delhi, Haryana, Uttar Pradesh, Rajasthan, or Punjab, meaning deductions are not compiled in those areas.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. WHO NEEDS IT */}
            {activeTab === 'who-needs-it' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <UserCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Needs Professional Tax Registration?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  The requirement to obtain Professional Tax Registration applies to various commercial entities, service practitioners, and employers depending on criteria and thresholds:
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-700 mt-4">
                  {[
                    "Employers (with salaried staff)",
                    "Private Limited & OPC Companies",
                    "Limited Liability Partnerships (LLPs)",
                    "Partnership & Proprietorship Firms",
                    "Independently Practicing Professionals",
                    "Shops & Commercial Establishments",
                    "Factories & Manufacturing Units",
                    "Contractors & Service Providers",
                    "Independently practicing Consultants",
                    "Freelancer practitioners",
                    "Corporate Board Directors & Partners",
                    "Branch Offices of Multi-State firms"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-[#3150A0] shrink-0" />
                      <span className="font-semibold text-xs leading-none">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. EMPLOYERS & EMPLOYEES ROLES */}
            {activeTab === 'roles' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Briefcase className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Responsibilities for Employers & Employees</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  
                  {/* For Employers */}
                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50 space-y-3">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
                      <Building className="w-4.5 h-4.5 text-orange-500" />
                      Professional Tax for Employers
                    </h3>
                    <p className="text-xs text-slate-500">Employers bear the primary statutory burden to deduct and pay professional tax on behalf of staff:</p>
                    <ul className="text-xs text-slate-650 space-y-2.5">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Obtain PTRC Registration number within 30 days of hiring staff.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Deduct the correct professional tax percentage from payroll salaries.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Deposit deducted taxes with the state treasury online.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>File monthly, quarterly, or annual PT returns.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Maintain clear salary sheets and deduction books for subsequent tax audits.</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Employees */}
                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50 space-y-3">
                    <h3 className="font-bold text-[#3150A0] text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
                      <UserCheck className="w-4.5 h-4.5 text-orange-500" />
                      Professional Tax for Employees
                    </h3>
                    <p className="text-xs text-slate-500">How professional tax impacts individual employment structures:</p>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify">
                      Employees are liable to pay professional tax if their salary exceeds the state threshold. However, salaried individuals do not pay this tax directly to the department.
                    </p>
                    <p className="text-xs text-slate-650 leading-relaxed text-justify">
                      Instead, the employer automatically deducts the required proportional amount each month, pays it directly, and lists the deduction on the employee's formal salary slip or payroll receipt.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* 7. ELIGIBILITY */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Registration Eligibility Rules</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  The criteria determining whether your business setup, shop, or practice requires a compulsory Professional Tax registration numbers depend heavily on:
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-3.5 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Any employer hiring salaried staffers</span>
                  </div>
                  <div className="flex items-center gap-2 p-3.5 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Employees whose monthly salary falls in the taxable slab</span>
                  </div>
                  <div className="flex items-center gap-2 p-3.5 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Professionals or self-employed individuals running independent offices</span>
                  </div>
                  <div className="flex items-center gap-2 p-3.5 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Incorporated companies, LLPs, or firms operating in applicable states</span>
                  </div>
                  <div className="flex items-center gap-2 p-3.5 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Branch locations or multi-outlets registered in multiple states</span>
                  </div>
                </div>
              </div>
            )}

            {/* 8. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for PT Registration</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  The documentation checklist varies across states and depends on your commercial constitution (Proprietor vs LLP vs Pvt Ltd):
                </p>

                <div className="space-y-4 text-xs">
                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Basic Business & Entity Logs</h3>
                    <ul className="space-y-2.5 text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>PAN Card of the business or individual applicant.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Certificate of Incorporation, Partnership Deed, or LLP Agreement.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Address proof of the business (Rent agreement, utility electricity bill, or ownership NOC).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Bank details (Cancelled cheque copy, active passbook statement, etc.).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Active GSTIN Registration certificate, if available.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-150 p-5 rounded-2xl bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] text-sm mb-3">Authorised Persons & Employees Logs</h3>
                    <ul className="space-y-2.5 text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>KYC papers (PAN, Aadhaar) of Proprietor, Directors, or designated Partners.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Lists of all active employees showing date of joining and gross monthly salary figures.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Board Resolution or Authorization Letters for official signatories, if applicable.</span>
                      </li>
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">10-Step Online PT Process</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Professional Tax Registration is completed online through the respective state's commercial tax portal or GST-integrated labour platforms:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6 mt-6">
                  {[
                    { title: "Step 1: Check State Applicability", desc: "Confirm whether Professional Tax is levied in the state where your business operates or where employees are physically located." },
                    { title: "Step 2: Identify Type of Registration", desc: "Evaluate whether you require PTRC (for employee deductions) or PTEC (for self-payment eligibility) or BOTH." },
                    { title: "Step 3: Collect Documents", desc: "Gather PAN, GSTIN copies, bank statements, office address NOC, and active employee salary listings." },
                    { title: "Step 4: Design a Portal Login", desc: "Build a secure user profile login on the commercial/professional tax department platform of that state." },
                    { title: "Step 5: Fill Out Form TM-A/PT Form", desc: "Enter business category, date of commencement, employee count, bank branches, and authorized signatory details." },
                    { title: "Step 6: Upload Scans", desc: "Upload PAN, address proofs, partner KYC checks, and corporate deeds in the required formatting sizes." },
                    { title: "Step 7: Verification", desc: "Review entered form records. Perform verification checks using OTP portals, Digital Signatures, or e-signs." },
                    { title: "Step 8: Department Review", desc: "Departmental officers inspect the online sheets and verify documents against master company datasets." },
                    { title: "Step 9: Certificate Generation", desc: "Upon approval, the state tax department issues the PT Registration Certificate along with your Enrolment Number." },
                    { title: "Step 10: Start Compliances", desc: "Integrate professional tax calculations into your salary accounting system, deduct taxes, and start filing return timelines." }
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

            {/* 10. EXEMPTIONS */}
            {activeTab === 'exemptions' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Coins className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Exemptions in Professional Tax</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Specific individuals, professional groups, or low-salary categories may are exempted from paying Professional Tax. Although exemptions are state-specific, standard categories generally exempted include:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-[#3150A0] shrink-0" />
                    <span>Individuals with physical disabilities</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-[#3150A0] shrink-0" />
                    <span>Senior citizens matching age limits</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-[#3150A0] shrink-0" />
                    <span>Active members of the Armed Forces</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-[#3150A0] shrink-0" />
                    <span>Parents/guardians of children with mental or physical disabilities</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                    <Check className="w-4 h-4 text-[#3150A0] shrink-0" />
                    <span>Individuals with monthly earnings below state-exempted slabs</span>
                  </div>
                </div>

                <div className="p-4 bg-orange-50/30 border border-orange-100 rounded-2xl text-xs text-slate-650 leading-relaxed">
                  ⚠️ <strong>Action Checklist:</strong> Check the exact employee salary thresholds and qualified professional exemptions under your state's active Professional Tax rules before completing exclusions in your payroll ledger.
                </div>
              </div>
            )}

            {/* 11. PENALTIES */}
            {activeTab === 'consequences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <AlertTriangle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Penalties & Consequences of Non-Compliance</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify font-medium text-sm">
                  If an employer, business, or professional who is liable to pay fails to obtain registration or lapses payment timelines, individual states enforce high penalties:
                </p>

                <div className="space-y-3 mt-4 text-xs">
                  <div className="p-4 border border-slate-150 rounded-xl bg-orange-50/10 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-orange-950">Penalty for Non-Registration:</h4>
                      <p className="text-slate-650 mt-1">Sustained practice without seeking PTRC/PTEC within statutory periods issues flat fines (typically ₹20 per day or up to ₹2,500 depending on state limits).</p>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-xl bg-orange-50/10 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-orange-950">Interest on Delayed Payments:</h4>
                      <p className="text-slate-650 mt-1">Lapses of timelines for depositing deducted taxes are subject to high interest charges spanning from 1.25% up to 2% per month of delay.</p>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-xl bg-orange-50/10 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-orange-950">Late Fees on Return Filings:</h4>
                      <p className="text-slate-650 mt-1">Lapses in filing return submissions issue daily late fees ranging from ₹100 up to ₹1,000 depending on specific regional guidelines.</p>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-150 rounded-xl bg-orange-50/10 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-orange-950">Disqualification from Tender Filings:</h4>
                      <p className="text-slate-650 mt-1">Failure to show valid, active PTRC/PTEC compliance receipts blocks business setups from clearing vendor auditing, receiving institutional bank credits, or accessing government tender bids.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 12. DIFFERENCES (PT vs IT, GST, PF, ESI) */}
            {activeTab === 'differences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Difference Between PT and Other Compliances</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  It's important to differentiate state professional tax structures from federal taxes or social security compliance modules:
                </p>

                <div className="space-y-4 text-xs">
                  {[
                    { title: "Professional Tax (PT)", Role: "State Tax", desc: "A state-level tax levied on employment, salary brackets, or independent profession, capped Constitutionally at ₹2,500 per year per person." },
                    { title: "Income Tax (IT)", Role: "Central Tax", desc: "A progressive central tax levied by the Income Tax Department of India on total income, salary, capital gains, corporate net metrics, etc." },
                    { title: "GST", Role: "Central & State Indirect Tax", desc: "An indirect transaction tax levied on supply, sales, and manufacturing of goods and services based on business turnover." },
                    { title: "PF Registration", Role: "Provident Fund Social Security", desc: "Administered by the federal EPFO to provide safety retirements, pension coverage, and savings benefits for corporate salaried staff." },
                    { title: "ESI Registration", Role: "Employee Medical Social Security", desc: "Administered by the ESIC to supply medical care benefits and financial security nets to employees earning below specialized limits." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-150 rounded-2xl bg-slate-50/50">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-sm text-[#3150A0]">{item.title}</h3>
                        <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full">{item.Role}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">{item.desc}</p>
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
                        className="bg-slate-55 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex justify-between items-center p-5 text-left font-bold text-sm md:text-base text-slate-850 hover:text-orange-500 focus:outline-none transition-colors"
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for Professional Tax Registration?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Our professional team guarantees a seamless, hassle-free online experience. We analyze your requirements, identify correct PTRC vs PTEC configurations based on state rules, verify employee lists, prepare registration documents, and ensure total legal compliance at optimal costs.
                </p>

                <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our End-to-End Compliance Advantage:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                    {[
                      "Complete state applicability and rate checks",
                      "PTRC & PTEC double-compliance guidance checks",
                      "Correct employee salary slab audits design",
                      "Preparation of document checklists and verification",
                      "Secure online applications handling and filing support",
                      "Direct help resolving department portal errors",
                      "Advisory on return filings calendars and payment dates"
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
                  <h3 className="text-2xl font-bold mb-3 font-display">Get Your Professional Tax Code Today</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                    Ready to complete state-wise compliant payroll operations and secure company audits with active Professional Tax credits? Do your PTRC/PTEC with India's most trusted corporate consulting team at MakeEazy today!
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
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to register state professional tax, PTRC, or PTEC smoothly?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for Professional Tax Registration with MakeEazy</span>
                <Calculator className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
