import React, {useState} from 'react'
import "../form/home.css"
import { useCommentContext } from '../hooks/CommentHooks'
import { useUserContext } from '../hooks/UserHooks'

const Create = () => {
    const [comment, setComment] = useState("")
    const [error, setError] = useState(null)
    // const [empty, setEmpty] = useState([])
    const {user} = useUserContext()
        const {dispatch} = useCommentContext()
    const thankSubmit =async (e)=>{
        e.preventDefault()

        if (!user) {
            setError("You have to be log in") 
            return
         }
        const value = {comment}
        const response =  await fetch("https://comenting.herokuapp.com/comment", {
            method:"POST",
             headers : {"Content-Type": "application/json",
             "Authorization": `Bearer ${user.token}`
            },
             body: JSON.stringify(value),
        })
        const json = await response.json() 
        if (!response.ok) {
            setError(json.error)
            // setEmpty(json.emptyFields)
        }else{
            alert("thanks For Commenting")
            setComment("")
            dispatch({type: "CREATE_COMMENT", payload: json})
        }

    }
  return (
    <div>
        <form onSubmit={thankSubmit}>
           {/* <div className='form'> */}
           <input type="text" 
            value={comment}
             onChange={(e)=>{setComment(e.target.value)}} 
             className='add_inp' />
             {/*  */}
             {/* <input type="text" /> */}
             
            <button className='add_btn'>Add Comment</button> 
            {/*  */}
           {/* </div> */}
            {error  && <div>{error}</div> }
        </form>
    </div>
  )
}

export default Create


// import { useState } from "react";
// import {useAuthContext} from "./useAuthContext"

// export const UseSignup = ()=>{
//     const [error, setError] = useState(null)
//     const [isLoading, setIsLoading] = useState(null)
//     const {dispatch } = useAuthContext()

//     const signup = async(email, password)=>{
//         setIsLoading(true)
//         setError(null)

//         const response = await fetch("http://localhost:4000/user/signup", {
//             method: "POST",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({email, password})
//         })
//         const json = await response.json()

//         if (!response.ok) {
//             setIsLoading(false)
//             setError(json.err)
//         }else{
//             // saving
//             localStorage.setItem("User", JSON.stringify(json))
//         }

//         dispatch({type: "LOGIN", payload: json}) 

//         setIsLoading(false)
        
//     }

//     return {signup, isLoading, error}
// }

// // john122@gmail.com 1123abcABC$