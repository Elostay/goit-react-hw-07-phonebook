import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';
import {
  selectContacts,
  selectError,
  selectFilterValue,
  selectLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContactsAction } from 'api/operations';

const ContactList = () => {
  const { filter } = useSelector(selectFilterValue);
  const { contacts } = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

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
      {isLoading && !error && <b>Request in progress</b>}
      {visibleContacts.map(({ name, id, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};

export default ContactList;
