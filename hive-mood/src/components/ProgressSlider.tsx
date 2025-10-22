import React from "react";

interface ProgressSliderProps {
  title: string;
  name: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  labels?: string[]; // optional labels (like emojis or text)
}

const ProgressSlider: React.FC<ProgressSliderProps> = ({
  title,
  name,
  min = 1,
  max = 5,
  step = 1,
  value,
  onChange,
  labels,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-6">
      <label className="block font-semibold mb-2">{title}</label>
      <div className="relative w-full">
        {/* Bar Background */}
        <div className="h-2 bg-gray-200 rounded-full">
          {/* Filled portion */}
          <div
            className="h-2 bg-blue-500 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Slider input */}
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full absolute top-[-6px] appearance-none bg-transparent cursor-pointer"
          style={{
            height: "20px",
          }}
        />
      </div>

      {/* Optional labels below slider */}
      {labels && (
        <div className="flex justify-between text-sm mt-1 text-gray-600">
          {labels.map((label, i) => (
            <span key={i}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressSlider;
