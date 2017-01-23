import React, {
  PropTypes,
} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import './ItemFilter.css';

function renderOptions(filters) {
  const initialValue = [<option key="all" value="all">All</option>];

  return filters.reduce((acc, name) => {
    const element = (
      <option
        value={name}
        key={uniqueId('reactKey_')}
      >
        {name}
      </option>
    );

    acc.push(element);
    return acc;
  }, initialValue);
}

function ItemFilter({filters, selected, handleOnChange}) {
  const options = renderOptions(filters);
  return (
    <div className="ItemFilter">
      <label className="ItemFilter-label">Company:</label>
      <select
        className="ItemFilter-select"
        value={selected}
        onChange={handleOnChange}
      >
        {options}
      </select>
    </div>
  );
}

ItemFilter.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default ItemFilter;
