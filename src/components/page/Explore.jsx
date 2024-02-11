import React from "react";
import Company from "./Company";
import facebook from "../../images/facebook.png";
import amazon from "../../images/amazon.png";
import google from "../../images/google.png";
import adobe from "../../images/adobe.png";
import microsoft from "../../images/microsoft.png";
import uber from "../../images/uber.png";
import "../../style/styles.css";
import Button from "../Button";

const Explore = () => {
  return (
    <div
      style={{
        paddingLeft: "200px",
        paddingRight: "200px",
        backgroundColor: "#F5F5F5",
      }}
    >
      <div>
        <br />
        <br />
        <h1 style={{ textAlign: "center", color: "#000000" }}>
          Explore Leading Employers Now Hiring
        </h1>
        <br />
        <br />
        <div className="row">
          <Company
            compName="Facebook"
            jobs="120"
            image={facebook}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Amazon"
            jobs="500"
            image={amazon}
            text1="Leading in digital"
            text2="product engineering."
          />
          <Company
            compName="Google"
            jobs="90"
            image={google}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Microsoft"
            jobs="400"
            image={microsoft}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Uber"
            jobs="170"
            image={uber}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Adobe"
            jobs="250"
            image={adobe}
            text1="Global professional"
            text2="services firm."
          />
        </div>
        <br />
        <div className="row">
          <Company
            compName="Adobe"
            jobs="250"
            image={adobe}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Uber"
            jobs="170"
            image={uber}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Microsoft"
            jobs="400"
            image={microsoft}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Amazon"
            jobs="500"
            image={amazon}
            text1="Leading in digital"
            text2="product engineering."
          />
          <Company
            compName="Facebook"
            jobs="120"
            image={facebook}
            text1="Global professional"
            text2="services firm."
          />
          <Company
            compName="Google"
            jobs="90"
            image={google}
            text1="Global professional"
            text2="services firm."
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            buttonName="View all"
            length="190"
            breadth="40"
            heading="View all"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Explore;
