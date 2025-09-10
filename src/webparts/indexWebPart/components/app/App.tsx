import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Roles } from "../../../../core/utils/Constants";
import Home from "../home/Home";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import AdminPage from "../adminPage/AdminPage";
import Forbidden from "../forbidden/Forbidden";
import { WebPartContext } from "@microsoft/sp-webpart-base";

interface IAppProps {
    context: WebPartContext;
}

const mockUserGroups = ["ADMINISTRADORES"];

const App: React.FC<IAppProps> = ({ context }) => {
    return (
        <Routes>
            <Route path="/" element={<Home context={context} />} />
            <Route path="/forbidden" element={<Forbidden />} />
            <Route
                path="/admin"
                element={
                    <ProtectedRoute
                        requiredRole={Roles.OTRO}
                        userGroups={mockUserGroups}
                    >
                        <AdminPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default App;
