"use client";

import { FlashcardPage } from "@/components/flashcard-page";
import { buttonVariants } from "@/components/ui/button";
import { languageLearningLevels, LanguageLearningLevelTypes } from "@/content";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LearnPage({
  params,
}: {
  params: { levelId: string; cardId: string };
}) {
  const levelId = parseInt(params.levelId, 10);
  const cardId = parseInt(params.cardId, 10);
  const level = languageLearningLevels.find(
    (l: LanguageLearningLevelTypes) => l.number === levelId
  );
  const card = level?.cards[cardId];

  if (!level || !card) {
    return <div>Level or card not found</div>;
  }

  return (
    <div className="bg-gradient-to-b from-orange-50 to-green-50">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "flex items-center gap-2 absolute top-4 left-4"
        )}
      >
        <ArrowLeft size={20} />
        Back
      </Link>
      <FlashcardPage
        flashcards={card.flashcards}
        levelId={levelId}
        cardId={cardId}
      />
    </div>
  );
}
