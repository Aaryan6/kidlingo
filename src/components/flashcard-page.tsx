"use client";

import React, { useState, useEffect, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RefreshCcw, Volume2 } from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useRouter } from "next/navigation";
import { KIDLINGO_DB, FlashcardData } from "@/lib/schema";
import Link from "next/link";
import useLanguage from "@/hooks/use-language";
import useLanguageStore from "@/hooks/use-language";

const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

interface AnswerOption {
  id: string;
  text: string;
}

const DraggableAnswer = ({
  id,
  text,
  isCorrect,
}: AnswerOption & { isCorrect: boolean }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "answer",
    item: { id, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    drag(ref);
    dragPreview(ref);
  }, [drag, dragPreview]);

  return (
    <div
      ref={ref}
      className={`p-3 rounded-lg shadow-sm font-medium cursor-move transition-all ${
        isDragging ? "opacity-50 scale-105" : "opacity-100"
      } ${isCorrect ? "bg-green-200" : "bg-orange-100 border"}`}
      aria-label={`Drag answer: ${text}`}
    >
      {text}
    </div>
  );
};

const DropZone = ({
  onDrop,
  isCorrect,
  droppedAnswer,
}: {
  onDrop: (item: AnswerOption) => void;
  isCorrect: boolean | null;
  droppedAnswer: string | null;
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "answer",
    drop: (item: AnswerOption) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    drop(ref);
  }, [drop]);

  let bgColor = "bg-gray-200";
  if (isCorrect === true) bgColor = "bg-green-200";
  if (isCorrect === false) bgColor = "bg-red-200";

  return (
    <div
      ref={ref}
      className={`h-24 w-full ${bgColor} bg-orange-50 rounded-lg flex flex-col items-center justify-center ${
        isOver
          ? "border-4 border-orange-200"
          : "border-4 border-dashed border-orange-200"
      } transition-all duration-300`}
      aria-label="Drop answer here"
    >
      {droppedAnswer ? (
        <>
          <div className="text-xl font-bold mb-2">{droppedAnswer}</div>
          <div className="text-sm">
            {isCorrect === true && "✅ Correct!"}
            {isCorrect === false && "❌ Incorrect. Try again!"}
          </div>
        </>
      ) : (
        <p className="text-xl font-bold text-orange-500/50">
          Drop your answer here
        </p>
      )}
    </div>
  );
};

interface FlashcardProps {
  data: FlashcardData;
  currentCard: number;
  totalCards: number;
  onNextCard: () => void;
  onPrevCard: () => void;
  onAnswer: (isCorrect: boolean) => void;
  speakWord: (text: string) => void;
  mode: "learn" | "quiz";
}

