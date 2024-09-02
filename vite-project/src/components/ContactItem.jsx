import React from 'react';

const ContactItem = ({ contact, onDelete, onEdit, onView }) => {
    return (
        <div className="contact-item">
            <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-mobile">{contact.mobile}</span>
            </div>
            <div className="contact-actions">
                <button onClick={() => onView(contact)}>View</button>
                <button onClick={() => onEdit(contact)}>✏️\Edit</button>
                <button onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
        </div>
    );
};

export default ContactItem;
