import React from 'react';

function SortBy({ sort, setSort }) {
  function handleSortChange(event) {
    setSort(event.target.value);
  }
  return (
    <div className="sort">
      <strong>Sort By:</strong>
      <label>
        <input
          type="radio"
          value="Name"
          name="sort"
          checked={sort === 'Name'}
          onChange={handleSortChange}
        />
        Name
      </label>
      <label>
        <input
          type="radio"
          value="Popularity"
          name="sort"
          checked={sort === 'Popularity'}
          onChange={handleSortChange}
        />
        Popularity
      </label>
    </div>
  );
}

export default SortBy;
