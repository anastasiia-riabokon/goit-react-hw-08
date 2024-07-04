import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectContacts, selectError, selectLoading} from "../../redux/contacts/selectors";
import {selectFilteredContacts, selectNameFilter} from "../../redux/filters/selectors";
import {fetchContacts} from "../../redux/contacts/operations";
import {setCurrentContact} from "../../redux/contacts/slice";

import Section from "../../components/Layout/Section";
import Container from "../../components/Layout/Container";
import Title from "../../components/Title/Title";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Notification from "../../components/Notification/Notification";
import Loader from "../../components/Loader/Loader";
import EditContactModal from "../../components/EditContactModal/EditContactModal";

import NotificationDelete from "../../components/NotificationDelete/NotificationDelete";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWindow, setIsOpenWindow] = useState(false);
  const [deleteContactId, setDeleteContactId] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = (contact) => {
    dispatch(setCurrentContact(contact));
    setIsOpen(true);
  };

  const handleDeleteContact = (id) => {
    setDeleteContactId(id);
    setIsOpenWindow(true);
  };

  return (
    <>
      <Section>
        <Container>
          <Title />
          <ContactForm />
          <SearchBox />
          {isLoading && <Loader />}
          {!isLoading && !isError && filteredContacts.length !== 0 && (
            <ContactList
              users={filteredContacts}
              openModal={handleOpenModal}
              questionDelete={handleDeleteContact}
            />
          )}
          {filteredContacts.length === 0 && contacts.length !== 0 && (
            <Notification text={`No contact found ${filter}`} />
          )}

          {contacts.length === 0 && !isLoading && !isError ? (
            <Notification text={"Add your first contact!"} />
          ) : (
            ""
          )}

          {isError && <Notification text={"Woops! Something went wrong😰"} />}
        </Container>
      </Section>
      <EditContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <NotificationDelete
        isOpenWindow={isOpenWindow}
        onClose={() => setIsOpenWindow(false)}
        id={deleteContactId}
      />
    </>
  );
};
export default ContactsPage;
