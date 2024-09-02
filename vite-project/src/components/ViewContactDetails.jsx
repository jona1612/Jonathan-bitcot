import React from 'react';

const ViewContactDetails = ({ contact, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Contact Details</h2>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>PhoneNumber:</strong> {contact.mobile}</p>
                <p><strong>Address:</strong> {contact.address}</p>
                <div className="modal-actions">
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ViewContactDetails;
