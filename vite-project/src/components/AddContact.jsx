import React, { useState } from 'react';

const AddContact = ({ onSave, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !mobile || !address) {
            alert('Please fill in all fields');
            return;
        }
        onSave({ name, email, mobile, address });
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add Contact</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>PhoneNumber:</label>
                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <label>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <div className="modal-actions">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
