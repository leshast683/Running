import React, { useState } from 'react';

const Running = () => {
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLaps([...laps, currentTime]);
  };

  return (
    <div>
      <h2>Running</h2>
      <button onClick={recordLap}>Record Lap</button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>{lap}</li>
        ))}
      </ul>
    </div>
  );
};

export default Running;