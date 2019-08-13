import React from "react";
{/* Display a button element rendering the data being passed down from the parent container on props */}

export default function OperatorButton(props){

  return (
    <button>{props.eaprops.char}</button>
  );
};
