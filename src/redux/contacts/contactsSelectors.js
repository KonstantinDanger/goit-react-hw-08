import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/filterSelectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(
      (contact) =>
        nameFilter.trim() === "" ||
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
