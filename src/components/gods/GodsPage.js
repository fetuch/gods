import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadGods } from "../../redux/actions/godActions";
import GodList from "./GodList";

function GodsPage({ gods, loadGods }) {
  useEffect(() => {
    if (gods.length === 0) {
      loadGods().catch(error => {
        console.log("Loading gods failed:  " + error);
      });
    }
  });

  return (
    <>
      <h1 className="mb-3">Gods Index</h1>

      <GodList gods={gods} />
    </>
  );
}

GodsPage.propTypes = {
  gods: PropTypes.array.isRequired,
  loadGods: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    gods: state.gods
  };
}

const mapDispatchToProps = {
  loadGods
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GodsPage);
