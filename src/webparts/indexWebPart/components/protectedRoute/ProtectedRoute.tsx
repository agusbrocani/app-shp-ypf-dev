import * as React from "react";
import { Roles } from "../../../../core/utils/Constants";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    requiredRole: string;
    children: React.ReactNode;
    userGroups: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    requiredRole,
    children,
    userGroups,
}) => {
    const perteneceAlRol =
        requiredRole === Roles.OTRO && userGroups?.includes(Roles.OTRO) ||
        requiredRole === Roles.ADMINISTRADORES && userGroups?.includes(Roles.ADMINISTRADORES);

    if (userGroups.length === 0 || !perteneceAlRol) {
        return <Navigate to="/forbidden" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
