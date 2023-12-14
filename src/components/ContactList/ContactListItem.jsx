import { useDispatch } from 'react-redux';
import { Item, Button, NumberContainer, Number } from './ContactList.styled';
import { deleteContactAction } from 'api/operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = deleteId => {
    dispatch(deleteContactAction(deleteId));
  };
  return (
    <Item id={id}>
      <NumberContainer>
        <p>{name}:</p> <Number>{number}</Number>
      </NumberContainer>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactListItem;
