import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import InputRegister from '../../components/InputRegister';
import { asyncRegisterUser } from '../../states/users/action';

function RegisterPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    router.push('/login');
  };
  return (
    <section className="register-page">
      <h1>Register Page</h1>
      <InputRegister register={onRegister} />
      <p>
        Already have an account?
        <span><Link href="/login">Login</Link></span>
      </p>
    </section>
  );
}

export default RegisterPage;
