import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import ThreadDetailItem from '../../components/ThreadDetailItem';
import { asyncReceiveThreadDetail, asyncCreateComment } from '../../states/threadDetail/action';

function DetailThreadPage() {
  const { threadDetail } = useSelector((states) => states);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onComment = (content) => {
    dispatch(asyncCreateComment({ threadId: id, content }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="thread-container">
      <ThreadDetailItem {...threadDetail} toComment={onComment} />
    </section>
  );
}

export default DetailThreadPage;
