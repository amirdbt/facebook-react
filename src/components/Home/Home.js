import React from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3"
const Home = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-xs-3 col-md-3 col-lg-3">
      
          <Section1 />
        </div>

        <div className="col-xs-6 col-md-6 col-lg-6">
         
          <Section2 />
        </div>

        <div className="col-xs-3 col-md-3 col-lg-3">
         
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default Home;
