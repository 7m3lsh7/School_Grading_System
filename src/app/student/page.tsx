"use client";
import Link from "next/link";
import React from "react";
import { Box } from "@mui/material";
import DashboardCard from "../../components/StudentComponents/DashboardCard";
import DashboardHeader from "../../components/StudentComponents/DashboardHeaderProps"; // استيراد الهيدر

export default function StudentDashboard() {
  const handleCardClick = (route: string) => {
    console.log(`Navigating to: ${route}`);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('/Images/image.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          background: "rgba(88, 107, 170, 0.25)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(18px)",
          borderRadius: "32px",
          boxShadow: "0 8px 32px rgba(77, 82, 161, 0.37)",
          padding: "48px",
          maxWidth: "1200px",
        }}
      >

        <DashboardHeader
          name="Ahmed Mohamed"
          year=""
          subtitle="Select a category to view your grades"
        />

        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "nowrap",
          }}
        >
          <Link href="/student/quarter">
            <DashboardCard
              image={
                <img
                  src="/Images/book77.png"
                  alt="Quarter Grades"
                  style={{ width: 36, height: 36, objectFit: "cover", borderRadius: "6px" }}
                />
              }
              title="Quarter Grades"
              description="View your quarterly performance across all subjects"
              onClick={() => handleCardClick("/quarter-grades")}
            />
          </Link>

          <Link href="/student/final">
            <DashboardCard
              image={
                <img
                  src="/Images/book2.png"
                  alt="Final Grades"
                  style={{ width: 36, height: 36, objectFit: "cover", borderRadius: "6px" }}
                />
              }
              title="Final Grades"
              description="View your semester final exam grades"
              onClick={() => handleCardClick("/final-grades")}
            />
          </Link>

          <Link href="/student/jadarat">
            <DashboardCard
              image={
                <img
                  src="/Images/book2.png"
                  alt="Competencies Grades"
                  style={{ width: 36, height: 36, objectFit: "cover", borderRadius: "6px" }}
                />
              }
              title="Competencies Grades"
              description="View your specialization competency grades"
              onClick={() => handleCardClick("/competencies-grades")}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
