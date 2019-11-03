import React from "react";
import PropTypes from "prop-types";
import GodCard from "./GodCard";

const GodList = ({ gods }) => (
  <div className="card-columns">
    {gods.map(god => {
      return <GodCard god={god} key={god.id} />;
    })}
  </div>
);

GodList.propTypes = {
  gods: PropTypes.array.isRequired
};

export default GodList;
