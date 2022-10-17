import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseLogin } from '../component/hooks/useLogIn'
import { useUserContext } from '../component/hooks/UserHooks'

const Login =  () => {
    // const {dispatch} =  useUserContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState(null)
    const {login, error, isLoading } = UseLogin()
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const values = {email, password} 
        console.log(values);
        // const response =  await fetch("http://localhost:5000/login", {
        //     method:"POST",
        //      headers : {"Content-Type": "application/json"},
        //      body: JSON.stringify(values),
        // })
        // const json = await response.json()
        // if (!response.ok) {
        //     setError(json.error)
        
        // }else {
        //     dispatch({type:"LOG_IN", payload: json})
        //     localStorage.setItem("User", JSON.stringify(json))
        //     setEmail("")
        //     setPassword("")
        // } 
        await login(values)
        navigate("/")
    }
  return (
    <div>
        <form action=""  className='signUpForm' onSubmit={handleSubmit}>
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
        <button>Submit</button>
        {error  && <div>{error}</div> }
        </form>
    </div>
  )
}

export default Login