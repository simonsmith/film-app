import React, {
  PropTypes,
} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import flow from 'lodash/fp/flow';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import Film from './Film';
import './ItemList.css';

function renderItems(items, selected) {
  return flow(
    filter((item) => {
      if (selected === 'all') {return true;}
      return item.company === selected;
    }),
    map((item) => {
      return (
        <li key={uniqueId('reactKey_')} className="ItemList-item">
          <Film {...item} />
        </li>
      );
    })
  )(items);
}

function ItemList({items, selected}) {
  return (
    <ul className="ItemList">
      {renderItems(items, selected)}
    </ul>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
};

export default ItemList;
