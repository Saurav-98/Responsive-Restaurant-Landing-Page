import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <header>
    <h5 className="subheading__title">{title}</h5>
    <img src={images.spoon} alt="serving spoon" />
  </header>
);

export default SubHeading;
