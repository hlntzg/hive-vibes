import React from "react";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } from "recharts";

type ValueBubbleChartProps = {
  title: string;
  data: { value: number; count: number }[];
  color?: string;
  height?: number; // optional height
};

const ValueBubbleChart: React.FC<ValueBubbleChartProps> = ({
  title,
  data,
  color = "#8884d8",
  height = 250,
}) => {
  // Format data for Recharts
  const formattedData = data.map((d) => ({ x: d.value, y: 0, z: d.count }));

  return (
    <div className="w-full mt-6" style={{ height, minWidth: 0, minHeight: height }}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <ResponsiveContainer width="100%" height={height}>
        <ScatterChart>
          <XAxis
            type="number"
            dataKey="x"
            domain={[1, 5]}
            tickCount={5}
            label={{ value: "Value (1-5)", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis type="number" dataKey="y" hide />
          <ZAxis type="number" dataKey="z" range={[100, 1000]} name="Count" />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            formatter={(value, name, props) => [`Count: ${props.payload.z}`, title]}
          />
          <Scatter data={formattedData} fill={color} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ValueBubbleChart;
