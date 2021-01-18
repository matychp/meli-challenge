import { combineReducers } from "@reduxjs/toolkit";
import ui from "./uiReducer";
import entities from "./entitiesReducer";

export default combineReducers({
  ui,
  entities,
});
