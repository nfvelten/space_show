import React, { Fragment } from "react";
import GrayImg from "../../shared/gray-img";
import DescLink from "../../shared/link-desc";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: [],
    };
  }

  componentDidMount() {
    getSatellites(this.props.id).then((data) => {
      this.setState((state) => ({
        satellites: data["satellites"],
      }));
    });
  }

  render() {
    return (
      <Fragment>
        <h4>{this.props.name}</h4>
        <GrayImg img_url={this.props.img_url} />
        <DescLink
          desc_url={this.props.desc}
          description={this.props.description}
          link={this.props.link}
        />
        <h4>Satelites</h4>
        <ul>
          {this.state.satellites.map((satellites, index) => (
            <li key={index}>{satellites.name}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
export default Planet;
