import React from 'react';
import PropTypes from 'prop-types';

function Category({ category }) {
  return (
    <button className="category" type="button">
      <p>
        #
        {category}
      </p>
    </button>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};
export default Category;
