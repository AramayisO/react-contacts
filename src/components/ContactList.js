import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import ContactContext from '../contexts/ContactContext';
import { useContacts } from '../hooks';
import ContactItem from './ContactItem';

const ContactList = () => {

    const { contacts, removeContact } = useContacts();
    const { user, login, logout } = useContext(AuthContext)

    return (
        <div className="ContactList">
            {contacts.map((contact, index) => (
                <ContactItem
                    key={contact.phoneNumber}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    profileImage={contact.profileImage}
                    phoneNumber={contact.phoneNumber}
                    deleteContact={() => removeContact(index)}
                />
            ))
            }
        </div>
    )
}

export default ContactList;