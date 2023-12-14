import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';
import { selectContacts, selectFilterValue } from '../../redux/selectors';

const ContactList = () => {
  const { filter } = useSelector(selectFilterValue);
  const { contacts } = useSelector(selectContacts);

  const getFilteredContacts = () => {
    if (filter.filter === '') return;
    const normalizedFilter = filter.toLowerCase().trim();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
    return visibleContacts;
  };
  const visibleContacts = getFilteredContacts();
  return (
    <List>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
