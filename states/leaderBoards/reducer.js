import { ActionType } from './action';

function leaderBoardsReducer(leaderBoards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderBoards;
    default:
      return leaderBoards;
  }
}

export default leaderBoardsReducer;
