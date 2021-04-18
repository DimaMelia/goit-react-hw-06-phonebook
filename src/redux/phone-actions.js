import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phoneBook/addContact', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const findContacts = createAction('phonebook/filterChange');

const phoneActions = { addContact, deleteContact, findContacts };

export default phoneActions;
