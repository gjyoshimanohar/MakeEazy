export interface Timesheet {
  id: string;
  employeeEmail: string;
  employeeName: string;
  date: string;
  serviceType: string;
  hours: number;
  description: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  timestamp: number;
}

export interface LeaveApplication {
  id: string;
  employeeEmail: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  leaveType: string;
  reason: string;
  totalDays: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}

export interface ExpenseClaim {
  id: string;
  employeeEmail: string;
  employeeName: string;
  date: string;
  category: string;
  amount: number;
  description: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

export interface BusinessTask {
  id: string;
  assignedToEmail: string;
  employeeName: string;
  title: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  description: string;
  status: 'To Do' | 'In Progress' | 'Completed';
}

export interface SalaryDetails {
  basic: number;
  hra: number;
  special: number;
  pf: number;
  profTax: number;
  taxDeducted: number;
}

export interface EmployeeProfile {
  email: string;
  pin: string;
  name: string;
  role: string;
  department: string;
  empId: string;
  doj: string;
  leavesLeft: { casual: number; sick: number; earned: number };
  kpiScore: string;
  achievements: string[];
  qualification?: string;
  salaryDetails?: SalaryDetails;
  status?: 'Active' | 'On-Leave' | 'Inactive';
}
