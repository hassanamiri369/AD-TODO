import React, { useContext, useState, useEffect } from 'react'
import { todoContext } from '../../context/context'
import { ToastContainer, toast } from 'react-toastify';
// import { AnimationOnScroll } from 'react-animation-on-scroll';

import 'react-toastify/dist/ReactToastify.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




import { TiDelete } from 'react-icons/ti';
import { TbEdit } from 'react-icons/tb';

import { BiCommentDetail } from 'react-icons/bi';

import nextId from 'react-id-generator';
import "./style.css"
// import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import { AddTodo } from '../AddTodo/AddTodo';
import FilterTodo from '../FilterTodo/FilterTodo';
// material ui component


const TodoList = () => {

  const { state, dispatch } = useContext(todoContext)
  const { todos } = state;
  const { currentTodo = {} } = state;
  console.log(currentTodo)


  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  // select todo
  const [size, setSize] = useState("All")
  const [dataAfterFilter, setDataAfterFilter] = useState([])


  useEffect(() => {
    if (size === "All") {
      setDataAfterFilter([...todos])
    }
    if (size === "done") {
      setDataAfterFilter([...todos.filter(item => item.complete)])
    }
    if (size === 'undone') {
      setDataAfterFilter([...todos.filter(item => !item.complete)])
    }
  }, [todos, size])

  console.log(dataAfterFilter)



    // toastify 
    const DeleteToast = (todoItem)=> toast.error(`todo ${todoItem} deleted success ` , {position : "top-right" , autoClose : true , theme : "colored"})
    const addTost = (toastItem)=> toast.success(`success todo ${toastItem} added ` ,  {autoClose : true , position : toast.POSITION.TOP_LEFT , theme : "colored"})
    const editToast = (toastItem)=> toast.info(`success todo ${toastItem} edit ` , {position : "top-right" , className : "editToast" , theme : "colored"})


  //  set old data into inputs
  useEffect(() => {
    if (currentTodo.body || currentTodo.title || currentTodo.category || currentTodo || currentTodo.description) {
      setTitle(currentTodo.title)
      setBody(currentTodo.body)
      setCategory(currentTodo.category)
      setDescription(currentTodo.description)
    } else {

      setTitle("")
      setBody("")
      setCategory("")
      setDescription("")
    }
  }, [currentTodo, currentTodo.id])


  // create new todo / edit todo 
  const newTodo = { id: nextId(), title, body, category, description, complete: false }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentTodo.body || currentTodo.title || currentTodo.category || currentTodo.description) {
      dispatch({ type: "editTodo", payload: newTodo })
      editToast(newTodo.category)
    } else {
      dispatch({ type: "addTodo", payload: newTodo })
      addTost(newTodo.category)
    }

    setTitle("")
    setBody("")
    setCategory("")
    setDescription("")

  }



  // delete todo 
  const deleteTodo = (todo) => {
    const updateTodo = todos.filter(item => item.id !== todo.id)
    dispatch({ type: "deleteTodo", payload: updateTodo })
    DeleteToast(todo.title)

  }

  // edit todo mode
  const editMode = (todo) => {
    dispatch({ type: "setCurrentTodoEditMode", payload: todo })
  }

  // toggle checkbox

  const toggleCheckBox = (todo) => {
    const updateTodo = [...todos].map((x) => {
      if (x.id === todo.id) {
        x.complete = !todo.complete
      }
      return x
    })
    dispatch({ type: "toggleTodo", payload: updateTodo })
  }


  // click ot delete all todo 
  const deleteClickHandler = () => {
    if(window.confirm("Do you really want to Delete?")){

      dispatch({ type: "deleteAllTodo" })
    }
  }


  // count of todo and complete todo and undone todo

  const doneTodoCount = []
  const unDoneTodoCount = []
  const todoCunt = todos.map(item => item.complete ? doneTodoCount.push(item) : unDoneTodoCount.push(item))

  return (
    <>
    <ToastContainer   autoClose={2000}   /> 
      <div className="todo-list-container">

   
        <div className='search-container'>
        <SearchInput  todos={todos}/>
        </div>

      
        <div className='add-todo'>
          <AddTodo
          currentTodo={currentTodo} 
          handleSubmit={handleSubmit} 
          title={title} 
          setTitle={setTitle} 
          body={body} 
          setBody={setBody} 
          description={description} 
          setDescription={setDescription} 
          category={category} 
          setCategory={setCategory} 
          />
          
        </div>


        <div className='other-items'>

          <FilterTodo 
          size={size}  
          setSize={setSize}  
          deleteClickHandler={deleteClickHandler} 
          todos={todos} 
          doneTodoCount={doneTodoCount} 
          unDoneTodoCount={unDoneTodoCount}
          />
        </div>


        <div className='show-todo' >
          {dataAfterFilter.map((item, index) => (
            
            <div className={`${item.complete ? "show-item-complete" : "show-item"}`} key={item.id}>
              <div>
                <p>id : {item.id}</p>
                <p>title : {item.title}</p>
                <p>body : {item.body}</p>
                <p>description : {item.description}</p>
                <p>category : {item.category}</p>

                <input type="checkbox" checked={item.complete} onChange={() => toggleCheckBox(item)} />
                <div className='button-edit-delete'>
                  <Tooltip title="Delete" placement="top">
                    <IconButton>
                      <TiDelete className='deleteIcon' onClick={() => deleteTodo(item)} />
                    </IconButton>

                  </Tooltip>

                  <Tooltip title="Edit" placement="top">
                    <IconButton onClick={() => editMode(item)}>
                      <TbEdit className='editIcon' />
                    </IconButton>

                  </Tooltip>

                  <Tooltip title="Detail-Todo" placement="top">
                    <IconButton>

                      <Link to={`/todoApp/${item.id}`}>    <BiCommentDetail /></Link>

                    </IconButton>
                  </Tooltip>




                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  )
}

export default TodoList