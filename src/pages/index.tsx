import type { NextPage } from 'next';
import { useSession, signIn } from 'next-auth/react';

const Home: NextPage = () => {
  const { status } = useSession();

  return (
    <>
      <h1>Status: {status}</h1>
      <button onClick={() => signIn('github')}>Sign In</button>
    </>
  );
}

export default Home;
