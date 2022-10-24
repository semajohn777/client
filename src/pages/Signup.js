import React from 'react'
import { useState } from 'react'
// import { useUserContext } from '../component/hooks/UserHooks'
import { UseSignup } from '../component/hooks/UseSignup'
import "../component/form/home.css"


const Signup = () => {
    // const {user, dispatch} =  useUserContext()

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //  const [error, setError] = useState(null)
     const {signup, error} = UseSignup()
    
     

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const values = {username, email, password} 
        console.log(values);
        await signup(username, email, password)
       

        // const response =  await fetch("http://localhost:5000/signup", {
        //     method:"POST",
        //      headers : {"Content-Type": "application/json"},
        //      body: JSON.stringify(values),
        // })
        // const json = await response.json()
        // if (!response.ok) {
        //     // setError(json.error)
           
        // }else {
        //     // localStorage.setItem("User", JSON.stringify(json))
        //     navigate("/")
        //     setEmail("")
        //     setUserName("")
        //     setPassword("")
        // }
        // dispatch({type:"lOG_IN", payload: json})
        // if (user) {
        // }
    }
  return (
    <div>
        <form className='signUpForm' onSubmit={handleSubmit}>
            <label htmlFor="">UserName</label>
        <div>
            <input type="text" 
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            />
        </div>

            <label htmlFor="">Email</label>
        <div>
            <input type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

            <label htmlFor="">Password</label>
        <div>
            <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        {error  && <div className='err'>{error}</div> }
        <button>Submit</button>
       
        </form>
    </div>
  )
}

export default Signup