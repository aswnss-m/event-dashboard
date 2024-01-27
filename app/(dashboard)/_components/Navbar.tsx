"use client"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Icon from "@/lib/Icon"
import { signOut } from "next-auth/react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuShortcut, DropdownMenuItem } from "@/components/ui/dropdown-menu"
export default function Navbar() {
    return (
        <nav className="flex px-10 py-5 sticky top-0 items-center justify-between">
            <ul className="flex gap-2 list-none lowercase items-center">
                <li className="hover:bg-muted py-1 px-3 rounded-md">
                    <Link href="/dashboard">Overview</Link>
                </li>
                <li className="hover:bg-muted py-1 px-3 rounded-md">
                    <Link href="/dashboard/profile">Events</Link>
                </li>
                <li className="hover:bg-muted py-1 px-3 rounded-md">
                    <Link href="/dashboard/profile">Participants</Link>
                </li>
                <li className="hover:bg-muted py-1 px-3 rounded-md">
                    <Link href="/dashboard/settings">Settings</Link>
                </li>
            </ul>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => { signOut() }}>
                        Logout
                        <DropdownMenuShortcut>
                            <Icon name="log-out" size={15} />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}