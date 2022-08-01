import { useContext } from "react";
import { Link, NavigateFunction, NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/context";

import { IAuthContext } from "../../auth/interfaces";

export const Navbar = () => {
  const navigate: NavigateFunction = useNavigate();
  const { state, logout } = useContext(AuthContext) as IAuthContext;
  const { user } = state;

  const onLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => {
              return `nav-item nav-link ${isActive ? "active" : ""}`;
            }}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return `nav-item nav-link ${isActive ? "active" : ""}`;
            }}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return `nav-item nav-link ${isActive ? "active" : ""}`;
            }}
            to="/search"
          >
            Búsqueda
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user?.name}</span>

          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
