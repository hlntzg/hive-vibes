import React, { useState } from "react";
import TextPressure from "./TextPressure";
import {
  PieChart,
  Pie,
  Sector,
  Tooltip,
  ResponsiveContainer,
  Treemap,
  Cell,
} from "recharts";
import mockSurveyData from "./mockSurveyData";
import type { SurveyEntry, Feeling } from "../utils/types";

interface PieDatum {
  name: string;
  value: number;
}

interface TreemapNodeProps {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  size: number;
}

const COLORS = ["#4ade80", "#86efac", "#fde68a", "#fca5a5", "#f87171"];

const survey = mockSurveyData as SurveyEntry[];

// ---------- Data Transformation ----------

// Mood counts
const moodCounts = survey.reduce<Record<number, number>>((acc, d) => {
  acc[d.mood] = (acc[d.mood] || 0) + 1;
  return acc;
}, {});

const sortedMoods = Object.entries(moodCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([mood, count]) => ({ mood: Number(mood), count }));

const topMood = sortedMoods[0]?.mood ?? 0;
const secondMood = sortedMoods[1]?.mood ?? 0;
const thirdMood = sortedMoods[2]?.mood ?? 0;

// Energy counts
const energyData: PieDatum[] = Object.entries(
  survey.reduce<Record<number, number>>((acc, d) => {
    acc[d.energy] = (acc[d.energy] || 0) + 1;
    return acc;
  }, {})
).map(([name, value]) => ({ name: `Level ${name}`, value }));

// Motivation counts
const motivationData: PieDatum[] = Object.entries(
  survey.reduce<Record<number, number>>((acc, d) => {
    acc[d.motivation] = (acc[d.motivation] || 0) + 1;
    return acc;
  }, {})
).map(([name, value]) => ({ name: `Level ${name}`, value }));

// Feelings counts
const feelingsData = Object.entries(
  survey
    .flatMap((d) => d.feelings)
    .reduce<Record<Feeling, number>>((acc, f) => {
      acc[f] = (acc[f] || 0) + 1;
      return acc;
    }, {} as Record<Feeling, number>)
).map(([name, size]) => ({ name, size }));

// ---------- Custom Treemap Node ----------
const CustomContentTreemap: React.FC<TreemapNodeProps> = ({
  x,
  y,
  width,
  height,
  name,
  size,
}) => {
  const opacity = Math.min(0.3 + size / 5, 1);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`rgba(34,197,94,${opacity})`}
        stroke="#fff"
      />
      {width > 60 && height > 20 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#333"
          fontSize={12}
        >
          {name}
        </text>
      )}
    </g>
  );
};

// ---------- Custom Pie Active Shape ----------
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" className="font-semibold">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{value}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 20}
        textAnchor={textAnchor}
        fill="#999"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    </g>
  );
};

// ---------- HiveMoodDashboard ----------
const HiveMoodDashboard: React.FC = () => {
  const [activeEnergyIndex, setActiveEnergyIndex] = useState(0);
  const [activeMotivationIndex, setActiveMotivationIndex] = useState(0);

  return (
    <div className="p-6 gap-8 bg-gray-50 min-h-screen">
      {/* Top Mood */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
        <TextPressure
          text={`Hivers are feeling ${topMood}`}
          minFontSize={40}
          maxFontSize={100}
          className="font-bold text-yellow-500"
        />
        </div>
        <div>
        <p className="text-gray-600 text-lg mt-2">
          {secondMood && `Level ${secondMood} • Level ${thirdMood}`}
        </p>

      </div>

      {/* Energy Pie */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center">Energy Levels</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              activeIndex={activeEnergyIndex}
              activeShape={renderActiveShape}
              data={energyData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#60a5fa"
              dataKey="value"
              onMouseEnter={(_, index) => setActiveEnergyIndex(index)}
            >
              {energyData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      {/* </div> */}

      {/* Motivation Pie */}
      {/* <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center"> */}
        <h2 className="text-xl font-semibold mb-4 text-center">
          Motivation Levels
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              activeIndex={activeMotivationIndex}
              activeShape={renderActiveShape}
              data={motivationData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#f97316"
              dataKey="value"
              onMouseEnter={(_, index) => setActiveMotivationIndex(index)}
            >
              {motivationData.map((_, i) => (
                <Cell key={i} fill={COLORS[(i + 2) % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Feelings Treemap */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
        <h2 className="text-xl mb-4 text-center">Feelings Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <Treemap
            data={feelingsData}
            dataKey="size"
            stroke="#fff"
            content={<CustomContentTreemap />}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HiveMoodDashboard;
