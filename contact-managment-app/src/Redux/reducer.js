// reducer.js
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactExists = (contacts, contact) => 
  contacts.some(el => el.first_name === contact.first_name && el.last_name === contact.last_name);

const handleEmptyFields = (contact) => 
  !contact.first_name || !contact.last_name || !contact.mob;

const saveContactsToLocalStorage = (contacts) => 
  localStorage.setItem('contacts', JSON.stringify(contacts));

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: {
      const { payload } = action;
      
      if (handleEmptyFields(payload)) {
        return state;
      }

      if (contactExists(state.contacts, payload)) {
        return state;
      }

      const updatedContacts = [...state.contacts, { id: state.contacts.length + 1, ...payload }];
      saveContactsToLocalStorage(updatedContacts);

      return {
        ...state,
        contacts: updatedContacts,
      };
    }

    case REMOVE_CONTACT: {
      const updatedContacts = state.contacts.filter(el => el.id !== action.payload.id);
      saveContactsToLocalStorage(updatedContacts);

      return {
        ...state,
        contacts: updatedContacts,
      };
    }

    case EDIT_CONTACT: {
      const { payload } = action;

      if (handleEmptyFields(payload)) {
        return state;
      }

      if (contactExists(state.contacts.filter(el => el.id !== payload.id), payload)) {
        return state;
      }

      const updatedContacts = state.contacts.map(el => 
        el.id === payload.id ? { ...payload } : el
      );
      saveContactsToLocalStorage(updatedContacts);

      return {
        ...state,
        contacts: updatedContacts,
      };
    }

    default:
      return state;
  }
}

