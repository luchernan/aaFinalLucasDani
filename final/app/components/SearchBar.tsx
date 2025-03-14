import React from "react";

interface SearchBoxProps {
  placeholder: string;
  onSearchChange: (searchText: string) => void;
  onSearchSubmit: () => void;
}

const SearchBar = ({ placeholder, onSearchChange, onSearchSubmit }: SearchBoxProps) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onSearchChange(e.target.value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearchSubmit();
    }
  }

  return (
    <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 transition duration-200">
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full px-4 py-2 text-gray-700 outline-none bg-transparent"
      />
      <button
        onClick={onSearchSubmit}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-r-full hover:bg-green-600 transition duration-200"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
