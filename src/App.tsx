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
      url: "https://i.pinimg.com/280x280_RS/87/ea/12/87ea12420483def3924072790c96a06d.jpg",
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
