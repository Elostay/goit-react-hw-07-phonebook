import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button, Label } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContactAction } from '../../redux/contacts/contactsSlice';

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = ({ sumbit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const formRef = useRef(null);
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactAction({ name, number, id: nanoid() }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Label htmlFor={nameId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        id={nameId}
        onChange={handleChange}
        required
      />

      <Label htmlFor={numberId}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        id={numberId}
        onChange={handleChange}
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
