import React from 'react';
import './App.css';
import PeriodsBlock from './components/periodsBlock/PeriodsBlock';
import { periodsList, radius } from './const';

const App: React.FC = () => {
  return (
    <div className="App">
      <PeriodsBlock periodsList={periodsList} circleRadius={radius} />
    </div>
  );
};

export default App;
