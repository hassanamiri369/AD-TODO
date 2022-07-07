import React , {useContext} from 'react'
import TodoList from './Todos/TodoList/TodoList'
import { themeContext } from '../..'

const TodoApp = () => {
  const { theme, setTheme , toggleTheme } = useContext(themeContext)

  return (
    <>
    
      <div className={`${theme === "light" ? "todoLight" : "todoDark"}`} >
      <TodoList/>
      </div>
    </>
  )
}

export default TodoApp