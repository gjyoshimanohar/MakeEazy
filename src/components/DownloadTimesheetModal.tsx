import React, { useState } from "react";
import { Timesheet, EmployeeProfile } from "../types/employee";
import { Download, X } from "lucide-react";

interface DownloadTimesheetModalProps {
  onClose: () => void;
  timesheets: Timesheet[];
  employees?: EmployeeProfile[]; // If undefined, we assume it's for the logged in employee
  fixedEmployeeName?: string; // Informational
}

export function DownloadTimesheetModal({
  onClose,
  timesheets,
  employees,
  fixedEmployeeName,
}: DownloadTimesheetModalProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEmployeeEmail, setSelectedEmployeeEmail] = useState("");

  const handleDownload = () => {
    let filtered = timesheets;

    if (startDate) {
      filtered = filtered.filter((ts) => ts.date >= startDate);
    }
    if (endDate) {
      filtered = filtered.filter((ts) => ts.date <= endDate);
    }

    if (employees && selectedEmployeeEmail) {
      filtered = filtered.filter(
        (ts) => ts.employeeEmail === selectedEmployeeEmail,
      );
    }

    if (filtered.length === 0) {
      alert("No timesheets found for the selected period.");
      return;
    }

    const headers = [
      "ID",
      "Employee Name",
      "Email",
      "Date",
      "Service Type",
      "Hours",
      "Description",
      "Status",
    ];

    const rows = filtered.map((ts) => [
      `"${ts.id}"`,
      `"${ts.employeeName}"`,
      `"${ts.employeeEmail}"`,
      `"${ts.date}"`,
      `"${ts.serviceType}"`,
      ts.hours,
      `"${ts.description.replace(/"/g, '""')}"`,
      `"${ts.status}"`,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `timesheets_${startDate || "all"}_to_${endDate || "all"}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-800">
            Download Timesheet
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {employees ? (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                Select Employee
              </label>
              <select
                value={selectedEmployeeEmail}
                onChange={(e) => setSelectedEmployeeEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold outline-none focus:ring-2 focus:ring-[#3150A0]/20"
              >
                <option value="">All Employees</option>
                {employees.map((emp) => (
                  <option key={emp.email} value={emp.email}>
                    {emp.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="mb-4 text-sm font-bold text-slate-700 bg-blue-50 p-3 rounded-xl border border-blue-100">
              Downloading for:{" "}
              <span className="text-[#3150A0]">{fixedEmployeeName}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold outline-none focus:ring-2 focus:ring-[#3150A0]/20"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold outline-none focus:ring-2 focus:ring-[#3150A0]/20"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs uppercase tracking-widest font-bold rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 px-4 py-3 bg-[#3150A0] hover:bg-blue-800 text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
}
