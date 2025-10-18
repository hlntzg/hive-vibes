

import type { SurveyEntry } from '../utils/types';

type WeekDashboardProps = {
  data: SurveyEntry[];
};

const WeekDashboard = ({ data }: WeekDashboardProps) => {
  if (!data || data.length === 0) return <div>No data available for this week.</div>;

  // Calculate average mood, energy, and motivation
  const avgMood = data.reduce((sum, e) => sum + e.mood, 0) / data.length || 0;
  const avgEnergy = data.reduce((sum, e) => sum + e.energy, 0) / data.length || 0;
  const avgMotivation = data.reduce((sum, e) => sum + e.motivation, 0) / data.length || 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-3">Weekly Summary</h3>
      <p>Mood (avg): {avgMood.toFixed(1)}</p>
      <p>Energy (avg): {avgEnergy.toFixed(1)}</p>
      <p>Motivation (avg): {avgMotivation.toFixed(1)}</p>


    </div>
  );
};

export default WeekDashboard;
