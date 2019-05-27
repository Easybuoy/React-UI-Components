import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer() {
  return (
    <div className="cardContainer" onClick={() => {window.location.href="https://reactjs.org/"}}>
      <div />
      <div className="card">
        <CardBanner />
        <CardContent />
      </div>
    </div>
  );
}

export default CardContainer;
