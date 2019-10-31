import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      {props.sortTypes.map(sortType => (
        <label>
          <input type="radio"
            value={sortType}
            checked={props.currentSortType === sortType}
            onChange={() => props.changeSortType(sortType)} />
          {sortType}
        </label>
      ))}

      <label>
        <input type="radio" value="Price" checked={null} onChange={null} />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;