import { Box, Typography } from "@mui/material";
import { ibmPlexSans } from "@/styles/theme/font"; // عدلي المسار حسب مشروعك

export default function DashboardHeader() {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 4,
      }}
    >
      {/* Title */}
      <Typography
        className={ibmPlexSans.className}
        variant="h2"
        sx={{
          color: "#fff",     
          fontWeight: 700,
        }}
      >
        Student Assignment Dashboard
      </Typography>

      <Box sx={{ mb: 4 }} />

      <Typography color="primary" mt={1}>
        ← Back to Dashboard
      </Typography>

      <Typography mt={1}>
        Wakil – Administrator
      </Typography>

      <Typography variant="body2" color="text.secondary" mt={1}>
        Approve grades and manage student access
      </Typography>
    </Box>
  );
}