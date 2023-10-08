import { useDispatch, useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import validateToken from "../utils/decodeToken"
import { logout } from "../app/userSlice"
import { useEffect } from "react"

const RequireAuth = () => {
    //logic to check if user is logged in
    const { loggedin, } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const decodePayload = validateToken()

        if (decodePayload.loggedin === 0) {
            dispatch(logout())
        }
    }, [dispatch, loggedin])

    const location = useLocation()
    return (
        <>
            {
                loggedin === 1 ? <Outlet /> :
                    <Navigate to='/account/login' state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth
