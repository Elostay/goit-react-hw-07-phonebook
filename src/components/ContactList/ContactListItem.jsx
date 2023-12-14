import { useDispatch } from 'react-redux';
import { Item, Button, NumberContainer, Number } from './ContactList.styled';
import { deleteContactAction } from 'api/operations';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAction(id));
  };
  return (
    <Item id={id}>
      <NumberContainer>
        <p>{name}:</p> <Number>{phone}</Number>
      </NumberContainer>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactListItem;
