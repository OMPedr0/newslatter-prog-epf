import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import { SiGmail } from "react-icons/si";
import firebaseClient from '../api/firebase';

import Image from 'next/image';
import logoprincipal from '../imgs/logoprinciapal.png';;
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(firebaseClient);
  const router = useRouter();



  const handleEmailSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/news');
    } catch (error) {
      console.error('Error signing in with email and password', error);
    }
  };

  const handleGoogleSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/news');
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };
  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md px-8 py-6 bg-gray-400 rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-4">
          <Image src={logoprincipal} alt="Logo" className=" mr-2" />
        </div>
        <form onSubmit={handleEmailSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In with Email
          </button>
          <div className="mt-4">
            <span className="text-gray-700 font-bold">OR</span>
          </div>
        </form>
        <div className="mt-4">
          <button
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            onClick={handleGoogleSignIn}
          >
            <SiGmail className="inline-block mr-2" /> Sign In with Google
          </button>
        </div>
        <div className="flex justify-center items-center mt-6">
          <span className="text-gray-700 font-bold">Don't have an account?</span>
          <button className="ml-2 text-stone-500 hover:text-neutral-600 font-bold" onClick={handleRegister}>
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );


};

export default LoginPage;
