import React , {createContext , useReducer , useEffect} from "react"


export const todoContext = createContext()

const initialState = {
    todos : localStorage.getItem("todoListApp") ? JSON.parse(localStorage.getItem("todoListApp")) : [] ,
    currentTodo : {}

}
const reducer = (state , action ) => {
    switch(action.type){
        case "addTodo":
            return {...state , todos : [...state.todos , action.payload]}
        case "deleteTodo":
            return {...state , todos : action.payload}
        
        case "toggleTodo":
            return{...state , todos : action.payload}
        
        case "setCurrentTodoEditMode" :
            return {...state , currentTodo : action.payload}
        
        case "deleteAllTodo" :
            return {...state  , todos : [] , currentTodo : {}}

        case "editTodo":
            const updateTodo = {...state.currentTodo , title : action.payload.title , description : action.payload.description , body : action.payload.body , category : action.payload.category }

            const updateTodoIndex = state.todos.findIndex((t)=> t.id === state.currentTodo.id)

            const updateTodos = [...state.todos.slice(0 ,updateTodoIndex) , updateTodo , ...state.todos.slice(updateTodoIndex + 1)]

            return {...state , currentTodo : {} , todos : updateTodos}

        

        default : 
            return state
    }
}

const TodoContextProvider = (props)=>{


    const [state , dispatch ] = useReducer(reducer , initialState)

    useEffect(()=>{
        localStorage.setItem("todoListApp" , JSON.stringify(state.todos))
    } , [state.todos])



    const value = {state , dispatch}
    return (
        <todoContext.Provider value={value}>
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider