'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RotateCcw, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react'

const flashcards = [
  { foreign: "Bonjour", english: "Hello" },
  { foreign: "Au revoir", english: "Goodbye" },
  { foreign: "Merci", english: "Thank you" },
  { foreign: "S'il vous plaît", english: "Please" },
]

export function FlashcardPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showEnglish, setShowEnglish] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis)
    }
  }, [])

  const toggleCard = () => {
    setShowEnglish(!showEnglish)
  }

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length)
    resetCard()
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    resetCard()
  }

  const resetCard = () => {
    setShowEnglish(false)
    setIsCorrect(null)
  }

  const handleAnswer = (correct: boolean) => {
    setIsCorrect(correct)
  }

  const speakWord = () => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(
        showEnglish ? flashcards[currentCard].english : flashcards[currentCard].foreign
      )
      utterance.lang = showEnglish ? 'en-US' : 'fr-FR'
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Language Flashcards</h1>
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard + (showEnglish ? '-english' : '-foreign')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full cursor-pointer"
          >
            <Card className="w-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-lg text-gray-600">
                    ({showEnglish ? 'English' : 'French'})
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      speakWord()
                    }}
                    className="rounded-full"
                  >
                    <Volume2 className="h-4 w-4" />
                    <span className="sr-only">Pronounce word</span>
                  </Button>
                </div>
                <div 
                  className="text-3xl font-bold text-gray-800 mb-2 min-h-[100px] flex items-center justify-center"
                  onClick={toggleCard}
                >
                  {showEnglish ? flashcards[currentCard].english : flashcards[currentCard].foreign}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {showEnglish && (
          <div className="mt-6 flex justify-center space-x-4">
            <Button
              variant="outline"
              className="bg-green-100 hover:bg-green-200 text-green-600"
              onClick={() => handleAnswer(true)}
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              I knew it!
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

        {isCorrect !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-3 rounded-md text-center ${
              isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {isCorrect ? 'Great job! Keep it up!' : 'No worries! Practice makes perfect!'}
          </motion.div>
        )}

        <div className="mt-8 flex justify-between items-center">
          <Button variant="outline" onClick={prevCard}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button variant="outline" onClick={resetCard}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button variant="outline" onClick={nextCard}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}