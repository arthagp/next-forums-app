import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderBoardsList from '../../components/LeaderBoardsList';
import { asyncLeaderBoards } from '../../states/leaderBoards/action';

function LeaderBoadPage() {
  const {
    leaderBoards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLeaderBoards());
  }, [dispatch]);

  if (!leaderBoards) {
    return null;
  }
  return (
    <section className="leaderBoard-container">
      <div className="leaderBoards">
        <h2>Klasmen Pengguna Aktif</h2>
        <div className="leaderBoard-list">
          <header>
            <p>Pengguna</p>
            <p>Skor</p>
          </header>
          {leaderBoards.map((leaderBoard) => (
            <LeaderBoardsList key={leaderBoard.user.id} {...leaderBoard} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeaderBoadPage;
