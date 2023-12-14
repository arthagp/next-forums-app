import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

function Navigation({ authUser, logOut }) {
  // console.log(authUser)
  const router = useRouter();

  const login = () => {
    router.push('/login');
  };

  return (
    <div className="navigation">
      <h1>
        Forum Apps
        <span className="_dot">.</span>
      </h1>
      <nav>
        <ul>
          <li><Link href="/">Thread</Link></li>
          <li><Link href="/leaderboards">Leader Board</Link></li>
        </ul>
        {authUser !== null ? (
          <button type="button" className="btn-login" onClick={logOut}>
            logout
          </button>
        )
          : (
            <button type="button" className="btn-login" onClick={login}>
              login
            </button>
          )}

      </nav>
    </div>
  );
}

Navigation.defaultProps = {
  authUser: null,
};

Navigation.propTypes = {
  authUser: PropTypes.objectOf(PropTypes.string),
  logOut: PropTypes.func.isRequired,
};

export default Navigation;
