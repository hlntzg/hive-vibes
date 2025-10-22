import type { SurveyEntry } from "../utils/types";

const mockSurveyData: SurveyEntry[] = [
  // === January 2025 ===
  {
    week: "2025-01-06",
    mood: 4,
    energy: 4,
    motivation: 5,
    feelings: ["Motivated", "Focused", "Inspired"],  // Replaced "Energetic" and "Hopeful"
    reflection: "Started the year strong with new goals.",
  },
  {
    week: "2025-01-13",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Focused", "Indifferent"],  // Replaced "Neutral"
    reflection: "Work was steady, just an average week.",
  },
  {
    week: "2025-01-20",
    mood: 2,
    energy: 2,
    motivation: 2,
    feelings: ["Tired", "Focused"],  // Replaced "Unfocused"
    reflection: "Winter slump hit hard this week.",
  },
  {
    week: "2025-01-27",
    mood: 5,
    energy: 5,
    motivation: 4,
    feelings: ["Inspired", "Motivated"],  // Replaced "Confident"
    reflection: "Regained momentum after resting properly.",
  },

  // === February 2025 ===
  {
    week: "2025-02-03",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Calm", "Focused"],  // Replaced "Balanced"
    reflection: "Smooth but uneventful week.",
  },
  {
    week: "2025-02-10",
    mood: 4,
    energy: 4,
    motivation: 4,
    feelings: ["Focused", "Motivated"],  // Replaced "Optimistic"
    reflection: "High productivity and good energy levels.",
  },
  {
    week: "2025-02-17",
    mood: 2,
    energy: 3,
    motivation: 2,
    feelings: ["Tired", "Anxious"],  // Replaced "Distracted"
    reflection: "Struggled to stay focused toward the weekend.",
  },

  // === March 2025 ===
  {
    week: "2025-03-03",
    mood: 4,
    energy: 4,
    motivation: 4,
    feelings: ["Motivated", "Calm"],  // This looks good as is
    reflection: "Feeling stable and consistent.",
  },
  {
    week: "2025-03-10",
    mood: 1,
    energy: 1,
    motivation: 1,
    feelings: ["Tired", "Anxious"],  // Replaced "Exhausted" and "Burnt Out"
    reflection: "Completely drained — need serious rest.",
  },
  {
    week: "2025-03-17",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Calm", "Motivated"],  // Replaced "Relaxed"
    reflection: "Recovering from last week’s burnout.",
  },

  // === October 2025 ===
  {
    week: "2025-10-13",
    mood: 5,
    energy: 4,
    motivation: 4,
    feelings: ["Happy", "Motivated", "Calm"],  // This looks good as is
    reflection: "Felt very productive and connected.",
  },
  {
    week: "2025-10-21",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Tired", "Anxious", "Focused"],  // This looks good as is
    reflection: "Workload manageable but energy dipped midweek.",
  },
  {
    week: "2025-10-21",
    mood: 2,
    energy: 2,
    motivation: 2,
    feelings: ["Tired", "Anxious", "Overwhelmed"],  // This looks good as is
    reflection: "Need better rest and planning.",
  },
  {
    week: "2025-10-21",
    mood: 4,
    energy: 5,
    motivation: 5,
    feelings: ["Tired", "Inspired", "Motivated"],  // This looks good as is
    reflection: "Excellent flow and creativity.",
  },
  {
    week: "2025-10-21",
    mood: 5,
    energy: 5,
    motivation: 5,
    feelings: ["Happy", "Focused", "Inspired"],  // This looks good as is
    reflection: "Outstanding week with amazing productivity.",
  },
  {
    week: "2025-10-22",
    mood: 4,
    energy: 3,
    motivation: 4,
    feelings: ["Motivated", "Inspired"],  // This looks good as is
    reflection: "Strong finish with a few tired moments.",
  },
];

export default mockSurveyData;
