import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactList}>
      {filteredContacts.length == 0 ? (
        <div>No contacts found</div>
      ) : (
        filteredContacts.map((contact) => {
          return (
            <div key={contact.id} className={css.contact}>
              <Contact contact={contact} onDelete={handleDeleteContact} />
            </div>
          );
        })
      )}
    </div>
  );
}
