import React, {
  PropTypes,
} from 'react';
import './Film.css';

function Film({url, company, name, image}) {
  return (
    <div className="Film">
      <img
        className="Film-img"
        alt={name}
        src={image}
      />
      <div>
        <a href={url}>
          <p>{name}</p>
          <p>{company}</p>
        </a>
      </div>
    </div>
  );
}

Film.propTypes = {
  url: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Film;
