import React from "react";
import Button from "../Button";

const Embark = () => {
  return (
    <div className="container">
      <div style={{ paddingLeft: "40px" }}>
        <br />
        <br />
        <br />
        <br />
        <span
          style={{ textAlign: "left", fontWeight: 500, fontSize: "40px" }}
        >
          Embark on your journey! <br />
          Let's get started on achieving your goals together.
        </span>
        <br />
        <br />
        <Button
          buttonName="Get started"
          length="120"
          breadth="40"
          heading="Get started"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Embark;
