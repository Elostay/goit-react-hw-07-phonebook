import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactAction: {
      reducer: (state, action) => {
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
    },
    deleteContactAction: {
      reducer: (state, action) => {
        return {
          ...state,
          contacts: state.contacts.filter(el => el.id !== action.payload),
        };
      },
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
