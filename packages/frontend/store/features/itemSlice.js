import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    loading: false,
    value: null,
  },
  reducers: {
    itemClicked: (state, action) => {
      state.loading = true;
      state.value = action.payload.value;
    },
    itemReceived: (state, action) => {
      const { item } = action.payload.data;

      state.value = item;
      state.loading = false;
    },
    itemRequestFailed: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const {
  itemClicked,
  itemReceived,
  itemRequestFailed,
} = itemSlice.actions;
export default itemSlice.reducer;

// Action Creator
export const getItemById = (id) => async (dispatch, getState) => {
  dispatch(itemClicked({ value: { id } }));

  const data = await api.getItemById(id);

  dispatch(itemReceived({ data }));
};

// Selector
export const itemSelector = (state) => state.entities.item.value;
