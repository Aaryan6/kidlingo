import { QuizPage } from "@/components/quiz-card";
import { languageLearningLevels } from "@/content";

export default function QuizPageWrapper({
  params,
}: {
  params: { levelId: string; cardId: string };
}) {
  const levelId = parseInt(params.levelId);
  const cardId = parseInt(params.cardId);

  const level = languageLearningLevels.find((l) => l.number === levelId);
  const card = level?.cards[cardId];

  if (!card || card.type !== "quiz") {
    return <div>Quiz not found</div>;
  }

  return (
    <QuizPage questions={card.questions} levelId={levelId} cardId={cardId} />
  );
}
