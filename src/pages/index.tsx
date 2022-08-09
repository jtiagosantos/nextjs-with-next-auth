import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        <h1>Status: {status}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      <h1>Status: {status}</h1>
      <button onClick={() => signIn('github')}>Sign In</button>
    </>
  );
}

export default Home;
