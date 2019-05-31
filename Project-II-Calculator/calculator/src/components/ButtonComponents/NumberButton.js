import React from "react";
import "./Button.css";

export default function NumberButton(props) {
  const { buttonStyle, text } = props;
  
  return (
    <div style={{width: '25%'}}>
      <button className="button" style={buttonStyle}>{text}</button>
    </div>
  );
}
