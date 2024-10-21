import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

export default function AuthNav() {
  const getLinkClass = ({ isActive }) => clsx(css.link, { [css.active]: isActive });

  return (
    <div className={css.authNav}>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
