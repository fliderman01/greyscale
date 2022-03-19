import React, { useState } from 'react';
import '../style.css';

export default function Range() {
  const [scale, setScale] = useState(50);

  return (
    <div className="d-flex align-items-center flex-column">

      <section className="d-flex flex-column">
        <h3 className="mx-5">greyScale - {scale}%</h3>

        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        />
      </section>
      <br />
      <img
        src="https://www.w3schools.com/cssref/pineapple.jpg"
        alt="greyfrut"
        style={{ filter: `grayscale(${scale}%)` }}
      />
    </div>
  );
}
