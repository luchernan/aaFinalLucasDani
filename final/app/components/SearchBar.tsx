import React from 'react'

interface SearchBoxProps {
    placeholder: string;
    onSearchChange: (searchText: string) => void;
}

const SearchBar = ({ placeholder, onSearchChange }: SearchBoxProps) => {
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        onSearchChange(e.target.value);
    }
    return (
        <input
            type="search"
            placeholder={placeholder}
            onChange={onChange}
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
    );
};

export default SearchBar