import React from 'react';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
} from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function FooterThread({
  id, upVotesBy, downVotesBy, totalComments, createdAt, user, like, unLike, authUser,
}) {
  const isThreadLike = upVotesBy.includes(authUser);
  const isThreadUnLike = downVotesBy.includes(authUser);
  // id : merupakan threadId
  const onLikeClick = (event) => {
    event.stopPropagation();
    like(id);
  };

  const onUnLikeClick = (event) => {
    event.stopPropagation();
    unLike(id);
  };

  return (
    <footer className="thread-item__footer">
      <div className="vote-buttons">
        {
          like && (
            <button type="button" className="vote-button" onClick={onLikeClick}>
              {isThreadLike ? (<AiFillLike />) : (<AiOutlineLike />)}
              {' '}
              <span>{upVotesBy.length}</span>
            </button>
          )
        }
        {
          unLike && (
            <button type="button" className="vote-button" onClick={onUnLikeClick}>
              {isThreadUnLike ? (<AiFillDislike />) : (<AiOutlineDislike />)}
              {' '}
              <span>{downVotesBy.length}</span>
            </button>
          )
        }
      </div>
      <p>
        <FaRegComments />
        {' '}
        <span>{totalComments}</span>
        {' '}
        Comments
      </p>
      <p>{postedAt(createdAt)}</p>
      <p>
        Dibuat oleh
        {' '}
        <strong>{user.name}</strong>
      </p>
    </footer>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
};

FooterThread.defaultProps = {
  authUser: undefined,
};

FooterThread.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
  authUser: PropTypes.string,
};

export default FooterThread;
