import React from 'react';
import ContactContext from '../contexts/ContactContext';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { contacts } = this.context;
        return (
            <div>
                <p>My Component</p>
            {contacts &&
                contacts.map(contact => <div key={contact.phoneNumber}>{contact.phoneNumber}</div>)
            }

            </div>
        )
    }
}

MyComponent.contextType = ContactContext;

export default MyComponent;