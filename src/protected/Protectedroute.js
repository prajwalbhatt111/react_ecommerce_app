import { Navigate } from "react-router-dom"
const data = JSON.parse(localStorage.getItem('users'))
const Protectedroute = ({ children }) => {
    if (data) return children
    else return <Navigate to = { '/signup' }
    />

}

export default Protectedroute