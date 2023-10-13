import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"

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
