import React from "react";

const Header = props => {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Header;
