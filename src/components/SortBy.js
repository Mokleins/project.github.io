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
          value="Popularity Ascending"
          name="sort"
          checked={sort === 'Popularity Ascending'}
          onChange={handleSortChange}
        />
        Popularity Ascending
      </label>
      <label>
        <input
          type="radio"
          value="Popularity Descending"
          name="sort"
          checked={sort === 'Popularity Descending'}
          onChange={handleSortChange}
        />
        Popularity Descending
      </label>
    </div>
  );
}

export default SortBy;
