import React, { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}
class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }));
    });
  }

  render() {
    return (
      <Fragment>
        <h3>Planet List</h3>
        <hr />
        {this.state.planets.map((planet) => (
          <Planet
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
            id={planet.id}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
