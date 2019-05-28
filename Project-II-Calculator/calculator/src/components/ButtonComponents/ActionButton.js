import React from "react";
import "./Button.css";

export default function ActionButton(props) {
  const { buttonStyle, text } = props;
  
  return (
    <div style={{width: '75%'}}>
      <button className="button" style={buttonStyle}>{text}</button>
    </div>
  );
}
