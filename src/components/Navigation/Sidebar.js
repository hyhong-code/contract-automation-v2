import React from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__icons">
        <div className="sidebar__icons-box">
          <i class="sidebar__icons-icon far fa-sticky-note"></i>
        </div>
        <div className="sidebar__icons-box">
          <i class="sidebar__icons-icon far fa-user-circle"></i>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
