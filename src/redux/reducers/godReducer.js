import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function godReducer(state = initialState.gods, action) {
  switch (action.type) {
    case types.LOAD_GODS_SUCCESS:
      return action.gods;
    default:
      return state;
  }
}
