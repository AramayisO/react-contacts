import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import ContactContext from '../contexts/ContactContext';
import { useContacts } from '../hooks';
import ContactItem from './ContactItem';

const ContactList = () => {

    const { contacts } = useContacts();
    const { user, login, logout } = useContext(AuthContext)

    return (
        <div className="ContactList">
            {contacts.map(contact => (
                <ContactItem
                    key={contact.phoneNumber}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    profileImage={contact.profileImage}
                    phoneNumber={contact.phoneNumber}
                />
            ))
            }
        </div>
    )
}

export default ContactList;