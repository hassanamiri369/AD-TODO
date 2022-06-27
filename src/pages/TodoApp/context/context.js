import React , {createContext , useReducer} from "react"
import  nextId from "react-id-generator"

export const todoContext = createContext()

const initialState = {
    todos : [
        {id : nextId(), title : "title" , body : "body" , description : "description" , category : "category" , complete : false},
        {id : nextId() , title : "title 2" , body : "body 2" , description : "description 2" , category : "category 2" , complete : false},
        {id : nextId() , title : "title 3" , body : "body 3 " , description : "description 3" , category : "category 3" , complete : false},
    ]
}


const reducer = (state , action ) => {
    switch(action.type){

        default : 
            return state
    }
}

const TodoContextProvider = (props)=>{


    const [state , dispatch ] = useReducer(reducer , initialState)

    const value = {state , dispatch}
    return (
        <todoContext.Provider value={value}>
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider