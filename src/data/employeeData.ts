import { EmployeeProfile, Timesheet, LeaveApplication, ExpenseClaim, BusinessTask } from '../types/employee';

export const DEFAULT_EMPLOYEES: EmployeeProfile[] = [
  {
    email: 'shivani.nair@makeeazy.in',
    pin: 'emp123',
    name: 'Shivani Nair',
    role: 'Senior GST & Tax Consultant',
    department: 'Taxation & Audit Division',
    empId: 'MK-9402',
    doj: '12-Jan-2023',
    leavesLeft: { casual: 8, sick: 5, earned: 12 },
    kpiScore: '9.4/10',
    achievements: ['Best Tax Auditor Q1', 'Client Delight Star'],
    qualification: 'Chartered Accountant (CA)',
    salaryDetails: { basic: 45000, hra: 18000, special: 12000, pf: 2100, profTax: 200, taxDeducted: 1515 }
  },
  {
    email: 'rohit.sharma@makeeazy.in',
    pin: 'emp123',
    name: 'Rohit Sharma',
    role: 'Corporate Secretarial Consultant',
    department: 'Corporate Governance',
    empId: 'MK-9405',
    doj: '05-Mar-2024',
    leavesLeft: { casual: 6, sick: 4, earned: 10 },
    kpiScore: '8.9/10',
    achievements: ['Corporate Filing Champion'],
    qualification: 'Company Secretary (CS)',
    salaryDetails: { basic: 38000, hra: 15200, special: 9800, pf: 1800, profTax: 200, taxDeducted: 1050 }
  }
];

export const SUPER_ADMIN_PROFILE = {
  email: 'admin@makeeazy.in',
  pin: 'admin123',
  name: 'Advocate Anirudh Deshmukh',
  role: 'Chief Compliance Officer & MD',
  department: 'Executive Board of Management',
  empId: 'MK-BOSS-01',
  doj: '01-Apr-2018',
  leavesLeft: { casual: 15, sick: 10, earned: 30 },
  kpiScore: '10/10',
  achievements: ['Lifetime Compliance Excellence Excellence Award'],
  isSuperAdmin: true
};

export const DEFAULT_TIMESHEETS = (timestampNow: number): Timesheet[] => [
  {
    id: 'ts-1',
    employeeEmail: 'shivani.nair@makeeazy.in',
    employeeName: 'Shivani Nair',
    date: '2026-06-05',
    serviceType: 'GST Return Filing (3B/1)',
    hours: 4.5,
    description: 'Prepared and uploaded GSTR-3B filings for three retail clients. Completed initial reconciliation.',
    status: 'Approved',
    timestamp: timestampNow - 86400000 * 2
  },
  {
    id: 'ts-2',
    employeeEmail: 'shivani.nair@makeeazy.in',
    employeeName: 'Shivani Nair',
    date: '2026-06-05',
    serviceType: 'Income Tax Audit',
    hours: 3.5,
    description: 'Reviewed financial sheets and conducted voucher verification for Sunshine Enterprises.',
    status: 'Approved',
    timestamp: timestampNow - 86400000 * 2
  },
  {
    id: 'ts-3',
    employeeEmail: 'shivani.nair@makeeazy.in',
    employeeName: 'Shivani Nair',
    date: '2026-06-06',
    serviceType: 'Trademark Application Audit',
    hours: 5.0,
    description: 'Conducted comprehensive brand name search and filed response for two pending trademark objections.',
    status: 'Pending',
    timestamp: timestampNow - 86400000
  },
  {
    id: 'ts-4',
    employeeEmail: 'rohit.sharma@makeeazy.in',
    employeeName: 'Rohit Sharma',
    date: '2026-06-06',
    serviceType: 'Client Consultation',
    hours: 3.0,
    description: 'Detailed introductory advisory call with foreign company delegates regarding LLP formation rules.',
    status: 'Pending',
    timestamp: timestampNow - 86400000
  }
];

export const DEFAULT_LEAVES: LeaveApplication[] = [
  {
    id: 'lv-1',
    employeeEmail: 'shivani.nair@makeeazy.in',
    employeeName: 'Shivani Nair',
    startDate: '2026-05-12',
    endDate: '2026-05-14',
    leaveType: 'Earned Leave',
    reason: 'Family event and outstation travel assistance.',
    totalDays: 3,
    status: 'Approved'
  },
  {
    id: 'lv-2',
    employeeEmail: 'rohit.sharma@makeeazy.in',
    employeeName: 'Rohit Sharma',
    startDate: '2026-06-18',
    endDate: '2026-06-19',
    leaveType: 'Casual Leave',
    reason: 'Personal administration work and home maintenance.',
    totalDays: 2,
    status: 'Pending'
  }
];

export const DEFAULT_EXPENSES: ExpenseClaim[] = [
  {
    id: 'ex-1',
    employeeEmail: 'shivani.nair@makeeazy.in',
    employeeName: 'Shivani Nair',
    date: '2026-05-20',
    category: 'Client Site Conveyance',
    amount: 1450,
    description: 'Cab travel charges for on-site client audit review.',
    status: 'Approved'
  },
  {
    id: 'ex-2',
    employeeEmail: 'rohit.sharma@makeeazy.in',
    employeeName: 'Rohit Sharma',
    date: '2026-06-02',
    category: 'Professional Subscriptions',
    amount: 3200,
    description: 'Subscription extension for online legal and compliance law search engine.',
    status: 'Pending'
  }
];

export const DEFAULT_TASKS: BusinessTask[] = [
  {
    id: 'tk-1',
    assignedToEmail: 'shivani.nair@makeeazy.in',
    employeeName: 'Shivani Nair',
    title: 'Audit GSTR-9 for Sunshine Retailers',
    dueDate: '2026-06-12',
    priority: 'High',
    description: 'Compile and crossverify physical records with online digital filing sheets for absolute balance matching.',
    status: 'In Progress'
  },
  {
    id: 'tk-2',
    assignedToEmail: 'rohit.sharma@makeeazy.in',
    employeeName: 'Rohit Sharma',
    title: 'Draft Share Purchase Agreement for FinTech LLP',
    dueDate: '2026-06-20',
    priority: 'Medium',
    description: 'Draft the initial SPA draft focusing closely on the indemnity clauses and intellectual property clauses.',
    status: 'To Do'
  }
];

export const PAYSLIPS_HISTORY = [
  { month: 'May 2026', basic: 45000, hra: 18000, special: 12000, pf: 2100, profTax: 200, taxDeducted: 1515, status: 'Credited' },
  { month: 'April 2026', basic: 45000, hra: 18000, special: 12000, pf: 2100, profTax: 200, taxDeducted: 1515, status: 'Credited' },
  { month: 'March 2026', basic: 42000, hra: 16800, special: 11200, pf: 2100, profTax: 200, taxDeducted: 1150, status: 'Credited' }
];
