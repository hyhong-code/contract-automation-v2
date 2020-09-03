import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <nav className="topbar">
      <h3 className="topbar__title">Forms</h3>
      <h4 className="topbar__greeting">
        Welcome back, Rachel{" "}
        <i class="topbar__greeting__icon fas fa-chevron-down"></i>
      </h4>
    </nav>
  );
}
