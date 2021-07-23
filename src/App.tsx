import React, { useState } from 'react';
import './App.css';
interface IState {
  friend:{
    name: string
    age: number
    url: string
    note?: string
  } []
}
function App() {
  const [friend, setFriend] = useState<IState["friend"]>([]);

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
