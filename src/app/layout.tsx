import SharedNavbar from "@/src/components/SharedNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

      </body>
    </html>
  );
}
