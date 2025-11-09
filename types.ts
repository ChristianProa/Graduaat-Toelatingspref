
export enum Section {
  Intro = 'Intro',
  Woordenschat = 'Woordenschat',
  BegrijpendLezen = 'Begrijpend Lezen',
  Rekenen = 'Rekenen',
  NumeriekRedeneren = 'Numeriek Redeneren',
  Resultaat = 'Resultaat',
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface BaseQuestion {
  id: string;
  text: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: QuestionOption[];
}

export interface TextFillQuestion extends BaseQuestion {
  type: 'text-fill';
  placeholders: number; // e.g., 2 for two input boxes
}

export interface ReadingText {
  id: string;
  title: string;
  paragraphs: string[];
  questions: MultipleChoiceQuestion[];
}

export type Question = MultipleChoiceQuestion | TextFillQuestion;

export type Answers = Record<string, string | string[]>;
