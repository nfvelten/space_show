import React, { Fragment, useState } from "react";

const initialState = {
  name: "",
  description: "",
  link: "",
  img_url: "",
};

const Form = (props) => {
  const [fields, setFields] = useState(initialState);
  const handleChange = (e) =>
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  const handleSubmit = (event) => {
    props.addPlanet(fields);
    event.preventDefault();
    setFields(initialState);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            value={fields.name}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            onChange={handleChange}
            type="text"
            id="description"
            value={fields.description}
            name="description"
          />
        </div>
        <div>
          <label htmlFor="link">Link: </label>
          <input
            onChange={handleChange}
            type="text"
            id="link"
            value={fields.link}
            name="link"
          />
        </div>
        <div>
          <label htmlFor="img_url">img_url: </label>
          <input
            onChange={handleChange}
            type="text"
            id="img_url"
            value={fields.img_url}
            name="img_url"
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
