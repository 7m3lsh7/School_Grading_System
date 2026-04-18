'use client';

import React, { useState } from "react";
import {
  Stack,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";

export default function ClassFilter() {
  const [type, setType] = useState("sd");
  const [classValue, setClassValue] = useState("all");

  return (
    <Box display="flex" justifyContent="center">
      <Stack spacing={2} alignItems="center">

        {/* SD / OM */}
        <RadioGroup
          row
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="sd" control={<Radio />} label="SD" />
          <FormControlLabel value="om" control={<Radio />} label="OM" />
        </RadioGroup>

        {/* Classes */}
        <RadioGroup
          row
          value={classValue}
          onChange={(e) => setClassValue(e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="1" control={<Radio />} label="Class 1" />
          <FormControlLabel value="2" control={<Radio />} label="Class 2" />
          <FormControlLabel value="3" control={<Radio />} label="Class 3" />
        </RadioGroup>

      </Stack>
    </Box>
  );
}