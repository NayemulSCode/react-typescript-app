import React, { useState } from 'react';
import './App.css';
import AddToFriend from './components/AddToFriend';
import List from './components/List';
export interface IState {
  friend:{
    name: string
    age: number
    url: string
    note?: string
  } []
}
function App() {
  const [friends, setFriends] = useState<IState["friend"]>([
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
      <List friend={friends} />
      <AddToFriend friends={friends} setFriends = {setFriends} />
    </div>
  );
}

export default App;
