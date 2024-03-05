import React from "react";
import data from "../data/features.json";

const Features = () => {
  return (
    <div className="py-sm-150 py-30 landing-feature-wrap" id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center pb-55">
              <p className="landing-section-subtitle bg-transparent bd-one bd-c-main-color">Features</p>
              <h4 className="lh-sm-57 lh-44 landing-section-title text-white">
                <span className="d-sm-block">We Have Some</span> <span className="d-sm-block">Amazing Features For You</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row rg-30 justify-content-center">
          {data.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <div className="features-list-item">
                <div className="icon bg-main-color">
                  <img src={item.img} alt="" />
                </div>
                <div className="title">
                  <span className="d-md-block">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
