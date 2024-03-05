import React from "react";
import img from "/src/assets/core-features-1.png";

const PageFeature = () => {
  return (
    <div className="py-sm-150 py-30 landing-coreFeature-wrap position-relative z-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center pb-55">
              <p className="landing-section-subtitle bg-transparent bd-one bd-c-main-color">Features</p>
              <h4 className="lh-sm-57 lh-44 landing-section-title text-white">Zaikpi Made The App Effortless With Some Core Pages.</h4>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-start flex-column flex-lg-row g-20">
          <div className="nav flex-row flex-lg-column flex-wrap flex-lg-nowrap justify-content-center nav-pills zTab-reset zTab-vertical-one g-20" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-Dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Dashboard" type="button" role="tab" aria-controls="v-pills-Dashboard" aria-selected="true">
              1. Dashboard
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-Dashboard" role="tabpanel" aria-labelledby="v-pills-Dashboard-tab" tabindex="0">
              <div className="landing-coreFeatures-tabContent">
                <div className="img">
                  <img src={img} alt="" />
                </div>
                <div className="content">
                  <h4 className="title">Dashboard</h4>
                  <p className="info">Our service provider software is here to transform the way you handle your clients & team members, it will drive your future business to new heights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFeature;
