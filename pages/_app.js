import '../styles/globals.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import wrapper from '../states/index';
import Navigation from '../components/Navigation';
import { asyncPreloadProcess } from '../states/isPreload/action';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogOut = () => {
    dispatch(asyncUnsetAuthUser());
    router.push('/login');
  };

  if (isPreload) {
    return null;
  }
  return (
    <>
      <Loading />
      <Navigation authUser={authUser} logOut={onLogOut} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf().isRequired,
};

export default wrapper.withRedux(MyApp);
