import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

const Dashboard: NextPage = () => {
  const route = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      route.push('/');
    },
  });

  if (status === 'loading') {
    return <h1>Loading or not authenticated...</h1>
  }

  return (
    <>
      <h1>Status: {status}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}

export default Dashboard;