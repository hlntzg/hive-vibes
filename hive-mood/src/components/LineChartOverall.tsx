// components/LineChartOverall.tsx
import React from "react";
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
import type { SurveyEntry } from "../utils/types";

type LineChartOverallProps = {
  data: SurveyEntry[];
  title?: string;
  year?: number;
};

const LineChartOverall = ({ data, title, year }: LineChartOverallProps) => {
  // Debugging: log the data to check if it's being passed correctly
  console.log("Data passed to LineChart:", data);

  if (!data || data.length === 0) {
    return <div>No data available for this year.</div>;
  }

  return (
    <div className="w-full mt-12" style={{ height: "350px" }}>
      {title && (
        <h2 className="text-xl font-semibold mb-4">
          {title} {year ? `(${year})` : ""}
        </h2>
      )}

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis domain={[0, 5]} reversed />
          <Tooltip />
          <Legend />
          {/* For debugging: render only one line initially */}
            <Line type="monotone" dataKey="mood" stroke="#8884d8" name="Mood" />
            <Line type="monotone" dataKey="energy" stroke="#82ca9d" name="Energy" />
            <Line type="monotone" dataKey="motivation" stroke="#ffc658" name="Motivation" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartOverall;
