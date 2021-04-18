import React from 'react';
import './App.css';
import ContactForm from './Components/Form/ContactForm';
import Container from './Components/Container/Container';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // );
  // const [contactFilter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onFormSubmit = (addedContact, generatedId) => {
  //   if (addedContact.name.trim() === '' && addedContact.number.trim() === '') {
  //     alert(`Enter contact name and number`);
  //     return;
  //   }
  //   if (contacts.find(contact => contact.name === addedContact.name)) {
  //     alert(`${addedContact.name} is already in contacts`);
  //     return;
  //   } else {
  //     setContacts([...contacts, { ...addedContact, id: generatedId }]);
  //   }
  // };

  // const onFilterChange = e => {
  //   setFilter(e.target.value);
  // };

  // const onDeleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id) ?? []);
  // };

  // const visibleContacts = () => {
  //   const normFilter = contactFilter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normFilter),
  //   );
  // };

  return (
    <Container title="Phonebook">
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
