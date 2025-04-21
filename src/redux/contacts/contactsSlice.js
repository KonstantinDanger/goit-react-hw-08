import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleFulfilled = (state) => {
  state.loading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //#region FETCH CONTACTS
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        handleFulfilled(state);
      })
      .addCase(fetchContacts.rejected, handleRejected)
      //#endregion

      //#region ADD CONTACTS
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        handleFulfilled(state);
      })
      .addCase(addContact.rejected, handleRejected)
      //#endregion

      //#region DELETE CONTACTS
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        handleFulfilled(state);
      })
      .addCase(deleteContact.rejected, handleRejected);
    //#endregion
  },
});

export default contactsSlice.reducer;
