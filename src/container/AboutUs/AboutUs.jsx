import React from "react";

import "./AboutUs.css";

import { images } from "../../constants";

const AboutUs = () => (
  <section className="app__aboutus app__bg section__padding">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="section__container app__aboutus-content">
      <div className="app__aboutus-content_about">
        <h2>About Us</h2>
        <img src={images.spoon} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="" />
      </div>
      <div className="app__aboutus-content_history">
        <h2>Our History</h2>
        <img src={images.spoon} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </section>
);

export default AboutUs;
