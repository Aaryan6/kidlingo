import {
  Book,
  Zap,
  Star,
  Users,
  Trophy,
  Gift,
  Sun,
  Palette,
  Apple,
  PawPrint,
} from "lucide-react";

export const languageLearningLevels = [
  {
    number: 1,
    name: "Alphabet Adventure",
    icon: <Book className="w-6 h-6" />,
    cards: [
      {
        title: "Letter Sounds",
        icon: <Zap className="w-5 h-5" />,
        color: "bg-pink-100 text-pink-600",
        flashcards: [
          { english: "A - Apple", french: "A - Pomme" },
          { english: "B - Ball", french: "B - Ballon" },
          { english: "C - Cat", french: "C - Chat" },
          { english: "D - Dog", french: "D - Chien" },
          { english: "E - Elephant", french: "E - Éléphant" },
        ],
      },
      {
        title: "Writing Fun",
        icon: <Star className="w-5 h-5" />,
        color: "bg-purple-100 text-purple-600",
        flashcards: [
          { english: "Hello", french: "Bonjour" },
          { english: "Goodbye", french: "Au revoir" },
          { english: "Please", french: "S'il vous plaît" },
          { english: "Thank you", french: "Merci" },
          { english: "My name is...", french: "Je m'appelle..." },
        ],
      },
      {
        title: "Word Start",
        icon: <Users className="w-5 h-5" />,
        color: "bg-blue-100 text-blue-600",
        flashcards: [
          { english: "One", french: "Un" },
          { english: "Two", french: "Deux" },
          { english: "Three", french: "Trois" },
          { english: "Four", french: "Quatre" },
          { english: "Five", french: "Cinq" },
        ],
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
        flashcards: [
          { english: "Six", french: "Six" },
          { english: "Seven", french: "Sept" },
          { english: "Eight", french: "Huit" },
          { english: "Nine", french: "Neuf" },
          { english: "Ten", french: "Dix" },
        ],
      },
      {
        title: "Math Magic",
        icon: <Zap className="w-5 h-5" />,
        color: "bg-green-100 text-green-600",
        flashcards: [
          { english: "Plus", french: "Plus" },
          { english: "Minus", french: "Moins" },
          { english: "Equals", french: "Égal" },
          { english: "More than", french: "Plus que" },
          { english: "Less than", french: "Moins que" },
        ],
      },
      {
        title: "Shape Shifter",
        icon: <Gift className="w-5 h-5" />,
        color: "bg-red-100 text-red-600",
        flashcards: [
          { english: "Circle", french: "Cercle" },
          { english: "Square", french: "Carré" },
          { english: "Triangle", french: "Triangle" },
          { english: "Rectangle", french: "Rectangle" },
          { english: "Star", french: "Étoile" },
        ],
      },
    ],
  },
  {
    number: 3,
    name: "Daily Discovery",
    icon: <Sun className="w-6 h-6" />,
    cards: [
      {
        title: "Color World",
        icon: <Palette className="w-5 h-5" />,
        color: "bg-purple-100 text-purple-600",
        flashcards: [
          { english: "Red", french: "Rouge" },
          { english: "Blue", french: "Bleu" },
          { english: "Green", french: "Vert" },
          { english: "Yellow", french: "Jaune" },
          { english: "Purple", french: "Violet" },
        ],
      },
      {
        title: "Animal Kingdom",
        icon: <PawPrint className="w-5 h-5" />,
        color: "bg-blue-100 text-blue-600",
        flashcards: [
          { english: "Lion", french: "Lion" },
          { english: "Giraffe", french: "Girafe" },
          { english: "Monkey", french: "Singe" },
          { english: "Penguin", french: "Pingouin" },
          { english: "Elephant", french: "Éléphant" },
        ],
      },
      {
        title: "Food Fiesta",
        icon: <Apple className="w-5 h-5" />,
        color: "bg-green-100 text-green-600",
        flashcards: [
          { english: "Apple", french: "Pomme" },
          { english: "Banana", french: "Banane" },
          { english: "Bread", french: "Pain" },
          { english: "Cheese", french: "Fromage" },
          { english: "Milk", french: "Lait" },
        ],
      },
    ],
  },
];
