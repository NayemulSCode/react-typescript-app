import React, { useState } from 'react'

const AddToFriend = () => {
    const [value, setValue] = useState({
        name:"",
        age: "",
        img: "",
        notes: ""
    });
    console.log(value);
    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })

    }
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" value={value.name} onChange={handleChange} name="name" className="AddToList-input" />
            <input type="text" placeholder="Age" value={value.age} onChange={handleChange} name="age" className="AddToList-input" />
            <input type="text" placeholder="Image Url" value={value.img} onChange={handleChange} name="img" className="AddToList-input" />
            <textarea placeholder="Notes" value={value.notes} onChange={handleChange} name="notes" className="AddToList-input" />
            <button>
                Add Friend
            </button>
        </div>
    )
}

export default AddToFriend
