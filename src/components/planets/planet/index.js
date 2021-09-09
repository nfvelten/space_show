import React, { Fragment } from "react";
import GrayImg from "../../shared/gray-img";
import DescLink from "../../shared/link-desc";
import Satellites from "../../shared/satellites";

const Planet = (props) => {
  return (
    <Fragment>
      <h4>{props.name}</h4>
      <GrayImg img_url={props.img_url} />
      <DescLink
        desc_url={props.desc}
        description={props.description}
        link={props.link}
      />
      <h4>Satelites</h4>
      {Satellites}
    </Fragment>
  );
};

export default Planet;
