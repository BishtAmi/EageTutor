import React from "react";
import $ from "jquery";
import { useEffect } from "react";
import "owl.carousel/dist/owl.carousel.min.js";
import craft from "./images/craft.PNG";
import communication from "./images/communication.PNG";
import speak from "./images/speak.PNG";
import powerfull from "./images/powerful.jpeg";
const Casestudy = () => {
  useEffect(() => {
    // Owl Carousel initialization
    window.$("#news-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      navigation: true,
      navigationText: ["", ""],
      pagination: true,
      autoPlay: true,
    });
  }, []);

  return (
    <section className="casestudy">
      <div className="container mt-5">
        <h1 className="abtus mt-4">Case Study</h1>
        <div className="row mt-5 mb-3">
          <div className="col-md-12">
            <div id="news-slider" className="owl-carousel">
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img
                      className="card-img-top"
                      src={craft}
                      alt=""
                      // className="img-fluid"
                    />
                    <div className="card-body">
                      <h5 className="card-text">
                        Craft A+ Essays: Elevate your grades with Simply
                        English's writing expertise.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img
                      className="card-img-top"
                      src={communication}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5>
                        From Lines of Code to Lines of Communication: Simply
                        English Unleashes Your Potential
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img
                      className="card-img-top"
                      src={speak}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5>
                        Speak with Heart: Simply English—Moms, speaking the
                        language of their children with ease
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img
                      className="card-img-top"
                      src={powerfull}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="">
                        Powerful Vision, Persuasive Words: Simply English for
                        Business Leaders.
                      </h5>
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

export default Casestudy;
