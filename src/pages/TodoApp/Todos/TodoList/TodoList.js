import React , {useContext , useState}from 'react'
import { todoContext } from '../../context/context'

import AddTodo from '../AddTodo/AddTodo';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



import { TiDelete } from 'react-icons/ti';

import "./style.css"


const TodoList = () => {

    const {state , dispatch } = useContext(todoContext)
    const {todos} = state;
    console.log(todos)

    


    // delete todo 
    const deleteTodo = (todo) => {
      const updateTodo = todos.filter(item => item.id !== todo.id)
      dispatch({type : "deleteTodo" , payload : updateTodo})
      
    }


  return (
    <>
       <div>
        
            <AddTodo/>

       <div className='show-todo' >
            {todos.map((item, index)=> (
                <Box style={{width : "100%"}}  key={item.id}>
                   <Paper>
                   <p>id : {item.id}</p>
                    <p>title : {item.title}</p>
                    <p>body : {item.body}</p>
                    <p>description : {item.description}</p>
                    <p>category : {item.category}</p>
                    <input  type="checkbox" value={item.complete} />
                    <TiDelete className='deleteIcon' onClick={()=> deleteTodo(item)}/>
                   </Paper>
                </Box>
            ))}
        </div>
       </div>
    </>
  )
}

export default TodoList