import React, { useContext, useState, useEffect } from 'react'
import { todoContext } from '../../context/context'


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
import { Link } from 'react-router-dom';
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
    } else {
      dispatch({ type: "addTodo", payload: newTodo })
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
    window.confirm("Do you really want to leave?")
    dispatch({ type: "deleteAllTodo" })
  }


  // count of todo and complete todo and undone todo

  const doneTodoCount = []
  const unDoneTodoCount = []
  const todoCunt = todos.map(item => item.complete ? doneTodoCount.push(item) : unDoneTodoCount.push(item))

  return (
    <>
      <div className="todo-list-container">

        <div className='add-todo'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box>

              <TextField label="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </Box>

            <div>

              <TextField label="body" required value={body} onChange={(e) => setBody(e.target.value)} />
            </div>

            <div>

              <TextField label="description" required value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div>

              <TextField label="category" required value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div>
              {
                currentTodo.title ?
                  (<Button variant='contained' type={'submit'}>Edit todo</Button>)
                  :
                  (<Button variant='contained' type={'submit'}>Add todo</Button>)
              }

            </div>


          </form>
        </div>


        <div className='other-items'>

          {/* select todo filter */}
          <div className='select-todo'>
            <div className='select-item'>
              <FormControl fullWidth>
                {/* <InputLabel>Todo</InputLabel> */}

                <Select value={size} onChange={(e) => setSize(e.target.value)}>
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                  <MenuItem value="undone">Undone</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* delete all todo button  */}
          <div className='delete-All-Todo-Button'>
            <Button variant='contained' color='secondary' onClick={deleteClickHandler}>Delete All Todo</Button>
          </div>


          {/* show count done and undone todo  */}

          <div className='show-count-done-todo'>
            <div>Count All Todo : {todos.length}</div>
            <div>
              <p>Done Todo : {doneTodoCount.length}</p>
              <p>Undone Todo : {unDoneTodoCount.length}</p>
            </div>
          </div>



        </div>


        <div className='show-todo' >
          {dataAfterFilter.map((item, index) => (
            <div className='show-item' key={item.id}>
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
                    <IconButton>
                      <TbEdit className='editIcon' onClick={() => editMode(item)} />
                    </IconButton>

                  </Tooltip>

                  <Tooltip title="Detail-Todo">
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