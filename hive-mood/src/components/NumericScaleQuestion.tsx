import React from "react";

interface NumericScaleQuestionProps {
  title: string;
  name: string;
  maxScale?: number;
  labels?: string[];
  value: number | string;
  onChange: (value: number) => void;
}

const NumericScaleQuestion: React.FC<NumericScaleQuestionProps> = ({
  title,
  name,
  maxScale = 5,
  labels,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{title}</label>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: maxScale }, (_, i) => {
          const num = i + 1;
          const label = labels?.[i] ?? num;
          return (
            <label key={num} className="flex items-center gap-1">
              <input
                type="radio"
                name={name}
                value={num}
                checked={value === num}
                onChange={() => onChange(num)}
              />
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default NumericScaleQuestion;
