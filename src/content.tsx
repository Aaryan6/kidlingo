import {
  Book,
  BookOpen,
  CircleDashedIcon,
  Clock,
  Cloud,
  Coffee,
  Gift,
  Heart,
  HomeIcon,
  Leaf,
  MessageCircle,
  Music,
  Palette,
  Plane,
  ShoppingCart,
  User,
  UserPlus,
  Users,
  Utensils,
} from "lucide-react";

export type LanguageLearningLevelTypes = {
  number: number;
  name: string;
  icon: React.ReactNode;
  cards: (FlashcardCard | QuizCard)[];
};

export type FlashcardCard = {
  type: "flashcard";
  title: string;
  icon: React.ReactNode;
  color: string;
  flashcards: FlashcardData[];
};

export type QuizCard = {
  type: "quiz";
  title: string;
  icon: React.ReactNode;
  color: string;
  questions: QuizQuestion[];
};

type FlashcardData = {
  question: string;
  options: AnswerOption[];
  correctAnswer: string;
};

type QuizQuestion = {
  question: string;
  options: AnswerOption[];
  correctAnswer: string;
  explanation: string;
};

type AnswerOption = {
  id: string;
  text: string;
};

export const languageLearningLevels: LanguageLearningLevelTypes[] = [
  {
    number: 1,
    name: "Word Wizards",
    icon: <Book className="w-6 h-6" />,
    cards: [
      {
        type: "flashcard",
        title: "Everyday Objects",
        icon: <HomeIcon className="w-5 h-5" />,
        color: "bg-blue-100 text-blue-600",
        flashcards: [
          {
            question: "What is 'book' in French?",
            options: [
              { id: "1", text: "Livre" },
              { id: "2", text: "Stylo" },
              { id: "3", text: "Chaise" },
            ],
            correctAnswer: "Livre",
          },
          {
            question: "How do you say 'table' in French?",
            options: [
              { id: "1", text: "Chaise" },
              { id: "2", text: "Table" },
              { id: "3", text: "Lit" },
            ],
            correctAnswer: "Table",
          },
          {
            question: "What is 'pen' in French?",
            options: [
              { id: "1", text: "Crayon" },
              { id: "2", text: "Stylo" },
              { id: "3", text: "Gomme" },
            ],
            correctAnswer: "Stylo",
          },
          {
            question: "How do you say 'door' in French?",
            options: [
              { id: "1", text: "Fenêtre" },
              { id: "2", text: "Mur" },
              { id: "3", text: "Porte" },
            ],
            correctAnswer: "Porte",
          },
          {
            question: "What is 'chair' in French?",
            options: [
              { id: "1", text: "Table" },
              { id: "2", text: "Chaise" },
              { id: "3", text: "Lit" },
            ],
            correctAnswer: "Chaise",
          },
        ],
      },
      {
        type: "quiz",
        title: "Everyday Objects Quiz",
        icon: <HomeIcon className="w-5 h-5" />,
        color: "bg-blue-200 text-blue-700",
        questions: [
          {
            question: "Which of these is NOT an everyday object?",
            options: [
              { id: "1", text: "Livre (Book)" },
              { id: "2", text: "Montagne (Mountain)" },
              { id: "3", text: "Chaise (Chair)" },
            ],
            correctAnswer: "Montagne (Mountain)",
            explanation:
              "Montagne (mountain) is not typically considered an everyday object, unlike livre (book) and chaise (chair).",
          },
          {
            question: "Complete the sentence: 'Le ____ est sur la table.'",
            options: [
              { id: "1", text: "livre" },
              { id: "2", text: "chaise" },
              { id: "3", text: "porte" },
            ],
            correctAnswer: "livre",
            explanation:
              "The sentence translates to 'The book is on the table.' 'Livre' means 'book' in French.",
          },
          {
            question: "Which word means 'pen' in French?",
            options: [
              { id: "1", text: "Crayon" },
              { id: "2", text: "Stylo" },
              { id: "3", text: "Gomme" },
            ],
            correctAnswer: "Stylo",
            explanation:
              "Stylo is the French word for pen. Crayon means pencil, and gomme means eraser.",
          },
          {
            question:
              "What is the correct translation for 'The chair is near the door'?",
            options: [
              { id: "1", text: "La table est près de la fenêtre" },
              { id: "2", text: "La chaise est près de la porte" },
              { id: "3", text: "Le lit est près du mur" },
            ],
            correctAnswer: "La chaise est près de la porte",
            explanation:
              "This sentence correctly translates 'The chair is near the door' using the words we learned: chaise (chair) and porte (door).",
          },
          {
            question: "Which of these is NOT a piece of furniture?",
            options: [
              { id: "1", text: "Table" },
              { id: "2", text: "Chaise" },
              { id: "3", text: "Stylo" },
            ],
            correctAnswer: "Stylo",
            explanation:
              "Stylo (pen) is not a piece of furniture. Table (table) and chaise (chair) are furniture items.",
          },
        ],
      },
      {
        type: "flashcard",
        title: "Colors and Shapes",
        icon: <Palette className="w-5 h-5" />,
        color: "bg-purple-100 text-purple-600",
        flashcards: [
          {
            question: "What is 'red' in French?",
            options: [
              { id: "1", text: "Bleu" },
              { id: "2", text: "Rouge" },
              { id: "3", text: "Vert" },
            ],
            correctAnswer: "Rouge",
          },
          {
            question: "How do you say 'circle' in French?",
            options: [
              { id: "1", text: "Carré" },
              { id: "2", text: "Triangle" },
              { id: "3", text: "Cercle" },
            ],
            correctAnswer: "Cercle",
          },
          {
            question: "What is 'blue' in French?",
            options: [
              { id: "1", text: "Bleu" },
              { id: "2", text: "Vert" },
              { id: "3", text: "Jaune" },
            ],
            correctAnswer: "Bleu",
          },
          {
            question: "How do you say 'square' in French?",
            options: [
              { id: "1", text: "Cercle" },
              { id: "2", text: "Carré" },
              { id: "3", text: "Triangle" },
            ],
            correctAnswer: "Carré",
          },
          {
            question: "What is 'yellow' in French?",
            options: [
              { id: "1", text: "Rouge" },
              { id: "2", text: "Vert" },
              { id: "3", text: "Jaune" },
            ],
            correctAnswer: "Jaune",
          },
        ],
      },
      {
        type: "quiz",
        title: "Colors and Shapes Quiz",
        icon: <Palette className="w-5 h-5" />,
        color: "bg-purple-200 text-purple-700",
        questions: [
          {
            question: "Which color is 'vert' in English?",
            options: [
              { id: "1", text: "Red" },
              { id: "2", text: "Blue" },
              { id: "3", text: "Green" },
            ],
            correctAnswer: "Green",
            explanation: "'Vert' is the French word for 'green'.",
          },
          {
            question: "What shape is 'triangle' in French?",
            options: [
              { id: "1", text: "Cercle" },
              { id: "2", text: "Triangle" },
              { id: "3", text: "Carré" },
            ],
            correctAnswer: "Triangle",
            explanation: "'Triangle' is the same word in French and English.",
          },
          {
            question: "Which of these is NOT a color in French?",
            options: [
              { id: "1", text: "Rouge" },
              { id: "2", text: "Bleu" },
              { id: "3", text: "Forme" },
            ],
            correctAnswer: "Forme",
            explanation: "'Forme' means 'shape' in French, not a color.",
          },
          {
            question:
              "What is the correct translation for 'The circle is blue'?",
            options: [
              { id: "1", text: "Le carré est rouge" },
              { id: "2", text: "Le cercle est bleu" },
              { id: "3", text: "Le triangle est vert" },
            ],
            correctAnswer: "Le cercle est bleu",
            explanation:
              "This sentence correctly translates 'The circle is blue' using the words we learned: cercle (circle) and bleu (blue).",
          },
          {
            question: "Which shape is 'round' in French?",
            options: [
              { id: "1", text: "Carré" },
              { id: "2", text: "Triangle" },
              { id: "3", text: "Rond" },
            ],
            correctAnswer: "Rond",
            explanation:
              "'Rond' means 'round' in French, which is related to the shape of a circle (cercle).",
          },
        ],
      },

      // Animals and Nature
      {
        type: "flashcard",
        title: "Animals and Nature",
        icon: <Leaf className="w-5 h-5" />,
        color: "bg-green-100 text-green-600",
        flashcards: [
          {
            question: "What is 'cat' in French?",
            options: [
              { id: "1", text: "Chien" },
              { id: "2", text: "Chat" },
              { id: "3", text: "Oiseau" },
            ],
            correctAnswer: "Chat",
          },
          {
            question: "How do you say 'tree' in French?",
            options: [
              { id: "1", text: "Fleur" },
              { id: "2", text: "Arbre" },
              { id: "3", text: "Herbe" },
            ],
            correctAnswer: "Arbre",
          },
          {
            question: "What is 'dog' in French?",
            options: [
              { id: "1", text: "Chat" },
              { id: "2", text: "Chien" },
              { id: "3", text: "Poisson" },
            ],
            correctAnswer: "Chien",
          },
          {
            question: "How do you say 'flower' in French?",
            options: [
              { id: "1", text: "Feuille" },
              { id: "2", text: "Fleur" },
              { id: "3", text: "Fruit" },
            ],
            correctAnswer: "Fleur",
          },
          {
            question: "What is 'bird' in French?",
            options: [
              { id: "1", text: "Oiseau" },
              { id: "2", text: "Poisson" },
              { id: "3", text: "Papillon" },
            ],
            correctAnswer: "Oiseau",
          },
        ],
      },
      {
        type: "quiz",
        title: "Animals and Nature Quiz",
        icon: <Leaf className="w-5 h-5" />,
        color: "bg-green-200 text-green-700",
        questions: [
          {
            question: "Which animal is 'poisson' in English?",
            options: [
              { id: "1", text: "Bird" },
              { id: "2", text: "Cat" },
              { id: "3", text: "Fish" },
            ],
            correctAnswer: "Fish",
            explanation: "'Poisson' is the French word for 'fish'.",
          },
          {
            question: "What does 'feuille' mean in English?",
            options: [
              { id: "1", text: "Flower" },
              { id: "2", text: "Leaf" },
              { id: "3", text: "Tree" },
            ],
            correctAnswer: "Leaf",
            explanation: "'Feuille' means 'leaf' in French.",
          },
          {
            question: "Which of these is NOT an animal in French?",
            options: [
              { id: "1", text: "Chat" },
              { id: "2", text: "Chien" },
              { id: "3", text: "Arbre" },
            ],
            correctAnswer: "Arbre",
            explanation: "'Arbre' means 'tree' in French, not an animal.",
          },
          {
            question:
              "What is the correct translation for 'The bird is in the tree'?",
            options: [
              { id: "1", text: "Le chat est dans la fleur" },
              { id: "2", text: "L'oiseau est dans l'arbre" },
              { id: "3", text: "Le chien est dans l'herbe" },
            ],
            correctAnswer: "L'oiseau est dans l'arbre",
            explanation:
              "This sentence correctly translates 'The bird is in the tree' using the words we learned: oiseau (bird) and arbre (tree).",
          },
          {
            question: "Which word means 'butterfly' in French?",
            options: [
              { id: "1", text: "Oiseau" },
              { id: "2", text: "Papillon" },
              { id: "3", text: "Poisson" },
            ],
            correctAnswer: "Papillon",
            explanation: "'Papillon' is the French word for 'butterfly'.",
          },
        ],
      },
      {
        type: "flashcard",
        title: "Family Members",
        icon: <Users className="w-5 h-5" />,
        color: "bg-yellow-100 text-yellow-600",
        flashcards: [
          {
            question: "What is 'mother' in French?",
            options: [
              { id: "1", text: "Père" },
              { id: "2", text: "Mère" },
              { id: "3", text: "Sœur" },
            ],
            correctAnswer: "Mère",
          },
          {
            question: "How do you say 'father' in French?",
            options: [
              { id: "1", text: "Frère" },
              { id: "2", text: "Père" },
              { id: "3", text: "Oncle" },
            ],
            correctAnswer: "Père",
          },
          {
            question: "What is 'sister' in French?",
            options: [
              { id: "1", text: "Frère" },
              { id: "2", text: "Tante" },
              { id: "3", text: "Sœur" },
            ],
            correctAnswer: "Sœur",
          },
          {
            question: "How do you say 'brother' in French?",
            options: [
              { id: "1", text: "Frère" },
              { id: "2", text: "Cousin" },
              { id: "3", text: "Neveu" },
            ],
            correctAnswer: "Frère",
          },
          {
            question: "What is 'grandmother' in French?",
            options: [
              { id: "1", text: "Grand-père" },
              { id: "2", text: "Grand-mère" },
              { id: "3", text: "Tante" },
            ],
            correctAnswer: "Grand-mère",
          },
        ],
      },
      {
        type: "quiz",
        title: "Family Members Quiz",
        icon: <Users className="w-5 h-5" />,
        color: "bg-yellow-200 text-yellow-700",
        questions: [
          {
            question: "Who is 'oncle' in English?",
            options: [
              { id: "1", text: "Aunt" },
              { id: "2", text: "Uncle" },
              { id: "3", text: "Cousin" },
            ],
            correctAnswer: "Uncle",
            explanation: "'Oncle' is the French word for 'uncle'.",
          },
          {
            question: "What does 'tante' mean?",
            options: [
              { id: "1", text: "Aunt" },
              { id: "2", text: "Sister" },
              { id: "3", text: "Grandmother" },
            ],
            correctAnswer: "Aunt",
            explanation: "'Tante' is the French word for 'aunt'.",
          },
          {
            question: "Which of these is NOT a family member in French?",
            options: [
              { id: "1", text: "Cousin" },
              { id: "2", text: "Neveu" },
              { id: "3", text: "Ami" },
            ],
            correctAnswer: "Ami",
            explanation: "'Ami' means 'friend' in French, not a family member.",
          },
          {
            question:
              "What is the correct translation for 'My sister and my brother'?",
            options: [
              { id: "1", text: "Ma mère et mon père" },
              { id: "2", text: "Ma sœur et mon frère" },
              { id: "3", text: "Ma tante et mon oncle" },
            ],
            correctAnswer: "Ma sœur et mon frère",
            explanation:
              "This phrase correctly translates 'My sister and my brother' using the words we learned: sœur (sister) and frère (brother).",
          },
          {
            question: "Which word means 'grandfather' in French?",
            options: [
              { id: "1", text: "Grand-père" },
              { id: "2", text: "Grand-mère" },
              { id: "3", text: "Petit-fils" },
            ],
            correctAnswer: "Grand-père",
            explanation: "'Grand-père' is the French word for 'grandfather'.",
          },
        ],
      },

      // Food and Drinks
      {
        type: "flashcard",
        title: "Food and Drinks",
        icon: <Coffee className="w-5 h-5" />,
        color: "bg-red-100 text-red-600",
        flashcards: [
          {
            question: "What is 'apple' in French?",
            options: [
              { id: "1", text: "Banane" },
              { id: "2", text: "Pomme" },
              { id: "3", text: "Orange" },
            ],
            correctAnswer: "Pomme",
          },
          {
            question: "How do you say 'water' in French?",
            options: [
              { id: "1", text: "Lait" },
              { id: "2", text: "Jus" },
              { id: "3", text: "Eau" },
            ],
            correctAnswer: "Eau",
          },
          {
            question: "What is 'bread' in French?",
            options: [
              { id: "1", text: "Pain" },
              { id: "2", text: "Fromage" },
              { id: "3", text: "Viande" },
            ],
            correctAnswer: "Pain",
          },
          {
            question: "How do you say 'milk' in French?",
            options: [
              { id: "1", text: "Café" },
              { id: "2", text: "Thé" },
              { id: "3", text: "Lait" },
            ],
            correctAnswer: "Lait",
          },
          {
            question: "What is 'cheese' in French?",
            options: [
              { id: "1", text: "Œuf" },
              { id: "2", text: "Fromage" },
              { id: "3", text: "Poulet" },
            ],
            correctAnswer: "Fromage",
          },
        ],
      },
      {
        type: "quiz",
        title: "Food and Drinks Quiz",
        icon: <Coffee className="w-5 h-5" />,
        color: "bg-red-200 text-red-700",
        questions: [
          {
            question: "Which drink is 'jus' in English?",
            options: [
              { id: "1", text: "Water" },
              { id: "2", text: "Milk" },
              { id: "3", text: "Juice" },
            ],
            correctAnswer: "Juice",
            explanation: "'Jus' is the French word for 'juice'.",
          },
          {
            question: "What does 'viande' mean?",
            options: [
              { id: "1", text: "Vegetable" },
              { id: "2", text: "Meat" },
              { id: "3", text: "Fruit" },
            ],
            correctAnswer: "Meat",
            explanation: "'Viande' is the French word for 'meat'.",
          },
          {
            question: "Which of these is NOT a food in French?",
            options: [
              { id: "1", text: "Pain" },
              { id: "2", text: "Fromage" },
              { id: "3", text: "Assiette" },
            ],
            correctAnswer: "Assiette",
            explanation: "'Assiette' means 'plate' in French, not a food item.",
          },
          {
            question: "What is the correct translation for 'I eat an apple'?",
            options: [
              { id: "1", text: "Je bois du lait" },
              { id: "2", text: "Je mange une pomme" },
              { id: "3", text: "Je cuisine du pain" },
            ],
            correctAnswer: "Je mange une pomme",
            explanation:
              "This sentence correctly translates 'I eat an apple' using the words we learned: manger (to eat) and pomme (apple).",
          },
          {
            question: "Which word means 'egg' in French?",
            options: [
              { id: "1", text: "Œuf" },
              { id: "2", text: "Poulet" },
              { id: "3", text: "Poisson" },
            ],
            correctAnswer: "Œuf",
            explanation: "'Œuf' is the French word for 'egg'.",
          },
        ],
      },

      // Body Parts
      {
        type: "flashcard",
        title: "Body Parts",
        icon: <User className="w-5 h-5" />,
        color: "bg-indigo-100 text-indigo-600",
        flashcards: [
          {
            question: "What is 'head' in French?",
            options: [
              { id: "1", text: "Main" },
              { id: "2", text: "Tête" },
              { id: "3", text: "Pied" },
            ],
            correctAnswer: "Tête",
          },
          {
            question: "How do you say 'hand' in French?",
            options: [
              { id: "1", text: "Bras" },
              { id: "2", text: "Jambe" },
              { id: "3", text: "Main" },
            ],
            correctAnswer: "Main",
          },
          {
            question: "What is 'eye' in French?",
            options: [
              { id: "1", text: "Nez" },
              { id: "2", text: "Œil" },
              { id: "3", text: "Oreille" },
            ],
            correctAnswer: "Œil",
          },
          {
            question: "How do you say 'mouth' in French?",
            options: [
              { id: "1", text: "Bouche" },
              { id: "2", text: "Dent" },
              { id: "3", text: "Langue" },
            ],
            correctAnswer: "Bouche",
          },
          {
            question: "What is 'foot' in French?",
            options: [
              { id: "1", text: "Main" },
              { id: "2", text: "Jambe" },
              { id: "3", text: "Pied" },
            ],
            correctAnswer: "Pied",
          },
        ],
      },
      {
        type: "quiz",
        title: "Body Parts Quiz",
        icon: <User className="w-5 h-5" />,
        color: "bg-indigo-200 text-indigo-700",
        questions: [
          {
            question: "Which body part is 'nez' in English?",
            options: [
              { id: "1", text: "Mouth" },
              { id: "2", text: "Ear" },
              { id: "3", text: "Nose" },
            ],
            correctAnswer: "Nose",
            explanation: "'Nez' is the French word for 'nose'.",
          },
          {
            question: "What does 'jambe' mean?",
            options: [
              { id: "1", text: "Arm" },
              { id: "2", text: "Leg" },
              { id: "3", text: "Foot" },
            ],
            correctAnswer: "Leg",
            explanation: "'Jambe' is the French word for 'leg'.",
          },
          {
            question: "Which of these is NOT a body part in French?",
            options: [
              { id: "1", text: "Bras" },
              { id: "2", text: "Dent" },
              { id: "3", text: "Cheveux" },
            ],
            correctAnswer: "Cheveux",
            explanation:
              "'Cheveux' means 'hair' in French, which is not typically considered a body part.",
          },
          {
            question: "What is the correct translation for 'I have two eyes'?",
            options: [
              { id: "1", text: "J'ai deux mains" },
              { id: "2", text: "J'ai deux yeux" },
              { id: "3", text: "J'ai deux oreilles" },
            ],
            correctAnswer: "J'ai deux yeux",
            explanation:
              "This sentence correctly translates 'I have two eyes' using the words we learned: yeux (plural of œil, meaning eyes).",
          },
          {
            question: "Which word means 'ear' in French?",
            options: [
              { id: "1", text: "Œil" },
              { id: "2", text: "Nez" },
              { id: "3", text: "Oreille" },
            ],
            correctAnswer: "Oreille",
            explanation: "'Oreille' is the French word for 'ear'.",
          },
        ],
      },
    ],
  },
  {
    number: 2,
    name: "Phrase Explorers",
    icon: <MessageCircle className="w-6 h-6" />,
    cards: [
      // Greetings and Introductions
      {
        type: "flashcard",
        title: "Greetings and Introductions",
        icon: <UserPlus className="w-5 h-5" />,
        color: "bg-green-100 text-green-600",
        flashcards: [
          {
            question: "How do you say 'Hello, how are you?' in French?",
            options: [
              { id: "1", text: "Au revoir!" },
              { id: "2", text: "Bonjour, comment allez-vous?" },
              { id: "3", text: "Merci beaucoup" },
            ],
            correctAnswer: "Bonjour, comment allez-vous?",
          },
          {
            question: "What does 'Je m'appelle' mean?",
            options: [
              { id: "1", text: "How are you?" },
              { id: "2", text: "My name is" },
              { id: "3", text: "Nice to meet you" },
            ],
            correctAnswer: "My name is",
          },
          {
            question: "How do you say 'Good evening' in French?",
            options: [
              { id: "1", text: "Bonjour" },
              { id: "2", text: "Bonsoir" },
              { id: "3", text: "Bonne nuit" },
            ],
            correctAnswer: "Bonsoir",
          },
          {
            question: "What is 'Nice to meet you' in French?",
            options: [
              { id: "1", text: "Au revoir" },
              { id: "2", text: "Enchanté(e)" },
              { id: "3", text: "S'il vous plaît" },
            ],
            correctAnswer: "Enchanté(e)",
          },
          {
            question: "How do you ask 'What's your name?' in French?",
            options: [
              { id: "1", text: "Comment allez-vous?" },
              { id: "2", text: "Quel âge avez-vous?" },
              { id: "3", text: "Comment vous appelez-vous?" },
            ],
            correctAnswer: "Comment vous appelez-vous?",
          },
        ],
      },
      {
        type: "quiz",
        title: "Greetings and Introductions Quiz",
        icon: <UserPlus className="w-5 h-5" />,
        color: "bg-green-200 text-green-700",
        questions: [
          {
            question: "Which phrase means 'Goodbye' in French?",
            options: [
              { id: "1", text: "Bonjour" },
              { id: "2", text: "Au revoir" },
              { id: "3", text: "S'il vous plaît" },
            ],
            correctAnswer: "Au revoir",
            explanation: "'Au revoir' is the French phrase for 'Goodbye'.",
          },
          {
            question: "How would you respond to 'Comment allez-vous?'",
            options: [
              { id: "1", text: "Je m'appelle Pierre" },
              { id: "2", text: "Enchanté" },
              { id: "3", text: "Très bien, merci" },
            ],
            correctAnswer: "Très bien, merci",
            explanation:
              "'Très bien, merci' (Very well, thank you) is a common response to 'How are you?'",
          },
          {
            question: "What's the difference between 'tu' and 'vous'?",
            options: [
              { id: "1", text: "There is no difference" },
              { id: "2", text: "'Tu' is singular, 'vous' is plural" },
              { id: "3", text: "'Tu' is informal, 'vous' is formal or plural" },
            ],
            correctAnswer: "'Tu' is informal, 'vous' is formal or plural",
            explanation:
              "'Tu' is used for informal situations or with people you know well, while 'vous' is used in formal situations or when addressing multiple people.",
          },
          {
            question: "How do you say 'My name is John' in French?",
            options: [
              { id: "1", text: "Je m'appelle John" },
              { id: "2", text: "J'ai John" },
              { id: "3", text: "Mon nom est John" },
            ],
            correctAnswer: "Je m'appelle John",
            explanation:
              "'Je m'appelle' followed by a name is the most common way to say 'My name is...' in French.",
          },
          {
            question:
              "Which phrase is used to ask 'How old are you?' in French?",
            options: [
              { id: "1", text: "Comment allez-vous?" },
              { id: "2", text: "Quel âge avez-vous?" },
              { id: "3", text: "Où habitez-vous?" },
            ],
            correctAnswer: "Quel âge avez-vous?",
            explanation:
              "'Quel âge avez-vous?' is the French way to ask 'How old are you?'",
          },
        ],
      },

      // Numbers and Time
      {
        type: "flashcard",
        title: "Numbers and Time",
        icon: <Clock className="w-5 h-5" />,
        color: "bg-blue-100 text-blue-600",
        flashcards: [
          {
            question: "How do you say 'It's 3 o'clock' in French?",
            options: [
              { id: "1", text: "Il est trois heures" },
              { id: "2", text: "Il est treize heures" },
              { id: "3", text: "Il est trente minutes" },
            ],
            correctAnswer: "Il est trois heures",
          },
          {
            question: "What is 'fifteen' in French?",
            options: [
              { id: "1", text: "Cinq" },
              { id: "2", text: "Dix" },
              { id: "3", text: "Quinze" },
            ],
            correctAnswer: "Quinze",
          },
          {
            question: "How do you ask 'What time is it?' in French?",
            options: [
              { id: "1", text: "Quel âge as-tu?" },
              { id: "2", text: "Quelle heure est-il?" },
              { id: "3", text: "Quel jour sommes-nous?" },
            ],
            correctAnswer: "Quelle heure est-il?",
          },
          {
            question: "What does 'demi' mean in telling time?",
            options: [
              { id: "1", text: "Quarter" },
              { id: "2", text: "Half" },
              { id: "3", text: "Full" },
            ],
            correctAnswer: "Half",
          },
          {
            question: "How do you say 'twenty' in French?",
            options: [
              { id: "1", text: "Douze" },
              { id: "2", text: "Vingt" },
              { id: "3", text: "Trente" },
            ],
            correctAnswer: "Vingt",
          },
        ],
      },
      {
        type: "quiz",
        title: "Numbers and Time Quiz",
        icon: <Clock className="w-5 h-5" />,
        color: "bg-blue-200 text-blue-700",
        questions: [
          {
            question: "How do you say '7:30' in French?",
            options: [
              { id: "1", text: "Sept heures et demie" },
              { id: "2", text: "Sept heures et quart" },
              { id: "3", text: "Sept heures trente" },
            ],
            correctAnswer: "Sept heures et demie",
            explanation:
              "In French, 'et demie' is used for half past the hour. Both 'Sept heures et demie' and 'Sept heures trente' are correct.",
          },
          {
            question: "What does 'Il est midi' mean?",
            options: [
              { id: "1", text: "It's midnight" },
              { id: "2", text: "It's midday" },
              { id: "3", text: "It's morning" },
            ],
            correctAnswer: "It's midday",
            explanation: "'Midi' in French means 'midday' or 'noon'.",
          },
          {
            question: "How do you say '45' in French?",
            options: [
              { id: "1", text: "Quarante-cinq" },
              { id: "2", text: "Cinquante-cinq" },
              { id: "3", text: "Trente-cinq" },
            ],
            correctAnswer: "Quarante-cinq",
            explanation: "'Quarante-cinq' is the French word for '45'.",
          },
          {
            question: "What time is 'dix-huit heures'?",
            options: [
              { id: "1", text: "8:00 AM" },
              { id: "2", text: "6:00 PM" },
              { id: "3", text: "10:00 PM" },
            ],
            correctAnswer: "6:00 PM",
            explanation:
              "In the 24-hour system, 'dix-huit heures' (18:00) is equivalent to 6:00 PM.",
          },
          {
            question: "How would you say 'every day at 9:00 AM' in French?",
            options: [
              { id: "1", text: "Chaque jour à neuf heures du matin" },
              { id: "2", text: "Tous les jours à vingt et un heures" },
              { id: "3", text: "Chaque matin à neuf heures du soir" },
            ],
            correctAnswer: "Chaque jour à neuf heures du matin",
            explanation:
              "'Chaque jour à neuf heures du matin' correctly translates to 'every day at 9:00 AM'.",
          },
        ],
      },

      // Weather and Seasons
      {
        type: "flashcard",
        title: "Weather and Seasons",
        icon: <Cloud className="w-5 h-5" />,
        color: "bg-yellow-100 text-yellow-600",
        flashcards: [
          {
            question: "How do you say 'It's sunny' in French?",
            options: [
              { id: "1", text: "Il pleut" },
              { id: "2", text: "Il fait froid" },
              { id: "3", text: "Il fait beau" },
            ],
            correctAnswer: "Il fait beau",
          },
          {
            question: "What is 'winter' in French?",
            options: [
              { id: "1", text: "Printemps" },
              { id: "2", text: "Été" },
              { id: "3", text: "Hiver" },
            ],
            correctAnswer: "Hiver",
          },
          {
            question: "How do you say 'It's raining' in French?",
            options: [
              { id: "1", text: "Il neige" },
              { id: "2", text: "Il pleut" },
              { id: "3", text: "Il fait chaud" },
            ],
            correctAnswer: "Il pleut",
          },
          {
            question: "What is 'autumn' in French?",
            options: [
              { id: "1", text: "Printemps" },
              { id: "2", text: "Automne" },
              { id: "3", text: "Été" },
            ],
            correctAnswer: "Automne",
          },
          {
            question: "How do you ask 'What's the weather like?' in French?",
            options: [
              { id: "1", text: "Quel temps fait-il?" },
              { id: "2", text: "Quelle saison est-ce?" },
              { id: "3", text: "Quel jour sommes-nous?" },
            ],
            correctAnswer: "Quel temps fait-il?",
          },
        ],
      },
      {
        type: "quiz",
        title: "Weather and Seasons Quiz",
        icon: <Cloud className="w-5 h-5" />,
        color: "bg-yellow-200 text-yellow-700",
        questions: [
          {
            question: "Which phrase means 'It's a beautiful day'?",
            options: [
              { id: "1", text: "Il pleut" },
              { id: "2", text: "Il fait beau" },
              { id: "3", text: "Il neige" },
            ],
            correctAnswer: "Il fait beau",
            explanation:
              "'Il fait beau' is used to express that it's a beautiful or nice day in French.",
          },
          {
            question: "How would you say 'It's cloudy' in French?",
            options: [
              { id: "1", text: "Il y a du soleil" },
              { id: "2", text: "Il y a des nuages" },
              { id: "3", text: "Il fait chaud" },
            ],
            correctAnswer: "Il y a des nuages",
            explanation:
              "'Il y a des nuages' literally means 'There are clouds', which is how you express that it's cloudy in French.",
          },
          {
            question: "What's the French word for 'umbrella'?",
            options: [
              { id: "1", text: "Parapluie" },
              { id: "2", text: "Parasol" },
              { id: "3", text: "Parachute" },
            ],
            correctAnswer: "Parapluie",
            explanation:
              "'Parapluie' is the French word for 'umbrella'. It literally means 'for rain'.",
          },
          {
            question:
              "How do you say 'The weather is nice in spring' in French?",
            options: [
              { id: "1", text: "Le temps est beau en hiver" },
              { id: "2", text: "Le temps est agréable au printemps" },
              { id: "3", text: "Le temps est mauvais en été" },
            ],
            correctAnswer: "Le temps est agréable au printemps",
            explanation:
              "This sentence correctly translates 'The weather is nice in spring' to French.",
          },
          {
            question:
              "Which season is associated with falling leaves in French?",
            options: [
              { id: "1", text: "Le printemps" },
              { id: "2", text: "L'été" },
              { id: "3", text: "L'automne" },
            ],
            correctAnswer: "L'automne",
            explanation:
              "'L'automne' (autumn/fall) is the season associated with falling leaves in French, as in English.",
          },
        ],
      },

      // Hobbies and Activities
      {
        type: "flashcard",
        title: "Hobbies and Activities",
        icon: <Music className="w-5 h-5" />,
        color: "bg-purple-100 text-purple-600",
        flashcards: [
          {
            question: "How do you say 'I like to read' in French?",
            options: [
              { id: "1", text: "J'aime lire" },
              { id: "2", text: "J'aime écrire" },
              { id: "3", text: "J'aime parler" },
            ],
            correctAnswer: "J'aime lire",
          },
          {
            question: "What is 'to play sports' in French?",
            options: [
              { id: "1", text: "Jouer de la musique" },
              { id: "2", text: "Faire du sport" },
              { id: "3", text: "Regarder la télé" },
            ],
            correctAnswer: "Faire du sport",
          },
          {
            question: "How do you say 'I play the piano' in French?",
            options: [
              { id: "1", text: "Je joue au foot" },
              { id: "2", text: "Je joue du piano" },
              { id: "3", text: "Je joue aux cartes" },
            ],
            correctAnswer: "Je joue du piano",
          },
          {
            question: "What does 'danser' mean?",
            options: [
              { id: "1", text: "To sing" },
              { id: "2", text: "To dance" },
              { id: "3", text: "To draw" },
            ],
            correctAnswer: "To dance",
          },
          {
            question: "How do you ask 'What are your hobbies?' in French?",
            options: [
              { id: "1", text: "Que fais-tu?" },
              { id: "2", text: "Quels sont tes loisirs?" },
              { id: "3", text: "Où vas-tu?" },
            ],
            correctAnswer: "Quels sont tes loisirs?",
          },
        ],
      },
      {
        type: "quiz",
        title: "Hobbies and Activities Quiz",
        icon: <Music className="w-5 h-5" />,
        color: "bg-purple-200 text-purple-700",
        questions: [
          {
            question: "Which phrase means 'I like to travel' in French?",
            options: [
              { id: "1", text: "J'aime cuisiner" },
              { id: "2", text: "J'aime voyager" },
              { id: "3", text: "J'aime dormir" },
            ],
            correctAnswer: "J'aime voyager",
            explanation:
              "'J'aime voyager' correctly translates to 'I like to travel' in French.",
          },
          {
            question: "How would you say 'She plays tennis' in French?",
            options: [
              { id: "1", text: "Elle joue au tennis" },
              { id: "2", text: "Elle fait du tennis" },
              { id: "3", text: "Elle aime le tennis" },
            ],
            correctAnswer: "Elle joue au tennis",
            explanation:
              "In French, we use 'jouer au' for sports with a ball or similar object, so 'Elle joue au tennis' is correct.",
          },
          {
            question: "What does 'faire de la photographie' mean?",
            options: [
              { id: "1", text: "To take photos" },
              { id: "2", text: "To develop photos" },
              { id: "3", text: "To look at photos" },
            ],
            correctAnswer: "To take photos",
            explanation:
              "'Faire de la photographie' means 'to do photography' or 'to take photos' in English.",
          },
          {
            question:
              "How do you say 'We go to the cinema every weekend' in French?",
            options: [
              { id: "1", text: "Nous allons au cinéma tous les week-ends" },
              { id: "2", text: "Nous regardons des films chaque semaine" },
              { id: "3", text: "Nous aimons le cinéma le week-end" },
            ],
            correctAnswer: "Nous allons au cinéma tous les week-ends",
            explanation:
              "This sentence correctly translates 'We go to the cinema every weekend' to French.",
          },
          {
            question:
              "Which verb is used with 'de la guitare' to say 'to play the guitar'?",
            options: [
              { id: "1", text: "Faire" },
              { id: "2", text: "Jouer" },
              { id: "3", text: "Pratiquer" },
            ],
            correctAnswer: "Jouer",
            explanation:
              "In French, we use 'jouer de' for musical instruments, so 'jouer de la guitare' means 'to play the guitar'.",
          },
        ],
      },
      {
        type: "flashcard",
        title: "School and Classroom",
        icon: <BookOpen className="w-5 h-5" />,
        color: "bg-red-100 text-red-600",
        flashcards: [
          {
            question: "What is 'teacher' in French?",
            options: [
              { id: "1", text: "Élève" },
              { id: "2", text: "Professeur" },
              { id: "3", text: "Directeur" },
            ],
            correctAnswer: "Professeur",
          },
          {
            question: "How do you say 'I have a question' in French?",
            options: [
              { id: "1", text: "J'ai une réponse" },
              { id: "2", text: "J'ai un problème" },
              { id: "3", text: "J'ai une question" },
            ],
            correctAnswer: "J'ai une question",
          },
          {
            question: "What is 'homework' in French?",
            options: [
              { id: "1", text: "Devoirs" },
              { id: "2", text: "Exercices" },
              { id: "3", text: "Leçons" },
            ],
            correctAnswer: "Devoirs",
          },
          {
            question: "How do you say 'classroom' in French?",
            options: [
              { id: "1", text: "École" },
              { id: "2", text: "Salle de classe" },
              { id: "3", text: "Cour de récréation" },
            ],
            correctAnswer: "Salle de classe",
          },
          {
            question: "What does 'étudier' mean?",
            options: [
              { id: "1", text: "To teach" },
              { id: "2", text: "To learn" },
              { id: "3", text: "To study" },
            ],
            correctAnswer: "To study",
          },
        ],
      },
      {
        type: "quiz",
        title: "School and Classroom Quiz",
        icon: <BookOpen className="w-5 h-5" />,
        color: "bg-red-200 text-red-700",
        questions: [
          {
            question: "How would you say 'The exam is difficult' in French?",
            options: [
              { id: "1", text: "L'examen est facile" },
              { id: "2", text: "L'examen est difficile" },
              { id: "3", text: "L'examen est long" },
            ],
            correctAnswer: "L'examen est difficile",
            explanation:
              "This sentence correctly translates 'The exam is difficult' to French.",
          },
          {
            question: "What does 'la récréation' mean?",
            options: [
              { id: "1", text: "Homework" },
              { id: "2", text: "Recess" },
              { id: "3", text: "Classroom" },
            ],
            correctAnswer: "Recess",
            explanation:
              "'La récréation' refers to the break time or recess in a school day.",
          },
          {
            question: "How do you say 'to raise your hand' in French?",
            options: [
              { id: "1", text: "Lever la main" },
              { id: "2", text: "Baisser la main" },
              { id: "3", text: "Donner la main" },
            ],
            correctAnswer: "Lever la main",
            explanation:
              "'Lever la main' literally means 'to raise the hand' in French.",
          },
          {
            question: "What is a 'bulletin scolaire'?",
            options: [
              { id: "1", text: "A school newspaper" },
              { id: "2", text: "A report card" },
              { id: "3", text: "A school calendar" },
            ],
            correctAnswer: "A report card",
            explanation:
              "In French schools, a 'bulletin scolaire' is a report card that shows a student's grades and progress.",
          },
          {
            question: "How would you ask 'Can you repeat, please?' in French?",
            options: [
              { id: "1", text: "Pouvez-vous répéter, s'il vous plaît ?" },
              { id: "2", text: "Pouvez-vous expliquer, s'il vous plaît ?" },
              { id: "3", text: "Pouvez-vous parler, s'il vous plaît ?" },
            ],
            correctAnswer: "Pouvez-vous répéter, s'il vous plaît ?",
            explanation:
              "This phrase is commonly used in classrooms to ask the teacher to repeat something.",
          },
        ],
      },

      // Shopping and Money
      {
        type: "flashcard",
        title: "Shopping and Money",
        icon: <ShoppingCart className="w-5 h-5" />,
        color: "bg-green-100 text-green-600",
        flashcards: [
          {
            question: "How do you say 'How much does it cost?' in French?",
            options: [
              { id: "1", text: "Où est le magasin?" },
              { id: "2", text: "Combien ça coûte?" },
              { id: "3", text: "Qu'est-ce que c'est?" },
            ],
            correctAnswer: "Combien ça coûte?",
          },
          {
            question: "What is 'store' in French?",
            options: [
              { id: "1", text: "Magasin" },
              { id: "2", text: "Marché" },
              { id: "3", text: "Restaurant" },
            ],
            correctAnswer: "Magasin",
          },
          {
            question: "How do you say 'I would like to buy' in French?",
            options: [
              { id: "1", text: "Je voudrais acheter" },
              { id: "2", text: "Je dois payer" },
              { id: "3", text: "Je peux voir" },
            ],
            correctAnswer: "Je voudrais acheter",
          },
          {
            question: "What is 'money' in French?",
            options: [
              { id: "1", text: "Monnaie" },
              { id: "2", text: "Argent" },
              { id: "3", text: "Prix" },
            ],
            correctAnswer: "Argent",
          },
          {
            question: "How do you say 'It's too expensive' in French?",
            options: [
              { id: "1", text: "C'est bon marché" },
              { id: "2", text: "C'est trop cher" },
              { id: "3", text: "C'est en solde" },
            ],
            correctAnswer: "C'est trop cher",
          },
        ],
      },
      {
        type: "quiz",
        title: "Shopping and Money Quiz",
        icon: <ShoppingCart className="w-5 h-5" />,
        color: "bg-green-200 text-green-700",
        questions: [
          {
            question: "How would you ask for the price of an item in French?",
            options: [
              { id: "1", text: "Quel est le prix ?" },
              { id: "2", text: "Où est le prix ?" },
              { id: "3", text: "Quand est le prix ?" },
            ],
            correctAnswer: "Quel est le prix ?",
            explanation:
              "'Quel est le prix ?' is the most common way to ask 'What's the price?' in French.",
          },
          {
            question: "What does 'faire du shopping' mean?",
            options: [
              { id: "1", text: "To go grocery shopping" },
              { id: "2", text: "To go window shopping" },
              { id: "3", text: "To go shopping (in general)" },
            ],
            correctAnswer: "To go shopping (in general)",
            explanation:
              "'Faire du shopping' is a general term for going shopping, often for clothes or other non-grocery items.",
          },
          {
            question: "How do you say 'credit card' in French?",
            options: [
              { id: "1", text: "Carte de crédit" },
              { id: "2", text: "Carte bancaire" },
              { id: "3", text: "Carte d'identité" },
            ],
            correctAnswer: "Carte de crédit",
            explanation:
              "'Carte de crédit' is the direct translation of 'credit card'. Note that 'carte bancaire' is also commonly used for any bank card.",
          },
          {
            question: "What does 'C'est une bonne affaire' mean?",
            options: [
              { id: "1", text: "It's expensive" },
              { id: "2", text: "It's a good deal" },
              { id: "3", text: "It's not for sale" },
            ],
            correctAnswer: "It's a good deal",
            explanation:
              "'C'est une bonne affaire' is used to express that something is a good deal or bargain.",
          },
          {
            question: "How would you ask for a refund in French?",
            options: [
              { id: "1", text: "Je voudrais un remboursement" },
              { id: "2", text: "Je voudrais un échange" },
              { id: "3", text: "Je voudrais une réduction" },
            ],
            correctAnswer: "Je voudrais un remboursement",
            explanation:
              "'Je voudrais un remboursement' means 'I would like a refund' in French.",
          },
        ],
      },
    ],
  },
  {
    number: 3,
    name: "Conversation Champions",
    icon: <Users className="w-6 h-6" />,
    cards: [
      // Making Friends
      {
        type: "flashcard",
        title: "Making Friends",
        icon: <Heart className="w-5 h-5" />,
        color: "bg-pink-100 text-pink-600",
        flashcards: [
          {
            question: "How do you ask 'Do you want to be friends?' in French?",
            options: [
              { id: "1", text: "Tu veux être mon ami(e)?" },
              { id: "2", text: "Quel est ton hobby?" },
              { id: "3", text: "Où habites-tu?" },
            ],
            correctAnswer: "Tu veux être mon ami(e)?",
          },
          {
            question: "What does 'Qu'est-ce que tu aimes faire?' mean?",
            options: [
              { id: "1", text: "Where do you live?" },
              { id: "2", text: "What do you like to do?" },
              { id: "3", text: "How old are you?" },
            ],
            correctAnswer: "What do you like to do?",
          },
          {
            question: "How do you say 'I like playing sports' in French?",
            options: [
              { id: "1", text: "J'aime lire des livres" },
              { id: "2", text: "J'aime écouter de la musique" },
              { id: "3", text: "J'aime faire du sport" },
            ],
            correctAnswer: "J'aime faire du sport",
          },
          {
            question: "What is 'Where are you from?' in French?",
            options: [
              { id: "1", text: "Quel âge as-tu?" },
              { id: "2", text: "D'où viens-tu?" },
              { id: "3", text: "Où vas-tu?" },
            ],
            correctAnswer: "D'où viens-tu?",
          },
          {
            question: "How do you ask 'Do you have any siblings?' in French?",
            options: [
              { id: "1", text: "As-tu des frères et sœurs?" },
              { id: "2", text: "Quel est ton animal préféré?" },
              { id: "3", text: "Quelle est ta couleur préférée?" },
            ],
            correctAnswer: "As-tu des frères et sœurs?",
          },
        ],
      },
      {
        type: "quiz",
        title: "Making Friends Quiz",
        icon: <Heart className="w-5 h-5" />,
        color: "bg-pink-200 text-pink-700",
        questions: [
          {
            question: "How would you say 'I'm happy to meet you' in French?",
            options: [
              { id: "1", text: "Je suis content(e) de te rencontrer" },
              { id: "2", text: "Je suis triste de te voir" },
              { id: "3", text: "Je suis fatigué(e) de parler" },
            ],
            correctAnswer: "Je suis content(e) de te rencontrer",
            explanation:
              "This phrase expresses that you're happy to meet someone in French.",
          },
          {
            question: "What does 'On a beaucoup en commun' mean?",
            options: [
              { id: "1", text: "We have nothing in common" },
              { id: "2", text: "We have a lot in common" },
              { id: "3", text: "We should meet more often" },
            ],
            correctAnswer: "We have a lot in common",
            explanation:
              "'On a beaucoup en commun' means 'We have a lot in common' and is often used when making new friends.",
          },
          {
            question: "How do you ask someone about their interests in French?",
            options: [
              { id: "1", text: "Quels sont tes intérêts?" },
              { id: "2", text: "Quel est ton travail?" },
              { id: "3", text: "Où habites-tu?" },
            ],
            correctAnswer: "Quels sont tes intérêts?",
            explanation:
              "'Quels sont tes intérêts?' is a direct way to ask about someone's interests in French.",
          },
          {
            question:
              "What's a polite way to ask for someone's phone number in French?",
            options: [
              { id: "1", text: "Donne-moi ton numéro" },
              { id: "2", text: "Je peux avoir ton numéro?" },
              { id: "3", text: "Quel est ton adresse?" },
            ],
            correctAnswer: "Je peux avoir ton numéro?",
            explanation:
              "'Je peux avoir ton numéro?' is a polite way to ask for someone's phone number in French.",
          },
          {
            question: "How would you suggest meeting up again in French?",
            options: [
              { id: "1", text: "On devrait se revoir bientôt" },
              { id: "2", text: "Je ne veux plus te voir" },
              { id: "3", text: "J'ai oublié ton nom" },
            ],
            correctAnswer: "On devrait se revoir bientôt",
            explanation:
              "'On devrait se revoir bientôt' means 'We should meet again soon' and is a friendly way to suggest future meetings.",
          },
        ],
      },

      // At the Restaurant
      {
        type: "flashcard",
        title: "At the Restaurant",
        icon: <Utensils className="w-5 h-5" />,
        color: "bg-orange-100 text-orange-600",
        flashcards: [
          {
            question: "How do you say 'I would like to order' in French?",
            options: [
              { id: "1", text: "Je voudrais commander" },
              { id: "2", text: "J'ai faim" },
              { id: "3", text: "C'est délicieux" },
            ],
            correctAnswer: "Je voudrais commander",
          },
          {
            question: "What is 'menu' in French?",
            options: [
              { id: "1", text: "Carte" },
              { id: "2", text: "Plat" },
              { id: "3", text: "Boisson" },
            ],
            correctAnswer: "Carte",
          },
          {
            question: "How do you ask for the bill in French?",
            options: [
              { id: "1", text: "L'addition, s'il vous plaît" },
              { id: "2", text: "Où sont les toilettes?" },
              { id: "3", text: "Puis-je avoir de l'eau?" },
            ],
            correctAnswer: "L'addition, s'il vous plaît",
          },
          {
            question: "What does 'bon appétit' mean?",
            options: [
              { id: "1", text: "Enjoy your meal" },
              { id: "2", text: "Thank you" },
              { id: "3", text: "Goodbye" },
            ],
            correctAnswer: "Enjoy your meal",
          },
          {
            question: "How do you say 'waiter' in French?",
            options: [
              { id: "1", text: "Chef" },
              { id: "2", text: "Serveur" },
              { id: "3", text: "Client" },
            ],
            correctAnswer: "Serveur",
          },
        ],
      },
      {
        type: "quiz",
        title: "At the Restaurant Quiz",
        icon: <Utensils className="w-5 h-5" />,
        color: "bg-orange-200 text-orange-700",
        questions: [
          {
            question: "How would you ask for a table for two in French?",
            options: [
              { id: "1", text: "Une table pour deux, s'il vous plaît" },
              { id: "2", text: "Deux personnes, s'il vous plaît" },
              { id: "3", text: "Nous sommes deux" },
            ],
            correctAnswer: "Une table pour deux, s'il vous plaît",
            explanation:
              "This is the most common way to ask for a table for two people in a French restaurant.",
          },
          {
            question: "What does 'Je suis végétarien(ne)' mean?",
            options: [
              { id: "1", text: "I am hungry" },
              { id: "2", text: "I am vegetarian" },
              { id: "3", text: "I don't like the food" },
            ],
            correctAnswer: "I am vegetarian",
            explanation:
              "'Je suis végétarien(ne)' is how you would inform the waiter that you're vegetarian.",
          },
          {
            question:
              "How do you ask for the waiter's recommendation in French?",
            options: [
              { id: "1", text: "Qu'est-ce que vous recommandez?" },
              { id: "2", text: "Quel est le plat du jour?" },
              { id: "3", text: "Avez-vous des allergies?" },
            ],
            correctAnswer: "Qu'est-ce que vous recommandez?",
            explanation:
              "'Qu'est-ce que vous recommandez?' means 'What do you recommend?' in French.",
          },
          {
            question: "How would you say 'The meal was delicious' in French?",
            options: [
              { id: "1", text: "Le repas était délicieux" },
              { id: "2", text: "J'ai encore faim" },
              { id: "3", text: "Je n'ai pas aimé" },
            ],
            correctAnswer: "Le repas était délicieux",
            explanation:
              "This phrase expresses that you enjoyed the meal in French.",
          },
          {
            question: "What does 'À la carte' mean in a restaurant context?",
            options: [
              { id: "1", text: "The daily special" },
              { id: "2", text: "The set menu" },
              { id: "3", text: "Ordering individual dishes from the menu" },
            ],
            correctAnswer: "Ordering individual dishes from the menu",
            explanation:
              "'À la carte' refers to ordering individual dishes from the menu, as opposed to a set menu.",
          },
        ],
      },

      // Travel and Transportation
      {
        type: "flashcard",
        title: "Travel and Transportation",
        icon: <Plane className="w-5 h-5" />,
        color: "bg-blue-100 text-blue-600",
        flashcards: [
          {
            question: "How do you say 'Where is the train station?' in French?",
            options: [
              { id: "1", text: "Où est la gare?" },
              { id: "2", text: "Quand part le train?" },
              { id: "3", text: "Combien coûte le billet?" },
            ],
            correctAnswer: "Où est la gare?",
          },
          {
            question: "What is 'airplane' in French?",
            options: [
              { id: "1", text: "Train" },
              { id: "2", text: "Avion" },
              { id: "3", text: "Voiture" },
            ],
            correctAnswer: "Avion",
          },
          {
            question: "How do you ask 'How can I get to...?' in French?",
            options: [
              { id: "1", text: "Où se trouve...?" },
              { id: "2", text: "Comment puis-je aller à...?" },
              { id: "3", text: "Quand arrive-t-on à...?" },
            ],
            correctAnswer: "Comment puis-je aller à...?",
          },
          {
            question: "What does 'Je suis perdu(e)' mean?",
            options: [
              { id: "1", text: "I am tired" },
              { id: "2", text: "I am lost" },
              { id: "3", text: "I am hungry" },
            ],
            correctAnswer: "I am lost",
          },
          {
            question: "How do you say 'ticket' in French?",
            options: [
              { id: "1", text: "Passeport" },
              { id: "2", text: "Billet" },
              { id: "3", text: "Valise" },
            ],
            correctAnswer: "Billet",
          },
        ],
      },
      {
        type: "quiz",
        title: "Travel and Transportation Quiz",
        icon: <Plane className="w-5 h-5" />,
        color: "bg-blue-200 text-blue-700",
        questions: [
          {
            question: "What's the French phrase for 'baggage claim'?",
            options: [
              { id: "1", text: "Salle d'embarquement" },
              { id: "2", text: "Récupération des bagages" },
              { id: "3", text: "Contrôle des passeports" },
            ],
            correctAnswer: "Récupération des bagages",
            explanation:
              "'Récupération des bagages' is the French term for 'baggage claim' area in airports.",
          },
          {
            question:
              "How would you ask 'Is there a direct flight to Paris?' in French?",
            options: [
              { id: "1", text: "Y a-t-il un vol direct pour Paris?" },
              { id: "2", text: "Quand part le prochain vol pour Paris?" },
              { id: "3", text: "Combien coûte un vol pour Paris?" },
            ],
            correctAnswer: "Y a-t-il un vol direct pour Paris?",
            explanation:
              "This sentence correctly asks if there's a direct flight to Paris in French.",
          },
          {
            question: "What does 'Je voudrais louer une voiture' mean?",
            options: [
              { id: "1", text: "I would like to buy a car" },
              { id: "2", text: "I would like to rent a car" },
              { id: "3", text: "I would like to park my car" },
            ],
            correctAnswer: "I would like to rent a car",
            explanation:
              "'Je voudrais louer une voiture' means 'I would like to rent a car' in French.",
          },
          {
            question: "How do you say 'Could you call me a taxi?' in French?",
            options: [
              { id: "1", text: "Pouvez-vous m'appeler un taxi?" },
              { id: "2", text: "Où est l'arrêt de bus?" },
              { id: "3", text: "Je cherche la station de métro" },
            ],
            correctAnswer: "Pouvez-vous m'appeler un taxi?",
            explanation:
              "This phrase is used to politely ask someone to call a taxi for you in French.",
          },
          {
            question: "What's the meaning of 'Attachez votre ceinture'?",
            options: [
              { id: "1", text: "Open the window" },
              { id: "2", text: "Fasten your seatbelt" },
              { id: "3", text: "Turn off your phone" },
            ],
            correctAnswer: "Fasten your seatbelt",
            explanation:
              "'Attachez votre ceinture' is the French instruction for 'Fasten your seatbelt', often heard on planes or in cars.",
          },
        ],
      },

      // Holidays and Celebrations
      {
        type: "flashcard",
        title: "Holidays and Celebrations",
        icon: <Gift className="w-5 h-5" />,
        color: "bg-red-100 text-red-600",
        flashcards: [
          {
            question: "How do you say 'Happy Birthday' in French?",
            options: [
              { id: "1", text: "Joyeux Noël" },
              { id: "2", text: "Bonne Année" },
              { id: "3", text: "Joyeux Anniversaire" },
            ],
            correctAnswer: "Joyeux Anniversaire",
          },
          {
            question: "What is 'Christmas' in French?",
            options: [
              { id: "1", text: "Pâques" },
              { id: "2", text: "Noël" },
              { id: "3", text: "Halloween" },
            ],
            correctAnswer: "Noël",
          },
          {
            question: "How do you say 'Happy New Year' in French?",
            options: [
              { id: "1", text: "Bonne Année" },
              { id: "2", text: "Joyeuses Fêtes" },
              { id: "3", text: "Bon Appétit" },
            ],
            correctAnswer: "Bonne Année",
          },
          {
            question: "What does 'félicitations' mean?",
            options: [
              { id: "1", text: "Good luck" },
              { id: "2", text: "Congratulations" },
              { id: "3", text: "Best wishes" },
            ],
            correctAnswer: "Congratulations",
          },
          {
            question: "How do you say 'gift' in French?",
            options: [
              { id: "1", text: "Présent" },
              { id: "2", text: "Carte" },
              { id: "3", text: "Fête" },
            ],
            correctAnswer: "Présent",
          },
        ],
      },
      {
        type: "quiz",
        title: "Holidays and Celebrations Quiz",
        icon: <Gift className="w-5 h-5" />,
        color: "bg-red-200 text-red-700",
        questions: [
          {
            question: "What does 'Meilleurs Vœux' mean?",
            options: [
              { id: "1", text: "Merry Christmas" },
              { id: "2", text: "Best Wishes" },
              { id: "3", text: "Happy Birthday" },
            ],
            correctAnswer: "Best Wishes",
            explanation:
              "'Meilleurs Vœux' is a French expression meaning 'Best Wishes', often used during holidays or celebrations.",
          },
          {
            question: "How do you say 'to make a wish' in French?",
            options: [
              { id: "1", text: "Faire un cadeau" },
              { id: "2", text: "Faire un vœu" },
              { id: "3", text: "Faire la fête" },
            ],
            correctAnswer: "Faire un vœu",
            explanation:
              "'Faire un vœu' means 'to make a wish' in French, often used in birthday celebrations.",
          },
          {
            question: "What is the French word for 'fireworks'?",
            options: [
              { id: "1", text: "Feux d'artifice" },
              { id: "2", text: "Lumières" },
              { id: "3", text: "Étincelles" },
            ],
            correctAnswer: "Feux d'artifice",
            explanation:
              "'Feux d'artifice' is the French term for 'fireworks', often seen during New Year's Eve or Bastille Day celebrations.",
          },
          {
            question:
              "How would you say 'We're throwing a surprise party' in French?",
            options: [
              { id: "1", text: "Nous organisons une fête surprise" },
              { id: "2", text: "Nous allons à une fête" },
              { id: "3", text: "Nous célébrons l'anniversaire" },
            ],
            correctAnswer: "Nous organisons une fête surprise",
            explanation:
              "This sentence correctly expresses the idea of throwing a surprise party in French.",
          },
          {
            question: "What does 'Jour férié' mean?",
            options: [
              { id: "1", text: "Birthday" },
              { id: "2", text: "Holiday (day off)" },
              { id: "3", text: "Party day" },
            ],
            correctAnswer: "Holiday (day off)",
            explanation:
              "'Jour férié' refers to a public holiday or a day off in French.",
          },
        ],
      },

      // Sports and Games
      {
        type: "flashcard",
        title: "Sports and Games",
        icon: <CircleDashedIcon className="w-5 h-5" />,
        color: "bg-green-100 text-green-600",
        flashcards: [
          {
            question: "How do you say 'I play soccer' in French?",
            options: [
              { id: "1", text: "Je joue au tennis" },
              { id: "2", text: "Je joue au football" },
              { id: "3", text: "Je joue au basket" },
            ],
            correctAnswer: "Je joue au football",
          },
          {
            question: "What is 'swimming' in French?",
            options: [
              { id: "1", text: "La natation" },
              { id: "2", text: "Le cyclisme" },
              { id: "3", text: "L'athlétisme" },
            ],
            correctAnswer: "La natation",
          },
          {
            question: "How do you ask 'Do you want to play?' in French?",
            options: [
              { id: "1", text: "Tu veux jouer?" },
              { id: "2", text: "Tu aimes le sport?" },
              { id: "3", text: "Quel est ton sport préféré?" },
            ],
            correctAnswer: "Tu veux jouer?",
          },
          {
            question: "What does 'gagner' mean?",
            options: [
              { id: "1", text: "To lose" },
              { id: "2", text: "To win" },
              { id: "3", text: "To tie" },
            ],
            correctAnswer: "To win",
          },
          {
            question: "How do you say 'team' in French?",
            options: [
              { id: "1", text: "Joueur" },
              { id: "2", text: "Équipe" },
              { id: "3", text: "Match" },
            ],
            correctAnswer: "Équipe",
          },
        ],
      },
      {
        type: "quiz",
        title: "Sports and Games Quiz",
        icon: <CircleDashedIcon className="w-5 h-5" />,
        color: "bg-green-200 text-green-700",
        questions: [
          {
            question:
              "How would you say 'I'm a fan of Paris Saint-Germain' in French?",
            options: [
              { id: "1", text: "Je suis un supporter du Paris Saint-Germain" },
              { id: "2", text: "J'aime regarder Paris Saint-Germain" },
              { id: "3", text: "Je joue pour Paris Saint-Germain" },
            ],
            correctAnswer: "Je suis un supporter du Paris Saint-Germain",
            explanation:
              "This sentence expresses being a fan of the soccer team Paris Saint-Germain in French.",
          },
          {
            question: "What does 'faire du jogging' mean?",
            options: [
              { id: "1", text: "To go swimming" },
              { id: "2", text: "To go jogging" },
              { id: "3", text: "To play tennis" },
            ],
            correctAnswer: "To go jogging",
            explanation: "'Faire du jogging' means 'to go jogging' in French.",
          },
          {
            question: "How do you say 'referee' in French?",
            options: [
              { id: "1", text: "Arbitre" },
              { id: "2", text: "Joueur" },
              { id: "3", text: "Entraîneur" },
            ],
            correctAnswer: "Arbitre",
            explanation:
              "'Arbitre' is the French word for 'referee' in sports.",
          },
          {
            question: "What's the meaning of 'Un match nul'?",
            options: [
              { id: "1", text: "A boring match" },
              { id: "2", text: "A tie game" },
              { id: "3", text: "A championship match" },
            ],
            correctAnswer: "A tie game",
            explanation:
              "'Un match nul' refers to a tie game or draw in French sports terminology.",
          },
          {
            question: "How would you ask 'What's the score?' in French?",
            options: [
              { id: "1", text: "Quel est le score?" },
              { id: "2", text: "Qui gagne?" },
              { id: "3", text: "Quand finit le match?" },
            ],
            correctAnswer: "Quel est le score?",
            explanation:
              "'Quel est le score?' is how you would ask for the current score of a game in French.",
          },
        ],
      },

      // Music and Arts
      {
        type: "flashcard",
        title: "Music and Arts",
        icon: <Music className="w-5 h-5" />,
        color: "bg-purple-100 text-purple-600",
        flashcards: [
          {
            question: "How do you say 'I like to sing' in French?",
            options: [
              { id: "1", text: "J'aime danser" },
              { id: "2", text: "J'aime chanter" },
              { id: "3", text: "J'aime peindre" },
            ],
            correctAnswer: "J'aime chanter",
          },
          {
            question: "What is 'painting' in French?",
            options: [
              { id: "1", text: "La danse" },
              { id: "2", text: "La peinture" },
              { id: "3", text: "La sculpture" },
            ],
            correctAnswer: "La peinture",
          },
          {
            question: "How do you ask 'What's your favorite music?' in French?",
            options: [
              { id: "1", text: "Quelle est ta musique préférée?" },
              { id: "2", text: "Tu joues d'un instrument?" },
              { id: "3", text: "Tu vas souvent au concert?" },
            ],
            correctAnswer: "Quelle est ta musique préférée?",
          },
          {
            question: "What does 'dessiner' mean?",
            options: [
              { id: "1", text: "To paint" },
              { id: "2", text: "To draw" },
              { id: "3", text: "To sculpt" },
            ],
            correctAnswer: "To draw",
          },
          {
            question: "How do you say 'museum' in French?",
            options: [
              { id: "1", text: "Galerie" },
              { id: "2", text: "Théâtre" },
              { id: "3", text: "Musée" },
            ],
            correctAnswer: "Musée",
          },
        ],
      },
      {
        type: "quiz",
        title: "Music and Arts Quiz",
        icon: <Music className="w-5 h-5" />,
        color: "bg-purple-200 text-purple-700",
        questions: [
          {
            question: "How would you say 'I play the guitar' in French?",
            options: [
              { id: "1", text: "Je joue de la guitare" },
              { id: "2", text: "Je chante avec la guitare" },
              { id: "3", text: "J'écoute la guitare" },
            ],
            correctAnswer: "Je joue de la guitare",
            explanation:
              "'Je joue de la guitare' is the correct way to say 'I play the guitar' in French.",
          },
          {
            question: "What does 'vernissage' mean in the context of art?",
            options: [
              { id: "1", text: "A type of paint" },
              { id: "2", text: "An art exhibition opening" },
              { id: "3", text: "A painting technique" },
            ],
            correctAnswer: "An art exhibition opening",
            explanation:
              "In French, 'vernissage' refers to the opening or preview event of an art exhibition.",
          },
          {
            question:
              "How would you ask 'Can you recommend a good art gallery?' in French?",
            options: [
              {
                id: "1",
                text: "Pouvez-vous recommander une bonne galerie d'art?",
              },
              { id: "2", text: "Où est le musée le plus proche?" },
              { id: "3", text: "Aimez-vous l'art moderne?" },
            ],
            correctAnswer: "Pouvez-vous recommander une bonne galerie d'art?",
            explanation:
              "This phrase correctly asks for a recommendation for a good art gallery in French.",
          },
          {
            question: "What is the meaning of 'nature morte' in art?",
            options: [
              { id: "1", text: "Landscape painting" },
              { id: "2", text: "Portrait" },
              { id: "3", text: "Still life" },
            ],
            correctAnswer: "Still life",
            explanation:
              "'Nature morte' is the French term for 'still life' in art, typically depicting inanimate objects.",
          },
          {
            question:
              "How do you say 'I'm learning to play an instrument' in French?",
            options: [
              { id: "1", text: "J'apprends à jouer d'un instrument" },
              { id: "2", text: "Je sais jouer de la musique" },
              { id: "3", text: "J'écoute beaucoup de musique" },
            ],
            correctAnswer: "J'apprends à jouer d'un instrument",
            explanation:
              "This sentence correctly expresses 'I'm learning to play an instrument' in French.",
          },
        ],
      },
    ],
  },
];
