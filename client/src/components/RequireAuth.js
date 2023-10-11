import { useDispatch, useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import validateToken from "../utils/decodeToken"
// import { logout } from "../app/userSlice"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify"

const RequireAuth = () => {
    //logic to check if user is logged in
    const location = useLocation()
    const { isAuthenticated } = useSelector(state => state.user)

    return (
        <>
            {
                isAuthenticated ? <Outlet /> :
                    <Navigate to='/account/login' state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth
