"use client";

import React, { useState, useEffect } from "react";
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
import { languageLearningLevels } from "@/content";
import { useUserProgress } from "@/hooks/useUserProgress"; // We'll create this hook
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ModernKidLingo() {
  const { userLevel, userProgress, updateUserProgress } = useUserProgress();
  const [activeLevel, setActiveLevel] = useState(1);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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

        {languageLearningLevels.map((level) => (
          <motion.div
            key={level.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: level.number * 0.2 }}
            className={`mb-12`}
            // className={`mb-12 ${level.number > userLevel ? "opacity-50" : ""}`}
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 rounded-full ${
                  activeLevel === level.number
                    ? "bg-primary/80"
                    : "bg-primary/80"
                } flex items-center justify-center text-white font-bold mr-4 shadow-lg`}
              >
                {level.icon}
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800">
                Level {level.number} : {level.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {level.cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    // level.number <= userLevel &&
                    router.push(`/learn/${level.number}/${index}`)
                  }
                  className="h-full"
                  // className={
                  //   level.number > userLevel
                  //     ? "cursor-not-allowed"
                  //     : "cursor-pointer"
                  // }
                >
                  <Card
                    key={card.title}
                    className={cn(
                      `hover:shadow-lg bg-white transition-shadow h-full grid content-between`
                    )}
                  >
                    <CardHeader className="">
                      <CardTitle className="flex items-center gap-2">
                        {card.icon}
                        {card.title}
                      </CardTitle>
                      <CardDescription>
                        {card.flashcards.length} flashcards available
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full bg-orange-100"
                      >
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
