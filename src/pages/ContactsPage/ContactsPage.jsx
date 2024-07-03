import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {selectContacts, selectError, selectLoading} from "../../redux/contacts/selectors";
import {selectFilteredContacts, selectNameFilter} from "../../redux/filters/selectors";
import {fetchContacts} from "../../redux/contacts/operations";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Notification from "./Notification/Notification";
import Title from "./Title/Title";
import Section from "./Layout/Section";
import Container from "./Layout/Container";
import Loader from "./Loader/Loader";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Title />
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {!isLoading && !isError && filteredContacts.length !== 0 && (
          <ContactList users={filteredContacts} />
        )}
        {filteredContacts.length === 0 && contacts.length !== 0 && (
          <Notification text={`No contact found ${filter}`} />
        )}

        {isError && <Notification text={"Woops! Something went wrong😰"} />}
      </Container>
    </Section>
  );
};
export default ContactsPage;
