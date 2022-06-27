import React , {useState , useContext} from 'react'
import nextId from 'react-id-generator';
import { todoContext } from '../../context/context';

// material ui component
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// custom style file
import "./Style.css"

const AddTodo = () => {
    const {dispatch} = useContext(todoContext)
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
  return (
    <>
    <div className='add-todo'>
          <form onSubmit={(e) =>handleSubmit(e)}>
            <Box>
              <label>Title : </label>
              <TextField label="title" required  value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </Box>

            <div>
              <label>body : </label>
              <TextField label="body" required value={body} onChange={(e)=> setBody(e.target.value)} />
            </div>

            <div>
              <label>description : </label>
              <TextField label="description" required value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </div>

            <div>
              <label>category : </label>
              <TextField label="category" required value={category} onChange={(e)=> setCategory(e.target.value)} />
            </div>
            <div>
              <Button variant='contained' required type={'submit'}>Add todo</Button>
            </div>


          </form>
        </div>
    </>
  )
}

export default AddTodo