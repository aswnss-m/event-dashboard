import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/signIn',
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "johndoe@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }
                })

                if (!user) {
                    return null
                }

                const isPasswordValid = await compare(credentials.password, user.password)

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: user.id + "",
                    email: user.email,
                    name: user.name,
                }
            }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                key: token.id,
                email: token.email,
            }
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as User
                return {
                    ...token,
                    id: u.id,
                    email: u.email,
                    name: u.name,
                }
            }
            return token
        }
    },

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }