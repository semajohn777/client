import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Create from '../component/create/Create'
import Delete from '../component/delete/Delete'
import "../component/form/home.css"
import { useCommentContext } from '../component/hooks/CommentHooks'
import { useUserContext } from '../component/hooks/UserHooks'
import Update from '../component/update/Update'

const Home = () => {
   
    // const {id} = useParams()
    // const [item, setItem] = useState("")
    const {comment, dispatch} = useCommentContext()
    const {user} = useUserContext()

    const getAllComment = async()=>{
        const response = await fetch("https://comenting.herokuapp.com/", {
            headers : {
                "Authorization": `Bearer ${user.token} ` 
            }
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type: "SET_COMMENT", payload: json})
            
        }
    }



    useEffect(()=>{
        if (user) {
            getAllComment()
            
        }
    }, [user])

  return (
      <div className='home'>
        <Create/>
            {comment && (
                <div>
                    {comment.map((item)=>(
                        <Delete key={item._id} commentProps={item}/>
                    ))}
                </div>
            )}
            {/* <div className='home_grid'>
            <div>
                <h1>This is my first comment</h1>
                <p>2 minutes ago</p>
            </div>
            <div>
                <button className='update' onClick={()=>setUpdate(!update)}>Update</button>
                <button className='delete'>Delete</button>
            </div>
        </div>    

      

        <div className='home_grid'>
            <div>
                <h1>This is my third comment</h1>
                <p>6 minutes ago</p>
            </div>
            <div>
                <button className='update' onClick={()=>setUpdate(!update)}>Update</button>
                <button className='delete'>Delete</button>
            </div>
        </div> */}
    </div>
  )
}

export default Home