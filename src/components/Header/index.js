import React from "react";
import AddCounter from "../../containers/AddCounter";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Counter</h1>
      <AddCounter />
    </header>
  );
};

export default Header;
