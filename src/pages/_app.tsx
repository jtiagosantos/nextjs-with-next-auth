import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

//styles
import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
