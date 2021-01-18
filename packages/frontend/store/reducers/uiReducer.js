import { combineReducers } from "@reduxjs/toolkit";
import search from "../features/searchSlice";
import browser from "../features/browserSlice";

export default combineReducers({
  search,
  browser,
});
