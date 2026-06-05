import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calculator as CalculatorIcon, Home } from 'lucide-react';

export default function HraCalculator() {
  const [basicSalary, setBasicSalary] = useState('');
  const [hraReceived, setHraReceived] = useState('');
  const [rentPaid, setRentPaid] = useState('');
  const [isMetro, setIsMetro] = useState(false);

  const [exemptedHra, setExemptedHra] = useState(0);
  const [taxableHra, setTaxableHra] = useState(0);

  useEffect(() => {
    const basic = parseFloat(basicSalary) || 0;
    const hra = parseFloat(hraReceived) || 0;
    const rent = parseFloat(rentPaid) || 0;

    if (basic <= 0 || hra <= 0) {
      setExemptedHra(0);
      setTaxableHra(0);
      return;
    }

    // Calculation rules:
    // 1. Actual HRA received
    // 2. 50% of salary (for metro) or 40% of salary (for non-metro)
    // 3. Rent paid minus 10% of salary
    
    const condition1 = hra;
    const condition2 = isMetro ? basic * 0.5 : basic * 0.4;
    const condition3 = Math.max(0, rent - (basic * 0.1));

    const exemption = Math.min(condition1, condition2, condition3);
    const taxable = Math.max(0, hra - exemption);

    setExemptedHra(exemption);
    setTaxableHra(taxable);
  }, [basicSalary, hraReceived, rentPaid, isMetro]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer" onClick={() => window.location.href = '/'}>
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
            
            <a href="/calculators" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-500 transition-colors group">
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
              <Home className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-[#3150A0]">HRA Exemption Calculator</h1>
              <p className="text-slate-500 mt-1">Calculate your House Rent Allowance (HRA) tax exemption.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Form Section */}
            <div className="space-y-6">

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Basic Salary + DA</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 font-semibold">₹</span>
                  </div>
                  <input 
                    type="number" 
                    placeholder="e.g. 500000"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <p className="text-xs text-slate-500">Total amount received during the period (usually yearly).</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">HRA Received</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 font-semibold">₹</span>
                  </div>
                  <input 
                    type="number" 
                    placeholder="e.g. 200000"
                    value={hraReceived}
                    onChange={(e) => setHraReceived(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Total Rent Paid</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 font-semibold">₹</span>
                  </div>
                  <input 
                    type="number" 
                    placeholder="e.g. 240000"
                    value={rentPaid}
                    onChange={(e) => setRentPaid(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50">
                <input 
                  type="checkbox" 
                  id="metroCity"
                  checked={isMetro}
                  onChange={(e) => setIsMetro(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <label htmlFor="metroCity" className="text-slate-700 font-medium select-none cursor-pointer">
                  Do you live in a Metro City?
                </label>
              </div>
              <p className="text-xs text-slate-500">
                Metro cities include Delhi, Mumbai, Kolkata, and Chennai.
                <br />
                Bengaluru, Hyderabad, Pune, Ahmedabad (with effect from Tax Year 2026-27)
              </p>

            </div>

            {/* Results Section */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                <h3 className="text-lg font-bold text-[#3150A0] mb-6 border-b border-slate-200 pb-4">Exemption Summary</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Total HRA Received:</span>
                    <span className="font-semibold text-slate-900">₹ {parseFloat(hraReceived || '0').toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Exempted HRA:</span>
                    <span className="text-xl font-bold text-green-600">₹ {exemptedHra.toLocaleString()}</span>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-start flex-col sm:flex-row sm:items-end gap-2">
                      <span className="font-bold text-slate-900 text-lg">Taxable HRA:</span>
                      <span className="text-3xl font-display font-bold text-rose-600">₹ {taxableHra.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">This amount will be added to your taxable salary.</p>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 leading-normal text-justify">
                  <strong>Note:</strong> HRA exemption is calculated as the minimum of (1) Actual HRA received, (2) 50% of basic salary for metro cities or 40% for non-metros, and (3) Rent paid minus 10% of basic salary. Standard conditions apply as per the Income Tax Act.
                </div>

                {(exemptedHra > 0 || taxableHra > 0) && (
                  <div className="mt-6 border border-slate-200 rounded-xl p-5 bg-white text-sm">
                    <h4 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Step-by-Step Exemption Details</h4>
                    <p className="text-slate-600 mb-4">HRA exemption is the minimum of the following three conditions:</p>
                    <ol className="space-y-4 text-slate-700 list-decimal pl-5">
                      <li>
                        <span className="font-medium text-slate-900 block">Actual HRA Received</span>
                        <span className="font-semibold text-blue-600">₹ {(parseFloat(hraReceived) || 0).toLocaleString()}</span>
                      </li>
                      <li>
                        <span className="font-medium text-slate-900 block">{isMetro ? '50%' : '40%'} of Basic Salary</span>
                        <span className="text-slate-500 block text-xs mt-0.5">{isMetro ? '50%' : '40%'} of ₹ {(parseFloat(basicSalary) || 0).toLocaleString()}</span>
                        <span className="font-semibold text-blue-600">₹ {((parseFloat(basicSalary) || 0) * (isMetro ? 0.5 : 0.4)).toLocaleString()}</span>
                      </li>
                      <li>
                        <span className="font-medium text-slate-900 block">Rent Paid minus 10% of Basic Salary</span>
                        <span className="text-slate-500 block text-xs mt-0.5">₹ {(parseFloat(rentPaid) || 0).toLocaleString()} - ₹ {((parseFloat(basicSalary) || 0) * 0.1).toLocaleString()}</span>
                        <span className="font-semibold text-blue-600">₹ {Math.max(0, (parseFloat(rentPaid) || 0) - ((parseFloat(basicSalary) || 0) * 0.1)).toLocaleString()}</span>
                      </li>
                    </ol>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <p className="text-slate-600">The least of the above three amounts is exempted:</p>
                      <div className="flex justify-between items-center text-base mt-2">
                         <span className="font-bold text-slate-800">Total Exemption</span>
                         <span className="font-bold text-green-600 pb-1">₹ {exemptedHra.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
