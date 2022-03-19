import React, { useState } from 'react';
import Btns from './components/Btns';
import Range from './components/Range';
import './style.css';

export default function App() {
  const [choice, setChoice] = useState('Slider');

  return (
    <div className="d-flex align-items-center flex-column">
      <section>
        <select
          className="form-select m-3"
          aria-label="Default select example"
          onChange={(e) => setChoice(e.target.value)}
        >
          <option value="Slider">Slider</option>
          <option value="Button">Buttons</option>
        </select>
      </section>

      <h1>Grey scale with a {choice}</h1>
      {choice == 'Slider' ? <Range /> : <Btns />}
    </div>
  );
}
