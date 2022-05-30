import NextAuth from 'next-auth'
import OktaProvider from 'next-auth/providers/okta'

const options = {
  // Configure one or more authentication providers
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID || '',
      clientSecret: process.env.OKTA_CLIENT_SECRET || '',
      issuer: process.env.OKTA_ISSUER || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin'
      return token
    },
  },
}

export default NextAuth(options)
