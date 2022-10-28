import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="success" />
    }

    if (user) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;