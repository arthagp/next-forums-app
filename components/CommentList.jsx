import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function CommentList({
  owner, createdAt, content, upVotesBy, downVotesBy,
}) {
  return (
    <div className="comment-list">
      <header>
        <div className="_profile">
          <img className="avatar" src={owner.avatar} alt={owner} />
          <h2>{owner.name}</h2>
        </div>
        <p>{postedAt(createdAt)}</p>
      </header>
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <footer className="thread-item__footer">
        <div className="vote-buttons">
          <button className="vote-button" type="button">
            <AiOutlineLike />
            {' '}
            <span className="vote-txt">{upVotesBy}</span>
          </button>
          <button className="vote-button" type="button">
            <AiOutlineDislike />
            {' '}
            <span className="vote-txt">{downVotesBy}</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

const ownerShape = {
  avatar: PropTypes.string.isRequired,
};

CommentList.propTypes = {
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

export default CommentList;
