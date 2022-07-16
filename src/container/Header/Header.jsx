import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <section className="app__hero section__container section__padding">
    <div className="app__hero-info">
      <SubHeading title={"Chase the new Flavour"} />
      <h1 className="p__cormorant">The key to Fine dining</h1>
      <p className="p__opensans">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button className="custom__button">Explore More</button>
    </div>
    <div className="app__hero-img">
      <img src={images.welcome} alt="hero welcome" />
    </div>
  </section>
);

export default Header;
