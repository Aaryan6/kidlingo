"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Volume2,
} from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useRouter } from "next/navigation";

interface Flashcard {
  english: string;
  french: string;
}

interface FlashcardPageProps {
  flashcards: Flashcard[];
  levelId: number;
  cardId: number;
}

export function FlashcardPage({
  flashcards,
  levelId,
  cardId,
}: FlashcardPageProps) {
  const { userLevel, userProgress, updateUserProgress } = useUserProgress();
  const [currentCard, setCurrentCard] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [speechSynthesis, setSpeechSynthesis] =
    useState<SpeechSynthesis | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  const toggleCard = () => {
    if (!hasAnswered) {
      setShowEnglish(!showEnglish);
    }
  };

  const handleAnswer = (correct: boolean) => {
    setIsCorrect(correct);
    setHasAnswered(true);
    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const nextCard = () => {
    if (!hasAnswered) return;

    if (currentCard + 1 < flashcards.length) {
      setCurrentCard((prev) => prev + 1);
      resetCard();
    } else {
      completeSet();
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard((prev) => prev - 1);
      resetCard();
    }
  };

  const resetCard = () => {
    setShowEnglish(false);
    setIsCorrect(null);
    setHasAnswered(false);
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

  const speakWord = () => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(
        showEnglish
          ? flashcards[currentCard].english
          : flashcards[currentCard].french
      );
      utterance.lang = showEnglish ? "en-US" : "fr-FR";
      if (!showEnglish) {
        // Set a French voice if available
        const frenchVoices = speechSynthesis
          .getVoices()
          .filter((voice) => voice.lang.startsWith("fr"));
        if (frenchVoices.length > 0) {
          utterance.voice = frenchVoices[0];
        }
      }
      speechSynthesis.speak(utterance);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Congratulations!
          </h2>
          <p className="text-xl mb-2">
            You&apos;ve completed this flashcard set.
          </p>
          <p className="text-lg mb-6">
            You got {correctAnswers} out of {flashcards.length} correct!
          </p>
          <Button
            onClick={() => router.push("/learn")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Back to Learning Journey
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">
        Language Flashcards
      </h1>
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard + (showEnglish ? "-english" : "-foreign")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full cursor-pointer"
            onClick={toggleCard}
          >
            <Card className="w-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-lg text-gray-600">
                    ({showEnglish ? "English" : "French"})
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakWord();
                    }}
                    className="rounded-full"
                  >
                    <Volume2 className="h-4 w-4" />
                    <span className="sr-only">Pronounce word</span>
                  </Button>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2 min-h-[100px] flex items-center justify-center">
                  {showEnglish
                    ? flashcards[currentCard].english
                    : flashcards[currentCard].french}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {showEnglish && !hasAnswered && (
          <div className="mt-6 flex justify-center space-x-4">
            <Button
              variant="outline"
              className="bg-green-100 hover:bg-green-200 text-green-600"
              onClick={() => handleAnswer(true)}
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />I knew it!
            </Button>
            <Button
              variant="outline"
              className="bg-red-100 hover:bg-red-200 text-red-600"
              onClick={() => handleAnswer(false)}
            >
              <XCircle className="mr-2 h-4 w-4" />
              Still learning
            </Button>
          </div>
        )}

        {hasAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-3 rounded-md text-center ${
              isCorrect
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isCorrect
              ? "Great job! Keep it up!"
              : "No worries! Practice makes perfect!"}
          </motion.div>
        )}

        <div className="mt-8 flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevCard}
            disabled={currentCard === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button variant="outline" onClick={resetCard}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button variant="outline" onClick={nextCard} disabled={!hasAnswered}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
