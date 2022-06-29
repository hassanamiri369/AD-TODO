import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import TodoApp from "../pages/TodoApp/TodoApp";
import TodoDetails from "../pages/TodoApp/TodoDetails";


export const routes = [
    {path : "/" , element : <Home/>},
    {path : "/about" , element : <About/>},
    {path : "/todoApp" , element : <TodoApp/>},
    {path : "/todoApp/:id" , element : <TodoDetails/>}
]