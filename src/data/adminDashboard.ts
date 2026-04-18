import { AdminLevel } from '@/types/admin';

export const adminLevels: AdminLevel[] = [
  {
    number: 1,
    title: 'Junior',
    subject: 'Mathematics',
    description: 'Manage quarter grades for junior student',
    code: 'J1 & J3',
    href: '/admin/junior',
  },
  {
    number: 2,
    title: 'Wheeler',
    subject: 'Mathematics',
    description: 'Manage quarter grades for wheeler student',
    code: 'W1 & W2',
    href: '/admin/wheeler',
  },
  {
    number: 3,
    title: 'Senior',
    subject: 'Mathematics',
    description: 'Manage quarter grades for senior student',
    code: 'S1 & S2',
    href: '/admin/senior',
  },
];