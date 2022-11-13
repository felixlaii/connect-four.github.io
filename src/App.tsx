import './App.css';
import GameBoard from './components/GameBoard';
import React from 'react';

const App: React.FunctionComponent = ():JSX.Element => {

  return (
    <div>
      <h1>Connect Four</h1>
      <GameBoard/>
    </div>
  );
}

export default App;
