import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calculator as CalculatorIcon, Info, CheckCircle2, AlertTriangle, RefreshCw, Eye, EyeOff, ChevronDown, ChevronUp, ClipboardList, Check, FileText, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { jsPDF } from 'jspdf';

type AgeCategory = 'regular' | 'senior' | 'super_senior';

interface TooltipPayloadItem {
  color: string;
  payload: {
    name: string;
    'Total Tax': number;
    color: string;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-slate-200 p-2.5 rounded-lg shadow-md text-xs font-semibold text-slate-850">
        <p className="text-slate-500 mb-1">{data.name}</p>
        <p className="text-slate-800 font-bold">
          Total Tax: <span style={{ color: data.color }}>₹{data['Total Tax'].toLocaleString('en-IN')}</span>
        </p>
      </div>
    );
  }
  return null;
}

const salariedChecklist = [
  { id: 's_form16', title: 'Form 16 (Part A & B)', desc: 'Issued by your employer. Contains taxable salary breakdown and TDS deducted.' },
  { id: 's_form26as', title: 'Form 26AS & AIS / TIS', desc: 'Download from the Income Tax e-filing portal to match all TDS credits and high-value transactions.' },
  { id: 's_bank_stmt', title: 'Bank Account Statements', desc: 'Required to report savings bank and fixed deposit interest earnings correctly.' },
  { id: 's_rent_receipts', title: 'House Rent Receipts & Agreement', desc: 'Mandatory if claiming House Rent Allowance (HRA) deduction under the Old Tax Regime.' },
  { id: 's_investments', title: 'Chapter VI-A Investment Proofs', desc: 'ELSS, PPF, LIC, NPS, school tuition fees, or medical insurance receipts (needed under Old Regime).' },
  { id: 's_home_loan', title: 'Home Loan Interest Certificate', desc: 'Proof of housing loan interest paid under Section 24(b) for classical deductions.' },
  { id: 's_kyc', title: 'KYC: PAN and Aadhaar Card', desc: 'Verify information match across profiles and ensure Aadhaar-PAN linkage is up-to-date.' }
];

const selfEmployedChecklist = [
  { id: 'se_form26as', title: 'Form 26AS & AIS / TIS', desc: 'Download from e-filing portal to verify TDS entries, freelance earnings, or contract receipts.' },
  { id: 'se_books', title: 'Profit & Loss Statement & Balance Sheet', desc: 'Prepare simple financials showing business revenue, running expenses, and asset status.' },
  { id: 'se_bank_stmt', title: 'Business & Savings Statements', desc: 'Get statements for all bank accounts used for business transactions or personal savings.' },
  { id: 'se_invoices', title: 'Business Expense Receipts', desc: 'Invoices for office rent, internet bills, hardware purchases, or travel used directly for business.' },
  { id: 'se_form16a', title: 'Form 16A / TDS Certificates', desc: 'Obtained from clients/platforms who deducted tax on contracts or services under 194C/194J.' },
  { id: 'se_gst', title: 'GST Filing Filings (GSTR-1 & GSTR-3B)', desc: 'Ensure aggregate sales declarations in Income Tax match your filed GST return revenues.' },
  { id: 'se_advance_tax', title: 'Challan 280 / Advance Tax Proofs', desc: 'Details of self-assessment or quarterly advance taxes paid during the financial year.' },
  { id: 'se_kyc', title: 'KYC: PAN and Aadhaar Card', desc: 'Essential identification cards for signing the ITR and secure portal login authentication.' }
];

const AGE_OPTIONS = [
  { value: 'regular', label: 'Regular Individual (< 60 Years)' },
  { value: 'senior', label: 'Senior Citizen (60 - 80 Years)' },
  { value: 'super_senior', label: 'Super Senior Citizen (> 80 Years)' }
];

interface CustomDropdownProps {
  value: string;
  options: { value: string; label: string }[];
  onChange: (val: any) => void;
  placeholder?: string;
}

