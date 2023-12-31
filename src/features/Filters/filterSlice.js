import { createSlice } from "@reduxjs/toolkit";
import { resetToDefault } from "../Reset/resetAction";
const filterSlice = createSlice({
  name: "@@filter",
  initialState: "all",
  reducers: {
    setFilter: (_, action) => {
      // console.log(action.payload);
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => {
      return "all";
    });
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
