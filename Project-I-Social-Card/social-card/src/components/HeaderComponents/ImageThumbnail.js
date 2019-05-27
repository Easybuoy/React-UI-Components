import React from "react";
import "./Header.css";

function ImageThumbnail() {
  return (
    <div className="headerImageDiv">
      <img
        onClick={() => {
          window.location.reload();
        }}
        className="headerImage"
        src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
        alt="logo"
      />
    </div>
  );
}

export default ImageThumbnail;
