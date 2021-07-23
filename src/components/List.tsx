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
    return (
        <div>
            <h3>hello</h3>
        </div>
    )
}

export default List
