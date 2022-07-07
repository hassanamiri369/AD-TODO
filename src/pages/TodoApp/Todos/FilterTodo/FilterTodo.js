import React from 'react'
import { FormControl , MenuItem , Select , Button } from '@mui/material'

const FilterTodo = (props) => {

    const {size , setSize , deleteClickHandler , todos , doneTodoCount , unDoneTodoCount} = props

  return (
    <>
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
    </>
  )
}

export default FilterTodo