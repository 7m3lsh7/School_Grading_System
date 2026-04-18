'use client';

import { TextField } from "@mui/material";

export default function StudentSearch() {
  return (
    <TextField
      fullWidth
      placeholder="Search student by name..."
      variant="outlined"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
        },
      }}
    />
  );
}