import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useCommentContext } from '../hooks/CommentHooks'
import {formatDistanceToNow} from "date-fns" 

const Delete = ({commentProps}) => {
    const {dispatch} = useCommentContext()
    const {user} = useCommentContext()
    const deleteFunction = async()=>{
        if (!user) {
            return
        }
        
        const response = await fetch(`http://localhost:5000/delete/${commentProps._id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: "DELETE_COMMENT", payload: json})
        }
    }
  return (
    <div>
        <div className='home_grid' >
                          <div>
                              <h1>{commentProps.comment}</h1>
                              <p>{formatDistanceToNow(new Date(commentProps.createdAt), {addSuffix: true})}</p>
                          </div>
                          <div>
                          <button className='update' ><Link to={`/update/${commentProps._id}`}>Update</Link> </button>
                              <button className='delete'onClick={deleteFunction} >Delete</button>
                          </div>
                      </div>
    </div>
  )
}

export default Delete