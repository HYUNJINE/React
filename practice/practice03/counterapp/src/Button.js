import React from "react";

const Button = ({ children, clickHandler }) => (
  <div>
    <button
      className="button is-primary has-text-centered"
      onClick={clickHandler}
    >
      {children}
    </button>
  </div>
);

export default Button;
