import React, { useState } from 'react';

const RunningExercise = () => {
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLaps([...laps, currentTime]);
  };

  return (
    <div>
      <h1>Running Exercise</h1>
      <button onClick={recordLap}>Record Lap</button>
      <h2>Laps:</h2>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>{lap}</li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;
