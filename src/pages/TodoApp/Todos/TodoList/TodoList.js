import React , {useContext , useState}from 'react'
import { todoContext } from '../../context/context'
import nextId from 'react-id-generator';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import { TiDelete } from 'react-icons/ti';

const TodoList = () => {

    const {state , dispatch } = useContext(todoContext)
    const {todos} = state;
    console.log(todos)

    // add todo 
    const [title , setTitle] = useState("")
    const [body , setBody]= useState("") 
    const [category , setCategory] = useState("")
    const [description , setDescription] = useState("")


    const newTodo = {id : nextId() , title , body , category , description , complete : false}
    // after submit
    const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch({type : "addTodo" , payload : newTodo})
      setTitle("")
      setBody("")
      setCategory("")
      setDescription("")

    }


    // delete todo 
    const deleteTodo = (todo) => {
      const updateTodo = todos.filter(item => item.id !== todo.id)
      dispatch({type : "deleteTodo" , payload : updateTodo})
      
    }


  return (
    <>
       <div>
        <div className='add-todo'>
          <form onSubmit={(e) =>handleSubmit(e)}>
            <div>
              <label>Title : </label>
              <input type={'text'} value={title} onChange={(e)=> setTitle(e.target.value)} placeholder={'title'}/>
            </div>

            <div>
              <label>body : </label>
              <input type={'text'} value={body} onChange={(e)=> setBody(e.target.value)} placeholder={'body'}/>
            </div>

            <div>
              <label>description : </label>
              <input type={'text'} value={description} onChange={(e)=> setDescription(e.target.value)} placeholder={'description'}/>
            </div>

            <div>
              <label>category : </label>
              <input type={'text'} value={category} onChange={(e)=> setCategory(e.target.value)} placeholder={'category'}/>
            </div>
            <div>
              <button type={'submit'}>Add todo</button>
            </div>


          </form>
        </div>


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
                    <TiDelete onClick={()=> deleteTodo(item)}/>
                   </Paper>
                </Box>
            ))}
        </div>
       </div>
    </>
  )
}

export default TodoList