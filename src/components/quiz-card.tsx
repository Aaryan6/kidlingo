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

interface AnswerOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  question: string;
  options: AnswerOption[];
  correctAnswer: string;
  explanation: string;
}

interface QuizCardProps {
  data: QuizQuestion;
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
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [droppedAnswer, setDroppedAnswer] = useState<string | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    setIsCorrect(null);
    setDroppedAnswer(null);
    setShowCorrectAnswer(false);
    setHasAnswered(false);
  }, [data.question]);

  const handleDrop = (item: AnswerOption) => {
    if (hasAnswered) return;
    const correct = item.text === data.correctAnswer;
    setDroppedAnswer(item.text);
    setIsCorrect(correct);
    setShowCorrectAnswer(true);
    setHasAnswered(true);
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
        <DropZone
          onDrop={handleDrop}
          isCorrect={isCorrect}
          droppedAnswer={droppedAnswer}
          hasAnswered={hasAnswered}
        />
        <div className="grid grid-cols-3 gap-4 mt-6">
          {data.options.map((option) => (
            <DraggableAnswer
              key={option.id}
              id={option.id}
              text={option.text}
              isCorrect={
                showCorrectAnswer && option.text === data.correctAnswer
              }
              disabled={hasAnswered}
            />
          ))}
        </div>
        {showCorrectAnswer && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="font-bold">Explanation:</p>
            <p>{data.explanation}</p>
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
            disabled={!droppedAnswer}
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
  questions: QuizQuestion[];
  levelId: number;
  cardId: number;
}

export function QuizPage({ questions, levelId, cardId }: QuizPageProps) {
  const { userLevel, userProgress, updateUserProgress } = useUserProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] =
    useState<SpeechSynthesis | null>(null);

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

  const Backend = isTouchDevice() ? TouchBackend : HTML5Backend;

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
    <DndProvider backend={Backend}>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          Language Quiz
        </h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg"
          >
            <QuizCard
              data={questions[currentQuestionIndex]}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onNextQuestion={handleNextQuestion}
              onPrevQuestion={handlePrevQuestion}
              onAnswer={handleAnswer}
              speakWord={speakWord}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </DndProvider>
  );
}

const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

const DraggableAnswer = ({
  id,
  text,
  isCorrect,
  disabled,
}: AnswerOption & { isCorrect: boolean; disabled: boolean }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type: "answer",
      item: { id, text },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      canDrag: !disabled,
    }),
    [disabled]
  );

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!disabled) {
      drag(ref);
      dragPreview(ref);
    } else {
      drag(null);
      dragPreview(null);
    }
  }, [drag, dragPreview, disabled]);

  return (
    <div
      ref={ref}
      className={`p-3 rounded-lg shadow-sm font-medium ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-move"
      } transition-all ${isDragging ? "opacity-50 scale-105" : "opacity-100"} ${
        isCorrect ? "bg-green-200" : "bg-orange-100 border"
      }`}
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
  hasAnswered,
}: {
  onDrop: (item: AnswerOption) => void;
  isCorrect: boolean | null;
  droppedAnswer: string | null;
  hasAnswered: boolean;
}) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "answer",
      drop: (item: AnswerOption) => {
        if (!hasAnswered) {
          onDrop(item);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
      canDrop: () => !hasAnswered,
    }),
    [hasAnswered, onDrop]
  );

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
        isOver && !hasAnswered
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
            {isCorrect === false && "❌ Incorrect."}
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
