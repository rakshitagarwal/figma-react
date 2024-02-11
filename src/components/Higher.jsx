import React from "react";
import Logger from "./Logger";

const Higher = () => {
  return <div style={{ textAlign:"center", fontSize:"50px"}}>Higher Component</div>;
};

const EnhancedHigher = Logger(Higher);

export default EnhancedHigher;
