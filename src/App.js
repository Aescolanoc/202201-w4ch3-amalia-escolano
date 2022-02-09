import { useState } from 'react';
import './App.css';
import { Action } from './components/action';
import { Display } from './components/display';
import { Keyboard } from './components/keyborad';

function App() {
  // const [callNumber, setCallNumber] = useState([]);
  return (
    <div className="container">
      <Display />
      <main className="phone">
        <Keyboard />
        <Action />
      </main>
    </div>
  );
}

export default App;
