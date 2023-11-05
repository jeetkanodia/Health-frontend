import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <div className="footer-at-bottom">
        {/* Your main content */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
