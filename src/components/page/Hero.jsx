import React from "react";
import work from "../../images/workoffice.png";
import "../../style/styles.css";
import Button from "../Button";

const Hero = () => {
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br />
            <br />
            <div className="hero9">
              Endless Jobs,
              <br />
              Numerous Hires.
            </div>
            <p className="bold">1 lakh + jobs for you to explore</p>
            <div>
              <div className="hero1">
                <div className="hero2">Designation / Company name</div>
                <div className="hero3">Location</div>
              </div>
            </div>
            <br />
            <Button
              buttonName="Search"
              length="125"
              breadth="40"
              heading="Search"
              color="white"
            />
            <br />
            <hr width="500px" />
            <br />
            <div className="d-flex">
              <h3 className="hero10">Post your job for hiring</h3>
              <div className="hero6">
                <Button
                  buttonName="Post a job"
                  length="125"
                  breadth="40"
                  heading="Post a job"
                  background="white"
                  color="black"
                />
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-6 d-flex justify-content-between align-items-center">
            <img
              src={work}
              alt="workoffice"
              style={{ width: "700px", height: "600px" }}
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Hero;
