import React from "react";

function Greet(props) {
  return (
    <>
      <h1>Hello {props.name}, this is a Function component !</h1>
      {props.children}
    </>
  );
}

export default Greet;
