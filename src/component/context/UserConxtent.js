import { createContext, useReducer, useEffect } from "react"

export const UserContext = createContext()

export const userReducer = (state, action)=>{
    switch (action.type) {
        // case "SIGN_IN":
        //     return{
        //         user: action.payload
        //     }
        case "LOG_IN":
            return {
                user: action.payload
            }
        case "LOG_OUT":
            return {
                user: null
            }
            default:
                return state
                       
        }
}


export const UserContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("User"))

        if(user) {
           
            dispatch({type: "LOG_IN", payload: user})
        }
    }, [])
    // console.log("AuthContext state: ", state);

    console.log("cheak", state);

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}