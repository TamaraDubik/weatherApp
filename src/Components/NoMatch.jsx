import React from "react";
import Pic from "../images/noMatch.png"

function NoMatch() {
  return (
    <div className="no-match">
      <img src={Pic} alt="" />
    </div>
  );
}

export default NoMatch;
