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
    { Jadarat: "API", Your_Attemps: "Fail", Attemps: "Attemp-one" },
    { Jadarat: "Multi-media", Your_Attemps: "Pass", Attemps: "Attemp-two" },
    { Jadarat: "Flutter", Your_Attemps: "Pass", Attemps: "Attemp-one" }
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
              Jadarat Grades
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
              Year 1 · Ahmed Mohamed
            </Typography>
          </Box>

          <Box>
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

            <TableRow>
              <TableCell colSpan={3} sx={{ height: 16 }} />
            </TableRow>

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
                    {row.Jadarat}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "16px", fontWeight: 600, color: "#333", py: 2.5 }}>
                    {row.Your_Attemps}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "16px", fontWeight: 600, color: "#333", py: 2.5 }}>
                    {row.Attemps}
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
