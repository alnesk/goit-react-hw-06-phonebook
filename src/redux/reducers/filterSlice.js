import { createSlice } from "@reduxjs/toolkit";


const initialStateFilter = {
  filter:""
 };

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateFilter,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
