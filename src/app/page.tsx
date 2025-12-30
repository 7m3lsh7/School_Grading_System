"use client";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Button2 from "@/components/shared/Button2";
import { BUTTON_TEXTS, BUTTON } from "@/data/buttons";

export default function Home() {
  return (
    <main>
    <PrimaryButton
      text={BUTTON_TEXTS.addStudent}
      onClick={() => console.log("Clicked!")}
    />
    
    <Button2
        text={BUTTON.addStudent}
      onClick={() => console.log("Clicked!")}
    />
    </main>
  );
}
