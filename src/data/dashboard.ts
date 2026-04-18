import { StudentDashboard } from "@/types/dashboard";

export const dashboardData: StudentDashboard = {
  studentName: "Wakil",
  role: "Administrator",
  grades: [
    { subject: "Mathematics", quarter: 92, final1: 55, final2: 26 },
    { subject: "Science", quarter: 78, final1: 55, final2: 88 },
    { subject: "Arabic", quarter: 84, final1: 36, final2: 52 },
    { subject: "Jadaratak - Technology", quarter: null, final1: null, final2: null },
  ],
};