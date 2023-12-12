import React from 'react';
import PropTypes from 'prop-types';
import LeaderBoardItem from './LeaderBoardItem';

function LeaderBoardsList({ user, score }) {
  return (
    <LeaderBoardItem user={user} score={score} />
  );
}

LeaderBoardsList.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderBoardsList;
