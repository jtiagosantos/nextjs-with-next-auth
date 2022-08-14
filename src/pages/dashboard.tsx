import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { Power } from 'phosphor-react';

//styles
import {
  Container,
  Card,
  Title,
  UserName,
  Button
} from '../styles/components';

const Dashboard: NextPage = () => {
  const route = useRouter();

  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      route.push('/');
    },
  });

  return (
    <Container>
      {status === 'loading' && <Title>Loading or not authenticated...</Title> }

      {!!data && (
        <Card>
          <Title>Status: {status}</Title>
          <UserName>UserName: {data?.user?.name}</UserName>
          <Button onClick={() => signOut()}>
            <Power 
              size={30}
              color='#fA4D4D'
              weight='bold'
            />
          </Button>
        </Card>
      )}
    </Container>
  );
}

export default Dashboard;