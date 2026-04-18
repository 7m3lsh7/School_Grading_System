
import { Box, Typography, Stack } from "@mui/material";
import { dashboardData } from "@/data/dashboard";

export default function AssignmentTable() {
  return (
    <Box
      border="1px solid #facc15"
      borderRadius="16px"
      p={3}
      mt={3}
    >
      <Typography mb={2}>
        Total Students: 1200
      </Typography>

      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography>Subject</Typography>
        <Typography>Quarter</Typography>
        <Typography>Final sem1</Typography>
        <Typography>Final sem2</Typography>
      </Stack>

      {/* Rows */}
      {dashboardData.grades.map((item, i) => (
        <Box
          key={i}
          bgcolor="#eee"
          borderRadius="8px"
          p={2}
          mb={1}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography>{item.subject}</Typography>
            <Typography>{item.quarter ?? "-"}</Typography>
            <Typography>{item.final1 ?? "-"}</Typography>
            <Typography>{item.final2 ?? "-"}</Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}