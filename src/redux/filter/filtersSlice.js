import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    nameFilter: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
