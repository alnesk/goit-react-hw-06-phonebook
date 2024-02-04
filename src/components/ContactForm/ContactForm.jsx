import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import {
  FormButton,
  FormField,
  FormLabel,
  Input,
  LabelWrap,
} from './ContactForm.styled';
import {
  MdCreate,
  MdPermContactCalendar,
  MdStayCurrentPortrait,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/reducers/contactsSlice';

const initialValues = {
  name: '',
  number: '+380',
};
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
    return;
  };

  const handleSubmit = (values, actions) => {
    const contactData = { name, number };

    const isInContacts = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === contactData.name.toLowerCase() ||
        number.toLowerCase() === contactData.number.toLowerCase()
    );

    if (isInContacts) {
      alert(`The contact is already in contacts`);
      return;
    }
    dispatch(addContact(contactData));
    setName('');
    setNumber('');
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormField>
        <FormLabel>
          <LabelWrap>
            <MdPermContactCalendar />
            <span> Name:</span>
          </LabelWrap>
          <Input
            onChange={handleInputChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The title can only contain letters, apostrophes, hyphens, and spaces."
            name="name"
            type="text"
            required
          />
          <ErrorMessage name="name" />
        </FormLabel>
        <FormLabel>
          <LabelWrap>
            <MdStayCurrentPortrait />
            <span> Number:</span>
          </LabelWrap>
          <Input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </FormLabel>
        <FormButton type="submit" className="form-btn">
          {' '}
          <MdCreate size="22px" />
          <span>Add contact</span>
        </FormButton>
      </FormField>
    </Formik>
  );
};
