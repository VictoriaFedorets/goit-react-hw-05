import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const getNavLinkClass = props => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <ul className={css.navigation}>
      <li className={css.navigationItem}>
        <NavLink to="/" className={getNavLinkClass}>
          Home page
        </NavLink>
      </li>
      <li className={css.navigationItem}>
        <NavLink to="/movies" className={getNavLinkClass}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
