import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calculator as CalculatorIcon } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

export default function TdsInterestCalculator() {
  const [deductionDate, setDeductionDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [depositDate, setDepositDate] = useState('');
  const [tdsAmount, setTdsAmount] = useState('');

  const [monthsDelayed, setMonthsDelayed] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    if (!deductionDate || !dueDate || !depositDate || !tdsAmount) {
      setMonthsDelayed(0);
      setInterest(0);
      return;
    }

    const deducted = new Date(deductionDate);
    const expected = new Date(dueDate);
    const deposited = new Date(depositDate);
    const amount = parseFloat(tdsAmount);

    if (isNaN(amount) || amount <= 0) {
      setMonthsDelayed(0);
      setInterest(0);
      return;
    }

    // Checking if deposited on or before due date
    if (deposited <= expected) {
      setMonthsDelayed(0);
      setInterest(0);
      return;
    }

    // Calculate months delayed (from date of deduction to date of payment)
    // Part of a month is considered as a full month
    const months = (deposited.getFullYear() - deducted.getFullYear()) * 12 + (deposited.getMonth() - deducted.getMonth()) + 1;

    if (months > 0) {
      setMonthsDelayed(months);
      const calculatedInterest = Math.floor(amount) * 0.015 * months;
      setInterest(calculatedInterest);
    } else {
      setMonthsDelayed(0);
      setInterest(0);
    }
  }, [deductionDate, dueDate, depositDate, tdsAmount]);

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
            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center">
              <CalculatorIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-[#3150A0]">TDS Interest Calculator</h1>
              <p className="text-slate-500 mt-1">Calculate interest on delayed deposit of TDS (Section 398(3)(a) of Income Tax Act 2025)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Form Section */}
            <div className="space-y-6">
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Date of Deduction</label>
                <DatePicker 
                  selected={deductionDate ? new Date(deductionDate) : null}
                  onChange={(date: Date | null) => setDeductionDate(date ? format(date, 'yyyy-MM-dd') : '')}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Due Date of Deposit</label>
                <DatePicker 
                  selected={dueDate ? new Date(dueDate) : null}
                  onChange={(date: Date | null) => setDueDate(date ? format(date, 'yyyy-MM-dd') : '')}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Actual Date of Deposit</label>
                <DatePicker 
                  selected={depositDate ? new Date(depositDate) : null}
                  onChange={(date: Date | null) => setDepositDate(date ? format(date, 'yyyy-MM-dd') : '')}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">TDS Amount (₹)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 10000"
                  value={tdsAmount}
                  onChange={(e) => setTdsAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
              </div>

            </div>

            {/* Results Section */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                <h3 className="text-lg font-bold text-[#3150A0] mb-6 border-b border-slate-200 pb-4">Calculation Summary</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Period of Delay:</span>
                    <span className="font-semibold text-slate-900">{monthsDelayed} {monthsDelayed === 1 ? 'month' : 'months'}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Interest Payable <br/><span className="text-xs text-slate-400">(@1.5% per month)</span>:</span>
                    <span className="text-xl font-bold text-rose-600">₹ {Math.round(interest).toLocaleString()}</span>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-slate-900 text-lg">Total Amount<br/>(TDS + Interest):</span>
                      <span className="text-3xl font-display font-bold text-[#3150A0]">₹ {Math.round(parseFloat(tdsAmount || '0') + interest).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 leading-normal text-justify">
                  <strong>Note:</strong> Under Section 398(3)(a) of the Income Tax Act 2025, if TDS is deducted but not deposited on time, interest is charged @ 1.5% per month or part of a month. It is calculated from the date of deduction to the actual date of payment.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
