import React from 'react';
import { useDispatch } from 'react-redux';
import InputLogin from '../../components/InputLogin';
import { asyncSetAuthUser } from '../../states/authUser/action';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    router.push('/');
  };
  return (
    <section className="login-page">
      <h1>Login Page</h1>
      <InputLogin login={onLogin} />
      <p>
        Don't have an account?
        <span><Link href="/register">Register</Link></span>
      </p>
    </section>
  );
}

export default LoginPage;
