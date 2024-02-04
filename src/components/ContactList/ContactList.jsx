import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/reducers/contactsSlice';

// Компонент списка контактов
const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const onRemoveContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      {/* Список контактів */}
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name + ' : ' + contact.number}
            {
              // Кнопка удаления контакта
              <Button
                type="button"
                name="delete"
                onClick={() => onRemoveContact(contact.id)}
              >
                delete
              </Button>
            }
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ContactList;
