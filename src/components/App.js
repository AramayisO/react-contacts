import { useState } from 'react';
import './App.css';
import ContactProvider from '../providers/ContactProvider';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import AuthContext from '../contexts/AuthContext';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

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
                <div>
                  <LogoutButton />
                </div>
                <ContactList />
                <ContactForm />
              </ContactProvider>
          }
      </AuthContext.Provider>
    </div>
  );
}

export default App;
