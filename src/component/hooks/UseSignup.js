import { useState } from "react";
import { useUserContext } from "./UserHooks";

export const UseSignup = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch } = useUserContext()
    
    
    const signup = async(username, email, password)=>{
        // setIsLoading(true)
        setError(null)

        const response = await fetch("https://comenting.herokuapp.com/signup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({username, email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            // setIsLoading(false)
            setError(json.error)
        }else{
            // saving
            localStorage.setItem("User", JSON.stringify(json))
            dispatch({type: "LOG_IN", payload: json}) 
        }


        // setIsLoading(false)
        
    }

    return {signup, isLoading, error}
}
