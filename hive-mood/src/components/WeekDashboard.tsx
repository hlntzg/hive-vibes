// import React, { useState } from "react";
// import TextPressure from "./TextPressure";
// import mockSurveyData from "./mockSurveyData";
// import type { SurveyEntry, Feeling } from "../utils/types";

// const survey = mockSurveyData as SurveyEntry[];


//   return (
//     <div className="p-6 gap-8 bg-gray-50 min-h-screen">
//       {/* Top Mood */}
//      print the top mood of the week 1 - Great, 5 - Bad
//     Simple Treemap with the feelings
//     Percent Area Chart to relate mood, energy and motivation 1 - Great/Very high energy/Extremely motivated, 5 - Bad/Very low/Not at all

//     </div>
//   );
// };

// export default WeekDashboard;
// components/WeekDashboard.tsx
import React from "react";
import type { SurveyEntry } from "../utils/types";


type WeekDashboardProps = {
  data: SurveyEntry[];
};

const WeekDashboard = ({ data }: WeekDashboardProps) => {
  if (!data || data.length === 0)
    return <div>No data available for this week.</div>;

  // Compute some summaries:
  const avgMood =
    data.reduce((sum, e) => sum + e.mood, 0) / data.length || 0;
  const avgEnergy =
    data.reduce((sum, e) => sum + e.energy, 0) / data.length || 0;
  const avgMotivation =
    data.reduce((sum, e) => sum + e.motivation, 0) / data.length || 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-3">Weekly Summary</h3>

      <p>Mood (avg): {avgMood.toFixed(1)}</p>
      <p>Energy (avg): {avgEnergy.toFixed(1)}</p>
      <p>Motivation (avg): {avgMotivation.toFixed(1)}</p>

      {/* 🟦 Future charts go here:
          - Treemap for feelings
          - mood/energy/motivation
      */}



    </div>
  );
};

export default WeekDashboard;
