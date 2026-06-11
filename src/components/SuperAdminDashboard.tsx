import React, { useState } from "react";
import {
  Check,
  X,
  Plus,
  Send,
  TrendingUp,
  PiggyBank,
  FileText,
  Users,
  Award,
  ShieldCheck,
  AlertCircle,
  CalendarCheck2,
  Clock,
  FolderKanban,
  Sparkles,
  Search,
  CheckCircle,
  Activity,
  UserPlus,
  Trash2,
  GraduationCap,
  Coins,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Edit,
  Bell,
  Download,
  X,
  Mail,
  Printer,
} from "lucide-react";
import {
  EmployeeProfile,
  Timesheet,
  LeaveApplication,
  ExpenseClaim,
  BusinessTask,
} from "../types/employee";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SuperAdminDashboardProps {
  employees: EmployeeProfile[];
  timesheets: Timesheet[];
  leaves: LeaveApplication[];
  expenses: ExpenseClaim[];
  tasks: BusinessTask[];
  onUpdateEmployees: (updated: EmployeeProfile[]) => void;
  onUpdateTimesheets: (updated: Timesheet[]) => void;
  onUpdateLeaves: (updated: LeaveApplication[]) => void;
  onUpdateExpenses: (updated: ExpenseClaim[]) => void;
  onUpdateTasks: (updated: BusinessTask[]) => void;
}

