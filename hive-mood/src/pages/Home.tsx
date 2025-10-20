// import CircularText from '../components/CircularText';

// const Home = () => {
//   return (
//     <div className="page">
//       <h1>Welcome to Hive Mood</h1>
//       image here, specifc size but responsive
//       <CircularText
//         text="HIVE HELSINKI VIBES * THE CODE SCHOOL * "
//         onHover="speedUp"
//         spinDuration={20}
//         className="custom-class"
//         />

//       <p>Future dashboard or insights will appear here.</p>

//     </div>
//   );
// };

// export default Home;

import React from 'react';
import CircularText from '../components/CircularText';
import image from '../assets/image.jpeg';

const Home = () => {
  return (
    <div className="page flex flex-col items-center justify-center p-6">

      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-2xl mt-20 mb-10">
        <img
          src={image}
          alt="Hive Mood"
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />


        <div className="absolute -top-20 right-0 translate-x-1/3">
          <CircularText
            text="HIVE HELSINKI VIBES * THE CODE SCHOOL * "
            onHover="speedUp"
            spinDuration={20}
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center">
        Welcome to Hive Mood
      </h1>
      <p className="mt-6 text-gray-700 text-center">
        some nice text about the project.
      </p>
    </div>
  );
};

export default Home;
