import { useState } from "react";
import NumericScaleQuestion from "../components/NumericScaleQuestion";
import ProgressSlider from "../components/ProgressSlider";

const feelingsOptions = [
  "Happy",
  "Motivated",
  "Tired",
  "Anxious",
  "Indifferent",
  "Connected",
  "Overwhelmed",
  "Inspired",
  "Calm",
  "Focused",
];

const Survey = () => {
  const [form, setForm] = useState({
    mood: 0,
    energy: 3,
    motivation: 3,
    feelings: [] as string[],
    otherFeeling: "",
    comment: "",
  });

  const toggleFeeling = (feeling: string) => {
    setForm((prev) => ({
      ...prev,
      feelings: prev.feelings.includes(feeling)
        ? prev.feelings.filter((f) => f !== feeling)
        : [...prev.feelings, feeling],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="page max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Weekly Mood Survey</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <NumericScaleQuestion
          title="1. How was your overall mood?"
          name="mood"
          maxScale={5}
          labels={["😞", "😕", "😐", "🙂", "😄"]}
          value={form.mood}
          onChange={(value) => setForm({ ...form, mood: value })}
        />

        <ProgressSlider
          title="2. Energy level"
          name="energy"
          min={1}
          max={5}
          value={form.energy}
          onChange={(value) => setForm({ ...form, energy: value })}
          labels={["Low", "", "", "", "High"]}
        />

        <ProgressSlider
          title="3. Motivation level"
          name="motivation"
          min={1}
          max={5}
          value={form.motivation}
          onChange={(value) => setForm({ ...form, motivation: value })}
          labels={["Low", "", "", "", "High"]}
        />

        <div>
          <label className="font-semibold block mb-1">
            4. What feelings describe your week?
          </label>
          <div className="flex flex-wrap gap-2">
            {feelingsOptions.map((feeling) => (
              <label key={feeling}>
                <input
                  type="checkbox"
                  checked={form.feelings.includes(feeling)}
                  onChange={() => toggleFeeling(feeling)}
                />{" "}
                {feeling}
              </label>
            ))}
          </div>
          <div className="mt-2">
            Other:{" "}
            <input
              type="text"
              value={form.otherFeeling}
              onChange={(e) =>
                setForm({ ...form, otherFeeling: e.target.value })
              }
              className="border rounded p-1"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-1">
            5. Reflection (optional):
          </label>
          <textarea
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;
