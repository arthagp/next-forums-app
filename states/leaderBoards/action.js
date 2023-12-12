import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderBoardActionCreator(leaderBoards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderBoards,
    },
  };
}

function asyncLeaderBoards() {
  return async (dispatch) => {
    try {
      const leaderBoard = await api.leaderBoards();
      dispatch(receiveLeaderBoardActionCreator(leaderBoard));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  asyncLeaderBoards,
};
