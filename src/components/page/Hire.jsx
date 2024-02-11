import React from "react";
import "../../style/styles.css";
import Button from "../Button";

const Hire = () => {
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <span className="hire6">Hire Exceptional Talent</span>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-md-6">
          <div className="hire1">
            <div className="hire2">
              Whether you're seeking entry-level talents,
              <br />
              mid-senior professionals, or top-tier management
              <br />
              and tech experts, our diverse portfolio has you
              <br />
              covered. Effortlessly source the perfect candidates
              <br />
              for your needs with ease and convenience.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hire3">
            <Button
              buttonName="Post a job"
              length="140"
              breadth="40"
              heading="Post a job"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Hire;
