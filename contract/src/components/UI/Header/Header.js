import React, { useContext } from "react";
import { Link } from "react-router-dom";
import path from "../../../utils/path";
import UserContext from "../../../contexts/User";

import "./Header.scss";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <nav className="topbar">
      <h3 className="topbar__title">Forms</h3>
      {user ? (
        <h4 className="topbar__greeting">
          Welcome, {user.email.split("@")[0]}{" "}
          <i class="topbar__greeting__icon fas fa-chevron-down"></i>
        </h4>
      ) : (
        <div className="topbar__actions">
          <Link className="topbar__btn" to={path("/login")}>
            Login
          </Link>
          <Link className="topbar__btn" to={path("/signup")}>
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
