import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadShape } from './ThreadItem';

function ListThread({ threads, like, unLike }) {
  return (
    <div className="list-threads">
      {threads !== null ? (<h3 className="available">Diskusi Tersedia</h3>) : (<h3 className="available">Diskusi Tidak Tersedia</h3>)}
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} like={like} unLike={unLike} />
      ))}
    </div>
  );
}

ListThread.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  like: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
};

export default ListThread;
