import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
} from "../../redux/contacts/contactsSelectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {!error && isLoading && <p>Loading data...</p>}
      <ContactList />
    </>
  );
}
