import { Box, Container, Button } from "@mui/material";

import SharedNavbar from "@/components/layout/SharedNavbar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StudentSearch from "@/components/dashboard/StudentSearch";
import ClassFilter from "@/components/dashboard/ClassFilter";
import AssignmentTable from "@/components/dashboard/AssignmentTable";

export default function DashboardPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/Images/Background.png')", // 👈 الصورة
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <SharedNavbar />

      <Container>
        <DashboardHeader />

        <Box display="flex" gap={2} mb={2}>
          <Box flex={1}>
            <StudentSearch />
          </Box>

          <Button variant="contained" color="warning">
            Approve All
          </Button>
        </Box>

        <ClassFilter />
        <AssignmentTable />
      </Container>
    </Box>
  );
}