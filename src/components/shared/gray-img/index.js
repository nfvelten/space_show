import React, { Fragment } from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <Fragment>
      <img alt="mercury" className="gray-img" src={props.img_url} />
    </Fragment>
  );
};

export default GrayImg;
