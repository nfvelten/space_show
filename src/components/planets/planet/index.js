import React, { Fragment } from "react";
import GrayImg from "../../shared/gray-img";
import DescLink from "../../shared/link-desc";
import { Link } from "react-router-dom";

const Planet = (props) => {
  return (
    <Fragment>
      <h4>
        <Link to={`/planet/${props.id}`}>{props.name}</Link>
      </h4>
      <GrayImg img_url={props.img_url} />
      <DescLink
        desc_url={props.desc}
        description={props.description}
        link={props.link}
      />
      <Link to={`/planet/${props.id}`}></Link>
    </Fragment>
  );
};
export default Planet;
