import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calculator as CalculatorIcon } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

export default function TdsLateFeeCalculator() {
  const [dueDate, setDueDate] = useState('');
  const [filingDate, setFilingDate] = useState('');
  const [tdsAmount, setTdsAmount] = useState('');

  const [delayDays, setDelayDays] = useState(0);
  const [lateFee, setLateFee] = useState(0);

  useEffect(() => {
    if (!dueDate || !filingDate) {
      setDelayDays(0);
      setLateFee(0);
      return;
    }

    const start = new Date(dueDate);
    const end = new Date(filingDate);
    const timeDiff = end.getTime() - start.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff <= 0) {
      setDelayDays(0);
      setLateFee(0);
      return;
    }

    setDelayDays(daysDiff);

    // Calculate Late Fee - Rs 200 per day
    let totalFee = daysDiff * 200;

    // Max fee is the TDS amount
    const maxFee = parseFloat(tdsAmount) || 0;
    
    if (tdsAmount && maxFee > 0) {
      setLateFee(Math.min(totalFee, maxFee));
    } else {
      setLateFee(totalFee);
    }
  }, [dueDate, filingDate, tdsAmount]);

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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center">
              <CalculatorIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-[#3150A0]">TDS Late Fee Calculator</h1>
              <p className="text-slate-500 mt-1">Estimate your TDS late filing fees (Section 404 of Income Tax Act 2025)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Form Section */}
            <div className="space-y-6">
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Due Date of Filing</label>
                <DatePicker 
                  selected={dueDate ? new Date(dueDate) : null}
                  onChange={(date: Date | null) => setDueDate(date ? format(date, 'yyyy-MM-dd') : '')}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">TDS Amount Deducted (₹) <span className="text-slate-400 font-normal">(Optional)</span></label>
                <input 
                  type="number" 
                  placeholder="e.g. 5000"
                  value={tdsAmount}
                  onChange={(e) => setTdsAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <p className="text-xs text-slate-500">Under the Income Tax Act 2025, late fee cannot exceed the amount of TDS deductible.</p>
              </div>

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

                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Late Fee <br/><span className="text-xs text-slate-400">(₹ 200 per day)</span>:</span>
                    <span className="text-xl font-bold text-blue-600">₹ {lateFee.toLocaleString()}</span>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-slate-900 text-lg">Total Late Fee<br/>Payable:</span>
                      <span className="text-3xl font-display font-bold text-[#3150A0]">₹ {lateFee.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 leading-normal text-justify">
                  <strong>Note:</strong> Under Section 404 of the Income Tax Act 2025, a late fee of ₹ 200 per day is applicable for delay in filing TDS returns. The total late fee cannot exceed the total amount of TDS deducted. This calculation focuses on late fee and does not include penal interest on delayed deposit.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
