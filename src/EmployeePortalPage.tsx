import React, { useState, useEffect, useMemo, useRef } from "react";
import { db } from "./firebase";
import { doc, onSnapshot, setDoc, getDocFromServer } from "firebase/firestore";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Calendar,
  Clock,
  User,
  Briefcase,
  FileText,
  Trash2,
  Plus,
  LogOut,
  Activity,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  FileCheck,
  PiggyBank,
  Award,
  PlaneTakeoff,
  Send,
  Sparkles,
  Clock3,
  CalendarCheck2,
  Lock,
  Download,
  ShieldAlert,
  FolderCheck,
  ClipboardList,
  Bell,
} from "lucide-react";

// Shared types and database seeds
import {
  Timesheet,
  LeaveApplication,
  ExpenseClaim,
  BusinessTask,
  EmployeeProfile,
} from "./types/employee";
import {
  DEFAULT_EMPLOYEES,
  SUPER_ADMIN_PROFILE,
  DEFAULT_TIMESHEETS,
  DEFAULT_LEAVES,
  DEFAULT_EXPENSES,
  DEFAULT_TASKS,
  PAYSLIPS_HISTORY,
} from "./data/employeeData";

// Modular layouts
import PayslipModal from "./components/PayslipModal";
import SuperAdminDashboard from "./components/SuperAdminDashboard";

