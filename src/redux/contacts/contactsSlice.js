import { createSlice } from '@reduxjs/toolkit';
import {
  addContactAction,
  deleteContactAction,
  fetchContactsAction,
} from 'api/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAction.pending, handlePending)
      .addCase(fetchContactsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsAction.rejected, handleRejected)
      .addCase(addContactAction.pending, handlePending)
      .addCase(addContactAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContactAction.rejected, handleRejected)
      .addCase(deleteContactAction.pending, handlePending)
      .addCase(deleteContactAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.splice(index, 1, action.payload);
      })
      .addCase(deleteContactAction.rejected, handleRejected);
  },
  //   reducers: {
  //     addContactAction: {
  //       reducer: (state, action) => {
  //         return { ...state, contacts: [...state.contacts, action.payload] };
  //       },
  //     },
  //     deleteContactAction: {
  //       reducer: (state, action) => {
  //         return {
  //           ...state,
  //           contacts: state.contacts.filter(el => el.id !== action.payload),
  //         };
  //       },
  //     },
  //   },
});

// export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
