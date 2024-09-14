export type KIDLINGO_LANGUAGES = {
  id: number;
  name: string;
};

export type KIDLINGO_LEVELS = {
  id: number;
  name: string;
  level: number;
  points: number;
};

export type KIDLINGO_TOPICS = {
  id: number;
  name: string;
  language_id: number;
  level_id: number;
};

export type KIDLINGO_DB = {
  id: number;
  uuid: string;
  question: string;
  options: { text: string; correct: "true" | "false" }[];
  explanation: string;
  level_id: number;
  topic_id: number;
  language_id: number;
  difficulty_level: string;
  created_at: Date;
  modified_at: Date;
};

export interface FlashcardData {
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}
