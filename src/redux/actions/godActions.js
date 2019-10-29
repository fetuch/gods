import * as types from "./actionTypes";
import * as godApi from "../../api/godApi";

export function loadGodsSuccess(gods) {
  return { type: types.LOAD_GODS_SUCCESS, gods };
}

export function loadGods() {
  return function(dispatch) {
    return godApi
      .getGods()
      .then(gods => {
        dispatch(loadGodsSuccess(gods));
      })
      .catch(error => {
        throw error;
      });
  };
}
