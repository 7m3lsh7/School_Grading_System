export interface SubjectGrade {
  subject: string;
  quarter: number | null;
  final1: number | null;
  final2: number | null;
}

export interface StudentDashboard {
  studentName: string;
  role: string;
  grades: SubjectGrade[];
}