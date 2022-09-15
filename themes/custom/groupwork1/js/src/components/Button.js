import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.click}>
      {props.value}
      {props.children}
    </button>
  );
};

export default Button;
