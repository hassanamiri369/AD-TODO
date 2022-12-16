import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const AddTodo = (props) => {
  const {currentTodo ,handleSubmit , title ,setTitle , body , setBody , description , setDescription , category , setCategory} = props


  return (
    <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <Box autoComplete="off">
            <TextField label="category"  required value={category} onChange={(e) => setCategory(e.target.value)} />

              <TextField label="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            

              <TextField label="body" required  value={body} onChange={(e) => setBody(e.target.value)} />
           

              <TextField label="description" required value={description} onChange={(e) => setDescription(e.target.value)} />
            

             
            </Box>
            <div>
              {
                currentTodo.title ?
                  (<Button variant='contained' color="secondary" type={'submit'}>Edit todo</Button>)
                  :
                  (<Button variant='contained' color="success" type={'submit'}>Add todo</Button>)
              }

            </div>


          </form>
    </>
  )
}
