import React from "react";
import featureHead from "./images/featurehead.PNG";
import Guideprompts from "./images/Guideprompts.png"
const Features = () => {
  return (
    <section>
      <div className="container">
        <img
          src={featureHead}
          alt=""
          width="100px"
          className="img-fluid mb-3"
        />
        <h2 className="mt-3 mb-4">
          Simply English making your <br />
          communication skills your greatest asset
        </h2>
        <h5>
          Your Language Coach: Elevate speaking, writing, and interview skills
          seamlessly.
        </h5>
        <h1 className="abtus mt-5">App Features</h1>
        <div className="row mt-5 mb-5 d-flex align-items-center">
          <div id="demo" className="carousel slide w-100" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators featureindicator">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
              <li data-target="#demo" data-slide-to="3"></li>
              <li data-target="#demo" data-slide-to="4"></li>
            </ul>
            <div className="carousel-inner bgcircle">
              <div className="carousel-item active">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                    <img
                      src={Guideprompts}
                      alt="app-img"
                      width="48.2%"
                      className="img-fluid rounded h-100"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-2 mt-2 mb-2">
                    <div>
                      <h2 className="featurehead">Guided Learning Prompts</h2>
                      <p>
                        Let our Guided Learning Prompts be your personalized
                        language coach. Tailored to your proficiency, these
                        prompts not only refine your English skills but also
                        provide structured lessons, making learning on
                        SimplyEnglish a breeze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
