import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    value: "",
    results: [],
    categories: [],
  },
  reducers: {
    searchCleaned: (state, action) => {
      state.loading = false;
      state.value = "";
      state.results = [];
      state.categories = [];
    },
    searchRequested: (state, action) => {
      state.loading = true;
      state.value = action.payload.value;
    },
    searchReceived: (state, action) => {
      const { data: { categories = [], items = [] } = {} } = action.payload;

      state.results = items;
      state.categories = categories.map((category) => ({ text: category }));
      state.loading = false;
    },
    searchRequestFailed: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const {
  searchCleaned,
  searchRequested,
  searchReceived,
  searchRequestFailed,
} = searchSlice.actions;
export default searchSlice.reducer;

// Action Creator
export const fetchResults = (searchTerm) => async (dispatch, getState) => {
  dispatch(searchRequested({ value: searchTerm }));

  const data = await api.search(searchTerm);

  dispatch(searchReceived({ data }));
};

// Selector
export const searchTermSelector = (state) => state.ui.search.value;
export const resultsSelector = (state) => state.ui.search.results;
export const categoriesSelector = (state) => state.ui.search.categories;
