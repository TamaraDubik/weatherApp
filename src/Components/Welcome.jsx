import React from "react";
import HomePic from "../images/mainPicNew.svg";
import Main from "../images/main.png";

function Welcome() {
  return (
    <div className="welcomeComponent">
      <div className="container">
        <img src={Main} alt="" width={500} className="text"/>
        <img src={HomePic} alt="clouds and sun" className="mainPic" />
      </div>
    </div>
  );
}

export default Welcome;
