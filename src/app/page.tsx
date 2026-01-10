"use client";

import React from "react";
import { Stack, Container } from "@mui/material";

import YearsCard from "../components/TeacherComponents/YearsSection";
import { yearsData } from "../data/YearsCard";

import PrimaryButton from "@/components/shared/PrimaryButton";
import Button2 from "@/components/shared/Button2";
import Filter from "@/components/shared/FilterComponent";
import { BUTTON_TEXTS, BUTTON } from "@/data/buttons";

export default function Home() {
  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Buttons section */}
      <Stack direction="row" spacing={2} mb={3}>
        <PrimaryButton
          text={BUTTON_TEXTS.addStudent}
          onClick={() => console.log("Clicked!")}
        />

        <Button2
          text={BUTTON.addStudent}
          onClick={() => console.log("Clicked!")}
        />
      </Stack>

      {/* Filter */}
      <Filter />

      {/* Years Cards */}
      <Stack spacing={2} mt={3}>
        {yearsData.map((card) => (
          <YearsCard key={card.id} data={card} />
        ))}
      </Stack>
    </Container>
  );
}
