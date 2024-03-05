import React from "react";
import data from "../data/heroBanner.json";

const HeroBanner = () => {
  return (
    <div className="landing-banner-wrap position-relative z-1">
      {data.map((item) => (
        <div className="container" key={item.id}>
          <div className="landing-hero-content">
            <h4 className="title">{item.title}</h4>
            <p className="info">{item.info}</p>
            <a href="#" className="btnLink">
              {"Request a Demo"}
            </a>
          </div>
          <div className="landing-hero-img">
            <div className="img">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
