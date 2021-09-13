import React, { Fragment, useState } from "react";

const initialState = {
  name: "",
};

const Form = (props) => {
  const [fields, setFields] = useState(initialState);

  const handleChange = (e) =>
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.addSatellites(fields);
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
            id="nameSatel"
            type="text"
            name="name"
            value={fields.name}
          />
        </div>
        <input type="submit" />
      </form>
    </Fragment>
  );
};
export default Form;
