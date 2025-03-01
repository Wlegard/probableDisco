import React, { useState, useEffect } from "react";

const axios = require("axios");

function Avatar(props) {
  

  return (
    <div>
     <img src={props.currentImage}/>
    </div>
  );
}

export default Avatar;
