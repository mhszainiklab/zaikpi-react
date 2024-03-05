import React from "react";

const Pricing = () => {
  return (
    <section class="py-sm-150 py-30 landing-pricing-wrap position-relative z-1 bg-white" id="price">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="text-center pb-25">
              <p class="landing-section-subtitle bd-one bd-c-main-color">Pricing</p>
              <h4 class="lh-sm-57 lh-44 landing-section-title text-ld-black">Suitable Pricing Plan</h4>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center g-20 pb-55">
          <ul class="nav nav-tabs flex-column flex-sm-row zTab-reset zTab-four" id="pricePlanTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="billingMonthly-tab" data-bs-toggle="tab" data-bs-target="#billingMonthly-tab-pane" type="button" role="tab" aria-controls="billingMonthly-tab-pane" aria-selected="true">
                Monthly
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="billingYearly-tab" data-bs-toggle="tab" data-bs-target="#billingYearly-tab-pane" type="button" role="tab" aria-controls="billingYearly-tab-pane" aria-selected="false" tabindex="-1">
                Yearly
              </button>
            </li>
          </ul>
        </div>
        <div class="row rg-20">
          <div class="col-xl-4 col-md-6">
            <div class="price-plan-one">
              <div class="price-head">
                <h4 class="title">
                  Small Team (Upto <span>18</span> Members)
                </h4>
                <h4 class="plan-price zPrice-plan-monthly">$10</h4>
                <h4 class="plan-price zPrice-plan-yearly">$20</h4>
              </div>
              <div class="price-body">
                <ul class="zList-pb-10 mb-50">
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Division Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Department Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Session Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Role Wise Permission</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Goal Approval Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text text-decoration-line-through">Final Approval Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text text-decoration-line-through">Monthly Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text text-decoration-line-through">Quarterly Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text text-decoration-line-through">Performance Tracking</p>
                    </div>
                  </li>
                </ul>
                <a href="#" class="link">
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="price-plan-one price-plan-standard">
              <div class="price-head">
                <h4 class="title">
                  Small Team (Upto <span>45</span> Members)
                </h4>
                <h4 class="plan-price zPrice-plan-monthly">$25</h4>
                <h4 class="plan-price zPrice-plan-yearly">$50</h4>
              </div>
              <div class="price-body">
                <ul class="zList-pb-10 mb-50">
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Division Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Department Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Session Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Role Wise Permission</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Goal Approval Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Final Approval Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Monthly Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text text-decoration-line-through">Quarterly Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text text-decoration-line-through">Performance Tracking</p>
                    </div>
                  </li>
                </ul>
                <a href="#" class="link">
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="price-plan-one price-plan-enterprise">
              <div class="price-head">
                <h4 class="title">
                  Small Team (Upto <span>70</span> Members)
                </h4>
                <h4 class="plan-price zPrice-plan-monthly">$30</h4>
                <h4 class="plan-price zPrice-plan-yearly">$60</h4>
              </div>
              <div class="price-body">
                <ul class="zList-pb-10 mb-50">
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Division Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Department Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Session Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Role Wise Permission</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Goal Approval Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Final Approval Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Monthly Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Quarterly Goal Settings</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start g-10">
                      <div class="flex-shrink-0 d-flex justify-content-center align-items-center w-15 h-15 rounded-circle bg-main-color mt-4">
                        <img src="/src/assets/features-check-icon.svg" alt="" />
                      </div>
                      <p class="fs-18 fw-400 lh-26 text-para-text">Performance Tracking</p>
                    </div>
                  </li>
                </ul>
                <a href="#" class="link">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
