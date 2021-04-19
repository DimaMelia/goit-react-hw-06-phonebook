import React from 'react';
import './App.css';
import ContactForm from './Components/Form/ContactForm';
import Container from './Components/Container/Container';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

function App() {
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
