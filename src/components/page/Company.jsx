import React from "react";
import "../../style/company.css";

const Company = ({ compName, image, jobs, text1, text2 }) => {
  return (
    <div className="col-md-2">
      <div
        className="company6"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0px 2px 4px 4px rgba(255, 0, 0, 0.1)";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "1px solid #D0D5DD";
          e.currentTarget.style.boxShadow =
            "0px 1px 2px 4px rgba(71.34, 84.39, 102.66, 0.05)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <div className="company1">
          <div className="company2">
            <img
              src={image}
              alt={compName}
              style={{ textAlign: "center", width: "105px" }}
            />
          </div>
        </div>
        <div>
          <div className="company3">
            {compName}
            <div className="company4">{jobs}+ jobs available</div>
          </div>
        </div>
        <div className="company5">
          {text1}
          <br />
          {text2}
        </div>
      </div>
    </div>
  );
};

export default Company;
