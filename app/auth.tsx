"use client"

import { signIn, signOut } from "next-auth/react"

export function LoginButton() {
    return (
        <button onClick={() => { signIn() }}>Sing in</button>
    )
}
export function LogoutButton() {
    return (
        <button onClick={() => { signOut() }}>Sing out</button>
    )
}