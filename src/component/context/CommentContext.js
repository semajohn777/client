import { createContext, useReducer } from "react";

export const CommentContext = createContext()

export const commentReducer = (state, action)=>{
switch (action.type) {
    case "SET_COMMENT":
        return {
            comment: action.payload 
        }
    case "CREATE_COMMENT":
        return {
            comment:[action.payload, ...state.comment]
        }
    case "DELETE_COMMENT":
        return {
            comment:state.comment.filter((comment)=> comment._id !== action.payload._id)
        }
    
        case "UPDATED_COMMENT":
        return {
            comment:state.comment.map((comment)=> comment._id === action.payload._id)
        }
        default:
            return state

}
}


export const CommentContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(commentReducer, {
        comment:null
    })
    return(
        <CommentContext.Provider value={{...state, dispatch}}>
            {children}
        </CommentContext.Provider>
    )
}