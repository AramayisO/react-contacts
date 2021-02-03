import { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {

  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  }

  return (
    <div>
      <ContactList contacts={contacts} />
      <ContactForm onSubmit={addContact} />
    </div>
  );
}

export default App;
