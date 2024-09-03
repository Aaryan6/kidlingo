"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Book, Users, Zap, Trophy, Gift } from "lucide-react";
import { useRouter } from "next/navigation";

export function ModernKidLingo() {
  const [activeLevel, setActiveLevel] = useState(1);
  const router = useRouter();

  const levels = [
    {
      number: 1,
      name: "Alphabet Adventure",
      icon: <Book className="w-6 h-6" />,
      cards: [
        {
          title: "Letter Sounds",
          icon: <Zap className="w-5 h-5" />,
          color: "bg-pink-100 text-pink-600",
        },
        {
          title: "Writing Fun",
          icon: <Star className="w-5 h-5" />,
          color: "bg-purple-100 text-purple-600",
        },
        {
          title: "Word Start",
          icon: <Users className="w-5 h-5" />,
          color: "bg-blue-100 text-blue-600",
        },
      ],
    },
    {
      number: 2,
      name: "Number Ninja",
      icon: <Trophy className="w-6 h-6" />,
      cards: [
        {
          title: "Counting Stars",
          icon: <Star className="w-5 h-5" />,
          color: "bg-yellow-100 text-yellow-600",
        },
        {
          title: "Math Magic",
          icon: <Zap className="w-5 h-5" />,
          color: "bg-green-100 text-green-600",
        },
        {
          title: "Shape Shifter",
          icon: <Gift className="w-5 h-5" />,
          color: "bg-red-100 text-red-600",
        },
      ],
    },
  ];

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
          <Progress value={65} className="w-2/3" />
          <Badge variant="secondary" className="text-lg py-1 px-3">
            Level {activeLevel}
          </Badge>
        </div>

        {levels.map((level) => (
          <motion.div
            key={level.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: level.number * 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 rounded-full ${
                  activeLevel === level.number ? "bg-green-400" : "bg-gray-200"
                } flex items-center justify-center text-white font-bold mr-4 shadow-lg`}
              >
                {level.icon}
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800">{level.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {level.cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/learn")}
                >
                  <Card className="overflow-hidden shadow-xl">
                    <CardContent className={`p-6 ${card.color}`}>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">{card.title}</h3>
                        {card.icon}
                      </div>
                      <div className="mt-4 h-32 bg-white bg-opacity-50 rounded-lg flex items-center justify-center">
                        <Button
                          variant="secondary"
                          className="font-semibold text-lg"
                        >
                          Start Learning
                        </Button>
                      </div>
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
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg"
          >
            Start Your Adventure!
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
