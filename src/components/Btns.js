import React, { useState } from 'react';
import '../style.css';

export default function Btns() {
  const [scale, setScale] = useState(50);

  return (
    <div className="d-flex align-items-center flex-column">
      {/* <h1>Grey scale with buttons</h1> */}

      <section className="d-flex">
        <button
          disabled={scale == 100}
          onClick={() => {
            setScale(scale + 5);
          }}
          className="btn-secondary"
        >
          +
        </button>

        <h3 className="mx-5">greyScale - {scale}%</h3>

        <button
          className="btn-secondary"
          disabled={scale == 0}
          onClick={() => {
            setScale(scale - 5);
          }}
        >
          -
        </button>
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
