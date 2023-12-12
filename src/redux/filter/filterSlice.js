import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setSearchFilterAction(state, action) {
      return { ...state, filter: `${action.payload}` };
    },
  },
});

export const { setSearchFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
