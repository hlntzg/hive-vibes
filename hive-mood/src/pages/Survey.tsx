import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

const variants = {
  enter: (direction: number) => ({ y: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({ y: direction > 0 ? -60 : 60, opacity: 0 }),
};

const Survey: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    mood: 0,
    energy: 3,
    motivation: 3,
    feelings: [] as string[],
    comment: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const toggleFeeling = (feeling: string) =>
    setForm((prev) => ({
      ...prev,
      feelings: prev.feelings.includes(feeling)
        ? prev.feelings.filter((f) => f !== feeling)
        : [...prev.feelings, feeling],
    }));

  const nextStep = () => {
    console.log("Next Step triggered. Current step:", currentStep);
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const prevStep = () => {
    console.log("Prev Step triggered. Current step:", currentStep);
    setDirection(-1);
    setCurrentStep((s) => Math.max(0, s - 1));
  };

  const handleSubmit = () => {
    console.log("Survey submitted:", form)
    alert("Thank you! Survey submitted.")
    navigate("/"); // redirect to home
  };

  const steps = [
    {
      id: "intro",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[250px] text-center p-6">
          <h1 className="text-3xl font-bold mb-2">Weekly Mood Survey</h1>
          <p className="text-gray-600 mb-6 max-w-sm">
            Take a moment to share how your week went. It only takes a few seconds!
          </p>
          <button
            className="px-8 py-3 bg-black text-white text-lg rounded-xl shadow hover:bg-gray-500 transition"
            onClick={nextStep}
          >
            Start
          </button>
        </div>
      ),
    },
    {
      id: "energy",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[250px] p-6">
          <h2 className="text-2xl font-bold mb-2 text-center">1. Energy level</h2>
          <p className="text-gray-500 mb-12 text-center">
            How energetic did you feel this week?
          </p>
          <ProgressSlider
            title=""
            name="energy"
            min={1}
            max={5}
            value={form.energy}
            onChange={(value) => setForm((f) => ({ ...f, energy: value }))}
            onCommit={() => setTimeout(nextStep, 120)}
            labels={["Low", "", "", "", "High"]}
          />
        </div>
      ),
    },
    {
      id: "motivation",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[250px] p-6">
          <h2 className="text-2xl font-bold mb-2 text-center">2. Motivation level</h2>
          <p className="text-gray-500 mb-12 text-center">
            How motivated were you to achieve your goals this week?
          </p>
          <ProgressSlider
            title=""
            name="motivation"
            min={1}
            max={5}
            value={form.motivation}
            onChange={(value) => setForm((f) => ({ ...f, motivation: value }))}
            onCommit={() => setTimeout(nextStep, 120)}
            labels={["Low", "", "", "", "High"]}
          />
        </div>
      ),
    },
        {
      id: "mood",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[250px] p-6">
          <h2 className="text-2xl font-bold mb-2 text-center">4. How was your overall mood?</h2>
          <p className="text-gray-500 mb-6 text-center">
            Select the emoji that best represents your week.
          </p>
          <NumericScaleQuestion
            title=""
            name="mood"
            maxScale={5}
            labels={["😞", "😕", "😐", "🙂", "😄"]}
            value={form.mood}
            onChange={(value) => {
              setForm((f) => ({ ...f, mood: value }));
              setTimeout(nextStep, 180);
            }}
          />
        </div>
      ),
    },
    {
      id: "feelings",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[250px] p-6">
          <h2 className="text-2xl font-bold mb-2 text-center">5. What feelings describe your week?</h2>
          <p className="text-gray-500 mb-4 text-center">Select all that apply</p>
          <div className="flex flex-wrap justify-center gap-3">
            {feelingsOptions.map((feeling) => (
              <label
                key={feeling}
                className={`px-4 py-2 border rounded-full cursor-pointer ${
                  form.feelings.includes(feeling)
                    ? "bg-black text-white"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={form.feelings.includes(feeling)}
                  onChange={() => toggleFeeling(feeling)}
                />
                {feeling}
              </label>
            ))}
          </div>
        </div>
      ),
      canProceed: () => form.feelings.length > 0, // must select at least one
    },
    {
      id: "reflection",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[250px] p-6">
          <h2 className="text-2xl font-bold mb-2 text-center">Reflection (optional)</h2>
          <p className="text-gray-500 mb-4 text-center">
            Any thoughts or highlights from your week?
          </p>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows={5}
            placeholder="Type here..."
            value={form.comment}
            onChange={(e) => setForm((prev) => ({ ...prev, comment: e.target.value }))}
          />
        </div>
      ),
    },
    {
      id: "submit",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[250px] p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">All done!</h2>
          <p className="text-gray-500 mb-6 text-center">
            Click below to submit your responses.
          </p>
          <button
            className="px-8 py-3 bg-black text-white text-lg rounded-xl shadow hover:bg-gray-500 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ),
    },
  ];

  const isNextDisabled = steps[currentStep].canProceed
    ? !steps[currentStep].canProceed()
    : false;

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative min-h-[250px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={steps[currentStep].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full"
          >
            {steps[currentStep].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow navigation */}
      {currentStep !== 0 && currentStep !== steps.length - 1 && (
        <div className="mt-6 flex justify-between px-6">
          <button
            onClick={prevStep}
            className="p-3 rounded-full hover:bg-gray-100 relative z-10"
            aria-label="Previous"
            style={{ pointerEvents: 'auto' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 15l6-6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={nextStep}
            className={`p-3 rounded-full hover:bg-gray-100 ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="Next"
            disabled={isNextDisabled}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Survey;
