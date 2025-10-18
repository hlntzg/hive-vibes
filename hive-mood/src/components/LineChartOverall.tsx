import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { parseISO, getISOWeek, getISOWeekYear } from "date-fns";
import type { SurveyEntry } from "../utils/types";

type LineChartOverallProps = {
  data: SurveyEntry[];
  title?: string;
  year?: number;
};

const LineChartOverall = ({ data, title, year }: LineChartOverallProps) => {
  if (!data || data.length === 0) {
    return <div>No data available for this year.</div>;
  }

  const weeklyData = useMemo(() => {
    const weekMap: Record<
      string,
      { mood: number[]; energy: number[]; motivation: number[] }
    > = {};

    data.forEach((entry) => {
      const date = parseISO(entry.week);
      const weekNum = getISOWeek(date);
      const isoYear = getISOWeekYear(date);
      const key = `${isoYear}-W${weekNum.toString().padStart(2, "0")}`;

      if (!weekMap[key]) {
        weekMap[key] = { mood: [], energy: [], motivation: [] };
      }

      weekMap[key].mood.push(entry.mood);
      weekMap[key].energy.push(entry.energy);
      weekMap[key].motivation.push(entry.motivation);
    });

    // compute averages
    return Object.entries(weekMap)
      .map(([week, vals]) => ({
        week,
        mood:
          Math.round(
            (vals.mood.reduce((a, b) => a + b, 0) / vals.mood.length) * 100
          ) / 100,
        energy:
          Math.round(
            (vals.energy.reduce((a, b) => a + b, 0) / vals.energy.length) * 100
          ) / 100,
        motivation:
          Math.round(
            (vals.motivation.reduce((a, b) => a + b, 0) / vals.motivation.length) *
              100
          ) / 100,
      }))
      .sort((a, b) => {
        const [yearA, weekA] = a.week.split("-W").map(Number);
        const [yearB, weekB] = b.week.split("-W").map(Number);
        return yearA === yearB ? weekA - weekB : yearA - yearB;
      });
  }, [data]);

  console.log("Weekly averaged data:", weeklyData);

  return (
    <div className="w-full mt-12" style={{ height: "350px" }}>
      {title && (
        <h2 className="text-xl font-semibold mb-4">
          {title} {year ? `(${year})` : ""}
        </h2>
      )}

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          {/* 1 = bad, 5 = good → normal Y-axis */}
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#8884d8"
            name="Mood"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#82ca9d"
            name="Energy"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="motivation"
            stroke="#ffc658"
            name="Motivation"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartOverall;
