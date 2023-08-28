import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitted: false,
};

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    setSubmitted: (state, action) => {
      state.submitted = action.payload;
    },
  },
});

export const { setSubmitted } = newsletterSlice.actions;

export default newsletterSlice.reducer;
