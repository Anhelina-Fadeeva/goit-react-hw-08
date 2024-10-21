import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

    return (
        <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass} aria-current="page">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={buildLinkClass} aria-current="page">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}
