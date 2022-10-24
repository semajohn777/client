import { useState } from "react";
import { useUserContext } from "./UserHooks";
import { useNavigate } from 'react-router-dom'


export const UseLogin = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useUserContext()
    const navigate = useNavigate()

    
    // const values = {email, password}
    const login = async(email, password)=>{
        // setIsLoading(true)
        setError(null)

        const response = await fetch("https://comenting.herokuapp.com/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(email, password)
        })
        const json = await response.json()

        if (!response.ok) {
            // setIsLoading(false)
            setError(json.error)
            console.log(json.error);
        }else{
            // saving
            localStorage.setItem("User", JSON.stringify(json))
            dispatch({ type: "LOG_IN", payload: json })
             navigate("/")
        }

        // setIsLoading(false)
        
    }

    return {login, isLoading, error}
}
