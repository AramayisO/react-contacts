import { useEffect, useState } from 'react';
import ContactContext from '../contexts/ContactContext';
import './App.css';
import ContactProvider from '../providers/ContactProvider';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import MyComponent from './MyComponent';
import AuthContext from '../contexts/AuthContext';
import LoginForm from './LoginForm';

const App = () => {

  const [user, setUser] = useState(null);
  
  const login = (username, password) => {
    if (username == 'captainhook' && password == 'supersecret') {
      setUser(username)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <AuthContext.Provider value={ { user, login, logout } }>
          {!user
            ? <LoginForm />
            : <ContactProvider>
                <ContactList />
                <ContactForm />
                <ContactContext.Consumer>
                  {({ contacts, addContact, removeContact }) => 
                    <MyComponent contacts={contacts} add={addContact} remove={removeContact} />
                  }
                </ContactContext.Consumer>
              </ContactProvider>
          }
      </AuthContext.Provider>
    </div>
  );
}

export default App;
