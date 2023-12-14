import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import InputComment from './InputComment';
import CommentList from './CommentList';
import ThreadBodyDetail from './ThreadBodyDetail';

function ThreadDetailItem({
  category, title, body, createdAt, upVotesBy, downVotesBy, owner, comments, toComment,
}) {
  const { authUser } = useSelector((states) => states);

  return (
    <div className="threads">
      <ThreadBodyDetail category={category} title={title} body={body} owner={owner} createdAt={createdAt} upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
      <p>Beri Komentar</p>
      {authUser == null ? (
        <p>
          <Link href="/login">Login</Link>
          {' '}
          untuk memberi komentar
        </p>
      ) : (
        <InputComment toComment={toComment} />
      )}
      <p>
        Komentar
        {`(${comments.length || 0})`}
      </p>
      {comments.map((comment) => (
        <CommentList
          key={comment.id}
          {...comment}
        />
      ))}
    </div>
  );
}

const ownerShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ThreadDetailItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  comments: PropTypes.objectOf().isRequired,
  toComment: PropTypes.func.isRequired,
};

export default ThreadDetailItem;
