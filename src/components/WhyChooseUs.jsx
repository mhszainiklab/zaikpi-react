import React from "react";
import data from "../data/whychooseus.json";

const WhyChooseUs = () => {
  return (
    <div className="py-sm-150 py-30 landing-whyChooseUs-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center pb-55">
              <p className="landing-section-subtitle bg-transparent bd-one bd-c-main-color">Why Choose Us</p>
              <h4 className="landing-section-title text-ld-black">Some Specific Reason To Choose Our Zaikpi.</h4>
            </div>
          </div>
        </div>
        <div className="row rg-20 justify-content-center">
          {data.map((item) => (
            <div className="col-lg-4 col-sm-6">
              <div className="landing-whyChooseUs-item">
                <div className="icon bg-main-color">
                  <img src={item.icon} alt="" />
                </div>
                <div className="title-wrap">
                  <h4 className="title">{item.title}</h4>
                </div>
                <p className="info">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
