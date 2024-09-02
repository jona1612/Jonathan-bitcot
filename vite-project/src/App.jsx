import React, { useState } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContact';
import EditContactForm from './components/EditContact';
import ViewContactDetails from './components/ViewContactDetails';
import SearchBar from './components/SearchContact';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Aaron', mobile: '5785664545', email: 'aaron@gmail.com', address: '123 Main St' },
    { id: 2, name: 'Buincy Hanson', mobile: '5862165454', email: 'hanson@gmail.com', address: '456 Elm St' },
    { id: 3, name: 'Hanna Donovan', mobile: '6365425254', email: 'hanna@gmail.com', address: '789 Oak St' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingContact, setEditingContact] = useState(null);
  const [viewingContact, setViewingContact] = useState(null);
  const [isAddContactFormVisible, setAddContactFormVisible] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
    );
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.mobile.includes(searchTerm)
  );

  return (
    <div className="app-container">
      <header className="header">
        <h1>All Contacts</h1>
        <button className="add-contact-btn" onClick={() => setAddContactFormVisible(true)}>+</button>
      </header>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
        onEdit={setEditingContact}
        onView={setViewingContact}
      />
      {isAddContactFormVisible && (
        <AddContactForm onSave={addContact} onClose={() => setAddContactFormVisible(false)} />
      )}
      {editingContact && (
        <EditContactForm contact={editingContact} onSave={updateContact} onClose={() => setEditingContact(null)} />
      )}
      {viewingContact && (
        <ViewContactDetails contact={viewingContact} onClose={() => setViewingContact(null)} />
      )}
    </div>
  );
};

export default App;
