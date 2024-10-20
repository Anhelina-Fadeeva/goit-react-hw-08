import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    return (
        <nav>
            <NavLink  to="/" className={buildLinkClass}>Home</NavLink>
            {isLoggedIn && (
            <NavLink  to="/contacts" className={buildLinkClass}>Contacts</NavLink>
            )}
        </nav>
    );
}