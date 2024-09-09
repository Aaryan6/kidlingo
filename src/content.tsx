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
  cards: Card[];
};

export type Card = {
  title: string;
  icon: React.ReactNode;
  color: string;
  flashcards: FlashcardData[];
};

type FlashcardData = {
  question: string;
  options: AnswerOption[];
  correctAnswer: string;
};

type AnswerOption = {
  id: string;
  text: string;
};

export const languageLearningLevels = [
  {
    number: 1,
    name: "Word Wizards",
    icon: <Book className="w-6 h-6" />,
    cards: [
      {
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
    ],
  },
  {
    number: 2,
    name: "Phrase Explorers",
    icon: <MessageCircle className="w-6 h-6" />,
    cards: [
      {
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
    ],
  },
  {
    number: 3,
    name: "Conversation Champions",
    icon: <Users className="w-6 h-6" />,
    cards: [
      {
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
    ],
  },
];
