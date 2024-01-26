import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: { label: "email", type: "email", placeholder: "johndoe@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }