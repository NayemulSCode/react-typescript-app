import React, { useState } from 'react'
import { IState as Props } from '../App';

interface IProps {
    setFriends: React.Dispatch<React.SetStateAction<Props["friend"]>>
    friends: Props["friend"]
}
const AddToFriend:React.FC<IProps> = ({friends, setFriends}) => {
    const [value, setValue] = useState({
        name:"",
        age: "",
        img: "",
        note: ""
    });
    console.log(value);
    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })

    }
    const handleClick =()=> {
        if(!value.name || !value.age) return
        console.log("btn click")
        setFriends([
            ...friends,
            {
                name: value.name,
                age: parseInt(value.age),
                url: value.img,
                note: value.note
            }
        ]);
        setValue({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" value={value.name} onChange={handleChange} name="name" className="AddToList-input" />
            <input type="text" placeholder="Age" value={value.age} onChange={handleChange} name="age" className="AddToList-input" />
            <input type="text" placeholder="Image Url" value={value.img} onChange={handleChange} name="img" className="AddToList-input" />
            <textarea placeholder="Notes" value={value.note} onChange={handleChange} name="note" className="AddToList-input" />
            <button onClick={handleClick} className="AddToList-btn">
                Add Friend
            </button>
        </div>
    )
}

export default AddToFriend
