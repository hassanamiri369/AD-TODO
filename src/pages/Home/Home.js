import React , {useContext} from 'react'
import { themeContext } from '../..'

const Home = () => {
  
  const { theme, setTheme , toggleTheme } = useContext(themeContext)

  
  return (
    <div className={`${theme === "light" ? "homeLight" : "homeDark"}`}>Home</div>
  )
}

export default Home