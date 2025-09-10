import { Routes, Route } from 'react-router-dom';
import { Roles } from '../../../../core/utils/Constants';
import * as React from 'react';
import Home from '../home/Home';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import AdminPage from '../adminPage/AdminPage';
import Forbidden from '../forbidden/Forbidden';

const mockUserGroups = ['ADMINISTRADORES']; // Se puede cargar con contexto o API

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
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
