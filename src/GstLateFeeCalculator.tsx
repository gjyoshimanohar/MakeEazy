import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowLeft, Calculator as CalculatorIcon, ChevronDown, Undo2, Check } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'motion/react';

const CURRENT_YEAR = new Date().getFullYear();

const MONTH_OPTIONS = Array.from({ length: 12 }, (_, i) => {
  const d = new Date(2000, i, 1);
  return { value: (i + 1).toString(), label: d.toLocaleString('default', { month: 'long' }) };
});

const YEAR_OPTIONS = Array.from({ length: 10 }, (_, i) => ({
  value: (CURRENT_YEAR - i).toString(),
  label: (CURRENT_YEAR - i).toString()
}));

const FY_OPTIONS = Array.from({ length: 10 }, (_, i) => {
  const y = CURRENT_YEAR - i;
  return {
    value: `${y - 1}-${y}`,
    label: `${y - 1}-${y.toString().slice(-2)}`
  };
});

const RETURN_OPTIONS = [
  { value: 'gstr3b', label: 'GSTR-3B (Regular)' },
  { value: 'gstr1', label: 'GSTR-1 (Regular)' },
  { value: 'gstr4', label: 'GSTR-4 (Composition)' },
  { value: 'gstr9', label: 'GSTR-9 (Annual Return)' },
  { value: 'gstr9c', label: 'GSTR-9C (Reconciliation Statement)' },
  { value: 'gstr10', label: 'GSTR-10 (Final Return)' },
];

const TURNOVER_3B_OPTIONS = [
  { value: 'upto1.5', label: 'Up to ₹ 1.5 Crores' },
  { value: '1.5to5', label: 'More than ₹ 1.5 Cr up to ₹ 5 Cr' },
  { value: 'above5', label: 'More than ₹ 5 Crores' },
];

const TURNOVER_9_OPTIONS = [
  { value: 'upto5', label: 'Up to ₹ 5 Crores' },
  { value: '5to20', label: 'More than ₹ 5 Cr up to ₹ 20 Cr' },
  { value: 'above20', label: 'More than ₹ 20 Crores' },
];

