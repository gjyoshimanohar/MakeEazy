import React from 'react';
import { X, Printer, CheckCircle, Award, Shield } from 'lucide-react';

interface PayslipItem {
  month: string;
  basic: number;
  hra: number;
  special: number;
  pf: number;
  profTax: number;
  taxDeducted: number;
  status: string;
}

interface PayslipModalProps {
  isOpen: boolean;
  onClose: () => void;
  payslip: PayslipItem | null;
  employeeName: string;
  empId: string;
  role: string;
  department: string;
}

export default function PayslipModal({ 
  isOpen, 
  onClose, 
  payslip, 
  employeeName, 
  empId, 
  role, 
  department 
}: PayslipModalProps) {
  if (!isOpen || !payslip) return null;

  const basic = payslip.basic;
  const hra = payslip.hra;
  const special = payslip.special;
  
  const pf = payslip.pf;
  const profTax = payslip.profTax;
  const taxDeducted = payslip.taxDeducted;

  const grossEarnings = basic + hra + special;
  const totalDeductions = pf + profTax + taxDeducted;
  const netSalary = grossEarnings - totalDeductions;

  return (
    <div 
      id="payslip-modal-container-wrapper"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
    >
      <div 
        className="w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl animate-in fade-in duration-200 flex flex-col"
        id="payslip-modal-container"
      >
        {/* Header Bar */}
        <div className="bg-[#3150A0] text-white px-6 py-4.5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-400" />
            <span className="font-extrabold text-sm uppercase tracking-wider">MakeEazy Advisory Private Limited</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Close payslip modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Payslip Body content */}
        <div className="p-8 space-y-6 text-slate-800 font-sans overflow-y-auto flex-1" id="payslip-modal-body">
          
          {/* Header metadata */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-5">
            <div>
              <p className="text-3xs text-slate-500 uppercase tracking-widest font-bold">Document Title</p>
              <h3 className="text-lg font-extrabold text-slate-800 leading-tight">Pay Slip for {payslip.month}</h3>
              <p className="text-4xs text-slate-400 mt-1">Generated electronically on {new Date().toLocaleDateString('en-IN')}</p>
            </div>
            <div className="text-right">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-3xs font-extrabold px-3 py-1 rounded-full uppercase">
                {payslip.status}
              </span>
            </div>
          </div>

          {/* Employee & Company breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs bg-slate-50 p-4.5 rounded-2xl border border-slate-100">
            <div>
              <p className="text-slate-400 text-4xs uppercase tracking-wider font-bold">Employee Name</p>
              <p className="font-bold text-slate-800 mt-0.5">{employeeName}</p>
            </div>
            <div>
              <p className="text-slate-400 text-4xs uppercase tracking-wider font-bold">Employee IDNo.</p>
              <p className="font-bold text-slate-800 mt-0.5">{empId}</p>
            </div>
            <div>
              <p className="text-slate-400 text-4xs uppercase tracking-wider font-bold">Department</p>
              <p className="font-bold text-slate-700 mt-0.5">{department}</p>
            </div>
            <div>
              <p className="text-slate-400 text-4xs uppercase tracking-wider font-bold">Designation</p>
              <p className="font-bold text-slate-700 mt-0.5">{role}</p>
            </div>
          </div>

          {/* Core ledger tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Earnings Breakdown */}
            <div className="border border-slate-150 rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-[#3150A0]/5 px-4 py-2.5 border-b border-slate-150">
                <span className="text-xs font-bold text-[#3150A0] uppercase tracking-wider">Earnings (Credits)</span>
              </div>
              <div className="divide-y divide-slate-100 text-xs">
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-slate-600">Basic Salary & DA</span>
                  <span className="font-bold">₹{basic.toLocaleString('en-IN')}</span>
                </div>
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-slate-600">House Rent Allowance (HRA)</span>
                  <span className="font-bold">₹{hra.toLocaleString('en-IN')}</span>
                </div>
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-slate-600">Special Advisory Allowance</span>
                  <span className="font-bold">₹{special.toLocaleString('en-IN')}</span>
                </div>
                <div className="px-4 py-3 bg-slate-50/50 flex justify-between font-bold text-slate-850 mt-auto border-t border-slate-200">
                  <span className="text-[#3150A0]">Gross Earnings (A)</span>
                  <span className="text-slate-800 font-extrabold">₹{grossEarnings.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Deductions Breakdown */}
            <div className="border border-slate-150 rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-rose-50/50 px-4 py-2.5 border-b border-slate-150">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider font-bold">Deductions (Debits)</span>
              </div>
              <div className="divide-y divide-slate-100 text-xs">
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-slate-600">Employee Provident Fund (EPF)</span>
                  <span className="font-bold text-slate-700">₹{pf.toLocaleString('en-IN')}</span>
                </div>
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-slate-600">Professional Tax (P.Tax)</span>
                  <span className="font-bold text-slate-700">₹{profTax.toLocaleString('en-IN')}</span>
                </div>
                <div className="px-4 py-2.5 flex justify-between">
                  <span className="text-slate-600">Tax Deducted At Source (TDS)</span>
                  <span className="font-bold text-slate-700">₹{taxDeducted.toLocaleString('en-IN')}</span>
                </div>
                <div className="px-4 py-3 bg-slate-50/50 flex justify-between font-bold text-rose-700 mt-auto border-t border-slate-200">
                  <span>Gross Deductions (B)</span>
                  <span className="text-rose-600 font-extrabold">₹{totalDeductions.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Grand Net Credited */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div>
              <p className="text-emerald-800 text-xs font-bold uppercase tracking-wider">Net Account Credit Payee Amount (A - B)</p>
              <p className="text-4xs text-emerald-600/90 mt-0.5">Credited to registered HDFC Bank Limited (A/C No: *******9402)</p>
            </div>
            <p className="text-2xl font-black text-emerald-600 leading-none">
              ₹{netSalary.toLocaleString('en-IN')}
            </p>
          </div>

          {/* Institutional note */}
          <div className="text-3xs text-slate-400 bg-slate-50/55 p-3.5 rounded-xl text-center leading-relaxed border border-slate-100 space-y-1">
            <p className="font-bold text-slate-500">🛡️ Electronic Signature Verification Approved</p>
            <p>This is a computerized documentation receipt. No physical authorized signature is required under Indian compliance guidelines.</p>
          </div>

        </div>

        {/* Footer controls */}
        <div className="px-6 py-4.5 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold text-xs transition-colors"
          >
            Close Viewer
          </button>
          <button
            onClick={() => {
              window.focus();
              try {
                window.print();
              } catch (e) {
                console.error("Print failed", e);
                window.parent?.print();
              }
            }}
            className="px-5 py-2 rounded-xl bg-[#3150A0] hover:bg-blue-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Voucher Letterhead
          </button>
        </div>

      </div>
    </div>
  );
}
