"use client";

import React from "react";
import { Stack, Container, Box } from "@mui/material";

import YearsCard from "../components/TeacherComponents/YearsSection";
import { yearsData } from "../data/YearsCard";

import PrimaryButton from "@/components/shared/PrimaryButton";
import Button2 from "@/components/shared/Button2";
import Filter from "@/components/shared/FilterComponent";
import SharedNavbar from "@/components/layout/SharedNavbar";
import SharedCard from "@/components/shared/SharedCard";
import { cardsData } from "@/data/SharedCard";
import { BUTTON_TEXTS, BUTTON } from "@/data/buttons";
import DashboardHeader from "@/components/shared/DashboardHeader-bg";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <SharedNavbar />

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
      <Container sx={{ marginTop: 4 }}>
        <Stack spacing={2}>
          {yearsData.map((card) => (
            <YearsCard key={card.id} data={card} />
          ))}
        </Stack>
      </Container>

      {/* Shared Cards Section */}
      <Box mt={4}>
        {cardsData.map((card) => (
          <SharedCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            onClick={() => console.log(`Clicked card ${card.id}`)}
            id={""}
          />
        ))}
      </Box>

      {/* Dashboard Header */}
      <DashboardHeader
        name="Ahmed"
        year="Year 2"
        subtitle="Your academic overview"
      >
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          {cardsData.map((card) => (
            <SharedCard
              key={card.id}
              {...card}
              onClick={() => console.log(card.id)}
            />
          ))}
        </Box>
      </DashboardHeader>
    </main>
  );
}
