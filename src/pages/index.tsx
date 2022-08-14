import type { NextPage } from 'next';
import { useSession, signIn } from 'next-auth/react';
import { GithubLogo, GoogleLogo, DiscordLogo } from 'phosphor-react';

//styles
import { 
  Container, 
  Title, 
  ButtonGroup, 
  Card, 
  Button,
  Text,
} from '../styles/components';

const Home: NextPage = () => {
  const { status } = useSession();

  return (
    <Container>
      <Card>
        <Title>Status: {status}</Title>
        <Text>Enter with</Text>
        <ButtonGroup>
          <Button onClick={() => signIn('github')}>
            <GithubLogo 
              size={30} 
              color='#8A8A8A' 
              weight='fill'
            />
          </Button>
          <Button onClick={() => signIn('google')}>
            <GoogleLogo 
              size={30} 
              color='#2170DE'
              weight='bold' 
            />
          </Button>
          <Button onClick={() => signIn('discord')}>
            <DiscordLogo 
              size={30} 
              color='#783FEB' 
              weight='duotone'
            />
          </Button>
        </ButtonGroup>
      </Card>
    </Container>
  );
}

export default Home;
