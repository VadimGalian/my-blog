import { useSelector } from "react-redux"
import { getUserAuthData, getUserRoles } from "entities/User"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { UserRole } from "entities/User/model/types/user"
import { useMemo } from "react"

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()
    const userRoles = useSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some(requiredRole => {
            const hasRole = userRoles?.includes(requiredRole)
            return hasRole
        })
    }, [roles, userRoles])

    if (!auth || !hasRequiredRoles) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    return children
}
