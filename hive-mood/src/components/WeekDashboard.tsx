import type { SurveyEntry } from '../utils/types';
import FeelingsTreemap from './FeelingsTreemap';
import BubbleChart from './BubbleChart';

type WeekDashboardProps = {
  data: SurveyEntry[];
};

const WeekDashboard = ({ data }: WeekDashboardProps) => {
  if (!data || data.length === 0) return <div>No data available for this week.</div>;

  // Feelings Treemap
  const feelingCounts = data
    .flatMap((entry) => entry.feelings)
    .reduce<Record<string, number>>((counts, feeling) => {
      counts[feeling] = (counts[feeling] || 0) + 1;
      return counts;
    }, {});

  const treemapData = Object.entries(feelingCounts)
    .map(([feeling, count]) => ({ name: feeling, value: count }))
    .filter((item) => item.value > 0);

  // BubbleChart data
  const getValueCounts = (field: keyof SurveyEntry) => {
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    data.forEach((entry) => {
      const val = entry[field];
      if (val >= 1 && val <= 5) counts[val] = (counts[val] || 0) + 1;
    });
    return Object.entries(counts).map(([value, count]) => ({ value: Number(value), count }));
  };

  const moodData = getValueCounts('mood');
  const energyData = getValueCounts('energy');
  const motivationData = getValueCounts('motivation');

  return (
    <div className="p-6 rounded-2xl border-4">
      <h2 className="text-lg font-semibold mb-3">Weekly Summary</h2>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Feelings This Week</h4>
        <FeelingsTreemap data={treemapData} title="Feelings This Week" height={200} />
      </div>

      <BubbleChart title="Mood" data={moodData} color="#8884d8" height={250} />
      <BubbleChart title="Energy" data={energyData} color="#82ca9d" height={250} />
      <BubbleChart title="Motivation" data={motivationData} color="#ffc658" height={250} />
    </div>
  );
};

export default WeekDashboard;
