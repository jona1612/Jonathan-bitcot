import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete, onEdit, onView }) => {
    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onView={onView}
                />
            ))}
        </div>
    );
};

export default ContactList;
