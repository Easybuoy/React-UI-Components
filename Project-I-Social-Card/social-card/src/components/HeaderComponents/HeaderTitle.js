import React from "react";
import moment from "moment";
import "./Header.css";

function HeaderTitle() {
  return (
    <div className="headerTitle">
      <h3>Lambda School</h3>
      <p>@LambdaSchool</p>
      <p>&#8226; {moment().format("LL")}</p>
    </div>
  );
}

export default HeaderTitle;
