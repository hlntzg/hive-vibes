// pages/Mood.tsx
import React from "react";
import WeekDashboard from "../components/WeekDashboard";
import LineChartOverall from "../components/LineChartOverall";
import mockSurveyData from "../components/mockSurveyData";
import type { SurveyEntry } from "../utils/types";

const Mood = () => {
  const survey: SurveyEntry[] = mockSurveyData;

  // Current year & ISO week
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentWeekNumber = getWeekNumber(now);

  function getWeekNumber(date: Date) {
    const firstJan = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - firstJan.getTime()) / 86400000);
    return Math.ceil((days + firstJan.getDay() + 1) / 7);
  }

  // Current week range
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay() + 1);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  // Filter for current week
  const currentWeekData = survey.filter((entry) => {
    const entryDate = new Date(entry.week);
    return entryDate >= startOfWeek && entryDate <= endOfWeek;
  });

  // Filter for current year
  const yearlyData = survey.filter(
    (entry) => new Date(entry.week).getFullYear() === currentYear
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">
        Week #{currentWeekNumber} ({startOfWeek.toLocaleDateString()} -{" "}
        {endOfWeek.toLocaleDateString()})
      </h1>
 <WeekDashboard data={currentWeekData} />
     

      <LineChartOverall
        data={yearlyData}
        title="Overall Feelings Over the Year"
        year={currentYear}
      />
    </div>
  );
};

export default Mood;
