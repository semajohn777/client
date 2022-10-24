import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCommentContext } from '../hooks/CommentHooks'
import { useUserContext } from '../hooks/UserHooks'
import "../form/home.css"



const Update = () => {
  const [comment, setComment] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()
  const {comment: ccc, dispatch} = useCommentContext()
  const {user} = useUserContext()
  if (!user) {
    console.log(user);
}

const fetchHandle = async ()=>{
    const response = await fetch(`https://comenting.herokuapp.com/single/${id}`, {
      headers : {"Content-Type": "application/json",
      "Authorization": `Bearer ${user.token} `
    },
    })
    const json = await response.json()
    if (response.ok) {
      setComment(json.comment)
      console.log(json);
  }
      
    }

  const handleUpdate = async (e)=>{
    e.preventDefault()
    const value = {comment}
    const response = await fetch(`https://comenting.herokuapp.com/update/${id}`, {
      method:"PATCH",
      headers : {"Content-Type": "application/json",
      "Authorization": `Bearer ${user.token} `
    },
      body: JSON.stringify(value)
  })
  const json = await response.json()
    if (response.ok) {
      dispatch({type: "UPDATE_COMMENT", payload: json})
      navigate("/")
    }
}

useEffect (()=>{
  fetchHandle()
}, [])
    return (
    <div>
        <form action="" onSubmit={handleUpdate}>
                <input className='add_inp' type="text" name="comment" id="" 
                value={comment}
                onChange={(e)=>setComment(e.target.value)}/>
                <button>Submit</button>
            </form>
    </div>
  )
}

export default Update