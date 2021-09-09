import React, { Fragment } from "react";

const Satellites = ["a", "b", "c", "d"].map((n) => {
  return (
    <Fragment>
      <ul>
        <li>Satelite {n}</li>
      </ul>
    </Fragment>
  );
});

export default Satellites;
