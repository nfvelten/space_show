import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../shared/gray-img";
import DescLink from "../shared/link-desc";
import { useParams, useHistory, Redirect } from "react-router-dom";

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = () => {
  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [redirect, setRedirect] = useState(false);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    getPlanet(id).then(
      (data) => {
        setSatellites(data["satellites"]);
        setPlanet(data["data"]);
      },
      (error) => {
        setRedirect(true);
      }
    );
  }, [id]);

  const goToHome = () => {
    history.push("/");
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <h4>{planet.name}</h4>
      <GrayImg img_url={planet.img_url} />
      <DescLink
        desc_url={planet.desc}
        description={planet.description}
        link={planet.link}
      />
      <h4>Satelites</h4>
      <hr />
      <ul>
        {satellites.map((satellites, index) => (
          <li key={index}>{satellites.name}</li>
        ))}
      </ul>
      <hr />
      <button type="button" onClick={goToHome}>
        Home
      </button>
    </Fragment>
  );
};
export default Planet;
