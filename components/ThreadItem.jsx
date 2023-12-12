import React from 'react';
import PropTypes from 'prop-types';
import HeaderThread from './HeaderThread';
import BodyThread from './BodyThread';
import FooterThread from './FooterThread';

function ThreadItem({
  id, title, category, body, upVotesBy, downVotesBy, createdAt, totalComments, user, authUser, like, unLike,
}) {
  return (
    <div className="thread-item">
      <HeaderThread id={id} title={title} category={category} />
      <BodyThread body={body} />
      <FooterThread id={id} authUser={authUser} like={like} unLike={unLike} upVotesBy={upVotesBy} downVotesBy={downVotesBy} createdAt={createdAt} totalComments={totalComments} user={user} />
    </div>
  );
}
ThreadItem.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  authUser: undefined,
};

const threadShape = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

ThreadItem.propTypes = {
  ...threadShape,
  like: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
};

export { threadShape };

export default ThreadItem;
