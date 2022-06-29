import React from 'react'
import {useParams} from "react-router-dom"
const TodoDetails = () => {

    const {id} = useParams()
    console.log(id)

  return (
    <>
        <div>TodoDetails</div>
        <p>{id}</p>
    </>
  )
}

export default TodoDetails