// utils/types.tsx

export interface SurveyEntry {
  mood: number;        // 1–5 (1 = Bad, 5 = Great)
  energy: number;      // 1–5 (1 = Very low, 5 = Very high)
  motivation: number;  // 1–5 (1 = Not at all, 5 = Extremely)
  feelings: Feeling[]; // array of selected feelings
  reflection?: string;
  week: string; // e.g., "2025-10-13"
}

export type Feeling =
  | "Happy"
  | "Motivated"
  | "Tired"
  | "Anxious"
  | "Indifferent"
  | "Connected"
  | "Overwhelmed"
  | "Inspired"
  | "Calm"
  | "Focused"
  | "Other";
