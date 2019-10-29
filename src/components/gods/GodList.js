import React from "react";
import PropTypes from "prop-types";

const GodList = ({ gods }) => (
  <div className="card-columns">
    {gods.map(god => {
      return (
        <div className="card mb-3" key={god.id}>
          <img
            src="https://picsum.photos/id/680/300/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{god.name}</h5>
            <p className="card-text">{god.description}</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      );
    })}
  </div>
);

GodList.propTypes = {
  gods: PropTypes.array.isRequired
};

export default GodList;
