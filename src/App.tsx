import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(5);

  const changeNumber  = ()=>{
    setNumber(10);
  }
  return (
    <div className="App">
      <h1>Welcome my list</h1>
    </div>
  );
}

export default App;