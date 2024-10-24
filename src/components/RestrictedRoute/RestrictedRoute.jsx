import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '/src/redux/auth/selectors.js';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};

export default RestrictedRoute;
