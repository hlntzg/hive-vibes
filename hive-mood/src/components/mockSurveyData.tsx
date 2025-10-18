import type { SurveyEntry } from "../utils/types";

const mockSurveyData: SurveyEntry[] = [
  {
    week: "2025-10-13",
    mood: 5,
    energy: 4,
    motivation: 4,
    feelings: ["Happy", "Motivated", "Calm"],
    reflection: "Felt very productive and connected this week."
  },
  {
    week: "2025-10-14",
    mood: 3,
    energy: 3,
    motivation: 3,
    feelings: ["Tired", "Focused"],
    reflection: "Lots of work, but manageable."
  },
  {
    week: "2025-10-15",
    mood: 2,
    energy: 2,
    motivation: 2,
    feelings: ["Anxious", "Overwhelmed"],
    reflection: "Need some rest and better planning."
  },
  {
    week: "2025-10-16",
    mood: 4,
    energy: 5,
    motivation: 5,
    feelings: ["Inspired", "Connected", "Motivated"],
    reflection: "Great week for learning!"
  },
  {
    week: "2025-10-17",
    mood: 1,
    energy: 1,
    motivation: 1,
    feelings: ["Tired", "Overwhelmed", "Anxious"],
    reflection: "Exhausted and stressed."
  },
  {
    week: "2025-10-18",
    mood: 1,
    energy: 1,
    motivation: 1,
    feelings: ["Tired", "Overwhelmed", "Anxious"],
    reflection: "Same as last week. Need a serious break."
  },
  {
    week: "2025-10-19",
    mood: 3,
    energy: 4,
    motivation: 3,
    feelings: ["Focused", "Calm"],
    reflection: "A bit of a mixed week, but I managed to get things done."
  },
  {
    week: "2025-10-20",
    mood: 5,
    energy: 5,
    motivation: 5,
    feelings: ["Happy", "Inspired", "Motivated", "Focused"],
    reflection: "I’m on fire this week—feeling unstoppable!"
  },
  {
    week: "2025-10-21",
    mood: 2,
    energy: 2,
    motivation: 2,
    feelings: ["Tired", "Indifferent"],
    reflection: "Had to push through, but felt disconnected and drained."
  },
  {
    week: "2025-10-22",
    mood: 4,
    energy: 3,
    motivation: 4,
    feelings: ["Motivated", "Inspired", "Focused"],
    reflection: "Got a lot done and was really into my projects, but need to pace myself."
  }
];

export default mockSurveyData;
