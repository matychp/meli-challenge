import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/rootReducer";

export default function () {
  return configureStore({ reducer });
}
