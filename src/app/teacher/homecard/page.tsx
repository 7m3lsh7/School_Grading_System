"use client";

import { Box, Typography } from "@mui/material";
import HomeBackground from "@/components/TeacherComponents/hometext";
import SharedCard from "@/components/shared/SharedCard";
import { homeTextData } from "@/data/hometext";
import { homeCardsData } from "@/data/homeCards";
import SharedNavbar from "@/components/layout/SharedNavbar";

export default function HomePage() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* الخلفية */}
      <HomeBackground {...homeTextData} />

      {/* المسطيل الشفاف */}
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: { xs: 120, md: 150, lg: 200 }, // مسافة من أعلى الصفحة حسب الجهاز
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "85%", md: "80%", lg: "92%" },
          height: { xs: "auto", md: "62%" }, // على الموبايل ارتفاع تلقائي حسب المحتوى
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 4 },
          py: { xs: 4, sm: 6 },
          bgcolor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 4,
        }}
      >       
        {/* card*/}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 3, md: 4 },
            width: "100%",
            justifyContent: "center",
          }}
        >
          {homeCardsData?.map((card) => (
            <SharedCard key={card.id} {...card} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
