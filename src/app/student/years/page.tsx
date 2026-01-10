"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Box, Modal, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DashboardHeader from "@/components/StudentComponents/DashboardHeaderProps";
import CategoryCard from "@/components/StudentComponents/CategoryCard"; // ✅ الشير كمبوننت

export default function StudentDashboard() {
  const categories = [
    { number: "1", title: "Junior", route: "/student/junior" },
    { number: "2", title: "Wheeler", route: "/student/wheeler" },
    { number: "3", title: "Senior", route: "/student/senior" },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCardClick = (title: string) => {
    setSelectedCategory(title);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const modalOptions = [
    { icon: "/images/book78.png", label: "Quarter", route: "/student/quarter" },
    { icon: "/images/book79.png", label: "Final", route: "/student/final" },
    { icon: "/images/book79.png", label: "Competency", route: "/student/jadarat" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundImage: "url('/Images/image.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          background: "rgba(88, 107, 170, 0.25)",
          backdropFilter: "blur(2px)",
          borderRadius: "32px",
          boxShadow: "0 8px 32px rgba(77, 82, 161, 0.37)",
          padding: "48px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <DashboardHeader
          name="Ahmed Mohamed"
          year="Year - 1"
          subtitle="Select a category to view your grades"
        />

        {/* ✅ الكروت باستخدام الشير كمبوننت */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.number}
              number={category.number}
              title={category.title}
              onClick={() => handleCardClick(category.title)}
            />
          ))}
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.52)",
            backdropFilter: "blur(10px)",
            borderRadius: "24px",
            padding: "40px",
            maxWidth: "500px",
            width: "90%",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            {selectedCategory}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            {modalOptions.map((option, index) => (
              <Link key={index} href={option.route} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    background: "#FFC600",
                    borderRadius: "16px",
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <img
                    src={option.icon}
                    alt={option.label}
                    style={{ width: 24, height: 24 }}
                  />
                  <Typography fontWeight={600}>
                    {option.label}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
