import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCommentContext } from '../hooks/CommentHooks'



const Update = () => {
  const [comment, setComment] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()
  const {comment: ccc, dispatch, user} = useCommentContext()
  if (!user) {
    console.log(user);
}

const fetchHandle = async ()=>{
    const response = await fetch(`http://localhost:5000/single/${id}`)
    const json = await response.json()
    if (response.ok) {
      setComment(json.comment)
      console.log(json);
  }
      
    }

  const handleUpdate = async (e)=>{
    e.preventDefault()
    const value = {comment}
    const response = await fetch(`http://localhost:5000/update/${id}`, {
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
                <input type="text" name="comment" id="" 
                value={comment}
                onChange={(e)=>setComment(e.target.value)}/>
                <button>Submit</button>
            </form>
    </div>
  )
}

export default Update