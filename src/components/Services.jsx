import React from "react";
import ServicesItems from "./ServicesItems";

function services() {
  const serviceTitle = "New Home Construction";
  const serviceContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.";

  return (
    <>
      <div id='services'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Services</h2>
          </div>
          <div className='row'>
            <ServicesItems Title={serviceTitle} Content={serviceContent} />
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-2.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Home Additions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-3.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Bathroom Remodels</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-4.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Kitchen Remodels</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-5.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Windows & Doors</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-6.jpeg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Decks & Porches</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default services;
