import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadBodyDetail({
  category, title, body, upVotesBy, downVotesBy, owner, createdAt,
}) {
  return (
    <div className="thread-item">
      <header className="thread-item__header">
        <span>
          #
          {category}
        </span>
        <h1>{title}</h1>
      </header>
      <div className="thread-item__body">
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <footer className="thread-item__footer">
        <div className="vote-buttons">
          <button type="button" className="vote-button">
            <AiOutlineLike />
            {' '}
            <span>{upVotesBy.length}</span>
          </button>
          <button type="button" className="vote-button">
            <AiOutlineDislike />
            {' '}
            <span>{downVotesBy.length}</span>
          </button>
        </div>
        <p>
          <span><img className="avatar" src={owner.avatar} alt={owner} /></span>
          Dibuat oleh
          {' '}
          <strong>{owner.name}</strong>
        </p>
        <p>{postedAt(createdAt)}</p>
      </footer>
    </div>
  );
}

const ownerShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ThreadBodyDetail.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ThreadBodyDetail;
