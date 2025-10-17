import CircularText from '../components/CircularText';

const Home = () => {
  return (
    <div className="page">
      <CircularText
        text="HIVE HELSINKI VIBES * THE CODE SCHOOL * "
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
        />
      <h1>Welcome to Hive Mood</h1>
      <p>Future dashboard or insights will appear here.</p>

    </div>
  );
};

export default Home;
