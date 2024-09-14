"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useUserProgress } from "@/hooks/useUserProgress"; // We'll create this hook
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { KIDLINGO_LEVELS, KIDLINGO_TOPICS, KIDLINGO_DB } from "@/lib/schema";

export function ModernKidLingo({
  levels,
  topics,
  content,
}: {
  levels: KIDLINGO_LEVELS[];
  topics: KIDLINGO_TOPICS[];
  content: KIDLINGO_DB[];
}) {
  const { userLevel, userProgress, updateUserProgress } = useUserProgress();
  const [activeLevel, setActiveLevel] = useState(1);
  const router = useRouter();

  const getTopicCards = (topicId: number) => {
    const topicContent = content.filter((item) => item.topic_id === topicId);
    const cardCount = Math.ceil(topicContent.length / 5);
    const cards = [];

    for (let i = 0; i < cardCount; i++) {
      // Learning card
      cards.push({
        id: `learn-${topicId}-${i + 1}`,
        type: "learn",
        questionCount: Math.min(5, topicContent.length - i * 5),
      });

      // Quiz card (if it's not the last set)
      if (i < cardCount - 1) {
        cards.push({
          id: `quiz-${topicId}-${i + 1}`,
          type: "quiz",
          questionCount: Math.min(5, topicContent.length - i * 5),
        });
      }
    }

    return cards;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-8 text-orange-500"
        >
          KidLingo: Magical Learning Journey
        </motion.h1>

        <div className="mb-8 flex items-center justify-between">
          <Progress value={userProgress} className="w-2/3 bg-white border" />
          <Badge variant="default" className="text-lg py-1 px-3">
            Level {userLevel}
          </Badge>
        </div>

        {levels.map((level) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: level.level * 0.2 }}
            className={`mb-12`}
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 rounded-full ${
                  activeLevel === level.level
                    ? "bg-primary/70"
                    : "bg-primary/70"
                } flex items-center justify-center text-white font-bold mr-4 shadow-lg`}
              >
                {level.level}
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800">
                Level {level.level} : {level.name}
              </h2>
            </div>
            <Carousel className="w-full mx-auto overflow-visible">
              <CarouselContent className="overflow-visible">
                {topics
                  .filter((topic) => topic.level_id === level.id)
                  .flatMap((topic) =>
                    getTopicCards(topic.id).map((card, cardIndex) => (
                      <CarouselItem
                        key={card.id}
                        className="md:basis-1/2 lg:basis-1/3 overflow-visible cursor-pointer"
                      >
                        <motion.div
                          onClick={() =>
                            router.push(
                              `/${card.type}/${level.level}/${card.id}`
                            )
                          }
                          className="h-full"
                        >
                          <Card
                            className={cn(
                              `hover:shadow-lg bg-white transition-shadow h-full grid content-between`,
                              card.type === "quiz"
                                ? "border-2 border-dashed border-orange-300"
                                : ""
                            )}
                          >
                            <CardHeader className="p-8">
                              <CardTitle className="flex items-center gap-2">
                                {topic.name} -{" "}
                                {card.type === "learn" ? "Learn" : "Quiz"}{" "}
                                {Math.floor(cardIndex / 2) + 1}
                              </CardTitle>
                              <CardDescription className="py-2">
                                {card.questionCount} questions available
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full",
                                  card.type === "learn"
                                    ? "bg-orange-100"
                                    : "bg-green-100"
                                )}
                              >
                                {card.type === "learn"
                                  ? "Start Learning"
                                  : "Start Quiz"}
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </CarouselItem>
                    ))
                  )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <Link href={`/learn/${userLevel}/1`}>
            <Button
              size="lg"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg"
            >
              Start Your Adventure!
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
