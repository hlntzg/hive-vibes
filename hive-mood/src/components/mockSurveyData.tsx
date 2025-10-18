import type { SurveyEntry } from "../utils/types";

const mockSurveyData: SurveyEntry[] = [
  // === January 2025 ===
  {
    week: "2025-01-06",
    mood: 4,
    energy: 4,
    motivation: 5,
    feelings: ["Motivated", "Energetic", "Hopeful"],
    reflection: "Started the year strong with new goals.",
  },
  {
    week: "2025-01-13",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Focused", "Neutral"],
    reflection: "Work was steady, just an average week.",
  },
  {
    week: "2025-01-20",
    mood: 2,
    energy: 2,
    motivation: 2,
    feelings: ["Tired", "Unfocused"],
    reflection: "Winter slump hit hard this week.",
  },
  {
    week: "2025-01-27",
    mood: 5,
    energy: 5,
    motivation: 4,
    feelings: ["Inspired", "Confident"],
    reflection: "Regained momentum after resting properly.",
  },

  // === February 2025 ===
  {
    week: "2025-02-03",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Balanced", "Calm"],
    reflection: "Smooth but uneventful week.",
  },
  {
    week: "2025-02-10",
    mood: 4,
    energy: 4,
    motivation: 4,
    feelings: ["Focused", "Optimistic"],
    reflection: "High productivity and good energy levels.",
  },
  {
    week: "2025-02-17",
    mood: 2,
    energy: 3,
    motivation: 2,
    feelings: ["Tired", "Distracted"],
    reflection: "Struggled to stay focused toward the weekend.",
  },

  // === March 2025 ===
  {
    week: "2025-03-03",
    mood: 4,
    energy: 4,
    motivation: 4,
    feelings: ["Motivated", "Calm"],
    reflection: "Feeling stable and consistent.",
  },
  {
    week: "2025-03-10",
    mood: 1,
    energy: 1,
    motivation: 1,
    feelings: ["Exhausted", "Burnt Out"],
    reflection: "Completely drained — need serious rest.",
  },
  {
    week: "2025-03-17",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Balanced", "Relaxed"],
    reflection: "Recovering from last week’s burnout.",
  },

  // === October 2025 ===
  {
    week: "2025-10-13",
    mood: 5,
    energy: 4,
    motivation: 4,
    feelings: ["Happy", "Motivated", "Calm"],
    reflection: "Felt very productive and connected.",
  },
  {
    week: "2025-10-14",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Tired", "Focused"],
    reflection: "Workload manageable but energy dipped midweek.",
  },
  {
    week: "2025-10-15",
    mood: 2,
    energy: 2,
    motivation: 2,
    feelings: ["Anxious", "Overwhelmed"],
    reflection: "Need better rest and planning.",
  },
  {
    week: "2025-10-16",
    mood: 4,
    energy: 5,
    motivation: 5,
    feelings: ["Inspired", "Motivated"],
    reflection: "Excellent flow and creativity.",
  },
  {
    week: "2025-10-20",
    mood: 5,
    energy: 5,
    motivation: 5,
    feelings: ["Joyful", "Focused", "Inspired"],
    reflection: "Outstanding week with amazing productivity.",
  },
  {
    week: "2025-10-22",
    mood: 4,
    energy: 3,
    motivation: 4,
    feelings: ["Motivated", "Inspired"],
    reflection: "Strong finish with a few tired moments.",
  },
];

export default mockSurveyData;
