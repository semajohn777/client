import { useContext } from "react"
import { UserContext } from "../context/UserConxtent"


export const useUserContext = ()=>{
    const context = useContext(UserContext)

    if (!context) {
        throw Error("useUserContext must be inside a UserContextProvider")
    }
    return context
}