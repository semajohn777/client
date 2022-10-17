import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import { useUserContext } from '../hooks/UserHooks'
import { useCommentContext } from '../hooks/CommentHooks'
import "../form/home.css"

const Navbar = () => {
  const { dispatch: userDispatch, user } = useUserContext()
  const { dispatch } = useCommentContext()
  const logOut = ()=>{
      localStorage.removeItem("User")
      dispatch({type: "SET_COMMENT", payload: null })

      userDispatch({ type: "LOG_OUT" })
  }
  return (
    <header>
        <nav>
          
            <h2><Link to="/">Se<span>ma</span></Link></h2>
          {user && (
            <div>
             <span>{user.username}</span>
             <span>{user.email}</span>
             <button className='logout' onClick={logOut}>Log out</button>
             </div>
          ) 
           }
           {!user && (
             <ul>
             <li><Link to={"/signup"}>Sign Up </Link></li>
             <li><Link to={"/login"}>Login </Link></li>
         </ul>
           )}
        </nav>
    </header>
  )
}

export default Navbar

// import React from 'react'
// import { useWorkoutContext } from './Hooks'
// import { useAuthContext } from './useAuthContext'




// export const useLogOut = () => {
//     const {dispatch } = useAuthContext()
//     const {dispatch: workoutDispatch} = useWorkoutContext()

//     const logout = ()=>{
//         // remove user from storage

//         localStorage.removeItem("User")

//         dispatch({type: "LOGOUT"})
//         workoutDispatch({type: "SET_WORKOUTS", payload: null})
//     }
//   return {
//     logout
// }
// }

