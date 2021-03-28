import React, { useState } from 'react';

import './App.css';
import ChooseExercises from './Components/ChooseExercises';

function App() {
  const [displayChooseExercises, setDisplayChooseExercises] = useState(false)

  return (
    <div className="App">
      <h1>GeoQuiz</h1>
      { displayChooseExercises
        ? <ChooseExercises />

        : <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '50vh'}}>
        <button className="start-bouton" onClick={() => setDisplayChooseExercises(true)}>Go !</button>
      </div>
        
      }
      
    </div>
  );
}

export default App;
