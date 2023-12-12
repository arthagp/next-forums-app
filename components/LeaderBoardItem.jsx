import React from 'react';
import PropTypes from 'prop-types';

function LeaderBoardItem({ score, user }) {
  return (
    <div className="leaderBoard-item">
      <div className="leaderBoardItem-Info">
        <img className="avatar" src={user.avatar} alt={user} />
        <p>{user.name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
};

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderBoardItem;