const CustomDropdown = ({ value, options, onChange, placeholder = "Select..." }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const selectedOption = options.find((o: any) => o.value === value);

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
            {options.map((opt: any, index: number) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={index}
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
};

export default function GstLateFeeCalculator() {
  const [returnType, setReturnType] = useState('gstr3b');
  
  const [periodMonth, setPeriodMonth] = useState((new Date().getMonth() + 1).toString());
  const [periodYear, setPeriodYear] = useState(CURRENT_YEAR.toString());
  const [financialYear, setFinancialYear] = useState(`${CURRENT_YEAR - 1}-${CURRENT_YEAR}`);

  const [dueDate, setDueDate] = useState('');
  const [filingDate, setFilingDate] = useState('');
  
  const [isNilReturn, setIsNilReturn] = useState(false);
  
  const [turnover, setTurnover] = useState('upto1.5');
  const [turnoverGstr9, setTurnoverGstr9] = useState('upto5');
  const [stateTurnover, setStateTurnover] = useState('');
  
  const [netTaxLiability, setNetTaxLiability] = useState('');

  const [delayDays, setDelayDays] = useState(0);
  const [lateFee, setLateFee] = useState(0);
  const [interest, setInterest] = useState(0);

  // Auto-calculate Due Date based on period selection
  const autoDueDate = useMemo(() => {
    let newDueDate = '';
    if (returnType === 'gstr3b' || returnType === 'gstr1') {
      let y = parseInt(periodYear);
      let m = parseInt(periodMonth);
      if (m === 12) {
        m = 1;
        y += 1;
      } else {
        m += 1;
      }
      const monthStr = m.toString().padStart(2, '0');
      const dayStr = returnType === 'gstr3b' ? '20' : '11';
      newDueDate = `${y}-${monthStr}-${dayStr}`;
    } else if (['gstr4', 'gstr9', 'gstr9c'].includes(returnType)) {
      const y = parseInt(financialYear.split('-')[0]);
      const ds = returnType === 'gstr4' ? '04-30' : '12-31';
      newDueDate = `${y + 1}-${ds}`;
    }
    return newDueDate;
  }, [returnType, periodMonth, periodYear, financialYear]);

  useEffect(() => {
    if (autoDueDate) {
      setDueDate(autoDueDate);
    }
  }, [autoDueDate]);

  // Main Calculation Logic
  useEffect(() => {
    if (!dueDate || !filingDate) {
      setDelayDays(0);
      setLateFee(0);
      setInterest(0);
      return;
    }

    const start = new Date(dueDate);
    const end = new Date(filingDate);
    const timeDiff = end.getTime() - start.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff <= 0) {
      setDelayDays(0);
      setLateFee(0);
      setInterest(0);
      return;
    }

    setDelayDays(daysDiff);

    let feePerDay = 0;
    let totalFee = 0;
    let maxFee = 10000;

    // Calculate Late Fee
    if (returnType === 'gstr3b' || returnType === 'gstr1') {
      feePerDay = isNilReturn ? 20 : 50;
      totalFee = daysDiff * feePerDay;
      if (isNilReturn) {
        maxFee = 500;
      } else {
        if (turnover === 'upto1.5') maxFee = 2000;
        else if (turnover === '1.5to5') maxFee = 5000;
        else if (turnover === 'above5') maxFee = 10000;
      }
    } else if (returnType === 'gstr4') {
      feePerDay = isNilReturn ? 20 : 50;
      totalFee = daysDiff * feePerDay;
      maxFee = isNilReturn ? 500 : 2000;
    } else if (returnType === 'gstr9') {
      if (turnoverGstr9 === 'upto5') feePerDay = 50;
      else if (turnoverGstr9 === '5to20') feePerDay = 100;
      else feePerDay = 200;
      
      totalFee = daysDiff * feePerDay;
      
      const stTurnover = parseFloat(stateTurnover) || 0;
      if (stTurnover > 0) {
        if (turnoverGstr9 === 'above20') {
          maxFee = stTurnover * 0.005; // 0.5% of turnover in State/UT
        } else {
          maxFee = stTurnover * 0.0004; // 0.04% of turnover in State/UT
        }
      } else {
        maxFee = Infinity; // Avoid applying cap if turnover not entered
      }
    } else if (returnType === 'gstr10') {
      feePerDay = 200;
      totalFee = daysDiff * feePerDay;
      maxFee = 10000;
    } else if (returnType === 'gstr9c') {
      totalFee = 0;
      maxFee = 0;
    }

    if (maxFee !== Infinity) {
      setLateFee(Math.min(totalFee, maxFee));
    } else {
      setLateFee(totalFee);
    }

    // Calculate Interest (18% p.a. on cash liability)
    if ((returnType === 'gstr3b' || returnType === 'gstr4') && !isNilReturn && netTaxLiability) {
      const liability = parseFloat(netTaxLiability) || 0;
      const calculatedInterest = (liability * 18 * daysDiff) / (365 * 100);
      setInterest(Math.round(calculatedInterest * 100) / 100);
    } else {
      setInterest(0);
    }
  }, [returnType, dueDate, filingDate, isNilReturn, turnover, turnoverGstr9, stateTurnover, netTaxLiability]);

  const showNilReturnCheckbox = ['gstr3b', 'gstr1', 'gstr4'].includes(returnType);
  const showLiabilityField = ['gstr3b', 'gstr4'].includes(returnType);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer" onClick={() => window.location.hash = '#'}>
              <img 
                src="/logo.png" 
                alt="Make Eazy Logo" 
                className="h-14 w-auto object-contain"
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
            
            <a href="#calculators" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Calculators
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
              <CalculatorIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-[#3150A0]">GST Late Fee Calculator</h1>
              <p className="text-slate-500 mt-1">Estimate late fees and interest across regular and annual GST returns</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Form Section */}
            <div className="space-y-6">

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Select GST Return</label>
                <CustomDropdown value={returnType} options={RETURN_OPTIONS} onChange={setReturnType} />
              </div>
              
              {/* Monthly Returns Conditional Inputs */}
              {['gstr3b', 'gstr1'].includes(returnType) && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Month</label>
                    <CustomDropdown value={periodMonth} options={MONTH_OPTIONS} onChange={setPeriodMonth} />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Year</label>
                    <CustomDropdown value={periodYear} options={YEAR_OPTIONS} onChange={setPeriodYear} />
                  </div>
                </div>
              )}

              {/* Annual Returns Conditional Inputs */}
              {['gstr4', 'gstr9', 'gstr9c'].includes(returnType) && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Financial Year</label>
                  <CustomDropdown value={financialYear} options={FY_OPTIONS} onChange={setFinancialYear} />
                </div>
              )}
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-slate-700">Due Date of Filing <span className="text-slate-400 font-normal">{(['gstr3b', 'gstr1', 'gstr4', 'gstr9', 'gstr9c'].includes(returnType)) ? '(Auto-calculated)' : ''}</span></label>
                  {autoDueDate && dueDate !== autoDueDate && (
                    <button 
                      onClick={() => setDueDate(autoDueDate)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 p-1.5 rounded-md"
                      title="Revert to calculated"
                    >
                      <Undo2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <DatePicker 
                  selected={dueDate ? new Date(dueDate) : null}
                  onChange={(date: Date | null) => setDueDate(date ? format(date, 'yyyy-MM-dd') : '')}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Actual Date of Filing</label>
                <DatePicker 
                  selected={filingDate ? new Date(filingDate) : null}
                  onChange={(date: Date | null) => setFilingDate(date ? format(date, 'yyyy-MM-dd') : '')}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {showNilReturnCheckbox && (
                <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <input 
                    type="checkbox" 
                    id="nilReturn"
                    checked={isNilReturn}
                    onChange={(e) => setIsNilReturn(e.target.checked)}
                    className="w-5 h-5 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                  />
                  <label htmlFor="nilReturn" className="text-slate-700 font-medium select-none cursor-pointer">
                    Is it a NIL Return?
                  </label>
                </div>
              )}

              {/* GSTR-3B / 1 Turnover Dropdown */}
              {!isNilReturn && (returnType === 'gstr3b' || returnType === 'gstr1') && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Aggregate Turnover in Preceding FY</label>
                  <CustomDropdown value={turnover} options={TURNOVER_3B_OPTIONS} onChange={setTurnover} />
                </div>
              )}

              {/* GSTR-9 Fields */}
              {returnType === 'gstr9' && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Aggregate Annual Turnover (AATO)</label>
                    <CustomDropdown value={turnoverGstr9} options={TURNOVER_9_OPTIONS} onChange={setTurnoverGstr9} />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Turnover in State/UT (₹) <span className="text-slate-400 font-normal">(Optional, for capped fee)</span></label>
                    <input 
                      type="number" 
                      placeholder="e.g. 10000000"
                      value={stateTurnover}
                      onChange={(e) => setStateTurnover(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                </>
              )}

              {/* Liability field for interest computation */}
              {!isNilReturn && showLiabilityField && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Net Tax Liability Paid in Cash (₹)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 10000"
                    value={netTaxLiability}
                    onChange={(e) => setNetTaxLiability(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                  <p className="text-xs text-slate-500">Interest is calculated @18% p.a. on the net cash tax liability for delays.</p>
                </div>
              )}

            </div>

            {/* Results Section */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                <h3 className="text-lg font-bold text-[#3150A0] mb-6 border-b border-slate-200 pb-4">Calculation Summary</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Delay in Filing:</span>
                    <span className="font-semibold text-slate-900">{delayDays} {delayDays === 1 ? 'day' : 'days'}</span>
                  </div>

                  {returnType === 'gstr9c' ? (
                     <div className="flex flex-col gap-2">
                       <span className="text-slate-600 font-medium pb-2">Late Fee Note:</span>
                       <p className="text-sm text-slate-900 leading-relaxed font-semibold">
                         There is no specific per-day late fee for GSTR-9C under Section 47. 
                         However, a general penalty under Section 125 up to ₹ 50,000 (₹ 25,000 CGST + ₹ 25,000 SGST) may be applied.
                       </p>
                     </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Total Late Fee <br/><span className="text-xs text-slate-400">(CGST + SGST)</span>:</span>
                        <span className="text-xl font-bold text-orange-600">₹ {lateFee.toLocaleString()}</span>
                      </div>

                      {showLiabilityField && (
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Interest Payable <br/><span className="text-xs text-slate-400">(@18% p.a.)</span>:</span>
                          <span className="text-xl font-bold text-blue-600">₹ {interest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                      )}
                      
                      <div className="pt-6 border-t border-slate-200">
                        <div className="flex justify-between items-end">
                          <span className="font-bold text-slate-900 text-lg">Total Amount<br/>Payable:</span>
                          <span className="text-3xl font-display font-bold text-[#3150A0]">₹ {(lateFee + interest).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 leading-normal text-justify">
                  <strong>Note:</strong> Maximum late fee limits are calculated as per prevailing CBIC notifications including amnesty/rationalization schemes. Due dates are auto-calculated based on default timelines but you can manually override them if they were extended.
                </div>
              </div>
            </div>

          </div>

          {/* Detailed Info Section */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-display font-bold text-[#3150A0] mb-8">Understanding GST Late Fees & Interest</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">GSTR-3B & GSTR-1</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Nil Return:</strong> ₹20 per day (₹10 CGST + ₹10 SGST). Maximum cap is ₹500.</li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Regular Return:</strong> ₹50 per day (₹25 CGST + ₹25 SGST).</li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Max Cap (Turnover up to ₹1.5 Cr):</strong> ₹2,000.</li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Max Cap (Turnover ₹1.5 Cr to ₹5 Cr):</strong> ₹5,000.</li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Max Cap (Turnover &gt; ₹5 Cr):</strong> ₹10,000.</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">GSTR-4 (Composition Scheme)</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Nil Return:</strong> ₹20 per day. Maximum cap is ₹500.</li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Regular Return:</strong> ₹50 per day. Maximum cap is ₹2,000.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">GSTR-9 (Annual Return)</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Turnover up to ₹5 Cr:</strong> ₹50 per day. Max 0.04% of turnover in State/UT.</li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Turnover ₹5 Cr to ₹20 Cr:</strong> ₹100 per day. Max 0.04% of turnover in State/UT.</li>
                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> <strong>Turnover &gt; ₹20 Cr:</strong> ₹200 per day. Max 0.5% of turnover in State/UT.</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">Interest on Delayed Payment</h3>
                  <p className="text-slate-600 mb-2">Section 50 of the CGST Act prescribes interest for delayed tax payment:</p>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>Rate:</strong> 18% per annum.</li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>Calculation:</strong> Interest is calculated only on the <strong>net tax liability</strong> paid by debiting the electronic cash ledger (not on the gross liability or ITC offset).</li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>No Maximum Cap:</strong> Unlike late fees, there is no maximum limit for interest. It accrues until the taxes are fully paid.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
