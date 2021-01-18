import { createSlice } from "@reduxjs/toolkit";

const initialTitle = "Mercado Libre";

const browserSlice = createSlice({
  name: "browser",
  initialState: {
    loading: false,
    value: initialTitle,
  },
  reducers: {
    titleUpdated: (state, action) => {
      state.loading = true;
      state.value = action.payload.value;
    },
    homeClicked: (state, action) => {
      state.value = initialTitle;
    },
  },
});

export const { titleUpdated, homeClicked } = browserSlice.actions;
export default browserSlice.reducer;

// Selector
export const itemSelector = (state) => state.ui.browser.value;
