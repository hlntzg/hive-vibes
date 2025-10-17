import { useState } from 'react';

const feelingsOptions = [
  'Happy', 'Motivated', 'Tired', 'Anxious', 'Indifferent',
  'Connected', 'Overwhelmed', 'Inspired', 'Calm', 'Focused'
];

const Survey = () => {
  const [form, setForm] = useState({
    mood: '',
    energy: '',
    motivation: '',
    feelings: [] as string[],
    otherFeeling: '',
    comment: ''
  });

  const toggleFeeling = (feeling: string) => {
    setForm(prev => ({
      ...prev,
      feelings: prev.feelings.includes(feeling)
        ? prev.feelings.filter(f => f !== feeling)
        : [...prev.feelings, feeling]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Here you would send data to your backend or save it
  };

  return (
    <div className="page">
      <h2>Weekly Mood Survey</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>1. How was your overall mood?</label><br />
          {['😄 Great', '🙂 Good', '😐 Okay', '😕 Not great', '😞 Bad'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="mood"
                value={option}
                onChange={(e) => setForm({ ...form, mood: e.target.value })}
              /> {option}
            </label>
          ))}
        </div>

        <div>
          <label>2. Energy level?</label><br />
          {['🔋 Very low', '💤 Low', '😌 Moderate', '⚡ High', '🔥 Very high'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="energy"
                value={option}
                onChange={(e) => setForm({ ...form, energy: e.target.value })}
              /> {option}
            </label>
          ))}
        </div>

        <div>
          <label>3. Motivation level?</label><br />
          {['🧊 Not at all', '🌤️ A bit', '🙂 Somewhat', '💪 Quite', '🚀 Extremely'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="motivation"
                value={option}
                onChange={(e) => setForm({ ...form, motivation: e.target.value })}
              /> {option}
            </label>
          ))}
        </div>

        <div>
          <label>4. What feelings describe your week?</label><br />
          {feelingsOptions.map(feeling => (
            <label key={feeling}>
              <input
                type="checkbox"
                checked={form.feelings.includes(feeling)}
                onChange={() => toggleFeeling(feeling)}
              /> {feeling}
            </label>
          ))}
          <div>
            Other: 
            <input
              type="text"
              value={form.otherFeeling}
              onChange={(e) => setForm({ ...form, otherFeeling: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label>5. Reflection (optional):</label><br />
          <textarea
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;
