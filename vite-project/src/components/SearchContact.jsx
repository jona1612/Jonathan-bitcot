import React from 'react';

const SearchContact = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            type="text"
            placeholder="Search by name or mobile..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
        />
    );
};

export default SearchContact;
