import React from 'react';
import PropTypes from 'prop-types';

function BodyThread({ body }) {
  return (
    <div className="thread-item__body">
      <div className="thread-item__body-inner" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

BodyThread.propTypes = {
  body: PropTypes.string.isRequired,
};

export default BodyThread;
