"use client";
import DashboardCard from "../../components/DashboardCard";
import { useRouter } from "next/navigation"; 

export default function StudentDashboard() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/student/details"); 
  };

  return (
    <div>
      <DashboardCard
        number="1"
        title="Math Test"
        subject="Math"
        description="This is a math test."
        grades="Grade: A"
        onClick={handleClick}
      />
    </div>
  );
}