function CustomDropdown({ value, options, onChange, placeholder = "Select..." }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const selectedOption = options.find(o => o.value === value);

  return (
    <div 
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={handleToggle}
        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 font-semibold text-sm transition-all duration-200 outline-none flex justify-between items-center cursor-pointer ${
          isOpen 
            ? 'border-orange-500 bg-white ring-4 ring-orange-500/10 shadow-sm' 
            : 'border-slate-200 hover:border-orange-400 hover:bg-white hover:shadow-sm'
        }`}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 max-h-60 overflow-y-auto"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-orange-500 stroke-[2.5]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}export default function IncomeTaxCalculator() {
  // Input States
  const [taxpayerName, setTaxpayerName] = useState('');
  const [grossSalary, setGrossSalary] = useState('1200000');
  const [otherIncome, setOtherIncome] = useState('50000');
  const [interestIncome, setInterestIncome] = useState('15000');
  const [stcgEquity, setStcgEquity] = useState('0');
  const [ltcgEquity, setLtcgEquity] = useState('0');
  const [isSalaried, setIsSalaried] = useState(true);
  const [ageCategory, setAgeCategory] = useState<AgeCategory>('regular');

  // Old Regime Deductions
  const [deduction80C, setDeduction80C] = useState('150000'); // EPF, PPF, LIC, ELSS, etc
  const [deduction80D, setDeduction80D] = useState('25000');  // Medical Insurance
  const [deduction80CCD1B, setDeduction80CCD1B] = useState('50000'); // NPS additional
  const [interestOnHomeLoan, setInterestOnHomeLoan] = useState('50000'); // Sec 24(b)
  const [rentPaidForHra, setRentPaidForHra] = useState('0'); // HRA deduction (or separate 80GG)
  const [deduction80TTA, setDeduction80TTA] = useState('10000'); // Savings bank interest

  // Calculation Results
  const [results, setResults] = useState<{
    oldRegime: {
      grossIncome: number;
      totalDeductions: number;
      taxableIncome: number;
      slabTax: { rate: string; range: string; amount: number }[];
      baseTax: number;
      slabBaseTax: number;
      stcgTax: number;
      ltcgTax: number;
      rebate87A: number;
      taxAfterRebate: number;
      marginalRelief: number;
      cess: number;
      totalTax: number;
    };
    newRegime: {
      grossIncome: number;
      totalDeductions: number;
      taxableIncome: number;
      slabTax: { rate: string; range: string; amount: number }[];
      baseTax: number;
      slabBaseTax: number;
      stcgTax: number;
      ltcgTax: number;
      rebate87A: number;
      marginalRelief: number;
      taxAfterRebate: number;
      cess: number;
      totalTax: number;
    };
    savings: number;
    recommended: 'new' | 'old' | 'equal';
  } | null>(null);

  const [activeTab, setActiveTab] = useState<'comparison' | 'old-slabs' | 'new-slabs'>('comparison');
  const [showDetailedDeductions, setShowDetailedDeductions] = useState(true);
  const [checklistExpanded, setChecklistExpanded] = useState(true);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  // Perform tax calculations whenever inputs change
  useEffect(() => {
    const grossVal = parseFloat(grossSalary) || 0;
    const otherVal = parseFloat(otherIncome) || 0;
    const interestVal = parseFloat(interestIncome) || 0;
    const stcgVal = parseFloat(stcgEquity) || 0;
    const ltcgVal = parseFloat(ltcgEquity) || 0;

    const totalGross = grossVal + otherVal + interestVal + stcgVal + ltcgVal;

    // --- OLD REGIME CALCULATION ---
    const stdDeductionOld = isSalaried ? 50000 : 0;
    const val80C = Math.min(150000, parseFloat(deduction80C) || 0);
    const val80D = Math.min(
      ageCategory === 'regular' ? 25000 : 50000,
      parseFloat(deduction80D) || 0
    );
    const val80CCD = Math.min(50000, parseFloat(deduction80CCD1B) || 0);
    const valHomeLoan = Math.min(200000, parseFloat(interestOnHomeLoan) || 0);
    const valHra = parseFloat(rentPaidForHra) || 0;
    
    // TTA/TTB limits: TTA is 10k max (for regular), TTB is 50k max (for senior/super senior)
    const limitTTA = ageCategory === 'regular' ? 10000 : 50000;
    const valTTA = Math.min(limitTTA, parseFloat(deduction80TTA) || 0);

    const deductionsOldTotal = stdDeductionOld + val80C + val80D + val80CCD + valHomeLoan + valHra + valTTA;
    
    // Deductions under Chapter VI-A are not allowed from special rate capital gains
    const taxableOldNormal = Math.max(0, (grossVal + otherVal + interestVal) - deductionsOldTotal);
    const taxableOld = taxableOldNormal + stcgVal + ltcgVal;

    // Old Regime Tax Slabs
    // Slabs vary depending on Age Category
    let oldExemptionLimit = 250000;
    if (ageCategory === 'senior') oldExemptionLimit = 300000;
    else if (ageCategory === 'super_senior') oldExemptionLimit = 500000;

    // Basic exemption limit shifting (advantage to taxpayer)
    const unexhaustedLimitOld = Math.max(0, oldExemptionLimit - taxableOldNormal);
    const stcgAfterLimitOld = Math.max(0, stcgVal - unexhaustedLimitOld);
    const remainingLimitOld = Math.max(0, unexhaustedLimitOld - stcgVal);
    const taxSTCGOld = stcgAfterLimitOld * 0.20;

    const ltcgAfterLimitOld = Math.max(0, ltcgVal - remainingLimitOld);
    const taxLTCGOld = Math.max(0, ltcgAfterLimitOld - 125000) * 0.125;

    const oldSlabsBreakdown: { rate: string; range: string; amount: number }[] = [];
    let oldBaseSlabTax = 0;

    if (ageCategory === 'super_senior') {
      let tempTaxable = taxableOldNormal;
      
      const slab1 = Math.min(Math.max(0, tempTaxable), 500000);
      oldSlabsBreakdown.push({ rate: '0%', range: 'Up to ₹5,00,000', amount: 0 });
      tempTaxable -= slab1;

      const slab2 = Math.min(Math.max(0, tempTaxable), 500000);
      const tax2 = slab2 * 0.20;
      oldSlabsBreakdown.push({ rate: '20%', range: '₹5,00,001 to ₹10,00,000', amount: tax2 });
      oldBaseSlabTax += tax2;
      tempTaxable -= slab2;

      if (tempTaxable > 0) {
        const tax3 = tempTaxable * 0.30;
        oldSlabsBreakdown.push({ rate: '30%', range: 'Above ₹10,00,000', amount: tax3 });
        oldBaseSlabTax += tax3;
      }
    } else if (ageCategory === 'senior') {
      let tempTaxable = taxableOldNormal;

      const slab1 = Math.min(Math.max(0, tempTaxable), 300000);
      oldSlabsBreakdown.push({ rate: '0%', range: 'Up to ₹3,00,000', amount: 0 });
      tempTaxable -= slab1;

      const slab2 = Math.min(Math.max(0, tempTaxable), 200000);
      const tax2 = slab2 * 0.05;
      oldSlabsBreakdown.push({ rate: '5%', range: '₹3,00,001 to ₹5,00,000', amount: tax2 });
      oldBaseSlabTax += tax2;
      tempTaxable -= slab2;

      const slab3 = Math.min(Math.max(0, tempTaxable), 500000);
      const tax3 = slab3 * 0.20;
      oldSlabsBreakdown.push({ rate: '20%', range: '₹5,00,001 to ₹10,00,000', amount: tax3 });
      oldBaseSlabTax += tax3;
      tempTaxable -= slab3;

      if (tempTaxable > 0) {
        const tax4 = tempTaxable * 0.30;
        oldSlabsBreakdown.push({ rate: '30%', range: 'Above ₹10,00,000', amount: tax4 });
        oldBaseSlabTax += tax4;
      }
    } else {
      let tempTaxable = taxableOldNormal;

      const slab1 = Math.min(Math.max(0, tempTaxable), 250000);
      oldSlabsBreakdown.push({ rate: '0%', range: 'Up to ₹2,50,000', amount: 0 });
      tempTaxable -= slab1;

      const slab2 = Math.min(Math.max(0, tempTaxable), 250000);
      const tax2 = slab2 * 0.05;
      oldSlabsBreakdown.push({ rate: '5%', range: '₹2,50,001 to ₹5,00,000', amount: tax2 });
      oldBaseSlabTax += tax2;
      tempTaxable -= slab2;

      const slab3 = Math.min(Math.max(0, tempTaxable), 500000);
      const tax3 = slab3 * 0.20;
      oldSlabsBreakdown.push({ rate: '20%', range: '₹5,00,001 to ₹10,00,000', amount: tax3 });
      oldBaseSlabTax += tax3;
      tempTaxable -= slab3;

      if (tempTaxable > 0) {
        const tax4 = tempTaxable * 0.30;
        oldSlabsBreakdown.push({ rate: '30%', range: 'Above ₹10,0,000', amount: tax4 });
        oldBaseSlabTax += tax4;
      }
    }

    const baseTaxOldTotal = oldBaseSlabTax + taxSTCGOld + taxLTCGOld;

    // Old Regime rebate under 87A: available if total taxable income is <= 5,00,000. Capped at ₹12,500. Not allowed on LTCG 112A.
    let rebateOld = 0;
    if (taxableOld <= 550000) { // Keep basic limit 5L, or up to 5L if including special rates
      // Actually 87A limit is <= 5L for old regime
      if (taxableOld <= 500000) {
        rebateOld = Math.min(oldBaseSlabTax + taxSTCGOld, 12500);
      }
    }
    const taxAfterRebateOld = Math.max(0, (oldBaseSlabTax + taxSTCGOld) - rebateOld) + taxLTCGOld;
    const cessOld = taxAfterRebateOld * 0.04;
    const finalOldTax = taxAfterRebateOld + cessOld;


    // --- NEW REGIME CALCULATION (FY 2026-27 Budget Slabs) ---
    const stdDeductionNew = isSalaried ? 75000 : 0;
    const deductionsNewTotal = stdDeductionNew;
    const taxableNewNormal = Math.max(0, (grossVal + otherVal + interestVal) - deductionsNewTotal);
    const taxableNew = taxableNewNormal + stcgVal + ltcgVal;

    // Shift unexhausted basic exemption limit first to STCG, then to LTCG
    const unexhaustedLimitNew = Math.max(0, 400000 - taxableNewNormal);
    const stcgAfterLimitNew = Math.max(0, stcgVal - unexhaustedLimitNew);
    const remainingLimitNew = Math.max(0, unexhaustedLimitNew - stcgVal);
    const taxSTCGNew = stcgAfterLimitNew * 0.20;

    const ltcgAfterLimitNew = Math.max(0, ltcgVal - remainingLimitNew);
    const taxLTCGNew = Math.max(0, ltcgAfterLimitNew - 125000) * 0.125;

    let tempTaxableNew = taxableNewNormal;
    let newBaseSlabTax = 0;
    const newSlabsBreakdown: { rate: string; range: string; amount: number }[] = [];

    // Slab 1: Up to 4L (0%)
    const newSlab1 = Math.min(Math.max(0, tempTaxableNew), 400000);
    newSlabsBreakdown.push({ rate: '0%', range: 'Up to ₹4,00,000', amount: 0 });
    tempTaxableNew -= newSlab1;

    // Slab 2: 4L - 8L (5%)
    const newSlab2 = Math.min(Math.max(0, tempTaxableNew), 400000);
    const taxNew2 = newSlab2 * 0.05;
    newSlabsBreakdown.push({ rate: '5%', range: '₹4,00,001 to ₹8,00,000', amount: taxNew2 });
    newBaseSlabTax += taxNew2;
    tempTaxableNew -= newSlab2;

    // Slab 3: 8L - 12L (10%)
    const newSlab3 = Math.min(Math.max(0, tempTaxableNew), 400000);
    const taxNew3 = newSlab3 * 0.10;
    newSlabsBreakdown.push({ rate: '10%', range: '₹8,00,001 to ₹12,00,000', amount: taxNew3 });
    newBaseSlabTax += taxNew3;
    tempTaxableNew -= newSlab3;

    // Slab 4: 12L - 16L (15%)
    const newSlab4 = Math.min(Math.max(0, tempTaxableNew), 400000);
    const taxNew4 = newSlab4 * 0.15;
    newSlabsBreakdown.push({ rate: '15%', range: '₹12,00,001 to ₹16,00,000', amount: taxNew4 });
    newBaseSlabTax += taxNew4;
    tempTaxableNew -= newSlab4;

    // Slab 5: 16L - 20L (20%)
    const newSlab5 = Math.min(Math.max(0, tempTaxableNew), 400000);
    const taxNew5 = newSlab5 * 0.20;
    newSlabsBreakdown.push({ rate: '20%', range: '₹16,00,001 to ₹20,00,000', amount: taxNew5 });
    newBaseSlabTax += taxNew5;
    tempTaxableNew -= newSlab5;

    // Slab 6: 20L - 24L (25%)
    const newSlab6 = Math.min(Math.max(0, tempTaxableNew), 400000);
    const taxNew6 = newSlab6 * 0.25;
    newSlabsBreakdown.push({ rate: '25%', range: '₹20,00,001 to ₹24,00,000', amount: taxNew6 });
    newBaseSlabTax += taxNew6;
    tempTaxableNew -= newSlab6;

    // Slab 7: Above 24L (30%)
    if (tempTaxableNew > 0) {
      const taxNew7 = tempTaxableNew * 0.30;
      newSlabsBreakdown.push({ rate: '30%', range: 'Above ₹24,00,000', amount: taxNew7 });
      newBaseSlabTax += taxNew7;
    }

    const baseTaxNewTotal = newBaseSlabTax + taxSTCGNew + taxLTCGNew;

    // Section 87A Rebate for New Regime:
    // Full slab tax + STCG is rebated if total taxable income is <= ₹12,00,000.
    let rebateNew = 0;
    let marginalReliefNew = 0;

    if (taxableNew <= 1200000) {
      rebateNew = newBaseSlabTax + taxSTCGNew;
    } else {
      // Marginal Relief: Tax payable (before cess) cannot exceed the income exceeding ₹12 Lakhs.
      const excessIncome = taxableNew - 1200000;
      if (baseTaxNewTotal > excessIncome) {
        marginalReliefNew = baseTaxNewTotal - excessIncome;
      }
    }

    const taxAfterRebateNew = Math.max(0, baseTaxNewTotal - rebateNew - marginalReliefNew);
    const cessNew = taxAfterRebateNew * 0.04;
    const finalNewTax = taxAfterRebateNew + cessNew;

    // Determine better regime
    const savings = Math.abs(finalOldTax - finalNewTax);
    let recommended: 'new' | 'old' | 'equal' = 'equal';
    if (finalNewTax < finalOldTax) recommended = 'new';
    else if (finalOldTax < finalNewTax) recommended = 'old';

    setResults({
      oldRegime: {
        grossIncome: totalGross,
        totalDeductions: deductionsOldTotal,
        taxableIncome: taxableOld,
        slabTax: oldSlabsBreakdown,
        baseTax: baseTaxOldTotal,
        slabBaseTax: oldBaseSlabTax,
        stcgTax: taxSTCGOld,
        ltcgTax: taxLTCGOld,
        rebate87A: rebateOld,
        marginalRelief: 0,
        taxAfterRebate: taxAfterRebateOld,
        cess: cessOld,
        totalTax: finalOldTax,
      },
      newRegime: {
        grossIncome: totalGross,
        totalDeductions: deductionsNewTotal,
        taxableIncome: taxableNew,
        slabTax: newSlabsBreakdown,
        baseTax: baseTaxNewTotal,
        slabBaseTax: newBaseSlabTax,
        stcgTax: taxSTCGNew,
        ltcgTax: taxLTCGNew,
        rebate87A: rebateNew,
        marginalRelief: marginalReliefNew,
        taxAfterRebate: taxAfterRebateNew,
        cess: cessNew,
        totalTax: finalNewTax,
      },
      savings,
      recommended
    });
  }, [
    grossSalary,
    otherIncome,
    interestIncome,
    stcgEquity,
    ltcgEquity,
    isSalaried,
    ageCategory,
    deduction80C,
    deduction80D,
    deduction80CCD1B,
    interestOnHomeLoan,
    rentPaidForHra,
    deduction80TTA
  ]);

  const handleReset = () => {
    setTaxpayerName('');
    setGrossSalary('1200000');
    setOtherIncome('50000');
    setInterestIncome('15000');
    setStcgEquity('0');
    setLtcgEquity('0');
    setIsSalaried(true);
    setAgeCategory('regular');
    setDeduction80C('150000');
    setDeduction80D('25000');
    setDeduction80CCD1B('50000');
    setInterestOnHomeLoan('0');
    setRentPaidForHra('0');
    setDeduction80TTA('10000');
    setCheckedItems([]);
    setChecklistExpanded(true);
  };

  const generatePDF = () => {
    if (!results) return;

    const img = new Image();
    img.src = '/logo.png';
    img.crossOrigin = 'anonymous';

    let hasRun = false;
    const runGeneration = (imgEl?: HTMLImageElement) => {
      if (hasRun) return;
      hasRun = true;
      buildPDF(imgEl);
    };

    // Timeout of 1.5 seconds in case loading fails or takes too long, fallback to text logo
    const timeoutId = setTimeout(() => {
      runGeneration();
    }, 1500);

    img.onload = () => {
      clearTimeout(timeoutId);
      runGeneration(img);
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      runGeneration();
    };
  };

  const buildPDF = (imgEl?: HTMLImageElement) => {
    if (!results) return;

    // Create a new A4 sized PDF (portrait, mm format)
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Elegant alias override for Gilroy to prevent missing-widths or atob decoding errors inside jsPDF
    const originalSetFont = doc.setFont;
    doc.setFont = function (this: any, fontName: string, fontStyle?: string, ...args: any[]) {
      const targetFont = (fontName && fontName.toLowerCase() === 'gilroy') ? 'helvetica' : fontName;
      return originalSetFont.call(this, targetFont, fontStyle, ...args);
    } as any;

    // Helper functions
    const formatValue = (num: number) => {
      return `Rs. ${Math.round(num).toLocaleString('en-IN')}`;
    };

    // --- Page Header & Border ---
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.rect(10, 10, 190, 277); // Outer boundary

    // Header bar backplate (Matching website brand blue #3150A0 / RGB 49, 80, 160)
    doc.setFillColor(49, 80, 160);
    doc.rect(10, 10, 190, 25, 'F');

    // Accent orange top strip separating header from content
    doc.setFillColor(249, 115, 22); // orange-500
    doc.rect(10, 35, 190, 1.5, 'F');

    // Add logo image if loaded, otherwise fallback gracefully
    if (imgEl) {
      doc.addImage(imgEl, 'PNG', 14, 13.5, 36, 18);
    } else {
      doc.setFont('gilroy', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(255, 255, 255);
      doc.text('Make Eazy', 15, 21);
      doc.setFontSize(7);
      doc.setTextColor(249, 115, 22); // Orange Accent
      doc.text('PREMIUM TAX PLANNER', 15, 26);
    }

    // --- Document Meta Context (Top Right) ---
    doc.setTextColor(255, 255, 255);
    doc.setFont('gilroy', 'bold');
    doc.setFontSize(10.5);
    doc.text('INCOME TAX COMPARISON REPORT', 195, 20, { align: 'right' });

    doc.setFont('gilroy', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(203, 213, 225); // slate-300 (white/gray on the dark navy header)
    doc.text('Assessment Year 2027-28 | FY 2026-27', 195, 24, { align: 'right' });

    let y = 43;

    // Helper for rendering section headers with standardized style & spacing
    const renderSectionHeader = (title: string, topGap: number = 5) => {
      y += topGap;
      doc.setFont('gilroy', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(0, 0, 0); // All executive subheadings in black
      doc.text(title, 15, y);
      y += 4; // Constant spacing below heading
    };

    // --- Section 1: TAXPAYER PROFILE SUMMARY ---
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.line(15, y, 195, y);

    renderSectionHeader('TAXPAYER PROFILE SUMMARY', 5); // draws subheading at 48, y advanced to 52

    // Dynamic key-values columns
    doc.setFont('gilroy', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0); // Keep in black
    doc.text('Taxpayer Name:', 15, y + 2.5);
    doc.text('Taxpayer Age Pool:', 15, y + 7.5);
    doc.text('Employment Type:', 15, y + 12.5);

    doc.text(isSalaried ? 'Gross salary:' : 'Self Employed Income:', 115, y + 2.5);
    doc.text('Other receipts:', 115, y + 7.5);
    doc.text('Combined Income:', 115, y + 12.5);

    // Values in clean, professional black
    doc.setFont('gilroy', 'bold');
    doc.setTextColor(0, 0, 0); // Keep in black
    doc.text(taxpayerName || 'Not Specified', 48, y + 2.5);
    doc.text(ageCategory === 'regular' ? 'Regular (< 60 Years)' : ageCategory === 'senior' ? 'Senior Citizen (60-80 Years)' : 'Super Senior (80+ Years)', 48, y + 7.5);
    doc.text(isSalaried ? 'Salaried Employment' : 'Self-Employed / Profession', 48, y + 12.5);

    // Right-aligned values for Gross Salary, Other receipts, and Combined Income
    doc.text(formatValue(parseFloat(grossSalary) || 0), 195, y + 2.5, { align: 'right' });
    doc.text(formatValue(parseFloat(otherIncome) || 0), 195, y + 7.5, { align: 'right' });
    doc.text(formatValue((parseFloat(grossSalary) || 0) + (parseFloat(otherIncome) || 0)), 195, y + 12.5, { align: 'right' });

    y += 18; // advanced to 70
    doc.line(15, y, 195, y);

    // --- Section 2: REGIME RECOMMENDATION & OUTCOME ---
    renderSectionHeader('REGIME RECOMMENDATION & OUTCOME', 4.5); // heading drawn at 74.5, y advanced to 78.5

    doc.setFont('gilroy', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0); // Keep in black
    
    const recLabel = 'Recommended Outcome: ';
    doc.text(recLabel, 15, y + 1.5);
    const recLabelWidth = doc.getTextWidth(recLabel);

    const regimeHighlight = results.recommended === 'new' 
       ? 'Revised New Tax Regime (Sec 115BAC)' 
       : results.recommended === 'old'
         ? 'Classical Old Tax Regime'
         : 'Both Regimes are Equally Beneficial';

    // The Recommended Tax regime text colored distinctly
    const recommendationColor = results.recommended === 'new' 
       ? [16, 185, 129] // emerald-500
       : results.recommended === 'old'
         ? [59, 130, 246] // blue-500
         : [249, 115, 22]; // orange-500

    doc.setTextColor(recommendationColor[0], recommendationColor[1], recommendationColor[2]);
    doc.setFont('gilroy', 'bold');
    doc.text(regimeHighlight, 15 + recLabelWidth, y + 1.5);

    if (results.savings > 0) {
       const prefix = 'Estimated absolute tax savings with recommended regime: ';
       const amountStr = formatValue(results.savings);
       const suffix = ' per annum.';
       
       const prefixWidth = doc.getTextWidth(prefix);
       
       doc.setFont('gilroy', 'normal');
       doc.setTextColor(0, 0, 0); // Keep in black
       doc.text(prefix, 15, y + 6.5);
       
       doc.setFont('gilroy', 'bold');
       doc.setTextColor(0, 0, 0); // Keep in black
       doc.text(amountStr, 15 + prefixWidth, y + 6.5);
       
       const amountWidth = doc.getTextWidth(amountStr);
       
       doc.setFont('gilroy', 'normal');
       doc.setTextColor(0, 0, 0); // Keep in black
       doc.text(suffix, 15 + prefixWidth + amountWidth, y + 6.5);
    } else {
       const noSavingsStr = 'Both tax computing modes yield identical standard liabilities.';
       doc.setTextColor(0, 0, 0); // Keep in black
       doc.text(noSavingsStr, 15, y + 6.5);
    }

    y += 11.5; // advanced to 90

    // --- Section 3: DETAILED SIDE-BY-SIDE TAX CALCULATIONS ---
    renderSectionHeader('DETAILED SIDE-BY-SIDE TAX CALCULATIONS', 4.5); // heading drawn at 94.5, y advanced to 98.5

    doc.setDrawColor(226, 232, 240); // slate-200
    doc.line(15, y, 195, y);

    y += 4.5; // y = 103
    doc.setFont('gilroy', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0); // Keep in black
    doc.text('Particulars / Tax Breakdown', 17, y);
    doc.text('New Regime (FY 2026-27)', 105, y, { align: 'right' });
    doc.text('Old Regime (FY 2026-27)', 155, y, { align: 'right' });
    doc.text('Variance / Status', 195, y, { align: 'right' });

    y += 2.5; // y = 105.5
    doc.line(15, y, 195, y);

    // Row rendering helper with standard vertical alignment (strictly line-based, no tiles/shading)
    const drawRow = (label: string, newVal: number | string, oldVal: number | string, varianceText: string, isBold: boolean = false) => {
      y += 5.2;
      
      if (isBold) {
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.3);
        doc.line(15, y - 4.2, 195, y - 4.2);
      }

      doc.setFont('gilroy', isBold ? 'bold' : 'normal');
      doc.setFontSize(isBold ? 8 : 7.5);
      doc.setTextColor(0, 0, 0); // Keep in black
      
      doc.text(label, 17, y - 0.6);
      
      const formattedNew = typeof newVal === 'number' ? formatValue(newVal) : newVal;
      const formattedOld = typeof oldVal === 'number' ? formatValue(oldVal) : oldVal;
      
      doc.text(formattedNew, 105, y - 0.6, { align: 'right' });
      doc.text(formattedOld, 155, y - 0.6, { align: 'right' });
      doc.setTextColor(0, 0, 0); // Keep in black
      doc.setFont('gilroy', 'normal');
      doc.text(varianceText, 195, y - 0.6, { align: 'right' });
      
      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.2);
      doc.line(15, y + 0.9, 195, y + 0.9);

      if (isBold) {
        doc.setDrawColor(226, 232, 240);
        doc.line(15, y + 0.9, 195, y + 0.9);
      }
    };

    // Table Rows
    drawRow('Gross Annual Income', results.newRegime.grossIncome, results.oldRegime.grossIncome, 'All Source Receipts');
    drawRow('Standard & Chapter VI-A Deductions', results.newRegime.totalDeductions, results.oldRegime.totalDeductions, isSalaried ? 'Std Ded / Sec 80' : 'Sec 80 Deduct.');
    drawRow('Net Taxable Income', results.newRegime.taxableIncome, results.oldRegime.taxableIncome, '', true);
    
    drawRow('Computed Slab Taxes', results.newRegime.slabBaseTax, results.oldRegime.slabBaseTax, 'Normal Slabs');
    
    if (results.newRegime.stcgTax > 0 || results.oldRegime.stcgTax > 0) {
      drawRow('Special Tax on STCG (Sec 111A - 20%)', results.newRegime.stcgTax, results.oldRegime.stcgTax, 'Short Term');
    }
    if (results.newRegime.ltcgTax > 0 || results.oldRegime.ltcgTax > 0) {
      drawRow('Special Tax on LTCG (Sec 112A - 12.5%)', results.newRegime.ltcgTax, results.oldRegime.ltcgTax, 'Long Term');
    }

    drawRow('Total Base Tax Liability', results.newRegime.baseTax, results.oldRegime.baseTax, 'Slab + Special', true);

    if (results.newRegime.rebate87A > 0 || results.oldRegime.rebate87A > 0) {
      drawRow('Section 87A Tax Rebate', -results.newRegime.rebate87A, -results.oldRegime.rebate87A, 'Rebate Benefit');
    }
    if (results.newRegime.marginalRelief > 0) {
      drawRow('Marginal Relief (Section 87A)', -Math.round(results.newRegime.marginalRelief), 0, 'New Regime Only');
    }

    drawRow('Health & Education Cess (4%)', Math.round(results.newRegime.cess), Math.round(results.oldRegime.cess), 'Education & Medical');
    
    // Final Tax Row (Styled with clean double-lines/thick professional lines instead of colored solid blocks)
    y += 5.2;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.4);
    doc.line(15, y - 4.2, 195, y - 4.2); // Top border

    doc.setTextColor(0, 0, 0); // Pure Black
    doc.setFont('gilroy', 'bold');
    doc.setFontSize(8.5);
    
    doc.text('NET TAX PAYABLE (FINAL TRUNCATED)', 17, y - 0.5);
    doc.text(formatValue(results.newRegime.totalTax), 105, y - 0.5, { align: 'right' });
    doc.text(formatValue(results.oldRegime.totalTax), 155, y - 0.5, { align: 'right' });
    
    const statusSign = results.savings > 0 
      ? `Save ${formatValue(results.savings)}`
      : 'Identical';
    doc.text(statusSign, 195, y - 0.5, { align: 'right' });

    doc.line(15, y + 1.2, 195, y + 1.2); // Double line style bottom border
    doc.setLineWidth(0.15);
    doc.line(15, y + 1.7, 195, y + 1.7);
    doc.setLineWidth(0.2); // reset

    y += 8; // Reset spacing after table

    // --- Section 4: SLAB TAX DISTRIBUTION SUMMARY ---
    renderSectionHeader('SLAB TAX DISTRIBUTION SUMMARY', 4.5); // heading drawn at 171, y advanced to 175

    doc.setFontSize(7.5);
    doc.setFont('gilroy', 'normal');
    doc.setTextColor(0, 0, 0); // Keep in black
    doc.text('Calculated distribution of your taxable income across normal tax slab brackets:', 15, y + 1.5);

    y += 3.5; // y = 180
    const columnWidth = 85;
    
    // LEFT PANEL: Revised New Slabs
    doc.setDrawColor(0, 0, 0); // Clean black divider line
    doc.setLineWidth(0.4);
    doc.line(15, y + 8, 15 + columnWidth, y + 8);
    doc.setLineWidth(0.2); // reset

    doc.setTextColor(0, 0, 0); // Keep in black
    doc.setFont('gilroy', 'bold');
    doc.setFontSize(8);
    doc.text('Revised New Slabs (Default Sec 115BAC)', 15, y + 5);

    doc.setFont('gilroy', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(0, 0, 0); // Keep in black
    let newSlabY = y + 12.5;
    results.newRegime.slabTax.forEach((slab) => {
      const cleanRange = slab.range.replaceAll('₹', 'Rs. ');
      doc.text(`${cleanRange} (${slab.rate}):`, 15, newSlabY);
      doc.text(formatValue(slab.amount), 15 + columnWidth, newSlabY, { align: 'right' });
      newSlabY += 4.5;
    });

    // RIGHT PANEL: Classical Old Slabs
    doc.setDrawColor(100, 116, 139); // Clean gray divider line
    doc.setLineWidth(0.4);
    doc.line(110, y + 8, 110 + columnWidth, y + 8);
    doc.setLineWidth(0.2); // reset

    doc.setTextColor(0, 0, 0); // Keep in black
    doc.setFont('gilroy', 'bold');
    doc.setFontSize(8);
    doc.text('Classical Old Slabs', 110, y + 5);

    doc.setFont('gilroy', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(0, 0, 0); // Keep in black
    let oldSlabY = y + 12.5;
    results.oldRegime.slabTax.forEach((slab, index) => {
      if (index < 6) { // limit height to prevent layout spill
        const cleanRange = slab.range.replaceAll('₹', 'Rs. ');
        doc.text(`${cleanRange} (${slab.rate}):`, 110, oldSlabY);
        doc.text(formatValue(slab.amount), 110 + columnWidth, oldSlabY, { align: 'right' });
        oldSlabY += 4.5;
      }
    });

    y += 47; // Advanced forward past panel heights

    // --- Section 5: ADVANCE TAX / COMPLIANCE SCHEDULE ---
    if (!isSalaried) {
      const recRegimeObj = results.recommended === 'new' ? results.newRegime : results.oldRegime;
      const taxValue = Math.round(recRegimeObj.totalTax);
      const isAdvanceTaxApplicable = taxValue >= 10000;

      if (isAdvanceTaxApplicable) {
        doc.setDrawColor(226, 232, 240); // slate-200
        doc.setLineWidth(0.3);
        doc.line(15, y, 195, y);

        renderSectionHeader('ESTIMATED ADVANCE TAX INSTALLMENT SCHEDULE (SEC 408)', 2.5);
        
        doc.setTextColor(0, 0, 0); // Keep in black
        doc.setFont('gilroy', 'normal');
        doc.setFontSize(7);
        doc.text(`Estimated Net Tax Liability of ${formatValue(taxValue)} warrants the following mandatory quarterly installments:`, 15, y + 1.0);
        
        let tblY = y + 5.5;
        doc.setFont('gilroy', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(0, 0, 0); // Keep in black
        
        doc.text('Installment / Due Date', 15, tblY);
        doc.text('Mandatory %', 65, tblY);
        doc.text('Cumulative Amount Due', 130, tblY, { align: 'right' });
        doc.text('Individual Inst. Due', 195, tblY, { align: 'right' });
        
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.12);
        doc.line(15, tblY + 1.2, 195, tblY + 1.2);
        doc.setLineWidth(0.2); // reset
        
        const dates = [
          { due: 'Installment 1: On/Before 15 Jun 2026', pct: '15%', cum: Math.round(taxValue * 0.15), inst: Math.round(taxValue * 0.15) },
          { due: 'Installment 2: On/Before 15 Sep 2026', pct: '45%', cum: Math.round(taxValue * 0.45), inst: Math.round(taxValue * 0.30) },
          { due: 'Installment 3: On/Before 15 Dec 2026', pct: '75%', cum: Math.round(taxValue * 0.75), inst: Math.round(taxValue * 0.30) },
          { due: 'Installment 4: On/Before 15 Mar 2027', pct: '100%', cum: Math.round(taxValue * 1.00), inst: Math.round(taxValue * 0.25) }
        ];
        
        doc.setTextColor(0, 0, 0); // Keep in black
        let rowY = tblY + 4.5;
        dates.forEach((row) => {
          doc.setFont('gilroy', 'normal');
          doc.text(row.due, 15, rowY);
          doc.text(row.pct, 65, rowY);
          doc.setFont('gilroy', 'bold');
          doc.text(formatValue(row.cum), 130, rowY, { align: 'right' });
          doc.text(formatValue(row.inst), 195, rowY, { align: 'right' });
          rowY += 4;
        });
        
        y += 28.5; // advanced
      } else {
        doc.setDrawColor(226, 232, 240); // slate-200
        doc.setLineWidth(0.3);
        doc.line(15, y, 195, y);
        
        renderSectionHeader('ADVANCE TAX COMPLIANCE (SEC 408)', 2.5);
        
        doc.setTextColor(0, 0, 0); // Keep in black
        doc.setFont('gilroy', 'normal');
        doc.setFontSize(7.5);
        doc.text(`Advance Tax is not applicable since your computed tax liability (${formatValue(taxValue)}) is below the Rs. 10,000 threshold.`, 15, y + 1.2);
        
        y += 10.5; // advanced
      }
    } else {
      y += 2;
    }

    // --- Section 6: PROFESSIONAL HELP & LINKS ---
    doc.setDrawColor(226, 232, 240); // slate-200 divider line
    doc.setLineWidth(0.3);
    doc.line(15, y, 195, y);

    renderSectionHeader('GET PROFESSIONAL ITR FILING ASSISTANCE', 2.0); // heading drawn at y+2, y advanced by 4

    doc.setFont('gilroy', 'bold');
    doc.setFontSize(7.5);
    
    const txt1 = '1. Know Your Tax Score and optimization report';
    doc.setTextColor(0, 0, 0); // Keep in black
    doc.text(txt1, 15, y + 4);
    doc.link(15, y + 1.5, doc.getTextWidth(txt1) + 2, 3.5, { url: 'https://itr.makeeazy.in' });
    
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.15);
    doc.line(15, y + 4.7, 15 + doc.getTextWidth(txt1), y + 4.7);

    const txt2 = '2. File Your ITR with Expert assistance';
    doc.setTextColor(0, 0, 0); // Keep in black
    doc.text(txt2, 15, y + 8);
    doc.link(15, y + 5.5, doc.getTextWidth(txt2) + 2, 3.5, { url: 'https://desk.makeeazy.in' });
    doc.line(15, y + 8.7, 15 + doc.getTextWidth(txt2), y + 8.7);

    // --- Bottom Consistent Page Footer ---
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.2);
    doc.line(10, 275.5, 200, 275.5); // Footer divider

    doc.setTextColor(0, 0, 0); // Keep in black
    doc.setFontSize(7.5);
    doc.setFont('gilroy', 'normal');
    const copyrightStr = `Tax comparison estimate is generated by Make Eazy System. Not an official filing receipt.`;
    doc.text(copyrightStr, 15, 281.5);
    doc.text('www.makeeazy.in | +91 9992819995', 195, 281.5, { align: 'right' });

    // Save File
    doc.save(`Tax_Comparison_AY27_INR_${results.newRegime.grossIncome}.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer" onClick={() => window.location.href = '/'}>
              <img 
                src="/logo.png" 
                alt="Make Eazy Logo" 
                className="h-14 w-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-text hidden flex items-center gap-1">
                <span className="font-display font-bold text-2xl tracking-tight text-blue-900">Make</span>
                <span className="font-display font-bold text-2xl tracking-tight text-orange-500">Eazy</span>
              </div>
            </div>
            
            <a href="/calculators" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Calculators
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                <CalculatorIcon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-4xl font-bold text-[#3150A0]">Income Tax Calculator</h1>
                <p className="text-slate-500 mt-1">FY 2026-27 (AY 2027-28) Comprehensive Regime Comparer & Tax Calculator</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a 
                href="https://desk.makeeazy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Get Your ITR filed by Experts
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button 
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-orange-500 hover:bg-slate-50 border border-slate-200 hover:border-orange-200 rounded-xl transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 animate-hover-spin" />
                Reset Inputs
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Input Form Column (7 Cols on large screen) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Profile Config */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 space-y-5">
                <h3 className="font-display text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">1. Your Profile</h3>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2 sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">Taxpayer Name</label>
                    <input
                      type="text"
                      value={taxpayerName}
                      onChange={(e) => setTaxpayerName(e.target.value)}
                      placeholder="Enter taxpayer's full name"
                      className="w-full px-4 py-2.5 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Employment Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setIsSalaried(true)}
                        className={`py-2.5 text-sm font-semibold rounded-xl border transition-all cursor-pointer ${
                          isSalaried 
                            ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Salaried
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsSalaried(false)}
                        className={`py-2.5 text-sm font-semibold rounded-xl border transition-all cursor-pointer ${
                          !isSalaried 
                            ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Self-Employed / Other
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Taxpayer Category (Age)</label>
                    <CustomDropdown
                      value={ageCategory}
                      options={AGE_OPTIONS}
                      onChange={setAgeCategory}
                    />
                  </div>
                </div>
              </div>

              {/* Annual Income Block */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 space-y-5 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
                  {isSalaried ? '2. Gross Income Sources (Annual)' : '2. Gross Revenue & Business Income Sources (Annual)'}
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      {isSalaried ? 'Gross Salaried Income' : 'Business turnover / Professional receipts'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 font-bold">₹</span>
                      </div>
                      <input 
                        type="number"
                        value={grossSalary}
                        onChange={(e) => setGrossSalary(e.target.value)}
                        placeholder="0"
                        className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <p className="text-xs text-slate-400">
                      {isSalaried ? 'Total yearly salary receipts without any deductions.' : 'Annual gross receipts, revenues, or net profits of your business/profession.'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Income from Other Sources</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 font-bold">₹</span>
                      </div>
                      <input 
                        type="number"
                        value={otherIncome}
                        onChange={(e) => setOtherIncome(e.target.value)}
                        placeholder="0"
                        className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <p className="text-xs text-slate-400">
                      {isSalaried ? 'Rental properties, freelance gains, commission etc.' : 'Rental properties, partnership profit shares, commission, or other income.'}
                    </p>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">Interest Income</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 font-bold">₹</span>
                      </div>
                      <input 
                        type="number"
                        value={interestIncome}
                        onChange={(e) => setInterestIncome(e.target.value)}
                        placeholder="0"
                        className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <p className="text-xs text-slate-400">Savings bank or FD interest rewards declared yearly.</p>
                  </div>

                  {/* Capital Gains (Heads of Income) Section */}
                  <div className="sm:col-span-2 border-t border-slate-100 pt-4 mt-2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">📈</span>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Capital Gains (Heads of Income)</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                          Short-Term Capital Gains (Equity)
                          <span className="group relative cursor-default">
                            <Info className="w-3.5 h-3.5 text-slate-400" />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                              Sec 111A - Equity shares & Equity oriented mutual funds. Taxed at flat 20% (Budget 2024 revised from 15% to 20%).
                            </span>
                          </span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-slate-400 font-bold">₹</span>
                          </div>
                          <input 
                            type="number"
                            value={stcgEquity}
                            onChange={(e) => setStcgEquity(e.target.value)}
                            placeholder="0"
                            className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <p className="text-xs text-slate-400">STCG on listed equity / shares / mutual funds.</p>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                          Long-Term Capital Gains (Equity)
                          <span className="group relative cursor-default">
                            <Info className="w-3.5 h-3.5 text-slate-400" />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                              Sec 112A - Equity shares & Equity oriented mutual funds. First ₹1.25 Lakh is exempt, excess is taxed at flat 12.5%.
                            </span>
                          </span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-slate-400 font-bold">₹</span>
                          </div>
                          <input 
                            type="number"
                            value={ltcgEquity}
                            onChange={(e) => setLtcgEquity(e.target.value)}
                            placeholder="0"
                            className="w-full pl-8 pr-4 py-2.5 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <p className="text-xs text-slate-400">LTCG on listed equity / shares / mutual funds.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deductions (Primarily Old Regime benefits) */}
              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 space-y-5 shadow-sm">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <h3 className="font-display text-lg font-bold text-slate-800">
                    {isSalaried ? '3. Deductions & Exemptions (Apply to Old Regime Only)' : '3. Business & General Deductions (Apply to Old Regime Only)'}
                  </h3>
                  <button 
                    onClick={() => setShowDetailedDeductions(!showDetailedDeductions)}
                    className="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1"
                  >
                    {showDetailedDeductions ? <><EyeOff className="w-3.5 h-3.5" /> Collapse Details</> : <><Eye className="w-3.5 h-3.5" /> Show Details</>}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {showDetailedDeductions && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                            Sec 80C Deductions
                            <span className="group relative cursor-default">
                              <Info className="w-3.5 h-3.5 text-slate-400" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                                EPF, PPF, Term Insurance, Tax Saver FD, ELSS, School Fees (Max ₹1.5 Lakh)
                              </span>
                            </span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <span className="text-slate-400 font-bold">₹</span>
                            </div>
                            <input 
                              type="number"
                              value={deduction80C}
                              onChange={(e) => setDeduction80C(e.target.value)}
                              placeholder="0"
                              className="w-full pl-8 pr-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                            Sec 80D Health Insurance
                            <span className="group relative cursor-default">
                              <Info className="w-3.5 h-3.5 text-slate-400" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                                Medical insurance premiums. Max ₹25,000 for self/family (₹50,000 for Seniors)
                              </span>
                            </span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <span className="text-slate-400 font-bold">₹</span>
                            </div>
                            <input 
                              type="number"
                              value={deduction80D}
                              onChange={(e) => setDeduction80D(e.target.value)}
                              placeholder="0"
                              className="w-full pl-8 pr-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                            Interest on Housing Loan (Sec 24b)
                            <span className="group relative cursor-default">
                              <Info className="w-3.5 h-3.5 text-slate-400" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                                Interest paid on home loans for self-occupied property. Max ₹2 Lakh
                              </span>
                            </span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <span className="text-slate-400 font-bold">₹</span>
                            </div>
                            <input 
                              type="number"
                              value={interestOnHomeLoan}
                              onChange={(e) => setInterestOnHomeLoan(e.target.value)}
                              placeholder="0"
                              className="w-full pl-8 pr-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                            NPS Contribution (80CCD 1B)
                            <span className="group relative cursor-default">
                              <Info className="w-3.5 h-3.5 text-slate-400" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                                Additional voluntary investments in National Pension System scheme. Max ₹50,000 Limit
                              </span>
                            </span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <span className="text-slate-400 font-bold">₹</span>
                            </div>
                            <input 
                              type="number"
                              value={deduction80CCD1B}
                              onChange={(e) => setDeduction80CCD1B(e.target.value)}
                              placeholder="0"
                              className="w-full pl-8 pr-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                            {isSalaried ? 'Exempt HRA Amount' : 'Rent Paid Deduction (Sec 80GG)'}
                            <span className="group relative cursor-default">
                              <Info className="w-3.5 h-3.5 text-slate-400" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                                {isSalaried 
                                  ? 'Total HRA exemption (you can calculate this using our dedicated HRA Calculator under calculators list).'
                                  : 'Under Section 80GG, individuals who do not receive HRA can claim a deduction for rent paid of up to ₹60,000 per year.'}
                              </span>
                            </span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <span className="text-slate-400 font-bold">₹</span>
                            </div>
                            <input 
                              type="number"
                              value={rentPaidForHra}
                              onChange={(e) => setRentPaidForHra(e.target.value)}
                              placeholder="0"
                              className="w-full pl-8 pr-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                            Interest Deduct (80TTA / 80TTB)
                            <span className="group relative cursor-default">
                              <Info className="w-3.5 h-3.5 text-slate-400" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 leading-normal">
                                Savings bank interest up to ₹10,000 (80TTA) or Senior FD/Savings up to ₹50,000 (80TTB)
                              </span>
                            </span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <span className="text-slate-400 font-bold">₹</span>
                            </div>
                            <input 
                              type="number"
                              value={deduction80TTA}
                              onChange={(e) => setDeduction80TTA(e.target.value)}
                              placeholder="0"
                              className="w-full pl-8 pr-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!showDetailedDeductions && (
                  <p className="text-xs text-slate-400 py-1 font-medium bg-slate-50 rounded-xl px-3 border border-dashed border-slate-200">
                    Old Regime deductions totaling ₹ {results ? results.oldRegime.totalDeductions.toLocaleString() : '0'} are currently applied to calculations. Expand to edit.
                  </p>
                )}
              </div>

              {/* Informational Guidelines Card */}
              <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 text-sm my-4 text-orange-900 leading-normal">
                <div className="flex gap-3">
                  <span className="text-lg">📢</span>
                  <div>
                    <h5 className="font-bold mb-1">Tax Slab Information for FY 2026-27 (AY 2027-28):</h5>
                    <ul className="list-disc pl-5 mt-1 text-xs text-slate-600 space-y-1 leading-normal">
                      {isSalaried ? (
                        <>
                          <li><strong>New Tax Regime standard deduction</strong> is <strong>₹ 75,000</strong> for all salaried individuals.</li>
                          <li><strong>New tax regime slabs:</strong> Tax-free up to ₹ 4 Lakh, 5% from ₹ 4L to ₹ 8L, 10% from ₹ 8L to ₹ 12L, 15% from ₹ 12L to ₹ 16L, 20% from ₹ 16L to ₹ 20L, 25% from ₹ 20L to ₹ 24L, and 30% above ₹ 24 Lakh.</li>
                          <li>Salaried individuals with a gross salary of up to <strong>₹ 12.75 Lakhs</strong> (claiming the standard deduction) enjoy <strong>Zero</strong> tax liability under the New Tax Regime (due to 87A rebate).</li>
                        </>
                      ) : (
                        <>
                          <li><strong>Standard deduction</strong> is <strong>not applicable</strong> for self-employed or other non-salaried tax filers.</li>
                          <li><strong>New tax regime slabs:</strong> Tax-free up to ₹ 4 Lakh, 5% from ₹ 4L to ₹ 8L, 10% from ₹ 8L to ₹ 12L, 15% from ₹ 12L to ₹ 16L, 20% from ₹ 16L to ₹ 20L, 25% from ₹ 20L to ₹ 24L, and 30% above ₹ 24 Lakh.</li>
                          <li>Self-employed individuals with total taxable income up to <strong>₹ 12.00 Lakhs</strong> enjoy <strong>Zero</strong> tax liability under the New Tax Regime (due to 87A rebate).</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* ITR Filing Document Checklist */}
              <div id="itr-filing-checklist-card" className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm space-y-4">
                <div 
                  className="flex justify-between items-center cursor-pointer select-none"
                  onClick={() => setChecklistExpanded(!checklistExpanded)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                      <ClipboardList className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-base flex items-center gap-2">
                        ITR Filing Checklist
                        <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {isSalaried ? 'Salaried' : 'Self-Employed'}
                        </span>
                      </h4>
                      <p className="text-xs text-slate-400">Essential documents for filing your {isSalaried ? 'ITR-1/ITR-2' : 'ITR-3/ITR-4'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {/* Completion status indicator badge */}
                    <div className={`px-2.5 py-1 rounded-lg text-xs font-bold leading-none ${
                        (isSalaried ? salariedChecklist : selfEmployedChecklist).length > 0 &&
                        (isSalaried ? salariedChecklist : selfEmployedChecklist).every(item => checkedItems.includes(item.id))
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-orange-50 text-orange-600'
                    }`}>
                      {(isSalaried ? salariedChecklist : selfEmployedChecklist).filter(item => checkedItems.includes(item.id)).length} / {(isSalaried ? salariedChecklist : selfEmployedChecklist).length}
                    </div>
                    <button 
                      type="button" 
                      className="text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                    >
                      {checklistExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {checklistExpanded && (
                    <motion.div
                      key="checklist-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden space-y-4 pt-2"
                    >
                      {/* Dynamic Progress Bar */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-slate-600">Document Gathering Progress</span>
                          <span className="font-bold text-slate-800">
                            {Math.round(
                              ((isSalaried ? salariedChecklist : selfEmployedChecklist).filter(item => checkedItems.includes(item.id)).length / 
                              (isSalaried ? salariedChecklist : selfEmployedChecklist).length) * 100
                            )}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${((isSalaried ? salariedChecklist : selfEmployedChecklist).filter(item => checkedItems.includes(item.id)).length / 
                              (isSalaried ? salariedChecklist : selfEmployedChecklist).length) * 100}%` 
                            }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          Check off the boxes below as you gather the required documents. This checklist is optimized for your filing of <strong>FY 2026-27</strong>.
                        </p>
                      </div>

                      {/* Checklist Items list */}
                      <ul id="checklist-items-list" className="space-y-2 max-h-96 overflow-y-auto pr-1">
                        {(isSalaried ? salariedChecklist : selfEmployedChecklist).map((item) => {
                          const isChecked = checkedItems.includes(item.id);
                          return (
                            <li 
                              key={item.id}
                              onClick={() => {
                                setCheckedItems(prev => 
                                  prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id]
                                );
                              }}
                              className={`flex gap-3 p-3 rounded-xl border transition-all cursor-pointer group ${
                                isChecked 
                                  ? 'bg-slate-50/50 border-slate-200' 
                                  : 'bg-white border-slate-150 hover:bg-slate-50 hover:border-slate-300'
                              }`}
                            >
                              <div className="pt-0.5">
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                                  isChecked 
                                    ? 'bg-orange-500 border-orange-500 text-white shadow-sm shadow-orange-500/20' 
                                    : 'border-slate-300 bg-white group-hover:border-orange-400'
                                }`}>
                                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </div>
                              </div>
                              <div className="space-y-0.5 text-left">
                                <span className={`text-sm font-semibold block transition-colors ${
                                  isChecked ? 'text-slate-400 line-through' : 'text-slate-800'
                                }`}>
                                  {item.title}
                                </span>
                                <span className="text-xs text-slate-500 block leading-normal">
                                  {item.desc}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Action options */}
                      <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-100">
                        <span className="text-slate-400">Keep this handy for a smooth filing season.</span>
                        {(isSalaried ? salariedChecklist : selfEmployedChecklist).some(item => checkedItems.includes(item.id)) && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const currentIds = (isSalaried ? salariedChecklist : selfEmployedChecklist).map(item => item.id);
                              setCheckedItems(prev => prev.filter(id => !currentIds.includes(id)));
                            }}
                            className="text-orange-500 hover:text-orange-600 font-bold hover:underline cursor-pointer"
                          >
                            Clear Checklist
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Detailed Side-by-Side Results & Recommendations (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {results && (
                <div className="bg-white text-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-200 space-y-6 sticky top-24">
                  
                  {/* Verdict and recommendation indicator */}
                  <div className="text-center bg-slate-50 border border-slate-150 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
                    <h4 className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">REGIME RECOMMENDATION</h4>
                    <p className="font-display text-2xl font-black">
                      {results.recommended === 'new' ? (
                        <span className="text-emerald-600">⚡ Use Revised New Regime</span>
                      ) : results.recommended === 'old' ? (
                        <span className="text-blue-600">📁 Use Classical Old Regime</span>
                      ) : (
                        <span className="text-orange-500">⚖️ Both are identical</span>
                      )}
                    </p>
                    {results.savings > 0 && (
                      <p className="text-sm mt-2 text-slate-600">
                        You will save <strong className="text-slate-900 font-bold text-base">₹ {results.savings.toLocaleString()}</strong> by using the suggested regime!
                      </p>
                    )}
                  </div>

                  {/* High level visual comparison blocks */}
                  <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                    <div className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
                      results.recommended === 'new' ? 'border-emerald-500/40 bg-emerald-50/50' : 'border-slate-200 bg-slate-50'
                    }`}>
                      <div className="flex justify-between items-center text-xs font-bold text-slate-500 border-b border-slate-100 pb-2 mb-2">
                        <span>NEW REGIME</span>
                        {results.recommended === 'new' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-500">Total Tax Payable</p>
                      <p className={`font-display text-lg sm:text-xl font-bold ${results.recommended === 'new' ? 'text-emerald-600' : 'text-slate-800'}`}>
                        ₹ {Math.round(results.newRegime.totalTax).toLocaleString()}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">Taxable: ₹ {results.newRegime.taxableIncome.toLocaleString()}</p>
                    </div>

                    <div className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
                      results.recommended === 'old' ? 'border-blue-500/40 bg-blue-50/50' : 'border-slate-200 bg-slate-50'
                    }`}>
                      <div className="flex justify-between items-center text-xs font-bold text-slate-500 border-b border-slate-100 pb-2 mb-2">
                        <span>OLD REGIME</span>
                        {results.recommended === 'old' && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-500">Total Tax Payable</p>
                      <p className={`font-display text-lg sm:text-xl font-bold ${results.recommended === 'old' ? 'text-blue-600' : 'text-slate-800'}`}>
                        ₹ {Math.round(results.oldRegime.totalTax).toLocaleString()}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">Taxable: ₹ {results.oldRegime.taxableIncome.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Download PDF Summary Action */}
                  <div className="pt-2">
                    <button
                      onClick={generatePDF}
                      className="w-full flex items-center justify-center gap-4 px-6 py-3.5 text-sm font-bold text-white bg-[#3150A0] hover:bg-[#274182] rounded-2xl transition-all duration-300 shadow-md shadow-[#3150A0]/10 hover:shadow-xl hover:shadow-[#3150A0]/25 active:scale-98 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Glowing reflection hover overlay */}
                      <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Interactive Icon Box with custom dynamic translations */}
                      <div className="flex items-center justify-center bg-white/15 p-1.5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                        <Download className="w-5 h-5 text-blue-100 group-hover:translate-y-0.5 group-active:translate-y-1 transition-transform duration-150" />
                      </div>

                      <div className="flex flex-col items-start text-left">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-blue-200">Instant Download</span>
                        <span className="text-sm font-extrabold text-white">Download Summary PDF</span>
                      </div>
                    </button>
                  </div>

                  {/* Recharts Bar Chart Visualization */}
                  <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4">
                    <h5 className="font-bold text-xs text-slate-500 border-b border-slate-150 pb-2 mb-4 uppercase tracking-wider">
                      Tax Comparison Chart
                    </h5>
                    <div className="h-40 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            {
                              name: 'Old Regime',
                              'Total Tax': Math.round(results.oldRegime.totalTax),
                              color: '#3b82f6',
                            },
                            {
                              name: 'New Regime',
                              'Total Tax': Math.round(results.newRegime.totalTax),
                              color: '#10b981',
                            }
                          ]}
                          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                        >
                          <XAxis 
                            dataKey="name" 
                            stroke="#64748b" 
                            fontSize={11}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis 
                            stroke="#64748b" 
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(val) => val >= 100000 ? `₹${(val/100000).toFixed(1)}L` : `₹${(val/1000).toFixed(0)}k`}
                          />
                          <Tooltip 
                            content={<CustomTooltip />}
                            cursor={{ fill: 'rgba(0, 0, 0, 0.03)', radius: 8 }}
                          />
                          <Bar 
                            dataKey="Total Tax" 
                            radius={[6, 6, 0, 0]}
                            barSize={50}
                          >
                            <Cell fill="#3b82f6" />
                            <Cell fill="#10b981" />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Side-by-Side comparison table detail */}
                  <div className="space-y-3.5">
                    <h5 className="font-bold text-xs text-slate-500 border-b border-slate-200 pb-2 uppercase tracking-wider">Detailed comparison</h5>
                    
                    <div className="space-y-2.5 text-xs">
                      <div className="flex justify-between text-slate-500">
                        <span>Gross Annual Income:</span>
                        <span className="text-slate-800 font-semibold">₹ {results.newRegime.grossIncome.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between text-slate-500">
                        <span>Standard & Other Deductions:</span>
                        <span className="text-slate-800 font-semibold">
                          New: ₹ {results.newRegime.totalDeductions.toLocaleString()} <span className="text-slate-300">|</span> Old: ₹ {results.oldRegime.totalDeductions.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between text-slate-500 border-b border-slate-100 pb-2">
                        <span>Net Taxable Income:</span>
                        <span className="text-slate-800 font-semibold">
                          New: ₹ {results.newRegime.taxableIncome.toLocaleString()} <span className="text-slate-300">|</span> Old: ₹ {results.oldRegime.taxableIncome.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between text-slate-500">
                        <span>Tax computed on normal slabs:</span>
                        <span className="text-slate-800 font-semibold">
                          New: ₹ {results.newRegime.slabBaseTax.toLocaleString()} <span className="text-slate-300">|</span> Old: ₹ {results.oldRegime.slabBaseTax.toLocaleString()}
                        </span>
                      </div>

                      {(results.newRegime.stcgTax > 0 || results.oldRegime.stcgTax > 0) && (
                        <div className="flex justify-between text-slate-500">
                          <span>Special Tax on STCG (20%):</span>
                          <span className="text-slate-800 font-semibold">
                            New: ₹ {results.newRegime.stcgTax.toLocaleString()} <span className="text-slate-300">|</span> Old: ₹ {results.oldRegime.stcgTax.toLocaleString()}
                          </span>
                        </div>
                      )}

                      {(results.newRegime.ltcgTax > 0 || results.oldRegime.ltcgTax > 0) && (
                        <div className="flex justify-between text-slate-500">
                          <span>Special Tax on LTCG (12.5%):</span>
                          <span className="text-slate-800 font-semibold flex items-center gap-1">
                            New: ₹ {results.newRegime.ltcgTax.toLocaleString()} <span className="text-slate-300">|</span> Old: ₹ {results.oldRegime.ltcgTax.toLocaleString()}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between text-slate-700 font-medium">
                        <span>Total Base Tax (Slab + Special):</span>
                        <span className="text-slate-900 font-bold">
                          New: ₹ {results.newRegime.baseTax.toLocaleString()} <span className="text-slate-300">|</span> Old: ₹ {results.oldRegime.baseTax.toLocaleString()}
                        </span>
                      </div>

                      {results.newRegime.rebate87A > 0 && (
                        <div className="flex justify-between text-emerald-600 font-semibold">
                          <span>Sec 87A Rebate (New Regime):</span>
                          <span>- ₹ {results.newRegime.rebate87A.toLocaleString()}</span>
                        </div>
                      )}

                      {results.newRegime.marginalRelief > 0 && (
                        <div className="flex justify-between text-amber-600 font-semibold">
                          <span>Marginal Relief (New Regime):</span>
                          <span>- ₹ {Math.round(results.newRegime.marginalRelief).toLocaleString()}</span>
                        </div>
                      )}

                      {results.oldRegime.rebate87A > 0 && (
                        <div className="flex justify-between text-blue-600 font-semibold">
                          <span>Sec 87A Rebate (Old Regime):</span>
                          <span>- ₹ {results.oldRegime.rebate87A.toLocaleString()}</span>
                        </div>
                      )}

                      <div className="flex justify-between text-slate-500">
                        <span>Health & Education Cess (4%):</span>
                        <span className="text-slate-800 font-semibold">
                          New: ₹ {Math.round(results.newRegime.cess).toLocaleString()} <span className="text-slate-300">|</span> Old: ₹ {Math.round(results.oldRegime.cess).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Slabs break-up view tab selectors */}
                  <div className="border-t border-slate-150 pt-5 space-y-4">
                    <div className="flex bg-slate-100 p-1 rounded-xl">
                      <button 
                        onClick={() => setActiveTab('comparison')}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                          activeTab === 'comparison' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Summary
                      </button>
                      <button 
                        onClick={() => setActiveTab('new-slabs')}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                          activeTab === 'new-slabs' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        New Slabs
                      </button>
                      <button 
                        onClick={() => setActiveTab('old-slabs')}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                          activeTab === 'old-slabs' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Old Slabs
                      </button>
                    </div>

                    <div className="max-h-52 overflow-y-auto pr-1">
                      {activeTab === 'comparison' && (
                        <div className="text-xs text-slate-500 space-y-2.5">
                          <p className="leading-relaxed">
                            💡 <strong>Recommendation Note:</strong> The platform calculated that you are better off using the{' '}
                            <span className="text-slate-900 font-bold">{results.recommended === 'new' ? 'Revised New' : 'Old'} tax regime</span>.
                          </p>
                          <p className="leading-relaxed">
                            The Old Regime depends heavily on personal investment proofs, requiring you to lock investment assets in PPF, ELSS funds, or carry mortgage payments.
                          </p>
                          <p className="leading-relaxed text-[11px] text-slate-400">
                            * Tax calculations here exclude cess, basic surcharge (applied automatically above 50 Lakhs) and Sec 80CCD(2) employer contributions. Consultation from expert consultants is suggested before filing return forms.
                          </p>
                        </div>
                      )}

                      {activeTab === 'new-slabs' && (
                        <div className="space-y-2 text-xs">
                          <p className="text-slate-500 mb-2">Detailed calculation under revised New Regime:</p>
                          {results.newRegime.slabTax.map((slab, i) => (
                            <div key={i} className="flex justify-between py-1 border-b border-slate-100">
                              <span className="text-slate-500">{slab.range} ({slab.rate}):</span>
                              <span className="text-slate-800 font-bold">₹ {Math.round(slab.amount).toLocaleString()}</span>
                            </div>
                          ))}
                          <div className="flex justify-between pt-2">
                            <span className="font-bold text-slate-600">Total Slab Tax:</span>
                            <span className="font-bold text-slate-900">₹ {Math.round(results.newRegime.baseTax).toLocaleString()}</span>
                          </div>
                        </div>
                      )}

                      {activeTab === 'old-slabs' && (
                        <div className="space-y-2 text-xs">
                          <p className="text-slate-500 mb-2">Detailed calculation under Classical Old Regime:</p>
                          {results.oldRegime.slabTax.map((slab, i) => (
                            <div key={i} className="flex justify-between py-1 border-b border-slate-100">
                              <span className="text-slate-500">{slab.range} ({slab.rate}):</span>
                              <span className="text-slate-800 font-bold">₹ {Math.round(slab.amount).toLocaleString()}</span>
                            </div>
                          ))}
                          <div className="flex justify-between pt-2">
                            <span className="font-bold text-slate-600">Total Slab Tax:</span>
                            <span className="font-bold text-slate-900">₹ {Math.round(results.oldRegime.baseTax).toLocaleString()}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Professional Help Sidebar CTA Block */}
                  <div className="bg-gradient-to-br from-orange-500/[0.04] to-orange-500/[0.08] border border-orange-200 rounded-2xl p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      <h4 className="text-xs font-bold text-orange-600 uppercase tracking-widest">PRO HELP AVAILABLE</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal">
                      Get maximum tax refunds, direct query matching, and error-free tax filing by India's top professionals.
                    </p>
                    <a 
                      href="https://desk.makeeazy.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full text-center py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all shadow-md hover:shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer group"
                    >
                      Get Your ITR filed by Experts
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>

                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
