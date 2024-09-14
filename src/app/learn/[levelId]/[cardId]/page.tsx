import { FlashcardPage } from "@/components/flashcard-page";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getKidlingoContent } from "@/actions/kidlingo";

export default async function LearnPage({
  params,
}: {
  params: { levelId: string; cardId: string };
}) {
  const levelId = parseInt(params.levelId, 10);
  const [_, topicId, cardIndex] = params.cardId.split("-").map(Number);

  const content = await getKidlingoContent();
  const topicContent = content.filter(
    (item) => item.level_id === levelId && item.topic_id === topicId
  );

  const startIndex = (cardIndex - 1) * 5;
  const endIndex = startIndex + 5;
  const flashcards = topicContent.slice(startIndex, endIndex);

  if (flashcards.length === 0) {
    return <div>No content found for this level and topic</div>;
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
        flashcards={flashcards}
        levelId={levelId}
        topicId={topicId}
        cardIndex={cardIndex}
        mode="learn"
      />
    </div>
  );
}
