import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"

export const useCommentContext = ()=>{
    const context = useContext(CommentContext)

    if (!context) {
        throw Error("useWorkoutsContext must be inside a WorkoutContextProvider")
    }
    return context
}