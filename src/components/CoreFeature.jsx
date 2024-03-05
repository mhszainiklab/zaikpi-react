import React from "react";
import data from "../data/corefeatures.json";

const CoreFeature = () => {
  return (
    <div className="bg-white py-sm-150 py-30 position-relative z-1">
      <div className="container">
        <div className="features-block">
          {data.map((item) => (
            <div className="features-block-item" key={item.id}>
              <div className="row align-items-center rg-20">
                <div className="col-lg-6">
                  <div className="item-content">
                    <p className="landing-section-subtitle bg-transparent bd-one bd-c-main-color">{item.subtitle}</p>
                    <h4 className="landing-section-title text-ld-black">{item.title}</h4>
                    <p className="fs-18 fw-600 lh-26 text-para-text max-w-400 pb-20">{item.info}</p>
                    <ul className="lists">
                      {item.list.map((listInfo, index) => (
                        <li key={index}>
                          <div className="icon">
                            <img src={item.icon} alt="" />
                          </div>
                          <div className="content">
                            <p className="info">{listInfo}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
