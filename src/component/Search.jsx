import React, { useState } from 'react';

const Search = props => {
  const [search, setSearch] = useState('');

  function searchFunction(e) {
    const value = e.target.value;
    setSearch(value);

    const query = value.toLowerCase();

    const searchData = props.data.filter(item =>
      item.title?.toLowerCase().includes(query)
    );

    props.setFilteredData(searchData);
    props.setCurrentPage(1);
  }

  return (
    <input
      id="search"
      name="search"
      type="text"
      value={search}
      onChange={searchFunction}
      placeholder="Search..."
      className="border p-2 rounded w-full max-w-[360px]"
    />
  );
};

export default Search;
