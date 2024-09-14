"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RefreshCcw, Volume2 } from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useRouter } from "next/navigation";
import { KIDLINGO_DB, FlashcardData } from "@/lib/schema";

interface QuizCardProps {
  data: FlashcardData;
  currentQuestion: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onAnswer: (isCorrect: boolean) => void;
  speakWord: (text: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  data,
  currentQuestion,
  totalQuestions,
  onNextQuestion,
  onPrevQuestion,
  onAnswer,
  speakWord,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [data.question]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === data.correctAnswer;
    setIsCorrect(correct);
    onAnswer(correct);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6 w-full">
        <div className="flex items-center justify-between w-full mb-4">
          <span className="text-lg text-gray-600">
            Question {currentQuestion} of {totalQuestions}
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
        <div className="grid grid-cols-1 gap-4 mt-6">
          {data.options.map((option) => (
            <Button
              key={option.id}
              variant={selectedAnswer === option.text ? "default" : "outline"}
              className={`w-full ${
                selectedAnswer === option.text &&
                isCorrect !== null &&
                (isCorrect ? "bg-green-200" : "bg-red-200")
              }`}
              onClick={() => handleAnswerSelect(option.text)}
              disabled={selectedAnswer !== null}
            >
              {option.text}
            </Button>
          ))}
        </div>
        {isCorrect !== null && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="font-bold">
              {isCorrect ? "Correct!" : "Incorrect. The correct answer is:"}
            </p>
            <p>{data.correctAnswer}</p>
            <p className="mt-2">
              <span className="font-bold">Explanation:</span> {data.explanation}
            </p>
          </div>
        )}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={onPrevQuestion}
            disabled={currentQuestion === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={onNextQuestion}
            disabled={selectedAnswer === null}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface QuizPageProps {
  questions: KIDLINGO_DB[];
  levelId: number;
  topicId: number;
  cardIndex: number;
}

export function QuizPage({
  questions,
  levelId,
  topicId,
  cardIndex,
}: QuizPageProps) {
  const { userLevel, userProgress, updateUserProgress } = useUserProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] =
    useState<SpeechSynthesis | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeQuiz();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const completeQuiz = () => {
    const percentageCorrect = (correctAnswers / questions.length) * 100;
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
    setCurrentQuestionIndex(0);
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

  if (isCompleted) {
    return (
      <SummarySlide
        correctAnswers={correctAnswers}
        totalQuestions={questions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">
        Quiz - Set {cardIndex}
      </h1>
      <AnimatePresence mode="wait">
        {questions && questions.length > 0 ? (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg"
          >
            <QuizCard
              data={{
                question: questions[currentQuestionIndex].question,
                options: questions[currentQuestionIndex].options.map(
                  (option, index) => ({
                    id: index.toString(),
                    text: option.text,
                  })
                ),
                correctAnswer:
                  questions[currentQuestionIndex].options.find(
                    (option) => option.correct === "true"
                  )?.text || "",
                explanation: questions[currentQuestionIndex].explanation,
              }}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onNextQuestion={handleNextQuestion}
              onPrevQuestion={handlePrevQuestion}
              onAnswer={handleAnswer}
              speakWord={speakWord}
            />
          </motion.div>
        ) : (
          <p>No questions available</p>
        )}
      </AnimatePresence>
    </div>
  );
}

const SummarySlide = ({
  correctAnswers,
  totalQuestions,
  onRestart,
}: {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
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
        <button
          onClick={onRestart}
          className="bg-orange-400 text-white px-4 py-2 rounded-full transition-transform hover:scale-105 flex items-center justify-center mx-auto"
        >
          <RefreshCcw size={20} className="mr-2" />
          Restart Quiz
        </button>
      </div>
    </div>
  );
};
