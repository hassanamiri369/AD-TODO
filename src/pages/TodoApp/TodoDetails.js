import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { todoContext } from './context/context'

import { Button } from '@mui/material'

// style custom
import "./TodoDetails.css"


const TodoDetails = () => {

    const { id } = useParams()
    const history = useNavigate()
    const { state } = useContext(todoContext)
    const { todos } = state;

    const [oneTodo, setOneTodo] = useState([])


    useEffect(() => {
        const fetchOneTodoInfo = todos.find(item => item.id === id)
        setOneTodo(fetchOneTodoInfo)

    }, [id])

    console.log(oneTodo)


    return (
        <div className='todo-detail-container'>


            <div className='detail-title-button'>
                <h1>TodoDetails</h1>
                <Button  onClick={() => history("/todoApp")} variant='contained' color="info" type={'submit'}>Go Back</Button>
               
            </div>


            <div className='detail-item'>

                <div >
                    <h1>Category : {oneTodo && oneTodo.category}</h1>
                    <h3>Title : {oneTodo && oneTodo.title}</h3>
                    <h3>Body : {oneTodo && oneTodo.body}</h3>
                    <h4>Description : {oneTodo && oneTodo.description}</h4>
                </div>
            </div>


        </div>
    )
}

export default TodoDetails