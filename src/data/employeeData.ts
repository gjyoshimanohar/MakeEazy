import { EmployeeProfile, Timesheet, LeaveApplication, ExpenseClaim, BusinessTask } from '../types/employee';

export const DEFAULT_EMPLOYEES: EmployeeProfile[] = [];

export const SUPER_ADMIN_PROFILE = {
  email: 'admin@makeeazy.in',
  pin: 'admin123',
  name: 'Admin MakeEazy',
  role: '',
  department: '',
  empId: 'MK-BOSS-01',
  doj: '',
  leavesLeft: { casual: 15, sick: 10, earned: 30 },
  kpiScore: '10/10',
  achievements: [],
  isSuperAdmin: true
};

export const DEFAULT_TIMESHEETS = (timestampNow: number): Timesheet[] => [];

export const DEFAULT_LEAVES: LeaveApplication[] = [];

export const DEFAULT_EXPENSES: ExpenseClaim[] = [];

export const DEFAULT_TASKS: BusinessTask[] = [];

export const PAYSLIPS_HISTORY = [
  { month: 'May 2026', basic: 45000, hra: 18000, special: 12000, pf: 2100, profTax: 200, taxDeducted: 1515, status: 'Credited' },
  { month: 'April 2026', basic: 45000, hra: 18000, special: 12000, pf: 2100, profTax: 200, taxDeducted: 1515, status: 'Credited' },
  { month: 'March 2026', basic: 42000, hra: 16800, special: 11200, pf: 2100, profTax: 200, taxDeducted: 1150, status: 'Credited' }
];
