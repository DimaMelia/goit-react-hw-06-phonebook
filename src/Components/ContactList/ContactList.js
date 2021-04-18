import { connect } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import phoneActions from '../../redux/phone-actions';

function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts?.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

const getVisibleContacts = (contacts, filter) => {
  const normFilter = filter.toLowerCase()
  return contacts.filter(
    contact => contact.name.toLowerCase().includes(normFilter)
    )
}

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state.phonebook.items, state.phonebook.filter)
})

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(phoneActions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
