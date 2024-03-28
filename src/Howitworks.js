import React from "react";
import signupImage from "./images/signup1.PNG";
import learnImage from "./images/learn1.PNG";
import promptImage from "./images/prompt1.png";
import askImage from "./images/ask1.PNG";
import reviewImage from "./images/review1.PNG";
import watchVideoImage from "./images/watchvideo.png";
import howItWorksImage from "./images/howitsworks.png";

const Howitworks = () => {
  return (
    <section className="simplyenglish">
      <div className="container">
        <h1 className="abtus">How it Works</h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-6 col-md-6 col-12 mt-2">
            <ul>
              <li>
                <img
                  src={signupImage}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />{" "}
                Sign Up{" "}
              </li>
              <li>
                <img
                  src={learnImage}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Choose what you would like to learn
              </li>
              <li>
                <img
                  src={promptImage}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Leverage the guided prompts
              </li>
              <li>
                <img
                  src={askImage}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Type your own prompts to ask anything
              </li>
              <li>
                <img
                  src={reviewImage}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Review chat history
              </li>
            </ul>
            <div className="text-center mt-4">
              <img
                src={watchVideoImage}
                alt=""
                className="img-fluid"
                width="50%"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-2 text-center">
            <img
              src={howItWorksImage}
              alt="feature-img"
              width="85%"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
