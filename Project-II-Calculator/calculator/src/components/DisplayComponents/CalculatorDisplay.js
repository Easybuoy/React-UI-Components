import React from "react";
import "./Display.css";

import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";
export default function CalculatorDisplay() {
  return (
    <div className="calculatorDisplay">
      <div className="labelDiv">
        <label style={{ padding: "0 1rem" }}>0</label>
      </div>

      <div className="buttons">
        <ActionButton
          text="clear"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black",
            fontWeight: "normal"
          }}
        />

        <NumberButton
          text="÷"
          buttonStyle={{
            backgroundColor: "#a0001e",
            color: "white"
          }}
        />

        <NumberButton
          text="7"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="8"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="9"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="x"
          buttonStyle={{
            backgroundColor: "#a0001e",
            color: "white"
          }}
        />

        <NumberButton
          text="4"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="5"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="6"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="-"
          buttonStyle={{
            backgroundColor: "#a0001e",
            color: "white"
          }}
        />

        <NumberButton
          text="1"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="2"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="3"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
        />

        <NumberButton
          text="+"
          buttonStyle={{
            backgroundColor: "#a0001e",
            color: "white"
          }}
        />

        <ActionButton
          text="0"
          buttonStyle={{
            backgroundColor: "transparent",
            color: "black"
          }}
          divWidth="75%"
        />

        <NumberButton
          text="="
          buttonStyle={{
            backgroundColor: "#a0001e",
            color: "white"
          }}
        />
      </div>
    </div>
  );
}
