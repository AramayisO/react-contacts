import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {

    return (
        <div>
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