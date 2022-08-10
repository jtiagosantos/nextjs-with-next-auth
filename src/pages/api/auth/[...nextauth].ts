import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          redirect_uri: 'http://localhost:3000/dashboard'
        }
      }
    }),
  ],
});