import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    activeDropdown: null,
  },
  reducers: {
    setActiveDropdown: (state, action) => {
      state.activeDropdown = action.payload;
    },
    clearActiveDropdown: (state) => {
      state.activeDropdown = null;
    },
  },
});

export const { setActiveDropdown, clearActiveDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
