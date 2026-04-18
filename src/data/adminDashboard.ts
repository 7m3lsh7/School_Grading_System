import { AdminLevel } from '@/types/admin';

export const adminLevels: AdminLevel[] = [
  {
    number: 1,
    title: 'Junior',
    subject: 'Mathematics',
    description: 'Manage quarter grades for junior student',
    href: '/admin/junior',
  },
  {
    number: 2,
    title: 'Wheeler',
    subject: 'Mathematics',
    description: 'Manage quarter grades for wheeler student',
    href: '/admin/wheeler',
  },
  {
    number: 3,
    title: 'Senior',
    subject: 'Mathematics',
    description: 'Manage quarter grades for senior student',
    href: '/admin/senior',
  },
];