const Flashcard: React.FC<FlashcardProps> = ({
  data,
  currentCard,
  totalCards,
  onNextCard,
  onPrevCard,
  onAnswer,
  speakWord,
  mode,
}) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [droppedAnswer, setDroppedAnswer] = useState<string | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    setIsCorrect(null);
    setDroppedAnswer(null);
    setShowCorrectAnswer(false);
  }, [data.question]);

  const handleDrop = (item: AnswerOption) => {
    const correct = item.text === data.correctAnswer;
    setDroppedAnswer(item.text);
    setIsCorrect(correct);
    setShowCorrectAnswer(true);
    onAnswer(correct);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6 w-full">
        <div className="flex items-center justify-between w-full mb-4">
          <span className="text-lg text-gray-600">
            Question {currentCard} of {totalCards}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => speakWord(data.question)}
            className="rounded-full"
          >
            <Volume2 className="h-4 w-4" />
            <span className="sr-only">Pronounce question</span>
          </Button>
        </div>
        <div className="text-2xl font-bold mb-6 text-center">
          {data.question}
        </div>
        <DropZone
          onDrop={handleDrop}
          isCorrect={isCorrect}
          droppedAnswer={droppedAnswer}
        />
        <div className="grid grid-cols-3 gap-4 mt-6">
          {data.options && data.options.length > 0 ? (
            data.options.map((option) => (
              <DraggableAnswer
                key={option.id}
                id={option.id}
                text={option.text}
                isCorrect={
                  showCorrectAnswer && option.text === data.correctAnswer
                }
              />
            ))
          ) : (
            <p>No options available</p>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={onPrevCard}
            disabled={currentCard === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={onNextCard}
            disabled={!droppedAnswer}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        {mode === "learn" && droppedAnswer && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="font-bold">Explanation:</p>
            <p>{data.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const SummarySlide = ({
  correctAnswers,
  totalQuestions,
  onRestart,
  levelId,
  topicId,
  mode,
}: {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
  levelId: number;
  topicId: number;
  mode: "learn" | "quiz";
}) => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-4">
          You got{" "}
          <span className="font-bold text-orange-400">{correctAnswers}</span>{" "}
          out of <span className="font-bold">{totalQuestions}</span> correct!
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-orange-400 h-2.5 rounded-full"
            style={{ width: `${(correctAnswers / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={onRestart}
            className="bg-orange-400 text-white px-4 py-2 rounded-full transition-transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <RefreshCcw size={20} className="mr-2" />
            Restart {mode === "learn" ? "Learn" : "Quiz"}
          </button>
          <Link
            href="/"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full transition-transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

interface FlashcardPageProps {
  content: KIDLINGO_DB[];
  levelId: number;
  topicId: number;
  cardIndex: number;
  mode: "learn" | "quiz";
}

export function FlashcardPage({
  content,
  levelId,
  topicId,
  cardIndex,
  mode,
}: FlashcardPageProps) {
  const { userLevel, userProgress, updateUserProgress } = useUserProgress();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] =
    useState<SpeechSynthesis | null>(null);
  const useLanguage = useLanguageStore((state) => state);
  const [flashcards, setFlashcards] = useState<KIDLINGO_DB[]>([]);

  const topicContent = content.filter(
    (f) =>
      f.language_id === useLanguage.language.id &&
      f.level_id === levelId &&
      f.topic_id === topicId
  );
  const startIndex = (cardIndex - 1) * 5;
  const endIndex = startIndex + 5;
  const languageContent = topicContent.slice(startIndex, endIndex);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
    setFlashcards(languageContent);
  }, []);

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      completeSet();
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const completeSet = () => {
    const percentageCorrect = (correctAnswers / flashcards.length) * 100;
    let progressIncrease = 0;

    if (percentageCorrect >= 90) {
      progressIncrease = 20;
    } else if (percentageCorrect >= 70) {
      progressIncrease = 15;
    } else if (percentageCorrect >= 50) {
      progressIncrease = 10;
    } else {
      progressIncrease = 5;
    }

    const newProgress = Math.min(userProgress + progressIncrease, 100);
    updateUserProgress(newProgress);

    if (newProgress === 100 && userLevel === levelId) {
      updateUserProgress(0, userLevel + 1);
    }

    setIsCompleted(true);
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
    setCorrectAnswers(0);
    setIsCompleted(false);
  };

  const speakWord = (text: string) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    }
  };

  const Backend = isTouchDevice() ? TouchBackend : HTML5Backend;

  if (isCompleted) {
    return (
      <SummarySlide
        correctAnswers={correctAnswers}
        totalQuestions={flashcards.length}
        onRestart={handleRestart}
        levelId={levelId}
        topicId={topicId}
        mode={mode}
      />
    );
  }

  return (
    <DndProvider backend={Backend}>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          {mode === "learn" ? "Learn" : "Quiz"} - Set {cardIndex}
        </h1>
        <AnimatePresence mode="wait">
          {flashcards && flashcards.length > 0 ? (
            <motion.div
              key={currentCardIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg"
            >
              <Flashcard
                data={{
                  question: flashcards[currentCardIndex].question,
                  options: flashcards[currentCardIndex].options.map(
                    (option, index) => ({
                      id: index.toString(),
                      text: option.text,
                    })
                  ),
                  correctAnswer:
                    flashcards[currentCardIndex].options.find(
                      (option) => option.correct === "true"
                    )?.text || "",
                  explanation: flashcards[currentCardIndex].explanation,
                }}
                currentCard={currentCardIndex + 1}
                totalCards={flashcards.length}
                onNextCard={handleNextCard}
                onPrevCard={handlePrevCard}
                onAnswer={handleAnswer}
                speakWord={speakWord}
                mode={mode}
              />
            </motion.div>
          ) : (
            <p>No flashcards available</p>
          )}
        </AnimatePresence>
      </div>
    </DndProvider>
  );
}
