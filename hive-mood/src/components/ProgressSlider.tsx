// ProgressSlider.tsx
import React from "react";

interface ProgressSliderProps {
  title?: string;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  onCommit?: (value: number) => void; // called on mouseup/touchend
  labels?: string[];
}

const ProgressSlider: React.FC<ProgressSliderProps> = ({
  title,
  name,
  min = 1,
  max = 5,
  step = 1,
  value,
  onChange,
  onCommit,
  labels,
}) => {
  const pct = ((value - min) / (max - min)) * 100;

  const handleMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    onCommit?.(Number((e.target as HTMLInputElement).value));
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLInputElement>) => {
    onCommit?.(value);
  };

  return (
    <div className="mb-6">
      {title && <label className="block font-semibold mb-2">{title}</label>}

      <div className="relative w-full">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 rounded-full transition-all"
            style={{ width: `${pct}%`, background: "linear-gradient(90deg,#f97316,#06b6d4)" }}
          />
        </div>

        <input
          aria-label={title}
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleTouchEnd}
          className="w-full absolute top-0 left-0 appearance-none bg-transparent h-6 cursor-pointer"
          style={{ WebkitAppearance: "none" }}
        />
      </div>

      {labels && (
        <div className="flex justify-between text-sm mt-2 text-gray-600">
          {labels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressSlider;
