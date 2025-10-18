import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

type FeelingsTreemapProps = {
  data: { name: string; value: number }[];
  title?: string;
  height?: number; // optional prop for flexible height
};

const FeelingsTreemap: React.FC<FeelingsTreemapProps> = ({ data, title, height = 300 }) => {
  if (!data || data.length === 0) {
    return <div>No feelings data to display.</div>;
  }

  return (
    <div className="w-full mt-12" style={{ height }}>
      {title && <h2 className="text-lg mb-4">{title}</h2>}

      {/* Give ResponsiveContainer a fixed height */}
      <ResponsiveContainer width="100%" height={height}>
        <Treemap
          data={data}
          dataKey="value"
          nameKey="name"
          ratio={4 / 3}
          stroke="#fff"
          fill="#c820b7ff"
        >
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                const item = payload[0].payload;
                return (
                  <div
                    style={{
                      background: "#fff",
                      border: "1px solid #ccc",
                      padding: "6px",
                    }}
                  >
                    <strong>{item.name}</strong>
                    <br />
                    Count: {item.value}
                  </div>
                );
              }
              return null;
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export default FeelingsTreemap;
