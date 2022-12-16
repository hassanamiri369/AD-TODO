import React , { createContext} from 'react';
import { BrowserRouter } from 'react-router-dom';

// todo context 
import TodoContextProvider from './pages/TodoApp/context/context';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


export const themeContext = createContext()


const ThemeContextProvider = (props) =>{


  const [theme , setTheme] = React.useState("light")

  const toggleTheme = ()=> {
    if(theme === "light"){
      window.localStorage.setItem("themeMode" , "dark")
      setTheme("dark")
    }else{
      window.localStorage.setItem("themeMode" , "light")
      setTheme("light")
    }
  }


  React.useEffect(()=> {
    const localTheme = window.localStorage.getItem("themeMode")
    if(localTheme){
      setTheme(localTheme)
    }
  } , [])



  const value = {theme , setTheme ,toggleTheme}

  
  return(
    <themeContext.Provider value={value}>
      {props.children}
    </themeContext.Provider>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeContextProvider>
    <TodoContextProvider>

    
      <App />
      </TodoContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

