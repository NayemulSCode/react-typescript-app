import React, { useState } from 'react';
import './App.css';
import List from './components/List';
interface IState {
  friend:{
    name: string
    age: number
    url: string
    note?: string
  } []
}
function App() {
  const [friend, setFriend] = useState<IState["friend"]>([
    {
      name: "nayemul",
      age: 23,
      url: "",
      note: "hello nayemul"
    }
  ]);


  return (
    <div className="App">
      <h1>Welcome my list</h1>
      <List friend={friend} />
    </div>
  );
}

export default App;
