import React, { Fragment } from "react";

const DescLink = (props) => {
  return (
    <Fragment>
      <p>{props.description}</p>
      <button>
        <a href={props.link}>Saiba Mais</a>
      </button>
    </Fragment>
  );
};

export default DescLink;
