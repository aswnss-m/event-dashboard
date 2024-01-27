import { prisma } from "@/lib/prisma";
import { Organizer } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {
    getServerSession,
    type NextAuthOptions,
  } from "next-auth";

export const authOptions : NextAuthOptions = {
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
                username: { label: "username", type: "string", placeholder: "johndoe" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null
                }

                const org = await prisma.organizer.findUnique({
                    where: {
                        username: credentials.username,
                    }
                })
                if (!org) {
                    return null
                }

                const isPasswordValid = await compare(credentials.password, org.password)

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: org.id + "",
                    email: org.email,
                    name: org.name,
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
                const u = user as unknown as Organizer
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
export const getServerAuthSession = () => getServerSession(authOptions)