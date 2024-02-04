import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { ContactTitle, Container } from './App.styled';


export const App = () => {

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>
      <ContactTitle>Contacts</ContactTitle>
      <Filter/>
      <ContactList/>
   </Container>
  );
};
