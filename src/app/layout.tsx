<<<<<<< HEAD
import SharedNavbar from "@/src/components/SharedNavbar";
=======
"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "@/styles/theme";

const queryClient = new QueryClient();
>>>>>>> da2866334ef6b50889af4a13d207280958fc7b5a

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body style={{ margin: 0, padding: 0 }}>

        {/* Navbar */}
        <SharedNavbar
          title="School Grading System"
          subtitle="Student Portal"
          userName="Myriam"
          userRole="Student"
        />

        {/* Page Content */}
        {children}

=======
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
>>>>>>> da2866334ef6b50889af4a13d207280958fc7b5a
      </body>
    </html>
  );
}