export default function SuperAdminDashboard({
  employees,
  timesheets,
  leaves,
  expenses,
  tasks,
  onUpdateEmployees,
  onUpdateTimesheets,
  onUpdateLeaves,
  onUpdateExpenses,
  onUpdateTasks,
}: SuperAdminDashboardProps) {
  // Tab states
  const [adminTab, setAdminTab] = useState<"approvals" | "tasks" | "employees">(
    "approvals",
  );
  const [approvalSubTab, setApprovalSubTab] = useState<
    "timesheets" | "leaves" | "expenses"
  >("timesheets");

  // Leave history filters and search
  const [adminLeaveSearch, setAdminLeaveSearch] = useState("");
  const [adminLeaveFilter, setAdminLeaveFilter] = useState<
    "All" | "Approved" | "Rejected"
  >("All");

  // Operational alerts & notification controls
  const [showNotifications, setShowNotifications] = useState(false);

  // Task assignment form states
  const [taskEmployee, setTaskEmployee] = useState(employees[0]?.email || "");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDueDate, setTaskDueDate] = useState(() => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    return futureDate.toISOString().substring(0, 10);
  });
  const [taskPriority, setTaskPriority] = useState<"High" | "Medium" | "Low">(
    "High",
  );
  const [taskDesc, setTaskDesc] = useState("");
  const [taskSuccessMsg, setTaskSuccessMsg] = useState("");

  // Employee Management states & input controls
  const [showAddForm, setShowAddForm] = useState(false);
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPin, setEmpPin] = useState("emp123");
  const [empStatus, setEmpStatus] = useState<
    "Active" | "On-Leave" | "Inactive"
  >("Active");
  const [empRole, setEmpRole] = useState("Senior GST & Tax Consultant");
  const [empDepartment, setEmpDepartment] = useState(
    "Taxation & Audit Division",
  );
  const [empDoj, setEmpDoj] = useState(() =>
    new Date().toISOString().substring(0, 10),
  );
  const [empQualification, setEmpQualification] = useState(
    "Chartered Accountant (CA)",
  );
  const [empKpi, setEmpKpi] = useState("9.0/10");

  // Custom salary structures (with ₹ Indian Currency styling standard)
  const [salBasic, setSalBasic] = useState("45000");
  const [salHra, setSalHra] = useState("18000");
  const [salSpecial, setSalSpecial] = useState("12000");
  const [salPf, setSalPf] = useState("2100");
  const [salProfTax, setSalProfTax] = useState("200");
  const [salTaxDeducted, setSalTaxDeducted] = useState("1515");

  const [empSuccessMsg, setEmpSuccessMsg] = useState("");
  const [empErrorMsg, setEmpErrorMsg] = useState("");

  // Editing state for existing employee details
  const [editingEmployee, setEditingEmployee] =
    useState<EmployeeProfile | null>(null);

  // Modal view for employee full details
  const [selectedEmployeeForModal, setSelectedEmployeeForModal] =
    useState<EmployeeProfile | null>(null);

  // Bulk edit state
  const [selectedForBulk, setSelectedForBulk] = useState<string[]>([]);

  const handleBulkStatusUpdate = (
    status: "Active" | "On-Leave" | "Inactive",
  ) => {
    const updated = employees.map((emp) => {
      if (selectedForBulk.includes(emp.email)) {
        return { ...emp, status };
      }
      return emp;
    });
    onUpdateEmployees(updated);
    setSelectedForBulk([]); // clear selection after update
  };

  const handlePrintPayslip = (emp: EmployeeProfile) => {
    const sBasic = emp.salaryDetails?.basic ?? 35000;
    const sHra = emp.salaryDetails?.hra ?? 14000;
    const sSpecial = emp.salaryDetails?.special ?? 8000;
    const sPf = emp.salaryDetails?.pf ?? 1800;
    const sProfTax = emp.salaryDetails?.profTax ?? 200;
    const sTds = emp.salaryDetails?.taxDeducted ?? 1000;

    const grossInc = sBasic + sHra + sSpecial;
    const totalDeduct = sPf + sProfTax + sTds;
    const netTakehome = grossInc - totalDeduct;

    const printContents = `
      <html>
        <head>
          <title>Payslip - ${emp.name}</title>
          <style>
            body { font-family: 'Inter', sans-serif; padding: 40px; color: #1e293b; }
            .header { border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
            .title { font-size: 24px; font-weight: 800; margin-bottom: 5px; color: #0f172a; }
            .subtitle { font-size: 14px; color: #64748b; }
            .emp-details { display: flex; justify-content: space-between; margin-bottom: 40px; background: #f8fafc; padding: 20px; border-radius: 8px; }
            .emp-details div { font-size: 14px; line-height: 1.6; }
            .emp-details strong { font-weight: 700; color: #334155; }
            .salary-table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
            .salary-table th { background: #f1f5f9; padding: 12px; text-align: left; font-size: 12px; text-transform: uppercase; color: #475569; }
            .salary-table td { padding: 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
            .salary-table td.amount { text-align: right; font-weight: 600; }
            .total-row { font-weight: 800; background: #f8fafc; }
            .total-row td { border-bottom: none; font-size: 16px; }
            .net-pay { margin-top: 20px; padding: 20px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; text-align: center; }
            .net-pay-amount { font-size: 24px; font-weight: 800; color: #059669; }
            .footer { margin-top: 60px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">MakeEazy Corporate Services</div>
            <div class="subtitle">Official Employee Payslip</div>
          </div>
          
          <div class="emp-details">
            <div>
              <strong>Employee Name:</strong> ${emp.name}<br/>
              <strong>Employee ID:</strong> ${emp.empId}<br/>
              <strong>Designation:</strong> ${emp.role}
            </div>
            <div style="text-align: right;">
              <strong>Date of Joining:</strong> ${emp.doj}<br/>
              <strong>Department:</strong> ${emp.department}<br/>
              <strong>Status:</strong> ${emp.status || "Active"}
            </div>
          </div>

          <table class="salary-table">
            <thead>
              <tr>
                <th style="width: 50%;">Earnings</th>
                <th style="width: 50%; text-align: right;">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Salary</td>
                <td class="amount">${sBasic.toLocaleString("en-IN")}</td>
              </tr>
              <tr>
                <td>House Rent Allowance (HRA)</td>
                <td class="amount">${sHra.toLocaleString("en-IN")}</td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td class="amount">${sSpecial.toLocaleString("en-IN")}</td>
              </tr>
              <tr class="total-row">
                <td>Gross Earnings</td>
                <td class="amount">${grossInc.toLocaleString("en-IN")}</td>
              </tr>
            </tbody>
          </table>

          <table class="salary-table">
            <thead>
              <tr>
                <th style="width: 50%;">Deductions</th>
                <th style="width: 50%; text-align: right;">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provident Fund (PF)</td>
                <td class="amount">${sPf.toLocaleString("en-IN")}</td>
              </tr>
              <tr>
                <td>Professional Tax</td>
                <td class="amount">${sProfTax.toLocaleString("en-IN")}</td>
              </tr>
              <tr>
                <td>Tax Deducted at Source (TDS)</td>
                <td class="amount">${sTds.toLocaleString("en-IN")}</td>
              </tr>
              <tr class="total-row">
                <td>Total Deductions</td>
                <td class="amount">${totalDeduct.toLocaleString("en-IN")}</td>
              </tr>
            </tbody>
          </table>

          <div class="net-pay">
            <div style="font-size: 14px; font-weight: 700; color: #065f46; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Net Take Home Pay</div>
            <div class="net-pay-amount">₹${netTakehome.toLocaleString("en-IN")}</div>
          </div>

          <div class="footer">
            This is a computer-generated document. No signature is required.
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(printContents);
      printWindow.document.close();
      printWindow.focus();
      // Give semantic styling time to load if necessary, though it's inline
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  };

  const parseFormattedDojToDateInputValue = (dojStr: string) => {
    if (!dojStr) return new Date().toISOString().substring(0, 10);
    const parts = dojStr.split("-");
    if (parts.length !== 3) return new Date().toISOString().substring(0, 10);
    const day = parts[0];
    const mmm = parts[1];
    const year = parts[2];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIdx = months.indexOf(mmm);
    const monthNum = monthIdx !== -1 ? monthIdx + 1 : 1;
    return `${year}-${String(monthNum).padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleStartEditEmployee = (emp: EmployeeProfile) => {
    setEditingEmployee(emp);
    setEmpName(emp.name);
    setEmpEmail(emp.email);
    setEmpPin(emp.pin);
    setEmpStatus(emp.status || "Active");
    setEmpRole(emp.role);
    setEmpDepartment(emp.department);
    setEmpQualification(emp.qualification || "");
    setEmpKpi(emp.kpiScore || "9.0/10");

    // Parse formatting join date
    setEmpDoj(parseFormattedDojToDateInputValue(emp.doj));

    // Populate salary details
    setSalBasic(String(emp.salaryDetails?.basic ?? 45000));
    setSalHra(String(emp.salaryDetails?.hra ?? 18000));
    setSalSpecial(String(emp.salaryDetails?.special ?? 12000));
    setSalPf(String(emp.salaryDetails?.pf ?? 2100));
    setSalProfTax(String(emp.salaryDetails?.profTax ?? 200));
    setSalTaxDeducted(String(emp.salaryDetails?.taxDeducted ?? 1515));

    setShowAddForm(true);
    setEmpSuccessMsg("");
    setEmpErrorMsg("");

    // Scroll smoothly to form
    const formElement = document.getElementById("consultant-registry-tab");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Collapsed states for individual salary breakdowns
  const [expandedSalaryEmail, setExpandedSalaryEmail] = useState<string | null>(
    null,
  );

  // Inline non-blocking safe confirm deletion state
  const [confirmDeleteEmail, setConfirmDeleteEmail] = useState<string | null>(
    null,
  );

  // Auto-update task assignment drop-down when employees list changes
  React.useEffect(() => {
    if (employees && employees.length > 0 && !taskEmployee) {
      setTaskEmployee(employees[0].email);
    }
  }, [employees]);

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    setEmpSuccessMsg("");
    setEmpErrorMsg("");

    if (!empName.trim() || !empEmail.trim()) {
      setEmpErrorMsg(
        "Please fill in employee name and corporate email address.",
      );
      return;
    }

    if (editingEmployee) {
      if (
        empEmail.toLowerCase() !== editingEmployee.email.toLowerCase() &&
        employees.some(
          (emp) => emp.email.toLowerCase() === empEmail.toLowerCase(),
        )
      ) {
        setEmpErrorMsg(
          "An employee profile is already registered under this email identifier.",
        );
        return;
      }
    } else {
      if (
        employees.some(
          (emp) => emp.email.toLowerCase() === empEmail.toLowerCase(),
        )
      ) {
        setEmpErrorMsg(
          "An employee profile is already registered under this email identifier.",
        );
        return;
      }
    }

    // Generate distinctive employee serial code
    const uniqueSerialCode = editingEmployee
      ? editingEmployee.empId
      : "MK-" + Math.floor(9000 + Math.random() * 999);

    // Dynamic join date formatter (DD-MMM-YYYY)
    const dateObj = new Date(empDoj);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formattedDoj = `${String(dateObj.getDate()).padStart(2, "0")}-${months[dateObj.getMonth() || 0]}-${dateObj.getFullYear()}`;

    const updatedEmp: EmployeeProfile = {
      ...editingEmployee,
      name: empName.trim(),
      email: empEmail.trim().toLowerCase(),
      pin: empPin.trim() || "emp123",
      status: empStatus,
      role: empRole,
      department: empDepartment,
      empId: uniqueSerialCode,
      doj: formattedDoj,
      leavesLeft: editingEmployee
        ? editingEmployee.leavesLeft
        : { casual: 8, sick: 4, earned: 12 },
      kpiScore: empKpi,
      achievements: editingEmployee
        ? editingEmployee.achievements
        : ["Newly Registered Advisor"],
      qualification: empQualification,
      salaryDetails: {
        basic: Number(salBasic) || 0,
        hra: Number(salHra) || 0,
        special: Number(salSpecial) || 0,
        pf: Number(salPf) || 0,
        profTax: Number(salProfTax) || 0,
        taxDeducted: Number(salTaxDeducted) || 0,
      },
    };

    let updated: EmployeeProfile[];
    if (editingEmployee) {
      updated = employees.map((emp) =>
        emp.email.toLowerCase() === editingEmployee.email.toLowerCase()
          ? updatedEmp
          : emp,
      );
      setEmpSuccessMsg(
        `Employee profile for ${empName} was successfully updated!`,
      );
    } else {
      updated = [...employees, updatedEmp];
      setEmpSuccessMsg(
        `New Consultant profile for Ramesh successfully registered! ID: ${uniqueSerialCode}`,
      );
    }

    onUpdateEmployees(updated);

    // Reset input fields
    setEmpName("");
    setEmpEmail("");
    setEmpPin("emp123");
    setEmpStatus("Active");
    setEmpKpi("9.0/10");
    setSalBasic("45000");
    setSalHra("18000");
    setSalSpecial("12000");
    setSalPf("2100");
    setSalProfTax("200");
    setSalTaxDeducted("1515");
    setShowAddForm(false);
    setEditingEmployee(null);

    setTimeout(() => {
      setEmpSuccessMsg("");
    }, 5000);
  };

  const handleDeleteEmployee = (email: string) => {
    const updated = employees.filter((emp) => emp.email !== email);
    onUpdateEmployees(updated);
    setConfirmDeleteEmail(null);
  };

  const handleExportEmployeesToCSV = () => {
    if (employees.length === 0) return;
    const headers = [
      "Name",
      "Email",
      "Role",
      "Department",
      "Employee ID",
      "Date of Joining",
      "Status",
      "KPI Score",
      "Total Leaves",
    ];
    const rows = employees.map((emp) => [
      `"${emp.name}"`,
      `"${emp.email}"`,
      `"${emp.role}"`,
      `"${emp.department}"`,
      `"${emp.empId}"`,
      `"${emp.doj}"`,
      `"${emp.status || "Active"}"`,
      `"${emp.kpiScore}"`,
      `"${emp.leavesLeft.casual + emp.leavesLeft.sick + emp.leavesLeft.earned}"`,
    ]);
    const csvContent = [
      headers.join(","),
      ...rows.map((e) => e.join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `makeeazy_employees_${new Date().toISOString().split("T")[0]}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handles Timesheet approvals logic
  const handleTimesheetAction = (
    id: string,
    action: "Approved" | "Rejected",
  ) => {
    const updated = timesheets.map((ts) => {
      if (ts.id === id) {
        return { ...ts, status: action };
      }
      return ts;
    });
    onUpdateTimesheets(updated);
  };

  // Handles Leave approvals logic
  const handleLeaveAction = (id: string, action: "Approved" | "Rejected") => {
    const updated = leaves.map((lv) => {
      if (lv.id === id) {
        return { ...lv, status: action };
      }
      return lv;
    });
    onUpdateLeaves(updated);
  };

  // Handles Expenses approvals logic
  const handleExpenseAction = (id: string, action: "Approved" | "Rejected") => {
    const updated = expenses.map((ex) => {
      if (ex.id === id) {
        return { ...ex, status: action };
      }
      return ex;
    });
    onUpdateExpenses(updated);
  };

  // Assign Task logic
  const handleAssignTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim() || !taskDesc.trim() || !taskEmployee) return;

    const chosenEmp = employees.find((emp) => emp.email === taskEmployee);
    const empName = chosenEmp ? chosenEmp.name : "Consultant";

    const newTask: BusinessTask = {
      id: "tk-" + Math.random().toString(36).substr(2, 9),
      assignedToEmail: taskEmployee,
      employeeName: empName,
      title: taskTitle,
      dueDate: taskDueDate,
      priority: taskPriority,
      description: taskDesc,
      status: "To Do",
    };

    const updated = [newTask, ...tasks];
    onUpdateTasks(updated);

    setTaskTitle("");
    setTaskDesc("");
    setTaskSuccessMsg(
      `Directives task successfully assigned and allocated to ${empName}!`,
    );
    setTimeout(() => {
      setTaskSuccessMsg("");
    }, 4000);
  };

  const handleDeleteTask = (id: string) => {
    const updated = tasks.filter((t) => t.id !== id);
    onUpdateTasks(updated);
  };

  // Metrics calculations
  const pendingTimesheetsCount = timesheets.filter(
    (t) => t.status === "Pending",
  ).length;
  const pendingLeavesCount = leaves.filter(
    (l) => l.status === "Pending",
  ).length;
  const pendingExpensesCount = expenses.filter(
    (e) => e.status === "Pending",
  ).length;

  const pendingExpensesTotal = expenses
    .filter((e) => e.status === "Pending")
    .reduce((sum, e) => sum + e.amount, 0);

  const approvedExpensesTotal = expenses
    .filter((e) => e.status === "Approved")
    .reduce((sum, e) => sum + e.amount, 0);

  const totalAssignedTasksCount = tasks.length;
  const completedTasksCount = tasks.filter(
    (t) => t.status === "Completed",
  ).length;
  const activeTasksCount = tasks.filter((t) => t.status !== "Completed").length;

  // Filtered and sorted previously processed leaves for the chronological office attendance timeline
  const filteredHistoryLeaves = React.useMemo(() => {
    return [...leaves]
      .filter((l) => l.status === "Approved" || l.status === "Rejected")
      .filter((l) => {
        const matchesSearch =
          l.employeeName
            .toLowerCase()
            .includes(adminLeaveSearch.toLowerCase()) ||
          l.employeeEmail
            .toLowerCase()
            .includes(adminLeaveSearch.toLowerCase());
        const matchesTrigger =
          adminLeaveFilter === "All" || l.status === adminLeaveFilter;
        return matchesSearch && matchesTrigger;
      })
      .sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
      );
  }, [leaves, adminLeaveSearch, adminLeaveFilter]);

  // Operational notification lists
  const pendingLeavesList = React.useMemo(() => {
    return leaves.filter((l) => l.status === "Pending");
  }, [leaves]);

  const pendingTasksList = React.useMemo(() => {
    return tasks.filter(
      (t) => t.status === "To Do" || t.status === "In Progress",
    );
  }, [tasks]);

  const pendingTimesheetsList = React.useMemo(() => {
    return timesheets.filter((t) => t.status === "Pending");
  }, [timesheets]);

  const totalNotificationsCount =
    pendingLeavesList.length +
    pendingTasksList.length +
    pendingTimesheetsList.length;

  const [prevNotifCount, setPrevNotifCount] = useState(totalNotificationsCount);
  const [hasViewedNotifications, setHasViewedNotifications] = useState(false);
  const [clearedAdminNotifications, setClearedAdminNotifications] =
    useState(false);

  React.useEffect(() => {
    if (totalNotificationsCount > prevNotifCount) {
      setHasViewedNotifications(false);
      setClearedAdminNotifications(false);
    }
    setPrevNotifCount(totalNotificationsCount);
  }, [totalNotificationsCount, prevNotifCount]);

  const badgeCount =
    hasViewedNotifications || clearedAdminNotifications
      ? 0
      : totalNotificationsCount;

  return (
    <div className="space-y-8" id="super-admin-layout">
      {/* Super Admin Control Room Head & Notifications */}
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/80 backdrop-blur-md p-5 rounded-3xl border border-slate-200 shadow-sm relative z-50"
        id="super-admin-control-header"
      >
        <div>
          <h2 className="text-base font-bold text-[#3150A0] flex items-center gap-2">
            <span className="p-1 px-1.5 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
              💼
            </span>
            Management Control Room
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Configure corporate roster allocations, authorize staff leaves, and
            direct operational compliance guidelines.
          </p>
        </div>

        {/* Notification Bell Dropdown */}
        <div className="relative self-stretch sm:self-auto shrink-0 flex justify-end">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setHasViewedNotifications(true);
            }}
            className={`p-3 rounded-2xl border transition-all relative flex items-center justify-center cursor-pointer ${
              showNotifications
                ? "bg-[#3150A0]/10 border-[#3150A0]/30 text-[#3150A0] ring-2 ring-[#3150A0]/10"
                : "bg-white border-slate-205 hover:bg-slate-50 text-slate-600 hover:text-slate-800"
            }`}
            aria-label="Toggle notifications"
            id="admin-notification-bell-btn"
          >
            <Bell
              className={`w-5 h-5 ${badgeCount > 0 ? "animate-bounce" : ""}`}
            />
            {badgeCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-rose-600 text-white rounded-full border border-white shadow-xs animate-pulse">
                {badgeCount}
              </span>
            )}
          </button>

          {/* Dropdown panel */}
          {showNotifications && (
            <div
              className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-3xl shadow-xl z-50 overflow-hidden text-left"
              id="admin-notifications-dropdown"
            >
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Pending Action Alerts
                </span>
                <div className="flex items-center gap-2">
                  {totalNotificationsCount > 0 &&
                    !clearedAdminNotifications && (
                      <button
                        onClick={() => setClearedAdminNotifications(true)}
                        className="text-[10px] font-semibold text-slate-500 hover:text-slate-800 underline px-1 cursor-pointer"
                      >
                        Clear All
                      </button>
                    )}
                  <span className="text-[10px] bg-rose-600 text-white font-semibold px-2 py-0.5 rounded-full">
                    {clearedAdminNotifications ? 0 : totalNotificationsCount}{" "}
                    Actionable
                  </span>
                </div>
              </div>

              <div className="max-h-[320px] overflow-y-auto divide-y divide-slate-100 no-scrollbar">
                {totalNotificationsCount === 0 || clearedAdminNotifications ? (
                  <div className="p-8 text-center text-slate-400">
                    <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-700">
                      All Systems Clear
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      No new leave applications, uncompleted tasks, or pending
                      timesheets exist.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Pending Leaves */}
                    {pendingLeavesList.map((l) => (
                      <button
                        key={`notif-leave-${l.id}`}
                        onClick={() => {
                          setAdminTab("approvals");
                          setApprovalSubTab("leaves");
                          setShowNotifications(false);
                          setTimeout(() => {
                            const approvalsEl =
                              document.getElementById("admin-module-tabs");
                            if (approvalsEl) {
                              approvalsEl.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }, 100);
                        }}
                        className="w-full text-left p-4 hover:bg-indigo-50/40 transition-colors flex gap-3.5 items-start focus:bg-indigo-50/40 outline-none cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100/70 flex items-center justify-center shrink-0 mt-0.5">
                          <CalendarCheck2 className="w-4.5 h-4.5 text-[#3150A0]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-semibold text-[#3150A0] uppercase tracking-wide">
                              Leave Request
                            </span>
                            <span className="text-[10px] font-semibold bg-orange-100 text-orange-700 px-1.5 py-0.25 rounded">
                              {l.totalDays}d
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-800 mt-0.5 truncate">
                            {l.employeeName}
                          </p>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1 italic">
                            “{l.reason}”
                          </p>
                          <p className="text-xs text-[#3150A0] font-semibold mt-1.5 flex items-center gap-1">
                            Click to Authorize{" "}
                            <span className="text-xs">→</span>
                          </p>
                        </div>
                      </button>
                    ))}

                    {/* Pending Tasks */}
                    {pendingTasksList.map((t) => (
                      <button
                        key={`notif-task-${t.id}`}
                        onClick={() => {
                          setAdminTab("tasks");
                          setShowNotifications(false);
                          setTimeout(() => {
                            const tasksEl =
                              document.getElementById("admin-module-tabs");
                            if (tasksEl) {
                              tasksEl.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 100);
                        }}
                        className="w-full text-left p-4 hover:bg-orange-50/25 transition-colors flex gap-3.5 items-start focus:bg-orange-50/25 outline-none cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100/70 flex items-center justify-center shrink-0 mt-0.5">
                          <FolderKanban className="w-4.5 h-4.5 text-orange-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-semibold text-orange-655 uppercase tracking-wide">
                              Outstanding Task
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-1.5 py-0.25 rounded text-white ${
                                t.priority === "High"
                                  ? "bg-rose-500"
                                  : t.priority === "Medium"
                                    ? "bg-amber-500"
                                    : "bg-blue-500"
                              }`}
                            >
                              {t.priority}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-800 mt-0.5 truncate">
                            {t.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5 truncate">
                            Assigned: {t.employeeName}
                          </p>
                          <p className="text-xs text-orange-655 font-semibold mt-1.5 flex items-center gap-1">
                            Manage Directive <span className="text-xs">→</span>
                          </p>
                        </div>
                      </button>
                    ))}
                    {/* Pending Timesheets */}
                    {pendingTimesheetsList.map((ts) => (
                      <button
                        key={`notif-timesheet-${ts.id}`}
                        onClick={() => {
                          setAdminTab("approvals");
                          setApprovalSubTab("timesheets");
                          setShowNotifications(false);
                          setTimeout(() => {
                            const approvalsEl =
                              document.getElementById("admin-module-tabs");
                            if (approvalsEl) {
                              approvalsEl.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }, 100);
                        }}
                        className="w-full text-left p-4 hover:bg-emerald-50/40 transition-colors flex gap-3.5 items-start focus:bg-emerald-50/40 outline-none cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100/70 flex items-center justify-center shrink-0 mt-0.5">
                          <Activity className="w-4.5 h-4.5 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">
                              Timesheet Approval
                            </span>
                            <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-1.5 py-0.25 rounded">
                              {ts.hours} {ts.hours === 1 ? "hr" : "hrs"}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-800 mt-0.5 truncate">
                            {ts.employeeName}
                          </p>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1 italic">
                            “{ts.description}”
                          </p>
                          <p className="text-xs text-emerald-600 font-semibold mt-1.5 flex items-center gap-1">
                            Review Timesheet <span className="text-xs">→</span>
                          </p>
                        </div>
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Admin metrics strip */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        id="admin-analytics-grid"
      >
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute right-3 top-3 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Pending Timesheets Auditor
          </p>
          <p className="text-3xl font-bold tracking-tight text-slate-800 mt-1">
            {pendingTimesheetsCount} Drafts
          </p>
          <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-orange-600">
            <Activity className="w-3 h-3 anim-pulse" />
            <span>Awaiting legal shift confirmation</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute right-3 top-3 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <CalendarCheck2 className="w-5 h-5 text-indigo-600" />
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Pending Leave Requests
          </p>
          <p className="text-3xl font-bold tracking-tight text-slate-800 mt-1">
            {pendingLeavesCount} Requests
          </p>
          <div className="mt-2.5 text-xs text-slate-500 font-medium">
            Requires active staff capacity review
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute right-3 top-3 w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center">
            <PiggyBank className="w-5 h-5 text-rose-600" />
          </div>
          <p className="text-xs text-slate-500 font-medium font-sans">
            Unsanctioned Expense Claims
          </p>
          <p className="text-3xl font-bold tracking-tight text-slate-800 mt-1">
            ₹{pendingExpensesTotal}
          </p>
          <div className="mt-2.5 text-xs text-slate-500 font-semibold font-sans">
            Approved liability so far:{" "}
            <span className="text-emerald-600 font-bold">
              ₹{approvedExpensesTotal}
            </span>
          </div>
        </div>

        <div className="bg-[#3150A0] text-white p-5 rounded-3xl border border-blue-800 shadow-sm relative overflow-hidden">
          <div className="absolute right-3 top-3 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <FolderKanban className="w-5 h-5 text-blue-100" />
          </div>
          <p className="text-xs text-blue-200/90 font-medium font-sans">
            Active Directives Queue
          </p>
          <p className="text-3xl font-bold tracking-tight mt-1">
            {activeTasksCount} of {totalAssignedTasksCount}
          </p>
          <div className="mt-3 w-full bg-white/20 rounded-full h-1.5">
            <div
              className="bg-orange-500 h-1.5 rounded-full"
              style={{
                width: `${totalAssignedTasksCount ? (completedTasksCount / totalAssignedTasksCount) * 100 : 0}%`,
              }}
            />
          </div>
          <p className="text-xs text-blue-200 mt-1.5 font-medium font-sans">
            {completedTasksCount} assigned targets completed
          </p>
        </div>
      </div>

      {/* Sub-navigation */}
      <div
        className="flex border-b border-indigo-150 gap-2 overflow-x-auto no-scrollbar pt-2"
        id="admin-module-tabs"
      >
        <button
          onClick={() => setAdminTab("approvals")}
          className={`py-3 px-5 text-xs font-extrabold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
            adminTab === "approvals"
              ? "border-[#3150A0] text-[#3150A0]"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          Approvals & Sign-off Center
        </button>
        <button
          onClick={() => setAdminTab("tasks")}
          className={`py-3 px-5 text-xs font-extrabold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
            adminTab === "tasks"
              ? "border-[#3150A0] text-[#3150A0]"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          <FolderKanban className="w-4 h-4" />
          Task Allocator & Directive Panel
        </button>
        <button
          onClick={() => setAdminTab("employees")}
          className={`py-3 px-5 text-xs font-extrabold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
            adminTab === "employees"
              ? "border-[#3150A0] text-[#3150A0]"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          <Users className="w-4 h-4" />
          Active Team Directory ({employees.length})
        </button>
      </div>

      {/* Admin Modules Switcher */}
      <div>
        {/* Module A: Approvals center */}
        {adminTab === "approvals" && (
          <div className="space-y-6" id="approvals-control-center">
            {/* Approvals sub selector bar */}
            <div className="flex gap-2.5 p-1 bg-slate-100 rounded-xl w-fit">
              <button
                onClick={() => setApprovalSubTab("timesheets")}
                className={`py-1.5 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  approvalSubTab === "timesheets"
                    ? "bg-white text-slate-800 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Timesheets ({pendingTimesheetsCount})
              </button>
              <button
                onClick={() => setApprovalSubTab("leaves")}
                className={`py-1.5 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  approvalSubTab === "leaves"
                    ? "bg-white text-slate-800 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Leave applications ({pendingLeavesCount})
              </button>
              <button
                onClick={() => setApprovalSubTab("expenses")}
                className={`py-1.5 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  approvalSubTab === "expenses"
                    ? "bg-white text-slate-800 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Expense claims ({pendingExpensesCount})
              </button>
            </div>

            {/* Sub Tabs views */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              {/* Approvals -> 1. Timesheets Sub-Tab */}
              {approvalSubTab === "timesheets" && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800">
                      Timesheets Audit Board
                    </h3>
                    <p className="text-4xs text-slate-400 mt-0.5">
                      Approve advisory reports submitted by senior analysts.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {timesheets.filter((t) => t.status === "Pending").length ===
                    0 ? (
                      <div className="text-center py-12 text-slate-400">
                        <CheckCircle className="w-9 h-9 text-emerald-500 mx-auto opacity-75 mb-2" />
                        <p className="text-xs font-bold text-slate-700">
                          Audit Ledger Clean
                        </p>
                        <p className="text-4xs text-slate-400 mt-0.5">
                          All submitted advisory timesheets have been verified
                          and settled!
                        </p>
                      </div>
                    ) : (
                      timesheets
                        .filter((t) => t.status === "Pending")
                        .map((ts) => (
                          <div
                            key={ts.id}
                            className="p-4 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                          >
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black text-[#3150A0]">
                                  {ts.employeeName}
                                </span>
                                <span className="text-4xs font-bold px-2 py-0.5 bg-orange-100 text-orange-700 rounded-md">
                                  Pending Approval
                                </span>
                              </div>
                              <p className="text-xs text-slate-800 font-extrabold">
                                {ts.serviceType}{" "}
                                <span className="font-normal text-slate-500">
                                  ({ts.date})
                                </span>
                              </p>
                              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                                {ts.description}
                              </p>
                              <p className="text-4xs text-slate-500 font-bold">
                                Asserted work hours:{" "}
                                <span className="text-[#3150A0]">
                                  {ts.hours} HRs
                                </span>
                              </p>
                            </div>

                            <div className="flex gap-2 shrink-0 self-end md:self-center">
                              <button
                                onClick={() =>
                                  handleTimesheetAction(ts.id, "Approved")
                                }
                                className="px-3.5 py-1.5 rounded-xl bg-blend-darken bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              >
                                <Check className="w-3.5 h-3.5" />
                                Approve
                              </button>
                              <button
                                onClick={() =>
                                  handleTimesheetAction(ts.id, "Rejected")
                                }
                                className="px-3.5 py-1.5 rounded-xl border border-rose-200 hover:bg-rose-50 text-rose-600 font-bold text-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              >
                                <X className="w-3.5 h-3.5" />
                                Reject
                              </button>
                            </div>
                          </div>
                        ))
                    )}
                  </div>

                  {/* Show verified entries history */}
                  {timesheets.filter((t) => t.status !== "Pending").length >
                    0 && (
                    <div className="mt-8 space-y-2.5">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                        Audit History Logs
                      </span>
                      <div className="max-h-56 overflow-y-auto divide-y divide-slate-100 pr-1">
                        {timesheets
                          .filter((t) => t.status !== "Pending")
                          .map((ts) => (
                            <div
                              key={ts.id}
                              className="py-2.5 flex justify-between items-center text-xs"
                            >
                              <div>
                                <span className="font-bold text-slate-700 pr-1.5">
                                  {ts.employeeName}:
                                </span>
                                <span className="text-slate-500">
                                  {ts.serviceType} ({ts.hours} hrs)
                                </span>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded text-4xs font-bold ${
                                  ts.status === "Approved"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-rose-50 text-rose-700"
                                }`}
                              >
                                {ts.status}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Approvals -> 2. Leave Sub-Tab */}
              {approvalSubTab === "leaves" && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800">
                      Leave Clearance Assessment
                    </h3>
                    <p className="text-4xs text-slate-400 mt-0.5">
                      Authorise staff time-off limits and adjust dynamic
                      schedules.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {leaves.filter((l) => l.status === "Pending").length ===
                    0 ? (
                      <div className="text-center py-12 text-slate-400 animate-in fade-in">
                        <CheckCircle className="w-9 h-9 text-emerald-500 mx-auto opacity-75 mb-2" />
                        <p className="text-xs font-bold text-slate-700">
                          No Pending Absences
                        </p>
                        <p className="text-4xs text-slate-400 mt-0.5">
                          All staff vacancy requests are cleared and logged
                          correctly.
                        </p>
                      </div>
                    ) : (
                      leaves
                        .filter((l) => l.status === "Pending")
                        .map((lv) => (
                          <div
                            key={lv.id}
                            className="p-4 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                          >
                            <div className="space-y-1">
                              <p className="text-xs font-black text-[#3150A0]">
                                {lv.employeeName}
                              </p>
                              <p className="text-slate-800 font-extrabold text-xs">
                                Apply: {lv.leaveType} for{" "}
                                <span className="text-orange-650">
                                  {lv.totalDays} Days
                                </span>
                              </p>
                              <p className="text-4xs text-slate-400">
                                Date Period: {lv.startDate} to {lv.endDate}
                              </p>
                              <p className="text-xs text-slate-650 italic mt-1 bg-white p-2.5 rounded-lg border border-slate-100">
                                “{lv.reason}”
                              </p>
                            </div>

                            <div className="flex gap-2 shrink-0 self-end md:self-center">
                              <button
                                onClick={() =>
                                  handleLeaveAction(lv.id, "Approved")
                                }
                                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              >
                                <Check className="w-3.5 h-3.5" />
                                Approve Leave
                              </button>
                              <button
                                onClick={() =>
                                  handleLeaveAction(lv.id, "Rejected")
                                }
                                className="px-3.5 py-1.5 rounded-xl border border-rose-200 hover:bg-rose-50 text-rose-600 font-bold text-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              >
                                <X className="w-3.5 h-3.5" />
                                Disapprove
                              </button>
                            </div>
                          </div>
                        ))
                    )}
                  </div>

                  {/* Chronological Leave History Tracking Timeline (Office Attendance) */}
                  <div
                    className="mt-8 pt-6 border-t border-slate-100"
                    id="admin-leave-history-section"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-850 flex items-center gap-1.5 uppercase tracking-wider">
                          <CalendarCheck2 className="w-4 h-4 text-[#3150A0]" />
                          Office Attendance & Leave History Timeline
                        </h4>
                        <p className="text-4xs text-slate-400 mt-0.5">
                          Chronological audit ledger of approved and rejected
                          staff vacancies.
                        </p>
                      </div>

                      {/* Timeline filter triggers */}
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-48">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                            <Search className="h-3.5 w-3.5 text-slate-400" />
                          </span>
                          <input
                            type="text"
                            placeholder="Search employee or reason..."
                            value={adminLeaveSearch}
                            onChange={(e) =>
                              setAdminLeaveSearch(e.target.value)
                            }
                            className="w-full pl-7.5 pr-2.5 py-1.5 text-4xs font-medium rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-[#3150A0] bg-slate-50 hover:bg-white text-slate-800"
                          />
                        </div>
                        <select
                          value={adminLeaveFilter}
                          onChange={(e) =>
                            setAdminLeaveFilter(e.target.value as any)
                          }
                          className="px-2.5 py-1.5 text-4xs font-bold rounded-xl border border-slate-200 bg-white text-slate-755 cursor-pointer outline-none focus:ring-1 focus:ring-[#3150A0]"
                        >
                          <option value="All">All Statuses</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>

                    {filteredHistoryLeaves.length === 0 ? (
                      <div className="text-center py-10 bg-slate-50 border border-slate-150 rounded-2xl">
                        <p className="text-xs font-bold text-slate-600">
                          No Historical Records Found
                        </p>
                        <p className="text-4xs text-slate-400 mt-0.5">
                          Adjust search criteria or select another status
                          filter.
                        </p>
                      </div>
                    ) : (
                      <div className="relative border-l border-slate-200 ml-2.5 pl-6 space-y-5.5 mt-4">
                        {filteredHistoryLeaves.map((lv) => {
                          const isApproved = lv.status === "Approved";
                          return (
                            <div
                              key={lv.id}
                              className="relative group text-left"
                            >
                              {/* Connector dot indicator */}
                              <div
                                className={`absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 bg-white flex items-center justify-center transition-all ${
                                  isApproved
                                    ? "border-emerald-500"
                                    : "border-rose-500"
                                }`}
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    isApproved
                                      ? "bg-emerald-500"
                                      : "bg-rose-500"
                                  }`}
                                />
                              </div>

                              <div className="p-4 rounded-2xl bg-slate-50/50 hover:bg-slate-50 border border-slate-150 transition-all duration-150 hover:shadow-2xs">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                                  <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className="font-bold text-xs text-slate-800">
                                        {lv.employeeName}
                                      </span>
                                      <span className="text-xs text-slate-500 font-medium">
                                        {lv.employeeEmail}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 mt-1.5">
                                      <span className="text-xs font-semibold bg-indigo-50 text-[#3150A0] px-1.5 py-0.5 rounded-md border border-indigo-100/50">
                                        {lv.leaveType}
                                      </span>
                                      <span className="text-xs font-semibold text-orange-655 bg-orange-50 px-1.5 py-0.5 rounded-md border border-orange-100/50">
                                        {lv.totalDays} Days
                                      </span>
                                    </div>
                                  </div>

                                  <div className="text-right flex sm:flex-col items-center sm:items-end gap-1.5 shrink-0 self-start sm:self-auto">
                                    <span
                                      className={`px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider ${
                                        isApproved
                                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                          : "bg-rose-50 text-rose-700 border border-rose-100"
                                      }`}
                                    >
                                      {lv.status}
                                    </span>
                                    <span className="text-xs text-slate-400 font-medium">
                                      Period: {lv.startDate} to {lv.endDate}
                                    </span>
                                  </div>
                                </div>

                                {lv.reason && (
                                  <p className="text-xs text-slate-650 italic mt-3 bg-white p-2.5 rounded-xl border border-slate-100 leading-relaxed">
                                    “{lv.reason}”
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Approvals -> 3. Expenses Sub-Tab */}
              {approvalSubTab === "expenses" && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800">
                      Operational Expenses Auditing
                    </h3>
                    <p className="text-4xs text-slate-400 mt-0.5">
                      Authorise cash reimbursements directly into salary
                      accounts (currency standard ₹).
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {expenses.filter((e) => e.status === "Pending").length ===
                    0 ? (
                      <div className="text-center py-12 text-slate-400">
                        <CheckCircle className="w-9 h-9 text-emerald-500 mx-auto opacity-75 mb-2" />
                        <p className="text-xs font-bold text-slate-700">
                          All Claims Settled
                        </p>
                        <p className="text-4xs text-slate-400 mt-0.5">
                          Expense invoice ledger is fully clear!
                        </p>
                      </div>
                    ) : (
                      expenses
                        .filter((e) => e.status === "Pending")
                        .map((ex) => (
                          <div
                            key={ex.id}
                            className="p-4 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                          >
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black text-[#3150A0]">
                                  {ex.employeeName}
                                </span>
                                <span className="text-4xs font-bold text-rose-650 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                                  Claim Amount: ₹{ex.amount}
                                </span>
                              </div>
                              <p className="text-xs text-slate-800 font-extrabold">
                                {ex.category}{" "}
                                <span className="font-normal text-slate-500">
                                  ({ex.date})
                                </span>
                              </p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                “{ex.description}”
                              </p>
                            </div>

                            <div className="flex gap-2 shrink-0 self-end md:self-center">
                              <button
                                onClick={() =>
                                  handleExpenseAction(ex.id, "Approved")
                                }
                                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              >
                                <Check className="w-3.5 h-3.5" />
                                Sanction (₹)
                              </button>
                              <button
                                onClick={() =>
                                  handleExpenseAction(ex.id, "Rejected")
                                }
                                className="px-3.5 py-1.5 rounded-xl border border-rose-200 hover:bg-rose-50 text-rose-600 font-bold text-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              >
                                <X className="w-3.5 h-3.5" />
                                Dismiss
                              </button>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Module B: Tasks & Allocations Manager */}
        {adminTab === "tasks" && (
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200"
            id="executive-directive-module"
          >
            {/* Left Column: Create task */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#3150A0] flex items-center gap-2">
                  <Plus className="w-4 h-4 text-orange-500" />
                  Assign Advisory Task
                </h3>
                <p className="text-4xs text-slate-500 mt-1">
                  Assign dynamic deliverables to team consultants. Notifications
                  trigger immediately upon login.
                </p>
              </div>

              <form onSubmit={handleAssignTask} className="space-y-4">
                <div>
                  <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Assign to Team Consultant
                  </label>
                  <select
                    value={taskEmployee}
                    onChange={(e) => setTaskEmployee(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-bold"
                  >
                    {employees.map((emp) => (
                      <option key={emp.email} value={emp.email}>
                        {emp.name} ({emp.role.split(" ")[0]})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Task Title / Client Matter
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Verify GSTR-3B audit filings"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      Due Target Date
                    </label>
                    <input
                      type="date"
                      required
                      value={taskDueDate}
                      onChange={(e) => setTaskDueDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      SLA Severity Priority
                    </label>
                    <select
                      value={taskPriority}
                      onChange={(e) => setTaskPriority(e.target.value as any)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-bold"
                    >
                      <option value="High">🔴 High Priority</option>
                      <option value="Medium">🟡 Medium Priority</option>
                      <option value="Low">🟢 Low Priority</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Directives / Deliverables guidelines
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Provide detailed instructions about direct matter resolution..."
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 resize-none leading-relaxed"
                  />
                </div>

                {taskSuccessMsg && (
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-xs flex gap-2">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <span>{taskSuccessMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#3150A0] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Issue Directive Task
                </button>
              </form>
            </div>

            {/* Right Column: Active Task Roster board */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Assigned Directives Ledger
                </h3>
                <p className="text-4xs text-slate-500 mt-0.5">
                  Real-time progress overview of issued analyst directives.
                </p>
              </div>

              <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
                {tasks.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <FolderKanban className="w-9 h-9 mx-auto opacity-35 mb-2" />
                    <p className="text-xs">
                      No tasks currently allocated in the system registry.
                    </p>
                  </div>
                ) : (
                  tasks.map((tk) => (
                    <div
                      key={tk.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100/60 hover:bg-white hover:shadow-xs transition-all flex flex-col sm:flex-row gap-4 justify-between items-start"
                    >
                      <div className="space-y-1.5 flex-grow">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">
                            {tk.title}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-5xs font-bold uppercase ${
                              tk.priority === "High"
                                ? "bg-rose-50 text-rose-700 border border-rose-100"
                                : tk.priority === "Medium"
                                  ? "bg-amber-50 text-amber-700 border border-amber-100"
                                  : "bg-emerald-50 text-emerald-750 border border-emerald-100"
                            }`}
                          >
                            {tk.priority} Priority
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {tk.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-4xs font-semibold text-slate-400">
                          <span className="text-slate-600 font-bold bg-slate-205 px-1.5 py-0.5 rounded">
                            Assigned to: {tk.employeeName}
                          </span>
                          <span>• Target due date: {tk.dueDate}</span>
                        </div>
                      </div>

                      <div className="flex sm:flex-col justify-between sm:justify-center items-center sm:items-end w-full sm:w-auto shrink-0 gap-3 border-t sm:border-t-0 pt-2 sm:pt-0">
                        <span
                          className={`px-2.5 py-1 rounded-full text-4xs font-bold ${
                            tk.status === "Completed"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                              : tk.status === "In Progress"
                                ? "bg-blue-50 text-blue-700 border border-blue-100"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {tk.status}
                        </span>

                        <button
                          onClick={() => handleDeleteTask(tk.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                          title="Delete/revoke directive task"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Module C: Employee Rosters */}
        {adminTab === "employees" && (
          <div className="space-y-6" id="consultant-registry-tab">
            {/* Bulk Action Header */}
            {selectedForBulk.length > 0 && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 shadow-2xl rounded-2xl py-3 px-5 flex items-center justify-between gap-6 border border-slate-700 animate-in slide-in-from-bottom-5 w-max max-w-[90vw]">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 rounded-full bg-[#3150A0] text-white items-center justify-center font-bold text-[10px]">
                    {selectedForBulk.length}
                  </div>
                  <span className="text-white font-bold text-xs tracking-wide">
                    Employees Selected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    className="bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-xl border border-slate-600 focus:border-slate-500 focus:ring-2 focus:ring-slate-400 outline-none cursor-pointer"
                    onChange={(e) => {
                      if (e.target.value) {
                        handleBulkStatusUpdate(e.target.value as any);
                      }
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Set Status
                    </option>
                    <option value="Active">Mark as Active</option>
                    <option value="On-Leave">Mark as On-Leave</option>
                    <option value="Inactive">Mark as Inactive</option>
                  </select>
                  <button
                    onClick={() => setSelectedForBulk([])}
                    className="bg-slate-800 text-slate-300 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-colors border border-slate-600 hover:bg-slate-700 shadow-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Header Actions row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-3xl border border-slate-205 shadow-xs">
              <div>
                <h3 className="text-sm font-extrabold text-slate-800">
                  Internal Advisor & Consultant Directory
                </h3>
                <p className="text-4xs text-slate-500 mt-0.5">
                  Register new consultants, review active profiles, adjust
                  compensation structures, and manage authorization keys.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleExportEmployeesToCSV}
                  className="bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  title="Export current staff list to CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export to CSV
                </button>
                <button
                  onClick={() => {
                    const confirm = window.confirm(
                      "Are you sure you want to clear ALL portal data including employees, tasks, timesheets, expenses, and leaves? This action cannot be undone.",
                    );
                    if (confirm) {
                      onUpdateEmployees([]);
                      onUpdateTimesheets([]);
                      onUpdateLeaves([]);
                      onUpdateExpenses([]);
                      onUpdateTasks([]);
                      window.alert(
                        "Data cleared successfully. New databases are now empty.",
                      );
                    }
                  }}
                  className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Erase All Data
                </button>
                <button
                  onClick={() => {
                    if (editingEmployee) {
                      setEditingEmployee(null);
                      setEmpName("");
                      setEmpEmail("");
                      setEmpPin("emp123");
                      setEmpStatus("Active");
                      setEmpKpi("9.0/10");
                      setSalBasic("45000");
                      setSalHra("18000");
                      setSalSpecial("12000");
                      setSalPf("2100");
                      setSalProfTax("200");
                      setSalTaxDeducted("1515");
                      setShowAddForm(false);
                    } else {
                      setShowAddForm(!showAddForm);
                    }
                    setEmpErrorMsg("");
                    setEmpSuccessMsg("");
                  }}
                  className="px-4 py-2 bg-[#3150A0] hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  {editingEmployee ? (
                    <X className="w-3.5 h-3.5" />
                  ) : showAddForm ? (
                    <X className="w-3.5 h-3.5" />
                  ) : (
                    <UserPlus className="w-3.5 h-3.5" />
                  )}
                  {editingEmployee
                    ? "Cancel Editing"
                    : showAddForm
                      ? "Cancel Creation"
                      : "Register New Professional"}
                </button>
              </div>
            </div>

            {/* Error / Success Feedback banner */}
            {empSuccessMsg && (
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-xs flex gap-2 animate-in slide-in-from-top duration-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold">Registry Successful</p>
                  <p className="text-4xs mt-0.5">{empSuccessMsg}</p>
                </div>
              </div>
            )}

            {empErrorMsg && (
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-800 text-xs flex gap-2 animate-in slide-in-from-top duration-200">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <div>
                  <p className="font-bold">Validation Denied</p>
                  <p className="text-4xs mt-0.5">{empErrorMsg}</p>
                </div>
              </div>
            )}

            {/* EXPANDABLE CREATION FORM */}
            {showAddForm && (
              <form
                onSubmit={handleCreateEmployee}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in slide-in-from-top duration-300 relative"
                id="create-employee-form"
              >
                {editingEmployee && (
                  <div className="lg:col-span-2 bg-blue-50/70 border border-blue-200/60 p-4 rounded-2xl flex justify-between items-center animate-in fade-in duration-200">
                    <div className="flex items-center gap-2">
                      <Edit className="w-4 h-4 text-[#3150A0]" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          Currently Editing Profile:{" "}
                          <span className="text-[#3150A0]">
                            {editingEmployee.name}
                          </span>{" "}
                          ({editingEmployee.empId})
                        </p>
                        <p className="text-5xs text-slate-500 mt-0.5">
                          Modify any fields below and click "Update & Save
                          Professional Details" to commit changes.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingEmployee(null);
                        setEmpName("");
                        setEmpEmail("");
                        setEmpPin("emp123");
                        setEmpStatus("Active");
                        setEmpKpi("9.0/10");
                        setSalBasic("45000");
                        setSalHra("18000");
                        setSalSpecial("12000");
                        setSalPf("2100");
                        setSalProfTax("200");
                        setSalTaxDeducted("1515");
                        setShowAddForm(false);
                      }}
                      className="text-4xs font-extrabold text-[#3150A0] hover:underline"
                    >
                      Reset / Cancel Edit
                    </button>
                  </div>
                )}

                {/* Panel 1: Profile & Credentials */}
                <div className="space-y-4">
                  <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest block border-b border-slate-100 pb-1.5 mb-2.5">
                    1. Corporate Biography & Credentials
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Full Name of Employee
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={empName}
                        onChange={(e) => setEmpName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                      />
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Corporate Email ID
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ramesh.kumar@makeeazy.in"
                        value={empEmail}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Personal Login PIN Passcode
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. emp123"
                        value={empPin}
                        onChange={(e) => setEmpPin(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Highest Qualification
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chartered Accountant (CA) or LL.B"
                        value={empQualification}
                        onChange={(e) => setEmpQualification(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Designation / Role Title
                      </label>
                      <select
                        value={empRole}
                        onChange={(e) => setEmpRole(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-semibold"
                      >
                        <option value="Senior GST & Tax Consultant">
                          Senior GST & Tax Consultant
                        </option>
                        <option value="Corporate Secretarial Consultant">
                          Corporate Secretarial Consultant
                        </option>
                        <option value="Associate Legal Advisor">
                          Associate Legal Advisor
                        </option>
                        <option value="Filing Compliance Consultant">
                          Filing Compliance Consultant
                        </option>
                        <option value="Trainee Consultant">
                          Trainee Consultant
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Department Division
                      </label>
                      <select
                        value={empDepartment}
                        onChange={(e) => setEmpDepartment(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-semibold"
                      >
                        <option value="Taxation & Audit Division">
                          Taxation & Audit Division
                        </option>
                        <option value="Corporate Governance">
                          Corporate Governance
                        </option>
                        <option value="Legal Advisory Services">
                          Legal Advisory Services
                        </option>
                        <option value="Licensing & Compliance">
                          Licensing & Compliance
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Date of Joining
                      </label>
                      <input
                        type="date"
                        required
                        value={empDoj}
                        onChange={(e) => setEmpDoj(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Status
                      </label>
                      <select
                        value={empStatus}
                        onChange={(e) => setEmpStatus(e.target.value as any)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-semibold"
                      >
                        <option value="Active">Active</option>
                        <option value="On-Leave">On-Leave</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Initial Performance KPI Rating
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 9.0/10"
                        value={empKpi}
                        onChange={(e) => setEmpKpi(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/65 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-bold animate-pulse"
                      />
                    </div>
                  </div>
                </div>

                {/* Panel 2: Salary Structures */}
                <div className="space-y-4">
                  <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest block border-b border-slate-100 pb-1.5 mb-2.5">
                    2. Monthly Compensations & Deductions (Rupee Standard ₹)
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Basic Pay & DA (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={salBasic}
                        onChange={(e) => setSalBasic(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        HRA Allowance (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={salHra}
                        onChange={(e) => setSalHra(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Special Allowance (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={salSpecial}
                        onChange={(e) => setSalSpecial(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        EPF Deductions (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={salPf}
                        onChange={(e) => setSalPf(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none font-bold text-rose-700"
                      />
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        P.Tax Deductions (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={salProfTax}
                        onChange={(e) => setSalProfTax(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none font-bold text-rose-700"
                      />
                    </div>
                    <div>
                      <label className="block text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        IT/TDS Deductions (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={salTaxDeducted}
                        onChange={(e) => setSalTaxDeducted(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs outline-none font-bold text-rose-700"
                      />
                    </div>
                  </div>

                  {/* Real-time Calculation Preview card */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 space-y-3.5">
                    <span className="text-5xs font-bold text-slate-400 uppercase tracking-widest block text-center">
                      Live Pay Calculation Audit
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-4xs text-slate-405 font-bold uppercase">
                          Gross Income
                        </p>
                        <p className="text-xs font-black text-[#3150A0]">
                          ₹
                          {(
                            Number(salBasic) +
                            Number(salHra) +
                            Number(salSpecial)
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>
                      <div>
                        <p className="text-4xs text-slate-405 font-bold uppercase text-rose-500">
                          Gross Deducts
                        </p>
                        <p className="text-xs font-black text-rose-600">
                          ₹
                          {(
                            Number(salPf) +
                            Number(salProfTax) +
                            Number(salTaxDeducted)
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>
                      <div>
                        <p className="text-4xs text-slate-405 font-bold uppercase text-emerald-600">
                          Net Take-Home
                        </p>
                        <p className="text-xs font-black text-emerald-600">
                          ₹
                          {Math.max(
                            0,
                            Number(salBasic) +
                              Number(salHra) +
                              Number(salSpecial) -
                              (Number(salPf) +
                                Number(salProfTax) +
                                Number(salTaxDeducted)),
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 text-white font-bold rounded-xl text-xs flex justify-center items-center gap-1.5 active:scale-95 transition-all cursor-pointer shadow-md mt-6 ${
                      editingEmployee
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-[#3150A0] hover:bg-blue-800"
                    }`}
                  >
                    {editingEmployee ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    {editingEmployee
                      ? "Update & Save Professional Details"
                      : "Commit New Consultant Registration"}
                  </button>
                </div>
              </form>
            )}

            {/* ROSTER GRID LIST */}
            <div className="flex justify-between items-end mb-2 px-2 hidden sm:flex">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors">
                <input
                  type="checkbox"
                  checked={
                    employees.length > 0 &&
                    selectedForBulk.length === employees.length
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedForBulk(employees.map((emp) => emp.email));
                    } else {
                      setSelectedForBulk([]);
                    }
                  }}
                  className="w-4 h-4 text-[#3150A0] bg-slate-100 border-slate-300 rounded focus:ring-[#3150A0] focus:ring-2 cursor-pointer"
                />
                Select All Employees
              </label>
              <span className="text-4xs font-bold uppercase tracking-widest text-slate-400">
                {employees.length} Directory Records
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {employees.map((emp) => {
                // Calculate specific aggregates
                const empHrs = timesheets
                  .filter(
                    (t) =>
                      t.employeeEmail === emp.email && t.status === "Approved",
                  )
                  .reduce((a, t) => a + t.hours, 0);

                const activeEmpTasks = tasks.filter(
                  (t) =>
                    t.assignedToEmail === emp.email && t.status !== "Completed",
                ).length;

                const isExpanded = expandedSalaryEmail === emp.email;

                // Derive salary calculations for displaying component details
                const sBasic = emp.salaryDetails?.basic ?? 35000;
                const sHra = emp.salaryDetails?.hra ?? 14000;
                const sSpecial = emp.salaryDetails?.special ?? 8000;
                const sPf = emp.salaryDetails?.pf ?? 1800;
                const sProfTax = emp.salaryDetails?.profTax ?? 200;
                const sTds = emp.salaryDetails?.taxDeducted ?? 1000;

                const grossInc = sBasic + sHra + sSpecial;
                const totalDeduct = sPf + sProfTax + sTds;
                const netTakehome = grossInc - totalDeduct;

                return (
                  <div
                    key={emp.email}
                    onClick={() => setSelectedEmployeeForModal(emp)}
                    className="bg-white border border-slate-200 hover:border-[#3150A0]/30 hover:shadow-lg group hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-3xl p-6 shadow-sm space-y-4 relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Upper decorative and info */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-tr from-[#3150A0] to-indigo-700 rounded-2xl text-white flex items-center justify-center font-black text-base shadow-sm">
                            {emp.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-extrabold text-slate-850">
                                {emp.name}
                              </h4>
                              {emp.status && (
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                    emp.status === "Active"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : emp.status === "On-Leave"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-slate-200 text-slate-600"
                                  }`}
                                >
                                  {emp.status}
                                </span>
                              )}
                            </div>
                            <p className="text-4xs text-slate-500 font-extrabold uppercase mt-0.5">
                              {emp.role}
                            </p>
                          </div>
                        </div>

                        <div
                          className="flex flex-col items-end gap-1.5"
                          onClick={(e) => e.stopPropagation()} // Prevent card click when interacting with right side
                        >
                          <input
                            type="checkbox"
                            checked={selectedForBulk.includes(emp.email)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedForBulk((prev) => [
                                  ...prev,
                                  emp.email,
                                ]);
                              } else {
                                setSelectedForBulk((prev) =>
                                  prev.filter((email) => email !== emp.email),
                                );
                              }
                            }}
                            className="w-4 h-4 text-[#3150A0] bg-slate-100 border-slate-300 rounded focus:ring-[#3150A0] focus:ring-2 cursor-pointer mb-1"
                          />
                          <span className="bg-blue-50 border border-blue-100 text-[#3150A0] text-4xs font-extrabold px-2 py-0.5 rounded-lg uppercase tracking-wide">
                            {emp.empId}
                          </span>
                        </div>
                      </div>

                      {/* Display Qualification */}
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#3150A0] shrink-0" />
                        <div>
                          <p className="text-5xs text-slate-400 font-bold uppercase tracking-wider">
                            Highest Professional Qualification
                          </p>
                          <p className="text-3xs font-extrabold text-slate-850">
                            {emp.qualification ||
                              "Master of Business Administration (Finance / Tax)"}
                          </p>
                        </div>
                      </div>

                      {/* Department division info */}
                      <p className="text-4xs text-slate-550 font-bold pl-0.5">
                        <span className="text-slate-400">Department:</span>{" "}
                        {emp.department}{" "}
                        <span className="text-slate-400">| Joined:</span>{" "}
                        {emp.doj}
                      </p>

                      {/* Core Metrics striplet */}
                      <div className="grid grid-cols-3 gap-2.5 pt-1 text-center text-xs">
                        <div className="bg-slate-50/70 p-2 rounded-xl border border-slate-100">
                          <p className="text-5xs text-slate-400 font-bold uppercase tracking-wider">
                            Approved Shift
                          </p>
                          <p className="font-extrabold text-[#3150A0] text-3xs mt-0.5">
                            {empHrs.toFixed(1)} hrs
                          </p>
                        </div>
                        <div className="bg-slate-50/70 p-2 rounded-xl border border-slate-100">
                          <p className="text-5xs text-slate-400 font-bold uppercase tracking-wider">
                            Active Directives
                          </p>
                          <p className="font-extrabold text-amber-700 text-3xs mt-0.5">
                            {activeEmpTasks} open
                          </p>
                        </div>
                        <div className="bg-slate-50/70 p-2 rounded-xl border border-slate-100">
                          <p className="text-5xs text-slate-400 font-bold uppercase tracking-wider">
                            Consulting KPI
                          </p>
                          <p className="font-extrabold text-emerald-600 text-3xs mt-0.5">
                            {emp.kpiScore}
                          </p>
                        </div>
                      </div>

                      {/* Achievements Badges */}
                      <div className="pt-1.5 text-xs text-slate-600 space-y-1">
                        <div className="flex flex-wrap gap-1 mt-1">
                          {emp.achievements.map((ach) => (
                            <span
                              key={ach}
                              className="bg-amber-50 text-amber-800 border border-amber-100 px-2 py-0.5 rounded text-5xs font-bold inline-flex items-center gap-1"
                            >
                              <Award className="w-2.5 h-2.5" />
                              {ach}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* EXPANDABLE COMPENSATION SECTION (₹ Standard) */}
                      <div className="border border-slate-150 rounded-2xl overflow-hidden mt-2 bg-slate-50/40">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedSalaryEmail(
                              isExpanded ? null : emp.email,
                            );
                          }}
                          className="w-full px-3.5 py-2.5 flex justify-between items-center text-4xs font-extrabold uppercase tracking-widest text-[#3150A0] bg-slate-50 border-b border-indigo-50 font-sans hover:bg-slate-100 transition-colors"
                        >
                          <span className="flex items-center gap-1">
                            <Coins className="w-3.5 h-3.5 text-slate-500" />
                            Compensation Structure
                          </span>
                          <span className="flex items-center gap-1.5 text-3xs font-black text-emerald-600">
                            Net: ₹{netTakehome.toLocaleString("en-IN")}/mo
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="p-4 bg-white divide-y divide-slate-100 text-3xs space-y-2.5 animate-in slide-in-from-top duration-200">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pb-2">
                              <p className="font-bold text-slate-400 uppercase text-5xs tracking-wider col-span-2 text-slate-600">
                                Credits (Earnings)
                              </p>
                              <div className="flex justify-between col-span-2 pl-1.5">
                                <span className="text-slate-500">
                                  Basic & DA
                                </span>
                                <span className="font-extrabold">
                                  ₹{sBasic.toLocaleString("en-IN")}
                                </span>
                              </div>
                              <div className="flex justify-between col-span-2 pl-1.5">
                                <span className="text-slate-500">
                                  HRA Allowance
                                </span>
                                <span className="font-extrabold">
                                  ₹{sHra.toLocaleString("en-IN")}
                                </span>
                              </div>
                              <div className="flex justify-between col-span-2 pl-1.5">
                                <span className="text-slate-500">
                                  Special Advisory Allow
                                </span>
                                <span className="font-extrabold">
                                  ₹{sSpecial.toLocaleString("en-IN")}
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-2 pb-2">
                              <p className="font-bold text-slate-405 uppercase text-5xs tracking-wider col-span-2 text-rose-600">
                                Debits (Deductions)
                              </p>
                              <div className="flex justify-between col-span-2 pl-1.5 text-rose-600">
                                <span className="text-slate-500">
                                  Employee Provident Fund (EPF)
                                </span>
                                <span className="font-bold">
                                  ₹{sPf.toLocaleString("en-IN")}
                                </span>
                              </div>
                              <div className="flex justify-between col-span-2 pl-1.5 text-rose-600">
                                <span className="text-slate-500">
                                  Professional Tax (P.Tax)
                                </span>
                                <span className="font-bold">
                                  ₹{sProfTax.toLocaleString("en-IN")}
                                </span>
                              </div>
                              <div className="flex justify-between col-span-2 pl-1.5 text-rose-600">
                                <span className="text-slate-500">
                                  TDS / Income Tax
                                </span>
                                <span className="font-bold">
                                  ₹{sTds.toLocaleString("en-IN")}
                                </span>
                              </div>
                            </div>

                            <div className="pt-2 flex justify-between items-center text-xs font-black">
                              <span className="text-slate-500 text-3xs">
                                Calculated Monthly Paycheck (Net)
                              </span>
                              <span className="text-emerald-600 font-black text-sm">
                                ₹{netTakehome.toLocaleString("en-IN")}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom strip for edit and safe delete with confirmation */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStartEditEmployee(emp);
                        }}
                        className="px-3.5 py-1.5 text-[#3150A0] hover:bg-blue-50 border border-blue-200 hover:border-blue-300 rounded-xl font-bold text-4xs transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                      >
                        <Edit className="w-3 h-3" />
                        Edit details
                      </button>

                      {confirmDeleteEmail === emp.email ? (
                        <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-2xl animate-in shake duration-300">
                          <span className="text-5xs font-extrabold text-rose-800 uppercase tracking-widest mr-1">
                            Confirm delete?
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteEmployee(emp.email);
                            }}
                            className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-700 text-white font-bold text-4xs transition-colors cursor-pointer"
                          >
                            Yes, Delete
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setConfirmDeleteEmail(null);
                            }}
                            className="px-2.5 py-1 rounded bg-slate-205 hover:bg-slate-300 text-slate-750 font-bold text-4xs transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setConfirmDeleteEmail(emp.email);
                          }}
                          className="px-3.5 py-1.5 text-rose-600 hover:bg-rose-50 border border-rose-200 hover:border-rose-300 rounded-xl font-bold text-4xs transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                          title="Revoke portal access and purge employee registry records"
                        >
                          <Trash2 className="w-3 h-3" />
                          De-register Professional
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {selectedEmployeeForModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-6 sm:p-8 flex items-start justify-between border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-tr from-[#3150A0] to-indigo-700 rounded-3xl text-white flex items-center justify-center font-black text-2xl shadow-sm">
                  {selectedEmployeeForModal.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                      {selectedEmployeeForModal.name}
                    </h2>
                    {selectedEmployeeForModal.status && (
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest ${selectedEmployeeForModal.status === "Active" ? "bg-emerald-100 text-emerald-700" : selectedEmployeeForModal.status === "On-Leave" ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-600"}`}
                      >
                        {selectedEmployeeForModal.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-slate-500 mt-1">
                    {selectedEmployeeForModal.role} •{" "}
                    {selectedEmployeeForModal.department}
                  </p>
                  <p className="text-xs font-semibold text-slate-400 mt-1 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    {selectedEmployeeForModal.email}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedEmployeeForModal(null)}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center shadow-sm cursor-pointer active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-white">
              {/* Profile Details */}
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Briefcase className="w-4 h-4 text-[#3150A0]" />
                  Professional Profile
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div>
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wide mb-1">
                      Employee ID
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {selectedEmployeeForModal.empId}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wide mb-1">
                      Date of Joining
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {selectedEmployeeForModal.doj}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wide mb-1">
                      KPI Score
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {selectedEmployeeForModal.kpiScore || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wide mb-1">
                      Qualification
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {selectedEmployeeForModal.qualification || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Historical Performance Chart */}
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Activity className="w-4 h-4 text-[#3150A0]" />
                  Historical Performance Tracking
                </h3>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { period: "Jan", score: 8.2, capacity: 85 },
                        { period: "Feb", score: 8.8, capacity: 90 },
                        { period: "Mar", score: 8.5, capacity: 88 },
                        { period: "Apr", score: 8.9, capacity: 92 },
                        { period: "May", score: 9.1, capacity: 95 },
                        {
                          period: "Jun",
                          score:
                            parseFloat(selectedEmployeeForModal.kpiScore) ||
                            9.0,
                          capacity: 94,
                        },
                      ]}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e2e8f0"
                      />
                      <XAxis
                        dataKey="period"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                          fontSize: 10,
                          fill: "#64748b",
                          fontWeight: "bold",
                        }}
                      />
                      <YAxis
                        yAxisId="left"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 10, fill: "#64748b" }}
                        domain={[0, 10]}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 10, fill: "#64748b" }}
                        domain={[0, 100]}
                      />
                      <Tooltip
                        cursor={{ fill: "#f1f5f9" }}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#1e293b",
                        }}
                      />
                      <Bar
                        yAxisId="left"
                        dataKey="score"
                        name="KPI Score"
                        fill="#3150A0"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="capacity"
                        name="Bandwidth Ute (%)"
                        fill="#cbd5e1"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Historical Data: Tasks */}
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <FolderKanban className="w-4 h-4 text-[#3150A0]" />
                  Assigned Directives
                </h3>
                {(() => {
                  const empTasks = tasks.filter(
                    (t) => t.assignedToEmail === selectedEmployeeForModal.email,
                  );
                  if (empTasks.length === 0) {
                    return (
                      <p className="text-xs font-semibold text-slate-400 italic">
                        No tasks currently assigned.
                      </p>
                    );
                  }
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {empTasks.map((t) => (
                        <div
                          key={t.id}
                          className="p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h4 className="text-xs font-bold text-slate-800 leading-snug">
                              {t.title}
                            </h4>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-extrabold whitespace-nowrap ${t.status === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}
                            >
                              {t.status}
                            </span>
                          </div>
                          <p className="text-[10px] font-bold text-slate-500 line-clamp-2 mb-3">
                            {t.description}
                          </p>
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                            <CalendarCheck2 className="w-3 h-3" />
                            Due: {t.dueDate}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>

              {/* Grid for Timesheets and Expenses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    Recent Timesheets
                  </h3>
                  {(() => {
                    const empTimesheets = timesheets
                      .filter(
                        (t) =>
                          t.employeeEmail === selectedEmployeeForModal.email,
                      )
                      .slice(0, 5);
                    if (empTimesheets.length === 0)
                      return (
                        <p className="text-xs font-semibold text-slate-400 italic">
                          No recent timesheet logs.
                        </p>
                      );
                    return (
                      <div className="space-y-3">
                        {empTimesheets.map((ts) => (
                          <div
                            key={ts.id}
                            className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50"
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-800">
                                {ts.serviceType}
                              </p>
                              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                                {ts.date} • {ts.hours}h logged
                              </p>
                            </div>
                            <span
                              className={`px-2 py-1 rounded text-[10px] font-extrabold ${ts.status === "Approved" ? "bg-emerald-100 text-emerald-700" : ts.status === "Rejected" ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700"}`}
                            >
                              {ts.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Coins className="w-4 h-4 text-rose-500" />
                    Recent Expenses
                  </h3>
                  {(() => {
                    const empExpenses = expenses
                      .filter(
                        (e) =>
                          e.employeeEmail === selectedEmployeeForModal.email,
                      )
                      .slice(0, 5);
                    if (empExpenses.length === 0)
                      return (
                        <p className="text-xs font-semibold text-slate-400 italic">
                          No recent expense claims.
                        </p>
                      );
                    return (
                      <div className="space-y-3">
                        {empExpenses.map((exp) => (
                          <div
                            key={exp.id}
                            className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50"
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-800">
                                {exp.category}
                              </p>
                              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                                {exp.date}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-black text-slate-800">
                                ₹{exp.amount.toLocaleString("en-IN")}
                              </p>
                              <span
                                className={`px-2 text-[10px] font-extrabold rounded ${exp.status === "Approved" ? "text-emerald-600" : exp.status === "Rejected" ? "text-rose-600" : "text-amber-600"}`}
                              >
                                {exp.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => handlePrintPayslip(selectedEmployeeForModal)}
                className="px-6 py-2.5 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs rounded-xl hover:bg-indigo-100 transition-colors shadow-sm cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print Payslip
              </button>
              <button
                onClick={() => setSelectedEmployeeForModal(null)}
                className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors shadow-sm cursor-pointer active:scale-95"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
