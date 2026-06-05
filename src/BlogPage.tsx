import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ChevronRight, 
  Share2, 
  BookOpen, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Award,
  ShieldCheck,
  Scale
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  category: 'Startups & Companies' | 'Taxation & GST' | 'Licenses & Registrations' | 'Advisory & Growth';
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  gradient: string;
}

const CATEGORIES = [
  'All',
  'Startups & Companies',
  'Taxation & GST',
  'Licenses & Registrations',
  'Advisory & Growth'
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const BLOG_POSTS: BlogPost[] = [
    {
      id: 'company-structure-guide',
      title: 'How to Choose the Right Company Structure in India: Pointers for Founders',
      excerpt: 'Compare Private Limited, LLP, One Person Company, Partnership, and Sole Proprietorship. Decide based on liability, capital, and compliance.',
      category: 'Startups & Companies',
      readTime: '6 min read',
      date: 'June 4, 2026',
      author: 'CA Rajesh Kumar, Senior Corporate Advisor',
      tags: ['Startup Registered', 'Pvt Ltd vs LLP', 'Business Advice'],
      gradient: 'from-[#3150A0] to-blue-600',
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base">
          <p>
            Launching a new business in India is an exciting journey, but one of the absolute first and most foundational decisions you must make as a founder is selecting the right legal business structure. This choice impacts everything—from your registration fees and tax rates to your personal liability, ROC compliances, and ability to raise external venture capital.
          </p>
          
          <h3 className="text-xl font-bold text-[#3150A0] mt-6 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[#3150A0] text-xs font-bold">1</span>
            Understating the Main Options in India
          </h3>
          <p>
            The Indian Business ecosystem recognises several distinct business structures. Let's compare the five most popular options:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 uppercase text-xs border-b border-slate-200 font-bold">
                <tr>
                  <th className="px-4 py-3">Structure</th>
                  <th className="px-4 py-3">Reg. Cost (Approx)</th>
                  <th className="px-4 py-3">Liability</th>
                  <th className="px-4 py-3">ROC Compliance</th>
                  <th className="px-4 py-3">Funding Suitability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Private Limited (Pvt Ltd)</td>
                  <td className="px-4 py-3.5 font-mono">₹4,999 - ₹8,500</td>
                  <td className="px-4 py-3.5">Limited to Share Capital</td>
                  <td className="px-4 py-3.5 text-red-600 font-medium">High (Annual Audit Req.)</td>
                  <td className="px-4 py-3.5 text-emerald-600 font-semibold">Excellent (VC Eligible)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Limited Liability Partnership (LLP)</td>
                  <td className="px-4 py-3.5 font-mono">₹3,999 - ₹5,500</td>
                  <td className="px-4 py-3.5">Limited to Contribution</td>
                  <td className="px-4 py-3.5 text-orange-600 font-medium">Medium (Audit only at high limits)</td>
                  <td className="px-4 py-3.5">Moderate (Not for VC stocks)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">One Person Company (OPC)</td>
                  <td className="px-4 py-3.5 font-mono">₹4,500 - ₹6,000</td>
                  <td className="px-4 py-3.5">Limited to Single Share</td>
                  <td className="px-4 py-3.5 text-orange-600 font-medium">Medium-High</td>
                  <td className="px-4 py-3.5">Low (Single Owner)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Partnership Firm</td>
                  <td className="px-4 py-3.5 font-mono">₹2,499 - ₹3,500</td>
                  <td className="px-4 py-3.5 text-red-500">Unlimited Liability</td>
                  <td className="px-4 py-3.5 text-emerald-600">Low (No ROC)</td>
                  <td className="px-4 py-3.5">Low</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Sole Proprietorship</td>
                  <td className="px-4 py-3.5 font-mono">₹999 - ₹1,999</td>
                  <td className="px-4 py-3.5 text-red-500">Unlimited Liability</td>
                  <td className="px-4 py-3.5 text-emerald-600">Minimal / None</td>
                  <td className="px-4 py-3.5">Not Suitable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[#3150A0] text-xs font-bold">2</span>
            When to Choose a Private Limited Company
          </h3>
          <p>
            If your goal is to seek equity funding from Angel Investors or VC funds, a **Private Limited Company** is practically mandatory. Venture capitalists do not invest in partnerships or LLPs because they cannot easily purchase shares or issue equity stock options (ESOPs) to employees. 
          </p>
          <div className="bg-blue-50 border-l-4 border-[#3150A0] p-4 rounded-r-xl my-4 text-sm font-medium text-blue-900">
            <strong>Key Benefit:</strong> Shareholders' personal properties are completely safe. In the rare event of liquidation, the liabilities are capped exactly to the nominal value of shares held.
          </div>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[#3150A0] text-xs font-bold">3</span>
            When to Choose an LLP (Limited Liability Partnership)
          </h3>
          <p>
            For services providers, consulting firms, families launching small traditional enterprises, or lifestyle companies that plan on growing organically through revenue instead of debt or institutional capital, the **LLP** acts as a brilliant hybrid structure. It offers limited liability but maintains dramatically lower annual maintenance and ROC filing burdens.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Reduced Audit Cost:</strong> Audit is mandatory only if partner contributions exceed ₹25 lakh or your annual turnover exceeds ₹40 lakh.</li>
            <li><strong>Freedom of operations:</strong> Governance rules are laid out in a custom LLP Deed rather than strict Company Law provisions.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">How MakeEazy Can Simplify This Choice</h3>
          <p>
            At MakeEazy, our experts analyse your target budget, liability threshold, employee stock plans, and long-term funding needs to register the perfect entity. We take care of company name approval, digital signatures (DSC), Director Identification Numbers (DIN), drafting MoA & AoA, and obtaining PAN/TAN automatically—all start-to-finish without you having to step outside.
          </p>
        </div>
      )
    },
    {
      id: 'gst-returns-beginner-guide',
      title: 'Mastering GST Returns: A Beginner-Friendly Filing Guide & Late Fee Rules',
      excerpt: 'Struggling with GSTR-1, GSTR-3B, or GSTR-4? Learn about the due dates, dynamic calculations, and tricks to avoid ₹50 per day late fee penalty.',
      category: 'Taxation & GST',
      readTime: '5 min read',
      date: 'May 28, 2026',
      author: 'CA Ankita Shinde, Senior Tax Consultant',
      tags: ['GST Return', 'Tax Savings', 'Avoid Late Fee'],
      gradient: 'from-orange-500 to-amber-600',
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base">
          <p>
            Goods and Services Tax (GST) has consolidated the Indian indirect tax regime under one single tax logic. However, for a newly registered small business, operating the GST portal, allocating Input Tax Credits (ITC), matching buying invoices, and filing GSTRs accurately can often feel intimidating. Let's break down the rules cleanly.
          </p>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">1. Crucial Monthly & Quarterly Returns Explained</h3>
          <p>
            Depending on your scheme choice (regular or composition), you need to file these core GST returns:
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="border border-slate-100 p-4 rounded-xl bg-slate-50">
              <h4 className="font-bold text-[#3150A0] mb-2">GSTR-1 (Outward Supplies)</h4>
              <p className="text-sm text-slate-600">
                This contains details of all your sales invoices, credit notes, and debit notes. Filed monthly (by the 11th) or quarterly (QRMP scheme by the 13th of succeeding month).
              </p>
            </div>
            <div className="border border-slate-100 p-4 rounded-xl bg-slate-50">
              <h4 className="font-bold text-[#3150A0] mb-2">GSTR-3B (Summary & Tax Payment)</h4>
              <p className="text-sm text-slate-600">
                This is where you match your sales GSTR-1 against your buying purchase auto-drafted ITC (GSTR-2B) to declare and pay the net tax liability. Filed monthly (by 20th-24th).
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">2. The Price of Delay: GST Return Late Fees</h3>
          <p>
            Failing to file your GST returns within the official target timelines automatically triggers penalty charges calculated on a daily basis by the online portal. Here is how they apply:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Regular Sales Return:</strong> Late fee is ₹50 per day (₹25 CGST + ₹25 SGST) of delay behind the due date.</li>
            <li><strong>Nil Filing Days:</strong> Even if you had absolutely zero business sales or purchases, you must file a "Nil" return. The late fee is capped at ₹20 per day (₹10 CGST + ₹10 SGST).</li>
            <li><strong>Maximum Caps:</strong> The overall penalty capacity is limited depending on corporate turnover ranges, capping at ₹1,000 for zero filings to ₹5,000 per GSTR return for regular businesses.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">3. Simple Tips to Streamline GST Compliance</h3>
          <p>
            To keep your business health high and audits smooth, make sure you practice these basic rules:
          </p>
          <ul className="list-decimal pl-6 space-y-2 text-slate-600">
            <li><strong>Reconcile Purchases Early:</strong> Regularly run buying books logs against your digital GSTR-2B form to check if suppliers have filed their tax so you do not lose ITC.</li>
            <li><strong>E-Invoicing Applicability:</strong> If your annual turnover exceeds ₹5 crore, ensure your billing software integrates digital B2B E-invoicing schema directly.</li>
            <li><strong>Leverage Late Fee Calculators:</strong> Before executing backlogged GST returns, use our free GST Late Fee Calculator under the Calculators hub to determine absolute liability accurately!</li>
          </ul>

          <p className="text-sm bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl text-orange-950">
            <strong>Pro Tip:</strong> Avoid manual errors. By subscribing to MakeEazy's Dedicated GST Package starting from ₹1,499 per month, local CA agents handle invoice reconciliations, calculate accurate CGST/SGST/IGST balance sheets, and handle filings directly so you stay fully protected and compliant.
          </p>
        </div>
      )
    },
    {
      id: 'fssai-license-rules',
      title: 'FSSAI License Rules: Must-Have Guide for Cloud Kitchens, Bakers, and Food Startups',
      excerpt: 'Operating a home kitchen, selling pickles via WhatsApp, or listing on Zomato? Know when you need Basic, State, or Central FSSAI registration to avoid heavy fines.',
      category: 'Licenses & Registrations',
      readTime: '4 min read',
      date: 'May 15, 2026',
      author: 'CA Meera Shah, Registrar of Licenses',
      tags: ['FSSAI License', 'Home Kitchens', 'Online Registrations'],
      gradient: 'from-emerald-500 to-teal-600',
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base">
          <p>
            Whether you operate an expansive multi-location restaurant, a trending cloud kitchen, or a home baking boutique marketing direct to local consumers over Instagram, food safety compliance is mandatory in India. Operating any consumer food business without registering with the Food Safety and Standards Authority of India (FSSAI) is completely illegal and carries severe consequences.
          </p>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">1. Determine Your FSSAI Category</h3>
          <p>
            FSSAI operates on a tiered structure corresponding directly to your enterprise's annual revenue and handling capacity:
          </p>
          <div className="space-y-4 my-4">
            <div className="border border-slate-100 p-4 rounded-xl bg-amber-50/55">
              <h4 className="font-bold text-[#3150A0]">Basic FSSAI Registration</h4>
              <p className="text-sm text-slate-600 mt-1">
                For micro-enterprises, small vendors, or home chefs with annual turnovers under <strong>₹12 lakh</strong>. Ideal for Instagram cookie boutiques, cloud kitchens starting out, and food stalls. Cost is minimal, starting around ₹100 per year in government fees.
              </p>
            </div>
            <div className="border border-slate-100 p-4 rounded-xl bg-orange-50/50">
              <h4 className="font-bold text-[#3150A0]">State FSSAI License</h4>
              <p className="text-sm text-slate-600 mt-1">
                For medium-sized hotels, wholesale distributors, caterers, and food creators with annual turnovers between <strong>₹12 lakh and ₹20 crore</strong>. Government fees range from ₹2,000 to ₹5,000 per year.
              </p>
            </div>
            <div className="border border-slate-100 p-4 rounded-xl bg-blue-50/50">
              <h4 className="font-bold text-[#3150A0]">Central FSSAI License</h4>
              <p className="text-sm text-slate-600 mt-1">
                For imports/exports of food, e-commerce giants (Swiggy, Zomato, big baskets), large manufacturing plants, and active businesses with turnovers exceeding <strong>₹20 crore</strong>. Government fee is ₹7,500/year.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">2. Mandatory Requirements for Zomato & Swiggy Integration</h3>
          <p>
            Planning to expand your customer base by registering with food delivery aggregators? You cannot create an active partner portal on Zomato or Swiggy without uploading an approved FSSAI number. Aggregators reject basic entries if the address coordinates or exact brand names mismatch.
          </p>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">3. Step-by-Step Documents Required for Application</h3>
          <p>
            To secure quick registration approvals, make sure you compile these legal artifacts cleanly:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Passport sized photo of the business proprietor or directors.</li>
            <li>Proof of business ownership address (Electricity Bill or Rent Agreement with NOC).</li>
            <li>Detailed food category lists and exact recipe categories.</li>
            <li>Layout plan of the kitchen area (required primarily for State and Central licenses).</li>
            <li>Water analysis test report of the source (for manufacturing & state levels).</li>
          </ul>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">Avoid Complex Portals - Partner with MakeEazy</h3>
          <p>
            Filing food registrations on the FoSCoS portal involves high technical specific terms like FoSTaC certifications, chemical details, and technical layouts. MakeEazy's food license specialists handle all application writing, match appropriate categories, resolve query clarifications, and deliver your final digital FSSAI registration certificate in record time, starting package from just ₹1,999!
          </p>
        </div>
      )
    },
    {
      id: 'startup-india-recognition-benefits',
      title: 'Startup India Recognition: Top 5 Tax Exemptions & Registration Checklist',
      excerpt: 'Explore how to get certified under Startup India Scheme (DPIIT) to claim 3 consecutive years of corporate tax exemptions and fast-track patents.',
      category: 'Startups & Companies',
      readTime: '5 min read',
      date: 'May 02, 2026',
      author: 'CA Satish Patel, Startup Incubation Specialist',
      tags: ['Startup India', 'DPIIT Recognition', 'Tax Exemptions'],
      gradient: 'from-blue-600 to-indigo-700',
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base">
          <p>
            The Department for Promotion of Industry and Internal Trade (DPIIT) launched the Startup India initiative to support innovation, generate sustainable employment, and make the regulatory journey easier for young businesses. Getting certified as an official "DPIIT Recognized Startup" unlocks massive legal and financial leverages that can save your startup lakhs in operating cash flow.
          </p>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">Top 5 Benefits of Startup India Scheme</h3>
          <p>
            Here are the primary advantages designed to protect and fuel early-stage tech, service, and product businesses:
          </p>
          
          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <Award className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">1. Tax Holiday (Section 80-IAC)</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Recognized startups can claim a total deduction of 100% of profits for any 3 consecutive assessment years out of their first 10 years of operations. This is a gamechanger for preserving early profitability.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-[#3150A0] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">2. Angel Tax Exemption (Section 56(2)(viib))</h4>
                <p className="text-sm text-slate-600 mt-1">
                  No tax on share premium investments received by startups from angel investors or venture pools up to a total aggregate of ₹25 crore, eliminating tedious valuation audits under the IT department.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <Scale className="w-6 h-6 text-[#3150A0] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">3. Fast Track & Discounted intellectual property</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Enjoy up to an 80% rebate on patent filing charges, and a 50% rebate on trademark registrations, along with access to government-appointed facilitators to fast-track application processing on priority.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <TrendingUp className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">4. Easy Public Procurement Norms</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Startups can quote for government contracts and tenders on GeM (Government e-Marketplace) with relaxed requirements for prior turnover, experience, and earnest money deposits (EMD).
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">Who is Eligible to Register?</h3>
          <p>
            Your business must qualify on these counts to receive the official certificate from DPIIT:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Structure:</strong> Registered as a Private Limited Company, Limited Liability Partnership, or Registered Partnership Firm.</li>
            <li><strong>Age of Firm:</strong> The date of incorporation must be less than 10 years ago.</li>
            <li><strong>Turnover Limits:</strong> Annual corporate turnover has not exceeded ₹100 crore in any previous fiscal year.</li>
            <li><strong>Scope:</strong> The entity must be working towards innovation, development, or improvement of products, processes, or services. A brand new split or reconstructed existing business registry is not eligible.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">MakeEazy Startup India Services</h3>
          <p>
            Applying to DPIIT requires a robust pitch deck, clear explanation of your innovative USP, and compliance-perfect incorporation documentations. MakeEazy's startup consultants guide you at every milestone—drafting innovation pitches, obtaining DPIIT numbers, and submitting direct application for Section 80-IAC tax exemption seamlessly.
          </p>
        </div>
      )
    },
    {
      id: 'tds-compliance-small-business',
      title: 'TDS (Tax Deducted at Source) Decoded for Business Owners: Lower Liability',
      excerpt: 'Understand Sections 194C, 194J, and 194I. Learn about quarterly TDS return filing, late fees of ₹200 per day under Section 234E, and interest penalties.',
      category: 'Taxation & GST',
      readTime: '5 min read',
      date: 'April 20, 2026',
      author: 'CA Rajesh Kumar, Senior Corporate Advisor',
      tags: ['TDS Deductions', 'Income Tax India', 'Late Fee Penalties'],
      gradient: 'from-red-500 to-rose-600',
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base">
          <p>
            Many small business owners assume direct tax compliance only involves filing annual income tax returns at the end of the year. However, if you are making corporate payments for rent, professional consultants, technology developers, or suppliers, you are legally mandated to deduct Tax Deducted at Source (TDS) and deposit it to the Central Government under strict timelines. Let's break down the rules.
          </p>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">1. Crucial TDS Sections Every Founder Must Know</h3>
          <p>
            Here are the highly used payment slabs and their corresponding deduction rates:
          </p>
          
          <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 uppercase text-xs border-b border-slate-200 font-bold">
                <tr>
                  <th className="px-4 py-3">Payment Category</th>
                  <th className="px-4 py-3">Section</th>
                  <th className="px-4 py-3">Deduction Threshold</th>
                  <th className="px-4 py-3">TDS Rate (With PAN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Contractor Services (MKT, Dev, Content)</td>
                  <td className="px-4 py-3.5 font-mono">Section 194C</td>
                  <td className="px-4 py-3.5">₹30,000 single / ₹1,00,000 yearly</td>
                  <td className="px-4 py-3.5">1% (Ind/HUF) or 2% (Corporate)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Professional/Technical Fees (CA, Legal, Tech Consulting)</td>
                  <td className="px-4 py-3.5 font-mono">Section 194J</td>
                  <td className="px-4 py-3.5">₹30,000 yearly</td>
                  <td className="px-4 py-3.5">10% (Technical) or 2% (Royalty/Professional)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Commercial Rent (Office space, warehouse)</td>
                  <td className="px-4 py-3.5 font-mono">Section 194I</td>
                  <td className="px-4 py-3.5">₹2,40,000 yearly</td>
                  <td className="px-4 py-3.5">10% (Plant/Building) or 2% (Machinery)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">Commission or Brokerage fee</td>
                  <td className="px-4 py-3.5 font-mono">Section 194H</td>
                  <td className="px-4 py-3.5">₹15,000 yearly</td>
                  <td className="px-4 py-3.5">5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">2. Non-Compliance is Expensive: Interest & Section 234E Fees</h3>
          <p>
            Missing payment or failing to submit TDS declarations on time triggers steep interest and late penalties designed by the Income Tax Department:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Delay in Deducting:</strong> If you forget to deduct TDS while paying the supplier, interest accrues at <strong>1% per month</strong> from the date tax was deductible to actual deduction.</li>
            <li><strong>Delay in Depositing:</strong> If you deducted tax but failed to deposit it within due ranges (generally 7th of succeeding month), interest accumulates at <strong>1.5% per month</strong>.</li>
            <li><strong>Section 234E late Filing Penalty:</strong> Failing to submit quarterly TDS statements (like Form 24Q or 26Q) triggers an automatic, non-negotiable penalty fee of <strong>₹200 per day</strong> of default, capped to the maximum total TDS amount of the return.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#3150A0] mt-6">3. Use TAN for TDS Filings</h3>
          <p>
            To legally deduct TDS and file returns, your business must have a Tax Deduction and Collection Account Number (TAN) issued by the tax department. Deducting without an official active TAN triggers a penalty of ₹10,000 under Section 272B.
          </p>

          <p className="text-sm bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl text-red-950 font-medium">
            <strong>Key takeaway:</strong> Let specialized professionals process your payroll and vendor allocations. MakeEazy's compliance solutions help founders apply for TAN, calculate dynamic monthly TDS deductions, deposit challans meticulously on the Traces website, and file quarterly reports starting from just ₹999 per quarter!
          </p>
        </div>
      )
    }
  ];

  const handleShare = (post: BlogPost) => {
    const url = `${window.location.origin}${window.location.pathname}#blogs`;
    navigator.clipboard.writeText(url);
    setShareFeedback(`Copied direct link for: "${post.title}"!`);
    setTimeout(() => setShareFeedback(null), 3000);
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen bg-slate-50 relative overflow-hidden" id="blogs-container">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Active Article View */}
        <AnimatePresence mode="wait">
          {activeArticle ? (
            <motion.div
              key="article-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 md:p-10 lg:p-12 mb-12"
              id={`article-${activeArticle.id}`}
            >
              <button
                onClick={() => {
                  setActiveArticle(null);
                  window.scrollTo(0, 0);
                }}
                className="group flex items-center gap-2 text-sm font-semibold text-[#3150A0] hover:text-orange-500 transition-colors mb-8 cursor-pointer"
                aria-label="Back to blogs listing"
                id="btn-back-to-blogs"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to All Articles
              </button>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6">
                <span className="px-3 py-1.5 rounded-full bg-slate-100 font-semibold text-slate-700 uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.date}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.readTime}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  By {activeArticle.author}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3150A0] leading-tight mb-8" id="article-title">
                {activeArticle.title}
              </h1>

              <div 
                className={`h-2.5 w-32 rounded-full bg-gradient-to-r ${activeArticle.gradient} mb-8`} 
              />

              {/* Main Content Area */}
              <div className="prose prose-slate max-w-none mb-12">
                {activeArticle.content}
              </div>

              {/* Tag Badges */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 items-center mb-8">
                <Tag className="w-4 h-4 text-slate-400 mr-2" />
                {activeArticle.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-semibold bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Interaction Panel */}
              <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 border border-slate-100/50 p-6 rounded-2xl gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Was this business guide helpful?</h4>
                  <p className="text-xs text-slate-500 mt-1">Share this deep dive directly with other founders or business owners!</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare(activeArticle)}
                    className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95 flex items-center gap-2 cursor-pointer"
                    aria-label="Copy direct link to article"
                    id="btn-share-article"
                  >
                    <Share2 className="w-4 h-4 text-slate-500" />
                    Share article
                  </button>
                  <a
                    href="https://wa.me/919992819995?text=Hello%21%20I%20visited%20your%20website%20and%20need%20expert%20assistance%20regarding%20corporate%20compliance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 hover:shadow active:scale-95"
                    aria-label="Discuss this compliance topic with our specialists on WhatsApp"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>

              {shareFeedback && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 text-[#3150A0] text-xs font-semibold rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {shareFeedback}
                </div>
              )}

              {/* Related Articles Footer */}
              <div className="mt-16 pt-12 border-t border-slate-100">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">Other Insights You Might Like</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {BLOG_POSTS.filter(p => p.id !== activeArticle.id).slice(0, 3).map((post) => (
                    <div 
                      key={post.id}
                      onClick={() => {
                        setActiveArticle(post);
                        window.scrollTo(0, 0);
                      }}
                      className="bg-slate-50 border border-slate-100 p-5 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">{post.category}</span>
                        <h4 className="font-bold text-slate-900 text-sm line-clamp-2 hover:text-[#3150A0] transition-colors">{post.title}</h4>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-4 pt-4 border-t border-slate-200/40">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1 font-semibold text-[#3150A0]">
                          Read 
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="listing-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Header Box */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-orange-850 text-xs font-semibold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                  MakeEazy Insights
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3150A0] tracking-tight leading-tight" id="blog-listing-title">
                  Business Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Simplified</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Deep-dive legal guides, financial advisories, ROC compliance update alerts, and Indian tax saving strategies curated to elevate your business operations.
                </p>
              </div>

              {/* Filters Panel */}
              <div className="bg-white rounded-2xl border border-slate-100 p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="blog-search-field"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, tags, sections..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-slate-800"
                    aria-label="Search blog items"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold cursor-pointer"
                      aria-label="Clear search input"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto items-center justify-start md:justify-end overflow-x-auto pb-1 md:pb-0">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      id={`cat-btn-${cat.toLowerCase().replace(/\s/g, '-')}`}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        selectedCategory === cat
                          ? 'bg-[#3150A0] text-white shadow-sm'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/50'
                      }`}
                      aria-label={`Filter posts by ${cat}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => {
                        setActiveArticle(post);
                        window.scrollTo(0, 0);
                      }}
                      className="group bg-white rounded-2xl border border-slate-150 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                      id={`post-card-${post.id}`}
                    >
                      {/* Decorative header */}
                      <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                      
                      {/* Content block */}
                      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#3150A0] uppercase tracking-wider text-[10px]">
                              {post.category}
                            </span>
                            <span className="flex items-center gap-1 text-slate-400 font-medium">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h2 className="font-display font-extrabold text-xl text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h2>

                          <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold font-display border border-slate-200">
                              {post.author.charAt(3)}
                            </div>
                            <div className="text-left">
                              <p className="text-[10px] font-bold text-slate-900 leading-none">{post.author.split(',')[0]}</p>
                              <p className="text-[9px] text-slate-400 leading-none mt-1">{post.date}</p>
                            </div>
                          </div>

                          <span className="text-xs font-bold text-orange-500 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                            Read Guide
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl shadow-sm space-y-4">
                  <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="font-display font-bold text-lg text-slate-950">No articles match your search</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Try adjusting filter tags or clearing "<strong>{searchQuery}</strong>" query to inspect general guides.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              )}

              {/* Newsletter Block */}
              <div className="bg-gradient-to-r from-blue-950 to-[#3150A0] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-[#3150A0]/20 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="max-w-xl text-left space-y-4">
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
                    Get Regulatory & Compliance Updates
                  </h2>
                  <p className="text-blue-100/90 text-sm leading-relaxed">
                    We digest complicated Indian tax alerts, ROC notification filings, corporate extensions, and safety rules into direct, human-friendly steps. Zero spam.
                  </p>
                </div>

                <div className="w-full lg:w-auto shrink-0">
                  {subscribed ? (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-emerald-500/20 border border-emerald-400 p-5 rounded-2xl flex items-center gap-3 text-emerald-100 text-sm font-semibold"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                      Awesome! You are locked in for MakeEazy insights.
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full sm:max-w-md">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Founder's Email Address"
                        className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-sm placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white focus:text-slate-900 transition-all text-white w-full sm:w-64"
                        aria-label="Newsletter email address"
                      />
                      <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-orange-400 shrink-0"
                        aria-label="Subscribe to newsletter"
                      >
                        Subscribe
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
