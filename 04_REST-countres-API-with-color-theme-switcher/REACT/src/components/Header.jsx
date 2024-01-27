import React from "react";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer">
            <i className="fa-regular fa-sun" />
            &nbsp;&nbsp;<span className="theme-changer-text">Light Mode</span>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
