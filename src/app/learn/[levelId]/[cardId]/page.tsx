"use client";

import { FlashcardPage } from "@/components/flashcard-page";
import { languageLearningLevels } from "@/content";

export default function LearnPage({
  params,
}: {
  params: { levelId: string; cardId: string };
}) {
  const levelId = parseInt(params.levelId, 10);
  const cardId = parseInt(params.cardId, 10);
  const level = languageLearningLevels.find((l) => l.number === levelId);
  const card = level?.cards[cardId];

  if (!level || !card) {
    return <div>Level or card not found</div>;
  }

  return (
    <FlashcardPage
      flashcards={card.flashcards}
      levelId={levelId}
      cardId={cardId}
    />
  );
}
