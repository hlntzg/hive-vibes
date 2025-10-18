import type { SurveyEntry } from '../utils/types';

type WeekDashboardProps = {
  data: SurveyEntry[];
};

const WeekDashboard = ({ data }: WeekDashboardProps) => {
  if (!data || data.length === 0) return <div>No data available for this week.</div>;

  // Log all feelings for the current week
  console.log("Weekly feelings:", data.flatMap((entry) => entry.feelings));

  const feelingCounts = data
  .flatMap((entry) => entry.feelings)
  .reduce<Record<string, number>>((counts, feeling) => {
    counts[feeling] = (counts[feeling] || 0) + 1;
    return counts;
  }, {});

  console.log("Feeling counts:", feelingCounts);

  // Calculate average mood, energy, and motivation
  const avgMood = data.reduce((sum, e) => sum + e.mood, 0) / data.length || 0;
  const avgEnergy = data.reduce((sum, e) => sum + e.energy, 0) / data.length || 0;
  const avgMotivation = data.reduce((sum, e) => sum + e.motivation, 0) / data.length || 0;

  console.log("Mood (avg):", avgMood.toFixed(1))
  console.log("Energy (avg):", avgEnergy.toFixed(1))
  console.log("Motivation (avg):", avgMotivation.toFixed(1))

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-3">Weekly Summary</h2>


    </div>
  );
};

export default WeekDashboard;
