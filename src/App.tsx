import React, { useState } from 'react';

import './App.css';
import ChooseExercises from './Components/ChooseExercises';

function App() {
  const [displayChooseExercises, setDisplayChooseExercises] = useState(false)

  return (
    <div className="App">
      <main id="main">
        <header>
          <div>
            <h1><i className="fas fa-search-location"></i> GeoQuiz <i className="fas fa-globe-europe"></i></h1>
          </div>
        </header>
        { displayChooseExercises
          ? <ChooseExercises />

          : <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '50vh' }}>
              <button className="start-bouton" onClick={() => setDisplayChooseExercises(true)}>Go !</button>
            </div>        
        }      
      </main>
    </div>
  );
}

export default App;
