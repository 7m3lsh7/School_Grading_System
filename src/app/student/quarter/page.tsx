"use client";

import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function QuarterGrades() {
  const grades = [
    { subject: "Mathematics", yourGrade: 25, quarterGrade: 25 },
    { subject: "Physics", yourGrade: 20, quarterGrade: 22 },
    { subject: "Chemistry", yourGrade: 18, quarterGrade: 20 },
    { subject: "Biology", yourGrade: 23, quarterGrade: 24 },
    { subject: "History", yourGrade: 19, quarterGrade: 21 },
    { subject: "English", yourGrade: 22, quarterGrade: 23 },
    { subject: "Geography", yourGrade: 21, quarterGrade: 22 },
    { subject: "Art", yourGrade: 24, quarterGrade: 24 },
    { subject: "Music", yourGrade: 23, quarterGrade: 23 },
    { subject: "PE", yourGrade: 20, quarterGrade: 21 },
    { subject: "Computer Science", yourGrade: 25, quarterGrade: 25 },
    { subject: "Economics", yourGrade: 19, quarterGrade: 20 },
    { subject: "Philosophy", yourGrade: 18, quarterGrade: 19 },
    { subject: "Literature", yourGrade: 22, quarterGrade: 23 },
  ];

  const averageGrade = "80%";

  const handleBackToDashboard = () => {
    window.location.href = "/student";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/Images/download 1 (1).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        overflowY: "auto", 
        overflowX: "hidden", 
      }}
    >
      {/* Header Box */}
      <Box
        sx={{
          width: "95%", 
          maxWidth: "1300px",
          background: "rgba(50,50,50,0.3)",
          borderRadius: "28px",
          p: 2,
          mt: 1,
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
          <Button
            onClick={handleBackToDashboard}
            startIcon={<ArrowBackIcon />}
            sx={{
              color: "#FFC600",
              fontSize: "14px", 
              fontWeight: 500,
              textTransform: "none",
              padding: "4px 12px", 
              "&:hover": {
                backgroundColor: "rgba(255, 198, 0, 0.1)",
              },
            }}
          >
            Back to Dashboard
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: 700, mb: 0.5, fontSize: "22px" }}
            >
              Quarter Grades
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
              Year 1 · Ahmed Mohamed
            </Typography>
          </Box>

          <Box
            sx={{
              background: "#FFC600",
              borderRadius: "12px",
              padding: "8px 16px",
              boxShadow: "0 4px 12px rgba(255, 198, 0, 0.3)",
            }}
          >
            <Typography sx={{ fontSize: "12px", color: "#000", fontWeight: 500 }}>
              Average Grade
            </Typography>
            <Typography sx={{ fontSize: "24px", color: "#000", fontWeight: 700 }}>
              {averageGrade}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Table Box */}
      <Box
        sx={{
          width: "90%", 
          maxWidth: "1200px",
          background: "rgba(50,50,50,0.3)",
          borderRadius: "28px",
          p: 5,
          mb: 4,
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#FFC600" }}>
                <TableCell sx={{ fontWeight: 700, fontSize: "18px", color: "#000", py: 2.5 }}>
                  Subject
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 700, fontSize: "18px", color: "#000", py: 2.5 }}
                >
                  Your Grades
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 700, fontSize: "18px", color: "#000", py: 2.5 }}
                >
                  Quarter Grades
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grades.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(even)": { backgroundColor: "rgba(0,0,0,0.05)" },
                    "&:hover": { backgroundColor: "rgba(255,198,0,0.05)" },
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <TableCell sx={{ fontSize: "16px", fontWeight: 500, color: "#1a1a1a", py: 2.5 }}>
                    {row.subject}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "16px", fontWeight: 600, color: "#333", py: 2.5 }}>
                    {row.yourGrade}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "16px", fontWeight: 600, color: "#333", py: 2.5 }}>
                    {row.quarterGrade}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
