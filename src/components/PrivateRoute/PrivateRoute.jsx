import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const PrivateRoute = ({ component: Component }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
