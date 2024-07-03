import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectContacts, selectError, selectLoading} from "../../redux/contacts/selectors";
import {selectFilteredContacts, selectNameFilter} from "../../redux/filters/selectors";
import {fetchContacts} from "../../redux/contacts/operations";
import Section from "../../components/Layout/Section";
import Container from "../../components/Layout/Container";
import Title from "../../components/Title/Title";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Notification from "../../components/Notification/Notification";
import Loader from "../../components/Loader/Loader";

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
