import React from 'react'
interface IProps {
    friend:{
      name: string
      age: number
      url: string
      note?: string
    } []
  }
const List: React.FC<IProps> = ({friend}) => {
    const renderList =():JSX.Element[] =>{
        return friend.map((person, index) =>{
            return(
                <li key={index} className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} alt="" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age}</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
