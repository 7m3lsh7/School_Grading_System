import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface DashboardCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

function DashboardCard({
  icon,
  title,
  description,
  onClick,
}: DashboardCardProps) {
  return (
    <Card
      onClick={onClick}
      tabIndex={0}
      sx={{
        width: 320,
        height: 150,
        minWidth: 320,
        minHeight: 150,
        flexShrink: 0,
        borderRadius: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        bgcolor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 4,
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        },
        "&:focus": {
          outline: "2px solid #FFC600",
          outlineOffset: "2px",
        },
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "62.5px",
          bgcolor: "#FFC600",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2.5,
          fontSize: "28px",
        }}
      >
        {icon}
      </Box>

      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            color: "#1a1a1a",
            mb: 1,
            fontSize: "24px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function StudentDashboard() {
  const handleCardClick = (route: string) => {
    
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
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
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "nowrap",
        }}
      >
        <DashboardCard
          icon="📊"
          title="Quarter Grades"
          description="View your quarterly performance across all subjects"
          onClick={() => handleCardClick('/quarter-grades')}
        />

        <DashboardCard
          icon="📋"
          title="Final Grades"
          description="View your semester final exam grades"
          onClick={() => handleCardClick('/final-grades')}
        />

        <DashboardCard
          icon="🎓"
          title="Competencies Grades"
          description="View your specialization competency grades"
          onClick={() => handleCardClick('/competencies-grades')}
        />
      </Box>
    </Box>
  );
}