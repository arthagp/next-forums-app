import '../styles/globals.css'
import React, { useEffect } from 'react';
import wrapper from '../states/index';
import Navigation from '../components/Navigation';
import { useRouter } from 'next/navigation'
import { asyncPreloadProcess } from '../states/isPreload/action';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';


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
  )
}

export default wrapper.withRedux(MyApp);