export default function EmployeePortalPage() {
  const timestampNow = Date.now();

  // Primary persistent core states
  const [employees, setEmployees] = useState<EmployeeProfile[]>(() => {
    const saved = localStorage.getItem("makeeazy_portal_employees");
    return saved ? JSON.parse(saved) : DEFAULT_EMPLOYEES;
  });

  const [timesheets, setTimesheets] = useState<Timesheet[]>(() => {
    const saved = localStorage.getItem("makeeazy_portal_timesheets");
    return saved ? JSON.parse(saved) : DEFAULT_TIMESHEETS(timestampNow);
  });

  const [leaves, setLeaves] = useState<LeaveApplication[]>(() => {
    const saved = localStorage.getItem("makeeazy_portal_leaves");
    return saved ? JSON.parse(saved) : DEFAULT_LEAVES;
  });

  const [expenses, setExpenses] = useState<ExpenseClaim[]>(() => {
    const saved = localStorage.getItem("makeeazy_portal_expenses");
    return saved ? JSON.parse(saved) : DEFAULT_EXPENSES;
  });

  const [tasks, setTasks] = useState<BusinessTask[]>(() => {
    const saved = localStorage.getItem("makeeazy_portal_tasks");
    return saved ? JSON.parse(saved) : DEFAULT_TASKS;
  });

  // Sync core collections with Firebase for cross-browser live updates
  const isSyncingRef = useRef(false);
  const isInitialLoadRef = useRef(true);
  const syncTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Cache-busting: Force fetch the absolutely latest portal data from the server directly first
    // This ensures when you open in a new browser, you don't briefly see the Default Employees while
    // onSnapshot establishes its socket.
    const forceFetchLatestData = async () => {
      try {
        const docRef = doc(db, "makeeazy", "portal_data");
        const docSnap = await getDocFromServer(docRef);
        if (docSnap.exists()) {
          isSyncingRef.current = true;
          const data = docSnap.data();
          if (data.employees) setEmployees(data.employees);
          if (data.timesheets) setTimesheets(data.timesheets);
          if (data.leaves) setLeaves(data.leaves);
          if (data.expenses) setExpenses(data.expenses);
          if (data.tasks) setTasks(data.tasks);

          if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
          syncTimeoutRef.current = setTimeout(() => {
            isSyncingRef.current = false;
          }, 300);
        }
      } catch (err) {
        console.error("Force fetch failed, falling back to snapshot:", err);
      } finally {
        isInitialLoadRef.current = false;
      }
    };

    forceFetchLatestData();

    // Regular live listener
    const unsub = onSnapshot(doc(db, "makeeazy", "portal_data"), (docSnap) => {
      if (docSnap.exists() && !isInitialLoadRef.current) {
        isSyncingRef.current = true;

        const data = docSnap.data();
        if (data.employees) setEmployees(data.employees);
        if (data.timesheets) setTimesheets(data.timesheets);
        if (data.leaves) setLeaves(data.leaves);
        if (data.expenses) setExpenses(data.expenses);
        if (data.tasks) setTasks(data.tasks);

        if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
        syncTimeoutRef.current = setTimeout(() => {
          isSyncingRef.current = false;
        }, 300);
      }
    });
    return () => unsub();
  }, []);

  // Write changes to localStorage and Firebase so states persist on reload
  useEffect(() => {
    localStorage.setItem(
      "makeeazy_portal_employees",
      JSON.stringify(employees),
    );
    localStorage.setItem(
      "makeeazy_portal_timesheets",
      JSON.stringify(timesheets),
    );
    localStorage.setItem("makeeazy_portal_leaves", JSON.stringify(leaves));
    localStorage.setItem("makeeazy_portal_expenses", JSON.stringify(expenses));
    localStorage.setItem("makeeazy_portal_tasks", JSON.stringify(tasks));

    if (!isSyncingRef.current && !isInitialLoadRef.current) {
      const timer = setTimeout(() => {
        setDoc(
          doc(db, "makeeazy", "portal_data"),
          { employees, timesheets, leaves, expenses, tasks },
          { merge: true },
        ).catch(console.error);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [employees, timesheets, leaves, expenses, tasks]);

  // Session & UI States
  const [activeUser, setActiveUser] = useState<any>(() => {
    const cached = localStorage.getItem("makeeazy_logged_employee");
    return cached ? JSON.parse(cached) : null;
  });

  const currentUserProfile = useMemo(() => {
    if (!activeUser || activeUser.isSuperAdmin) return activeUser;
    const matched = employees.find(
      (emp) => emp.email.toLowerCase() === activeUser.email.toLowerCase(),
    );
    return matched || activeUser;
  }, [activeUser, employees]);

  const [loginRoleTab, setLoginRoleTab] = useState<"employee" | "admin">(
    "employee",
  );
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPin, setLoginPin] = useState("");
  const [loginError, setLoginError] = useState("");

  // Active Employee Portal navigation
  const [currentTab, setCurrentTab] = useState<
    "directives" | "timesheet" | "leaves" | "expenses" | "payroll"
  >("directives");

  // Interactive Form States (for logged in Employee)
  const [tsDate, setTsDate] = useState(
    new Date().toISOString().substring(0, 10),
  );
  const [tsService, setTsService] = useState("GST Return Filing (3B/1)");
  const [tsHours, setTsHours] = useState(4.0);
  const [tsDesc, setTsDesc] = useState("");
  const [tsSuccessMsg, setTsSuccessMsg] = useState("");

  const [lvStart, setLvStart] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().substring(0, 10);
  });
  const [lvEnd, setLvEnd] = useState(() => {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    return dayAfter.toISOString().substring(0, 10);
  });
  const [lvType, setLvType] = useState("Casual Leave");
  const [lvReason, setLvReason] = useState("");
  const [lvSuccessMsg, setLvSuccessMsg] = useState("");

  const [exDate, setExDate] = useState(
    new Date().toISOString().substring(0, 10),
  );
  const [exAmount, setExAmount] = useState("");
  const [exCategory, setExCategory] = useState("Client Site Conveyance");
  const [exDesc, setExDesc] = useState("");
  const [exSuccessMsg, setExSuccessMsg] = useState("");

  // Digital Payslip modal presentation state
  const [selectedPayslip, setSelectedPayslip] = useState<any | null>(null);

  // Employee Notification State
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasViewedNotifications, setHasViewedNotifications] = useState(false);
  const [clearedEmployeeNotifications, setClearedEmployeeNotifications] =
    useState(false);
  const [prevNotifCount, setPrevNotifCount] = useState(0);

  // Authentication submission handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (loginRoleTab === "admin") {
      if (
        loginEmail.trim().toLowerCase() ===
          SUPER_ADMIN_PROFILE.email.toLowerCase() &&
        loginPin === SUPER_ADMIN_PROFILE.pin
      ) {
        setActiveUser(SUPER_ADMIN_PROFILE);
        localStorage.setItem(
          "makeeazy_logged_employee",
          JSON.stringify(SUPER_ADMIN_PROFILE),
        );
        setLoginEmail("");
        setLoginPin("");
      } else {
        setLoginError("Invalid Super Admin credential pins. Access Forbidden!");
      }
    } else {
      const match = employees.find(
        (emp) =>
          emp.email.trim().toLowerCase() === loginEmail.trim().toLowerCase() &&
          emp.pin === loginPin.trim(),
      );
      if (match) {
        setActiveUser(match);
        localStorage.setItem("makeeazy_logged_employee", JSON.stringify(match));
        setCurrentTab("directives"); // Default tab for employees
        setLoginEmail("");
        setLoginPin("");
      } else {
        setLoginError(
          "Incorrect Corporate Email ID or Employee passcode PIN. Please try again.",
        );
      }
    }
  };

  const logout = () => {
    setActiveUser(null);
    localStorage.removeItem("makeeazy_logged_employee");
  };

  // Add timesheet entry submission
  const handleAddTimesheet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tsDesc.trim() || !activeUser) return;

    const newEntry: Timesheet = {
      id: "ts-" + Math.random().toString(36).substring(2, 9),
      employeeEmail: activeUser.email,
      employeeName: activeUser.name,
      date: tsDate,
      serviceType: tsService,
      hours: tsHours,
      description: tsDesc,
      status: "Pending",
      timestamp: Date.now(),
    };

    setTimesheets([newEntry, ...timesheets]);
    setTsDesc("");
    setTsSuccessMsg(
      "Advisory timesheet reported successfully! Sent to Admin for compliance verification.",
    );
    setTimeout(() => setTsSuccessMsg(""), 4000);
  };

  const handleDeleteTimesheet = (id: string) => {
    setTimesheets(timesheets.filter((ts) => ts.id !== id));
  };

  // Apply Leave submission
  const handleApplyLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lvReason.trim() || !activeUser) return;

    // Days count (simple calculation)
    const start = new Date(lvStart);
    const end = new Date(lvEnd);
    const diffTime = Math.max(0, end.getTime() - start.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    const newLeave: LeaveApplication = {
      id: "lv-" + Math.random().toString(36).substring(2, 9),
      employeeEmail: activeUser.email,
      employeeName: activeUser.name,
      startDate: lvStart,
      endDate: lvEnd,
      leaveType: lvType,
      reason: lvReason,
      totalDays: totalDays,
      status: "Pending",
    };

    setLeaves([newLeave, ...leaves]);
    setLvReason("");
    setLvSuccessMsg(
      `Leave request of ${totalDays} days filed successfully for review.`,
    );
    setTimeout(() => setLvSuccessMsg(""), 4000);
  };

  // Upload expense submission
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exAmount || !exDesc.trim() || !activeUser) return;

    const newClaim: ExpenseClaim = {
      id: "ex-" + Math.random().toString(36).substring(2, 9),
      employeeEmail: activeUser.email,
      employeeName: activeUser.name,
      date: exDate,
      category: exCategory,
      amount: Number(exAmount),
      description: exDesc,
      status: "Pending",
    };

    setExpenses([newClaim, ...expenses]);
    setExAmount("");
    setExDesc("");
    setExSuccessMsg("Expense claim registered successfully. Invoice uploaded.");
    setTimeout(() => setExSuccessMsg(""), 4000);
  };

  // Task progress update (for logged in employee)
  const handleUpdateTaskStatus = (
    id: string,
    newStatus: "To Do" | "In Progress" | "Completed",
  ) => {
    const updated = tasks.map((tk) => {
      if (tk.id === id) {
        return { ...tk, status: newStatus };
      }
      return tk;
    });
    setTasks(updated);
  };

  // Derived dashboard metrics (for active employee)
  const loggedTimesheets = timesheets.filter(
    (t) => t.employeeEmail === currentUserProfile?.email,
  );
  const loggedLeaves = leaves.filter(
    (l) => l.employeeEmail === currentUserProfile?.email,
  );
  const loggedClaims = expenses.filter(
    (e) => e.employeeEmail === currentUserProfile?.email,
  );
  const loggedTasks = tasks.filter(
    (tk) => tk.assignedToEmail === currentUserProfile?.email,
  );

  const totalHoursThisMonth = loggedTimesheets
    .filter((t) => t.status === "Approved")
    .reduce((sum, t) => sum + t.hours, 0);

  const pendingClaimsTotal = loggedClaims
    .filter((e) => e.status === "Pending")
    .reduce((sum, e) => sum + e.amount, 0);

  const approvedClaimsTotal = loggedClaims
    .filter((e) => e.status === "Approved")
    .reduce((sum, e) => sum + e.amount, 0);

  const employeePendingTasksList = React.useMemo(() => {
    return loggedTasks.filter(
      (t) => t.status === "To Do" || t.status === "In Progress",
    );
  }, [loggedTasks]);

  const employeeNotificationsCount = employeePendingTasksList.length;

  React.useEffect(() => {
    if (employeeNotificationsCount > prevNotifCount) {
      setHasViewedNotifications(false);
      setClearedEmployeeNotifications(false);
    }
    setPrevNotifCount(employeeNotificationsCount);
  }, [employeeNotificationsCount, prevNotifCount]);

  const employeeBadgeCount =
    hasViewedNotifications || clearedEmployeeNotifications
      ? 0
      : employeeNotificationsCount;

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-12 relative overflow-hidden font-sans">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-24 translate-x-24 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -translate-x-24 translate-y-24 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* If user is not authenticated, show secure clean login interface */}
        <AnimatePresence mode="wait">
          {!activeUser ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto mt-8 bg-white rounded-3xl border border-slate-200 p-8 shadow-xl relative"
              id="login-form-card"
            >
              <div className="absolute top-5 right-5 bg-orange-50 border border-orange-100/50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                Staff Portal
              </div>

              {/* Logo / Heading */}
              <div className="flex flex-col items-start gap-1 mb-6 -mt-3">
                <img
                  src="/logo.png"
                  alt="Make Eazy Logo"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement
                      ?.querySelector(".fallback-text")
                      ?.classList.remove("hidden");
                  }}
                />
                <div className="fallback-text hidden items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3150A0] to-indigo-700 text-white flex items-center justify-center text-lg font-bold shadow-sm">
                    ME
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xl tracking-tight text-[#3150A0]">
                        Make
                      </span>
                      <span className="font-bold text-xl tracking-tight text-orange-500">
                        Eazy
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Login Role Toggle Switch */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100/70 rounded-2xl mb-5">
                <button
                  type="button"
                  id="btn-role-employee"
                  onClick={() => {
                    setLoginRoleTab("employee");
                    setLoginError("");
                  }}
                  className={`py-2 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    loginRoleTab === "employee"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-850 hover:bg-white/40"
                  }`}
                >
                  Team Employee
                </button>
                <button
                  type="button"
                  id="btn-role-admin"
                  onClick={() => {
                    setLoginRoleTab("admin");
                    setLoginError("");
                  }}
                  className={`py-2 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    loginRoleTab === "admin"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-850 hover:bg-white/40"
                  }`}
                >
                  Admin
                </button>
              </div>

              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 mb-6 text-xs text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-850 mb-1 animate-pulse-subtle">
                  Secure Workspace Portal
                </p>
                {loginRoleTab === "admin" ? (
                  <p>
                    Access the administrative workspace to assign client tasks,
                    manage team leave applications, and process expense
                    reimbursements.
                  </p>
                ) : (
                  <p>
                    Access your advisor desk to log service consultations,
                    request leave, and securely view monthly payslip summaries.
                  </p>
                )}
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="loginEmail"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    {loginRoleTab === "admin"
                      ? "Admin Email ID"
                      : "Corporate Email ID"}
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder={
                      loginRoleTab === "admin"
                        ? "admin@makeeazy.in"
                        : "e.g. shivani.nair@makeeazy.in"
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#3150A0]/10 focus:border-[#3150A0] outline-none text-sm font-normal text-slate-800 transition-all focus:shadow-sm"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      htmlFor="loginPin"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
                    >
                      Pass Code PIN
                    </label>
                    <span className="text-[11px] text-[#3150A0] font-medium">
                      Self-Service PIN
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="loginPin"
                      required
                      value={loginPin}
                      onChange={(e) => setLoginPin(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#3150A0]/10 focus:border-[#3150A0] outline-none text-sm font-normal text-slate-800 transition-all focus:shadow-sm"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                  </div>
                </div>

                {loginError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-100 rounded-2xl text-rose-700 text-xs flex gap-2 items-start shrink-0 font-medium">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#3150A0] hover:bg-[#243d7d] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <Lock className="w-4 h-4" />
                  Authenticate Account
                </button>
              </form>
            </motion.div>
          ) : (
            /* Authenticated view */
            <motion.div
              key="portal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Header profile panel */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#3150A0] to-indigo-700 text-white flex items-center justify-center text-xl font-bold relative shadow-md">
                    {currentUserProfile.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                    <div
                      className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white"
                      title="Internal workstation connected"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-lg sm:text-xl font-bold text-[#3150A0]">
                        {currentUserProfile.name}
                      </h1>
                      <span className="bg-blue-50 border border-blue-100 text-[#3150A0] text-xs font-semibold px-2 py-0.5 rounded-md">
                        {currentUserProfile.empId}
                      </span>
                      {currentUserProfile.isSuperAdmin && (
                        <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider">
                          Chief Admin
                        </span>
                      )}
                    </div>
                    {currentUserProfile.role && (
                      <p className="text-sm text-slate-600 font-medium mt-0.5">
                        {currentUserProfile.role}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1.5 text-xs text-slate-500 font-medium">
                      {currentUserProfile.department && (
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4 text-slate-400" />{" "}
                          {currentUserProfile.department}
                        </span>
                      )}
                      {currentUserProfile.doj && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-slate-400" /> Joined{" "}
                          {currentUserProfile.doj}
                        </span>
                      )}
                      {currentUserProfile.qualification && (
                        <span className="flex items-center gap-1.5 bg-indigo-50/70 border border-indigo-100/50 text-[#3150A0] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          🎓 {currentUserProfile.qualification}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t border-slate-100 md:border-t-0 pt-4 md:pt-0">
                  {/* Employee Notifications Dropdown */}
                  {!activeUser.isSuperAdmin && (
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowNotifications(!showNotifications);
                          setHasViewedNotifications(true);
                        }}
                        className={`p-2.5 rounded-xl border transition-all relative flex items-center justify-center cursor-pointer ${
                          showNotifications
                            ? "bg-[#3150A0]/10 border-[#3150A0]/30 text-[#3150A0] ring-2 ring-[#3150A0]/10"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                        aria-label="Toggle notifications"
                        id="employee-notification-bell-btn"
                      >
                        <Bell
                          className={`w-4.5 h-4.5 ${employeeBadgeCount > 0 ? "animate-bounce" : ""}`}
                        />
                        {employeeBadgeCount > 0 && (
                          <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-rose-600 text-white rounded-full border border-white shadow-xs animate-pulse">
                            {employeeBadgeCount}
                          </span>
                        )}
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {showNotifications && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden z-50 origin-top-right flex flex-col"
                            id="employee-notifications-dropdown"
                          >
                            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                                Pending Tasks Alerts
                              </span>
                              <div className="flex items-center gap-2">
                                {employeeNotificationsCount > 0 &&
                                  !clearedEmployeeNotifications && (
                                    <button
                                      onClick={() =>
                                        setClearedEmployeeNotifications(true)
                                      }
                                      className="text-[10px] font-semibold text-slate-500 hover:text-slate-800 underline px-1 cursor-pointer"
                                    >
                                      Clear All
                                    </button>
                                  )}
                                <span className="text-[10px] bg-rose-600 text-white font-semibold px-2 py-0.5 rounded-full">
                                  {clearedEmployeeNotifications
                                    ? 0
                                    : employeeNotificationsCount}{" "}
                                  Actionable
                                </span>
                              </div>
                            </div>

                            <div className="max-h-[320px] overflow-y-auto divide-y divide-slate-100 no-scrollbar">
                              {employeeNotificationsCount === 0 ||
                              clearedEmployeeNotifications ? (
                                <div className="p-8 text-center text-slate-400">
                                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                                  <p className="text-xs font-bold text-slate-700">
                                    All Systems Clear
                                  </p>
                                  <p className="text-xs text-slate-400 mt-0.5">
                                    No new action items assigned to you.
                                  </p>
                                </div>
                              ) : (
                                <>
                                  {employeePendingTasksList.map((task) => (
                                    <button
                                      key={`emp-notif-task-${task.id}`}
                                      onClick={() => {
                                        setCurrentTab("directives");
                                        setShowNotifications(false);
                                      }}
                                      className="w-full text-left p-4 hover:bg-rose-50/50 transition-colors flex gap-3.5 items-start focus:bg-rose-50/50 outline-none cursor-pointer"
                                    >
                                      <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-100/70 flex items-center justify-center shrink-0 mt-0.5">
                                        <Briefcase className="w-4.5 h-4.5 text-rose-600" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center">
                                          <span className="text-[10px] font-semibold text-rose-600 uppercase tracking-wide">
                                            {task.status === "To Do"
                                              ? "New Assignment"
                                              : "In Progress"}
                                          </span>
                                          <span className="text-[10px] font-semibold bg-rose-100 text-rose-700 px-1.5 py-0.25 rounded">
                                            Priority {task.priority}
                                          </span>
                                        </div>
                                        <p className="text-xs font-bold text-slate-800 mt-0.5 truncate">
                                          {task.title}
                                        </p>
                                        <p className="text-xs text-rose-600 font-semibold mt-1.5 flex items-center gap-1">
                                          View details{" "}
                                          <span className="text-xs">→</span>
                                        </p>
                                      </div>
                                    </button>
                                  ))}
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  <button
                    onClick={logout}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-205 hover:bg-slate-50 text-slate-600 hover:text-rose-600 font-semibold text-xs transition-all active:scale-95 cursor-pointer shadow-xs"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    End Session (Logout)
                  </button>
                </div>
              </div>

              {/* -------------------- ADMIN ROLE SCREEN -------------------- */}
              {activeUser.isSuperAdmin ? (
                <SuperAdminDashboard
                  employees={employees}
                  timesheets={timesheets}
                  leaves={leaves}
                  expenses={expenses}
                  tasks={tasks}
                  onUpdateEmployees={setEmployees}
                  onUpdateTimesheets={setTimesheets}
                  onUpdateLeaves={setLeaves}
                  onUpdateExpenses={setExpenses}
                  onUpdateTasks={setTasks}
                />
              ) : (
                /* -------------------- EMPLOYEE ROLE SCREEN -------------------- */
                <>
                  {/* Status metrics grid */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    id="employee-stats-row"
                  >
                    {/* Tile 1: Logged Monthly Audited Shift */}
                    <div
                      onClick={() => setCurrentTab("timesheet")}
                      className="bg-[#3150A0] text-white p-5 rounded-3xl border border-blue-800 shadow-sm relative overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out active:translate-y-0 active:scale-[0.98] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 group min-h-[148px] flex flex-col justify-between"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setCurrentTab("timesheet");
                        }
                      }}
                      title="Click to manage timesheets"
                    >
                      <div>
                        <div className="absolute right-3 top-3 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Clock className="w-5 h-5 text-blue-100" />
                        </div>
                        <p className="text-xs text-blue-200/90 font-medium">
                          Logged Monthly Audited Shift
                        </p>
                        <p className="text-3xl font-bold tracking-tight mt-1">
                          {totalHoursThisMonth.toFixed(1)} hrs
                        </p>
                        <div className="mt-3 w-full bg-white/20 rounded-full h-1.5 max-w-[65%]">
                          <div
                            className="bg-orange-500 h-1.5 rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min(100, (totalHoursThisMonth / 160) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="mt-2 text-xs text-blue-200 font-medium max-w-[65%]">
                        <span>Target: 160.0 hours monthly</span>
                      </div>

                      {/* CTA at Bottom Right */}
                      <span className="absolute bottom-3 right-4 px-2.5 py-1 rounded-xl bg-blue-800/80 border border-blue-700/60 text-blue-100 font-semibold text-xs flex items-center gap-1 group-hover:bg-white group-hover:text-[#3150A0] transition-all shadow-xs">
                        View Shift <span className="text-xs">→</span>
                      </span>
                    </div>

                    {/* Tile 2: Vacation Leave Balance */}
                    <div
                      onClick={() => setCurrentTab("leaves")}
                      className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out active:translate-y-0 active:scale-[0.98] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-350 group min-h-[148px] flex flex-col justify-between"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setCurrentTab("leaves");
                        }
                      }}
                      title="Click to apply for leave"
                    >
                      <div>
                        <div className="absolute right-3 top-3 w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CalendarCheck2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          Vacation Leave Balance
                        </p>
                        <p className="text-3xl font-bold tracking-tight text-slate-800 mt-1">
                          {(currentUserProfile?.leavesLeft?.casual ?? 0) +
                            (currentUserProfile?.leavesLeft?.sick ?? 0) +
                            (currentUserProfile?.leavesLeft?.earned ?? 0)}{" "}
                          days
                        </p>
                      </div>

                      <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500 max-w-[65%] flex-wrap">
                        <span className="px-2 py-0.5 rounded-md bg-orange-50 text-orange-600 font-semibold">
                          {currentUserProfile?.leavesLeft?.casual ?? 0}C
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 font-semibold">
                          {currentUserProfile?.leavesLeft?.sick ?? 0}S
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 font-semibold">
                          {currentUserProfile?.leavesLeft?.earned ?? 0}E
                        </span>
                      </div>

                      {/* CTA at Bottom Right */}
                      <span className="absolute bottom-3 right-4 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-[#3150A0] font-semibold text-xs flex items-center gap-1 group-hover:bg-[#3150A0] group-hover:text-white transition-all shadow-xs">
                        Request Leave <span className="text-xs">→</span>
                      </span>
                    </div>

                    {/* Tile 3: Consulting KPI Quotient / Directive Deliverables */}
                    <div
                      onClick={() => setCurrentTab("directives")}
                      className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out active:translate-y-0 active:scale-[0.98] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-350 group min-h-[148px] flex flex-col justify-between"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setCurrentTab("directives");
                        }
                      }}
                      title="Click to view assigned tasks"
                    >
                      <div>
                        <div className="absolute right-3 top-3 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Award className="w-5 h-5 text-indigo-600" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          Consulting KPI Quotient
                        </p>
                        <p className="text-3xl font-bold tracking-tight text-slate-800 mt-1">
                          {currentUserProfile?.kpiScore ?? "9.0/10"}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-slate-500 max-w-[65%]">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">
                          {
                            loggedTasks.filter((t) => t.status === "Completed")
                              .length
                          }
                          /{loggedTasks.length} Completed
                        </span>
                      </div>

                      {/* CTA at Bottom Right */}
                      <span className="absolute bottom-3 right-4 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-[#3150A0] font-semibold text-xs flex items-center gap-1 group-hover:bg-[#3150A0] group-hover:text-white transition-all shadow-xs">
                        Directives <span className="text-xs">→</span>
                      </span>
                    </div>

                    {/* Tile 4: Expense Claim Pending */}
                    <div
                      onClick={() => setCurrentTab("expenses")}
                      className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out active:translate-y-0 active:scale-[0.98] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-350 group min-h-[148px] flex flex-col justify-between"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setCurrentTab("expenses");
                        }
                      }}
                      title="Click to claim expenses"
                    >
                      <div>
                        <div className="absolute right-3 top-3 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <PiggyBank className="w-5 h-5 text-orange-600" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          Expense Claim Pending
                        </p>
                        {/* Indian Rupee: ALWAYS ₹ */}
                        <p className="text-3xl font-bold tracking-tight text-slate-800 mt-1">
                          ₹{pendingClaimsTotal}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center text-xs text-slate-500 font-medium max-w-[65%]">
                        <span>
                          <span className="font-bold text-emerald-600">
                            ₹{approvedClaimsTotal}
                          </span>{" "}
                          Approved
                        </span>
                      </div>

                      {/* CTA at Bottom Right */}
                      <span className="absolute bottom-3 right-4 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-[#3150A0] font-semibold text-xs flex items-center gap-1 group-hover:bg-[#3150A0] group-hover:text-white transition-all shadow-xs">
                        File Claim <span className="text-xs">→</span>
                      </span>
                    </div>
                  </div>

                  {/* Tab Navigation Controls */}
                  <div
                    className="flex border-b border-slate-200 gap-1 overflow-x-auto no-scrollbar pt-2"
                    id="employee-working-tabs"
                  >
                    <button
                      onClick={() => setCurrentTab("directives")}
                      className={`py-3 px-5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        currentTab === "directives"
                          ? "border-[#3150A0] text-[#3150A0]"
                          : "border-transparent text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <ClipboardList className="w-4 h-4 text-orange-600" />
                      Assigned Directives & Tasks (
                      {
                        loggedTasks.filter((t) => t.status !== "Completed")
                          .length
                      }
                      )
                    </button>
                    <button
                      onClick={() => setCurrentTab("timesheet")}
                      className={`py-3 px-5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        currentTab === "timesheet"
                          ? "border-[#3150A0] text-[#3150A0]"
                          : "border-transparent text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <Clock3 className="w-4 h-4" />
                      Report Timesheet Ledger
                    </button>
                    <button
                      onClick={() => setCurrentTab("leaves")}
                      className={`py-3 px-5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        currentTab === "leaves"
                          ? "border-[#3150A0] text-[#3150A0]"
                          : "border-transparent text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <PlaneTakeoff className="w-4 h-4" />
                      Leave Applications
                    </button>
                    <button
                      onClick={() => setCurrentTab("expenses")}
                      className={`py-3 px-5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        currentTab === "expenses"
                          ? "border-[#3150A0] text-[#3150A0]"
                          : "border-transparent text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <PiggyBank className="w-4 h-4" />
                      Claim Professional Expenses (₹)
                    </button>
                    <button
                      onClick={() => setCurrentTab("payroll")}
                      className={`py-3 px-5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        currentTab === "payroll"
                          ? "border-[#3150A0] text-[#3150A0]"
                          : "border-transparent text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <FileCheck className="w-4 h-4" />
                      Corporate Payslips
                    </button>
                  </div>

                  {/* Tabs Content */}
                  <div>
                    {/* NEW TAB: Employee view of ASSIGNED DIRECTIVES */}
                    {currentTab === "directives" && (
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                        <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                          <div>
                            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                              <Sparkles className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                              Your Allocated Client Directives & Tasks
                            </h3>
                            <p className="text-4xs text-slate-500 mt-1">
                              Direct instructions issued by Senior Managing
                              Board. Update your task statuses in real-time as
                              you progress.
                            </p>
                          </div>
                          <span className="text-3xs font-bold bg-indigo-50 text-[#3150A0] px-3 py-1 rounded-full">
                            {loggedTasks.length} Assigned matters
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {loggedTasks.length === 0 ? (
                            <div className="md:col-span-2 text-center py-12 text-slate-400">
                              <FolderCheck className="w-10 h-10 col-span-2 mx-auto text-slate-300 opacity-80 mb-2" />
                              <p className="text-xs font-bold text-slate-700">
                                All Directives Completed!
                              </p>
                              <p className="text-4xs text-slate-400 mt-0.5">
                                There are no client matters currently assigned
                                to your roster. Notify managing directors if you
                                have free bandwidth.
                              </p>
                            </div>
                          ) : (
                            loggedTasks.map((tk) => (
                              <div
                                key={tk.id}
                                className="bg-slate-50/50 hover:bg-white rounded-2xl p-5 border border-slate-250 hover:border-slate-300 hover:shadow-xs transition-all space-y-3"
                              >
                                <div className="flex justify-between items-start gap-4">
                                  <div>
                                    <span
                                      className={`px-2 py-0.5 text-5xs font-extrabold rounded-md uppercase tracking-wider mb-2 inline-block ${
                                        tk.priority === "High"
                                          ? "bg-rose-50 text-rose-700 border border-rose-100"
                                          : tk.priority === "Medium"
                                            ? "bg-orange-50 text-orange-705 border border-orange-100"
                                            : "bg-emerald-50 text-emerald-800"
                                      }`}
                                    >
                                      {tk.priority} Priority
                                    </span>
                                    <h4 className="text-xs font-bold text-slate-800 leading-snug">
                                      {tk.title}
                                    </h4>
                                  </div>

                                  <div className="shrink-0">
                                    <select
                                      value={tk.status}
                                      onChange={(e) =>
                                        handleUpdateTaskStatus(
                                          tk.id,
                                          e.target.value as any,
                                        )
                                      }
                                      className="py-1 px-2.5 rounded-lg text-4xs bg-white text-slate-705 border border-slate-200 outline-none font-extrabold focus:ring-2 focus:ring-[#3150A0]/10 cursor-pointer"
                                    >
                                      <option value="To Do">📋 To Do</option>
                                      <option value="In Progress">
                                        ⚡ In Progress
                                      </option>
                                      <option value="Completed">
                                        ✅ Completed
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                                  {tk.description}
                                </p>

                                <div className="pt-2 text-4xs text-slate-400 font-bold border-t border-slate-100 flex justify-between">
                                  <span>Matter ID: {tk.id}</span>
                                  <span className="text-[#3150A0]">
                                    Target Due Date: {tk.dueDate}
                                  </span>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}

                    {/* 1. Timesheet Module */}
                    {currentTab === "timesheet" && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Add daily timesheet entry */}
                        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                          <div>
                            <h2 className="text-base font-bold text-[#3150A0] flex items-center gap-2">
                              <Plus className="w-4 h-4 text-orange-500 animate-bounce" />
                              Report Advisory Hours
                            </h2>
                            <p className="text-4xs text-slate-500 mt-1">
                              Record consultation, audit, LLP filing, or
                              documentation hours. Entry submits directly for
                              executive admin clearance.
                            </p>
                          </div>

                          <form
                            onSubmit={handleAddTimesheet}
                            className="space-y-4"
                          >
                            <div>
                              <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                Date of consultation
                              </label>
                              <input
                                type="date"
                                required
                                value={tsDate}
                                onChange={(e) => setTsDate(e.target.value)}
                                className="w-full px-4.5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                              />
                            </div>

                            <div>
                              <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                Advisory Scope / Topic
                              </label>
                              <select
                                value={tsService}
                                onChange={(e) => setTsService(e.target.value)}
                                className="w-full px-4.5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                              >
                                <option value="GST Return Filing (3B/1)">
                                  GST Return Filing (3B/1)
                                </option>
                                <option value="Income Tax Audit & ITR">
                                  Income Tax Audit & ITR
                                </option>
                                <option value="Sole Proprietorship Setup">
                                  Sole Proprietorship Setup
                                </option>
                                <option value="Trademark Application Audit">
                                  Trademark Application Audit
                                </option>
                                <option value="LLP / Private Limited Registration">
                                  LLP / Private Limited Registration
                                </option>
                                <option value="FSSAI Food License Filing">
                                  FSSAI Food License Filing
                                </option>
                                <option value="Professional Tax Processing">
                                  Professional Tax Processing
                                </option>
                                <option value="Client Consultation Advisory">
                                  Client Consultation Advisory
                                </option>
                                <option value="General Administration & Prep">
                                  General Administration & Prep
                                </option>
                              </select>
                            </div>

                            <div>
                              <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest">
                                  Hours Expended
                                </label>
                                <span className="text-xs font-extrabold text-[#3150A0] bg-blue-50 px-2 py-0.5 rounded-md">
                                  {tsHours} Hours
                                </span>
                              </div>
                              <input
                                type="range"
                                min="0.5"
                                max="12"
                                step="0.5"
                                value={tsHours}
                                onChange={(e) =>
                                  setTsHours(Number(e.target.value))
                                }
                                className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-[#3150A0]"
                              />
                              <div className="flex justify-between text-5xs text-slate-405 mt-1 font-semibold">
                                <span>0.5 hr</span>
                                <span>4.0 hrs</span>
                                <span>8.0 hrs</span>
                                <span>12.0 hrs</span>
                              </div>
                            </div>

                            <div>
                              <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                Matter Deliveration / Summary Log
                              </label>
                              <textarea
                                required
                                rows={3}
                                placeholder="Detail what you resolved (e.g. prepared audit tax checklist, rectified objections filed with MCA, etc.)"
                                value={tsDesc}
                                onChange={(e) => setTsDesc(e.target.value)}
                                className="w-full px-4.5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 resize-none leading-relaxed"
                              />
                            </div>

                            {tsSuccessMsg && (
                              <div className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-850 text-xs flex gap-2">
                                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>{tsSuccessMsg}</span>
                              </div>
                            )}

                            <button
                              type="submit"
                              className="w-full bg-[#3150A0] hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" />
                              Log Timesheet Report
                            </button>
                          </form>
                        </div>

                        {/* Timesheet timeline / ledger */}
                        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                          <div className="flex justify-between items-center">
                            <div>
                              <h2 className="text-base font-bold text-slate-900">
                                Your Consultation Ledger
                              </h2>
                              <p className="text-4xs text-slate-500 mt-0.5">
                                Submitted tasks, work hours, and verification
                                responses
                              </p>
                            </div>
                            <span className="text-3xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-full">
                              {loggedTimesheets.length} Submitted audits
                            </span>
                          </div>

                          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                            {loggedTimesheets.length === 0 ? (
                              <div className="text-center py-12 text-slate-400">
                                <Clock className="w-10 h-10 mx-auto opacity-30 mb-2" />
                                <p className="text-xs">
                                  No hours recorded in this cycle. Log your
                                  consultative time slots above.
                                </p>
                              </div>
                            ) : (
                              loggedTimesheets.map((ts) => (
                                <div
                                  key={ts.id}
                                  className="border border-slate-100 bg-slate-50/40 rounded-2xl p-4 hover:bg-white hover:border-slate-200 transition-all flex flex-col sm:flex-row gap-4 justify-between items-start"
                                >
                                  <div className="space-y-2 flex-grow">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="text-xs font-bold text-slate-800">
                                        {ts.serviceType}
                                      </span>
                                      <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200/50 px-2 py-0.5 rounded">
                                        {ts.date}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                                      {ts.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                      <span className="bg-blue-50 text-[#3150A0] font-bold px-1.5 py-0.5 rounded">
                                        {ts.hours} HRs Asserted
                                      </span>
                                    </div>
                                  </div>

                                  <div className="sm:text-right flex sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto shrink-0 gap-2 sm:gap-4 border-t sm:border-t-0 pt-2 sm:pt-0">
                                    <span
                                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                                        ts.status === "Approved"
                                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                          : ts.status === "Pending"
                                            ? "bg-orange-50 text-orange-700 border border-orange-100"
                                            : "bg-rose-50 text-rose-700 border border-rose-100"
                                      }`}
                                    >
                                      {ts.status}
                                    </span>

                                    {ts.status === "Pending" && (
                                      <button
                                        onClick={() =>
                                          handleDeleteTimesheet(ts.id)
                                        }
                                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                                        title="Revoke report entry"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. Leave Module */}
                    {currentTab === "leaves" && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Apply for leave form */}
                        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                          <div>
                            <h2 className="text-base font-bold text-[#3150A0] flex items-center gap-2">
                              <PlaneTakeoff className="w-5 h-5 text-orange-500" />
                              Apply for Leave
                            </h2>
                            <p className="text-4xs text-slate-500 mt-1">
                              Requests routes straight to Department Super Admin
                              panel. Allow 24 hours for official clearance
                              guidelines.
                            </p>
                          </div>

                          <form
                            onSubmit={handleApplyLeave}
                            className="space-y-4"
                          >
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                  Start Date
                                </label>
                                <input
                                  type="date"
                                  required
                                  value={lvStart}
                                  onChange={(e) => setLvStart(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                                />
                              </div>
                              <div>
                                <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                  End Date
                                </label>
                                <input
                                  type="date"
                                  required
                                  value={lvEnd}
                                  onChange={(e) => setLvEnd(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                Vacancy Type
                              </label>
                              <select
                                value={lvType}
                                onChange={(e) => setLvType(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                              >
                                <option value="Casual Leave">
                                  Casual Leave
                                </option>
                                <option value="Sick Leave">Sick Leave</option>
                                <option value="Earned Leave">
                                  Earned Leave (Privileged)
                                </option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                Reason for request
                              </label>
                              <textarea
                                required
                                rows={3}
                                placeholder="State detailed reason for leave..."
                                value={lvReason}
                                onChange={(e) => setLvReason(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 resize-none leading-relaxed"
                              />
                            </div>

                            {lvSuccessMsg && (
                              <div className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-xs flex gap-2">
                                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>{lvSuccessMsg}</span>
                              </div>
                            )}

                            <button
                              type="submit"
                              className="w-full bg-[#3150A0] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" />
                              Submit Leave Request
                            </button>
                          </form>
                        </div>

                        {/* Leave balance history */}
                        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                          <div>
                            <h2 className="text-base font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                              <CalendarCheck2 className="w-5 h-5 text-[#3150A0]" />
                              Absence Tracker & Leave Attendance
                            </h2>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Track your pending requests and chronological
                              attendance logs
                            </p>
                          </div>

                          {/* Active / Pending Requests Section */}
                          <div className="space-y-3.5">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                              Awaiting Assessment (
                              {
                                loggedLeaves.filter(
                                  (lv) => lv.status === "Pending",
                                ).length
                              }
                              )
                            </span>

                            {loggedLeaves.filter(
                              (lv) => lv.status === "Pending",
                            ).length === 0 ? (
                              <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-150 text-center py-5 text-slate-400">
                                <p className="text-xs font-semibold text-slate-500">
                                  No active pending leave requests.
                                </p>
                              </div>
                            ) : (
                              <div className="space-y-3">
                                {loggedLeaves
                                  .filter((lv) => lv.status === "Pending")
                                  .map((lv) => (
                                    <div
                                      key={lv.id}
                                      className="border border-slate-150 bg-orange-50/25 p-4 rounded-2xl flex justify-between items-center gap-4 hover:bg-orange-50/30 transition-colors text-left"
                                    >
                                      <div>
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs font-bold text-slate-800">
                                            {lv.leaveType}
                                          </span>
                                          <span className="bg-orange-100 text-orange-700 font-semibold px-1.5 py-0.5 rounded text-xs">
                                            {lv.totalDays} Days
                                          </span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1 select-none">
                                          Period:{" "}
                                          <span className="font-semibold text-slate-705">
                                            {lv.startDate}
                                          </span>{" "}
                                          to{" "}
                                          <span className="font-semibold text-slate-705">
                                            {lv.endDate}
                                          </span>
                                        </p>
                                        <p className="text-xs text-slate-600 mt-1.5 italic">
                                          “{lv.reason}”
                                        </p>
                                      </div>

                                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 bg-orange-50 text-orange-700 border border-orange-100 uppercase tracking-wide">
                                        {lv.status}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>

                          {/* Chronological Timeline or History of Approved & Rejected Leaves */}
                          <div className="space-y-3.5 pt-5 border-t border-slate-100 text-left">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                              Attendance & Leave History Timeline (
                              {
                                loggedLeaves.filter(
                                  (lv) => lv.status !== "Pending",
                                ).length
                              }
                              )
                            </span>

                            {loggedLeaves.filter(
                              (lv) => lv.status !== "Pending",
                            ).length === 0 ? (
                              <div className="p-5 rounded-xl bg-slate-50/50 border border-slate-150 text-center py-7 text-slate-400">
                                <p className="text-4xs font-semibold text-slate-500">
                                  No leave history or attendance logs available.
                                </p>
                                <p className="text-5xs text-slate-400 mt-0.5">
                                  Approved or rejected requests will populate as
                                  a chronological timeline here.
                                </p>
                              </div>
                            ) : (
                              <div className="relative border-l border-slate-200 ml-2 pl-5 space-y-5 mt-3">
                                {[...loggedLeaves]
                                  .filter((lv) => lv.status !== "Pending")
                                  .sort(
                                    (a, b) =>
                                      new Date(b.startDate).getTime() -
                                      new Date(a.startDate).getTime(),
                                  )
                                  .map((lv) => {
                                    const isApproved = lv.status === "Approved";
                                    return (
                                      <div
                                        key={lv.id}
                                        className="relative group text-left"
                                      >
                                        {/* Timeline Dot Indicator */}
                                        <div
                                          className={`absolute -left-[27px] top-1.5 w-3 h-3 rounded-full border bg-white flex items-center justify-center transition-all ${
                                            isApproved
                                              ? "border-emerald-500 ring-2 ring-emerald-100"
                                              : "border-rose-500 ring-2 ring-rose-100"
                                          }`}
                                        ></div>

                                        <div className="border border-slate-150 bg-slate-50/25 hover:bg-slate-50 p-4 rounded-2xl transition-all duration-200">
                                          <div className="flex justify-between items-start gap-3">
                                            <div>
                                              <div className="flex items-center gap-2 flex-wrap">
                                                <span className="text-xs font-extrabold text-slate-800">
                                                  {lv.leaveType}
                                                </span>
                                                <span
                                                  className={`text-4xs font-extrabold px-1.5 py-0.5 rounded ${
                                                    isApproved
                                                      ? "bg-emerald-50 text-emerald-700"
                                                      : "bg-rose-50 text-rose-700"
                                                  }`}
                                                >
                                                  {lv.totalDays} Days
                                                </span>
                                              </div>
                                              <p className="text-4xs text-slate-500 mt-1 select-none">
                                                Period:{" "}
                                                <span className="font-semibold text-slate-705">
                                                  {lv.startDate}
                                                </span>{" "}
                                                to{" "}
                                                <span className="font-semibold text-slate-705">
                                                  {lv.endDate}
                                                </span>
                                              </p>
                                              {lv.reason && (
                                                <p className="text-xs text-slate-600 italic mt-2.5 bg-white px-2.5 py-1.5 rounded-xl border border-slate-100 leading-relaxed">
                                                  “{lv.reason}”
                                                </p>
                                              )}
                                            </div>

                                            <span
                                              className={`px-2 py-0.5 rounded-md text-5xs font-black uppercase shrink-0 ${
                                                isApproved
                                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                                  : "bg-rose-50 text-rose-700 border border-rose-100"
                                              }`}
                                            >
                                              {lv.status}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. Expense Reimbursements Module */}
                    {currentTab === "expenses" && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Claim expense form */}
                        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                          <div>
                            <h2 className="text-base font-bold text-[#3150A0] flex items-center gap-2">
                              <PiggyBank className="w-5 h-5 text-orange-500" />
                              Reimbursement Claim
                            </h2>
                            <p className="text-4xs text-slate-500 mt-1">
                              Declare professional travel, tools, or stationery.
                              Specified in standard Indian Rupees (₹).
                            </p>
                          </div>

                          <form
                            onSubmit={handleAddExpense}
                            className="space-y-4"
                          >
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                  Expense Date
                                </label>
                                <input
                                  type="date"
                                  required
                                  value={exDate}
                                  onChange={(e) => setExDate(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                                />
                              </div>
                              <div>
                                <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                  Claim Amount (₹)
                                </label>
                                <div className="relative">
                                  <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-500">
                                    ₹
                                  </span>
                                  <input
                                    type="number"
                                    required
                                    min="10"
                                    max="50000"
                                    placeholder="1250"
                                    value={exAmount}
                                    onChange={(e) =>
                                      setExAmount(e.target.value)
                                    }
                                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 font-bold"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                Category Ledger
                              </label>
                              <select
                                value={exCategory}
                                onChange={(e) => setExCategory(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15"
                              >
                                <option value="Client Site Conveyance">
                                  Client Site Conveyance
                                </option>
                                <option value="Professional Subscriptions">
                                  Professional Software & Tools
                                </option>
                                <option value="Client Meal & Hospitality">
                                  Client Meal & Hospitality
                                </option>
                                <option value="Courier, Stationery & Printing">
                                  Courier, Stationery & Printing
                                </option>
                                <option value="Telephone & Home Broadband">
                                  Telephone & Home Broadband
                                </option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-4xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                Matter brief details / Description
                              </label>
                              <textarea
                                required
                                rows={3}
                                placeholder="Detail what work activity necessitated this expense..."
                                value={exDesc}
                                onChange={(e) => setExDesc(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs outline-none focus:ring-2 focus:ring-[#3150A0]/15 resize-none leading-relaxed"
                              />
                            </div>

                            {exSuccessMsg && (
                              <div className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-xs flex gap-2">
                                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>{exSuccessMsg}</span>
                              </div>
                            )}

                            <button
                              type="submit"
                              className="w-full bg-[#3150A0] hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" />
                              Submit Reimbursement Claim
                            </button>
                          </form>
                        </div>

                        {/* Claims list */}
                        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                          <div>
                            <h2 className="text-base font-bold text-slate-900">
                              Your Expense Logs
                            </h2>
                            <p className="text-4xs text-slate-500 mt-0.5">
                              Reimbursements history requested on-file
                            </p>
                          </div>

                          <div className="space-y-4">
                            {loggedClaims.map((ex) => (
                              <div
                                key={ex.id}
                                className="border border-slate-100 bg-slate-50/45 p-4 rounded-2xl flex justify-between items-center text-xs"
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-800">
                                      {ex.category}
                                    </span>
                                    <span className="text-4xs text-slate-400 font-medium">
                                      {ex.date}
                                    </span>
                                  </div>
                                  <p className="text-slate-600 leading-relaxed font-normal">
                                    “{ex.description}”
                                  </p>
                                  <div className="font-extrabold text-[#3150A0] flex items-center gap-1.5">
                                    <span>Amount claimed:</span>
                                    <span className="text-orange-605">
                                      ₹{ex.amount}
                                    </span>
                                  </div>
                                </div>

                                <span
                                  className={`px-2.5 py-1 rounded-full text-5xs font-black shrink-0 ${
                                    ex.status === "Approved"
                                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                      : ex.status === "Rejected"
                                        ? "bg-rose-50 text-rose-700 border border-rose-100"
                                        : "bg-orange-50 text-orange-700 border border-orange-100"
                                  }`}
                                >
                                  {ex.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. Payroll Slips Module */}
                    {currentTab === "payroll" && (
                      <div className="space-y-6">
                        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                          <div className="flex justify-between items-center mb-6">
                            <div>
                              <h2 className="text-base font-bold text-slate-900">
                                Corporate Payroll Slips
                              </h2>
                              <p className="text-4xs text-slate-500 mt-0.5">
                                Credited salary statements and legal Tax
                                compliance (₹)
                              </p>
                            </div>
                            <span className="text-4xs font-bold bg-blue-50 text-[#3150A0] px-3 py-1 rounded-full">
                              Tax Year 2026-2027
                            </span>
                          </div>

                          <div className="grid md:grid-cols-3 gap-4 mb-8 text-xs">
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <p className="text-4xs text-slate-405 font-bold uppercase tracking-wider">
                                Salary Account bank
                              </p>
                              <p className="font-bold text-slate-800 mt-1">
                                HDFC Bank Ltd
                              </p>
                              <p className="text-4xs text-slate-450">
                                A/C: *******9402
                              </p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <p className="text-4xs text-slate-405 font-bold uppercase tracking-wider">
                                PAN Registered
                              </p>
                              <p className="font-bold text-slate-800 mt-1">
                                BCVPN34***L
                              </p>
                              <p className="text-4xs text-slate-450">
                                Active Legal verified
                              </p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <p className="text-4xs text-slate-405 font-bold uppercase tracking-wider">
                                EPFO UAN Registered
                              </p>
                              <p className="font-bold text-slate-800 mt-1">
                                1009384*****
                              </p>
                              <p className="text-4xs text-slate-450">
                                Provident fund ledger
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                              Released Payslips
                            </h3>

                            {(() => {
                              const sBasic =
                                currentUserProfile?.salaryDetails?.basic ??
                                45000;
                              const sHra =
                                currentUserProfile?.salaryDetails?.hra ?? 18000;
                              const sSpecial =
                                currentUserProfile?.salaryDetails?.special ??
                                12000;
                              const sPf =
                                currentUserProfile?.salaryDetails?.pf ?? 2105;
                              const sProfTax =
                                currentUserProfile?.salaryDetails?.profTax ??
                                200;
                              const sTds =
                                currentUserProfile?.salaryDetails
                                  ?.taxDeducted ?? 1515;

                              const dynamicPayslipHistory = [
                                {
                                  month: "May 2026",
                                  basic: sBasic,
                                  hra: sHra,
                                  special: sSpecial,
                                  pf: sPf,
                                  profTax: sProfTax,
                                  taxDeducted: sTds,
                                  status: "Credited",
                                },
                                {
                                  month: "April 2026",
                                  basic: sBasic,
                                  hra: sHra,
                                  special: sSpecial,
                                  pf: sPf,
                                  profTax: sProfTax,
                                  taxDeducted: sTds,
                                  status: "Credited",
                                },
                                {
                                  month: "March 2026",
                                  basic: Math.floor(sBasic * 0.95),
                                  hra: Math.floor(sHra * 0.95),
                                  special: Math.floor(sSpecial * 0.95),
                                  pf: sPf,
                                  profTax: sProfTax,
                                  taxDeducted: Math.floor(sTds * 0.9),
                                  status: "Credited",
                                },
                              ];

                              return dynamicPayslipHistory.map((sl) => {
                                const grossEarned =
                                  sl.basic + sl.hra + sl.special;
                                const totalDeducted =
                                  sl.pf + sl.profTax + sl.taxDeducted;
                                const netSalary = grossEarned - totalDeducted;

                                return (
                                  <div
                                    key={sl.month}
                                    className="border border-slate-100 bg-slate-50/30 p-5 rounded-2xl hover:border-slate-200 transition-all font-sans"
                                  >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-dashed border-slate-200/80 font-sans">
                                      <div>
                                        <span className="text-sm font-extrabold text-slate-800">
                                          {sl.month}
                                        </span>
                                        <p className="text-4xs text-slate-500 mt-0.5">
                                          Official transfer date on 1st of
                                          monthly subsequent cycle
                                        </p>
                                      </div>
                                      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end font-sans">
                                        <span className="bg-emerald-50 text-emerald-750 border border-emerald-100 px-3 py-1 rounded-full text-4xs font-bold">
                                          {sl.status}
                                        </span>
                                        {/* Opens our premium custom payslip modal without calling annoying system alerts */}
                                        <button
                                          onClick={() => setSelectedPayslip(sl)}
                                          className="px-3.5 py-1.5 rounded-xl bg-[#3150A0]/10 hover:bg-[#3150A0] text-[#3150A0] hover:text-white transition-colors text-3xs font-extrabold cursor-pointer flex items-center gap-1 shadow-xs"
                                        >
                                          <Download className="w-3.5 h-3.5" />
                                          Preview Pay Slip
                                        </button>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
                                      <div>
                                        <p className="text-4xs text-slate-400 font-bold uppercase tracking-wider">
                                          Gross Earnings
                                        </p>
                                        <p className="font-bold text-slate-800 mt-0.5 font-sans">
                                          ₹{grossEarned.toLocaleString("en-IN")}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-4xs text-slate-400 font-bold uppercase tracking-wider">
                                          Total Deductions
                                        </p>
                                        <p className="font-bold text-rose-600 mt-0.5 font-sans">
                                          ₹
                                          {totalDeducted.toLocaleString(
                                            "en-IN",
                                          )}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-4xs text-slate-400 font-bold uppercase tracking-wider">
                                          TDS (Tax Withheld)
                                        </p>
                                        <p className="font-bold text-slate-800 mt-0.5 font-sans">
                                          ₹
                                          {sl.taxDeducted.toLocaleString(
                                            "en-IN",
                                          )}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-4xs text-slate-400 font-bold uppercase tracking-wider font-extrabold text-[#3150A0]">
                                          Net Salary Credited
                                        </p>
                                        <p className="text-sm font-black text-emerald-600 mt-0.5 font-sans">
                                          ₹{netSalary.toLocaleString("en-IN")}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              });
                            })()}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* GORGEOUS PREMIUM INTEGRATED PAYSLIP VIEWER MODAL */}
              {selectedPayslip && (
                <PayslipModal
                  isOpen={true}
                  onClose={() => setSelectedPayslip(null)}
                  payslip={selectedPayslip}
                  employeeName={activeUser.name}
                  empId={activeUser.empId}
                  role={activeUser.role}
                  department={activeUser.department}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
