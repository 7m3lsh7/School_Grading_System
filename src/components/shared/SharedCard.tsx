import React from "react";
import { Card, Box, Typography, Divider, useTheme } from "@mui/material";
import { CardData } from "@/types/SharedCard";

export type SharedCardProps = CardData & {
  onClick?: () => void;
};

const SharedCard: React.FC<SharedCardProps> = ({
  icon: Icon,
  title,
  description,
  extraText,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Card
      onClick={onClick}
      tabIndex={0}
      sx={{
        width: "100%",
        maxWidth: 505,
        minHeight: 270,
        borderRadius: 3,
        cursor: "pointer",
        bgcolor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        padding: 2, // Padding داخلي للكارد
        "&:hover": {
          outline: `2px solid ${theme.palette.primary.main}`,
          transform: "translateY(-2px)",
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 390,
          minHeight: 220,
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: 282,
          minHeight: 195,
        },
        [theme.breakpoints.down("sm")]: {
          maxWidth: "90vw",
          minHeight: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Icon + Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: 2, // مسافة من أعلى الكارد
            paddingBottom: 2,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: theme.palette.primary.main,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon width={40} height={40} />
          </Box>

          <Box sx={{ marginLeft: 2.5, flex: 1 }}>
            <Typography variant="body4" color={theme.palette.text.primary}>
              {title}
            </Typography>
          </Box>
        </Box>

        {/* Divider أسفل العنوان */}
        <Divider sx={{ borderColor: theme.palette.divider, mb: 2 }} />

        {/* Description */}
        <Box sx={{ marginLeft: 2.5, color: theme.palette.text.secondary }}>
          <Typography variant="h5">{description}</Typography>

          {/* Divider + Extra Text */}
          {extraText && (
            <>
              <Divider sx={{ my: 1, borderColor: theme.palette.divider }} />
              <Typography variant="body2" color={theme.palette.text.secondary}>
                {extraText}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default SharedCard;
