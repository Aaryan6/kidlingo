import { QuizPage } from "@/components/quiz-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getKidlingoContent } from "@/actions/kidlingo";

export default async function QuizPageWrapper({
  params,
}: {
  params: { levelId: string; cardId: string };
}) {
  const levelId = parseInt(params.levelId, 10);
  const [_, topicId, cardIndex] = params.cardId.split("-").map(Number);

  const content = await getKidlingoContent();

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
      <QuizPage
        content={content}
        levelId={levelId}
        topicId={topicId}
        cardIndex={cardIndex}
      />
    </div>
  );
}
