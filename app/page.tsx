import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "./auth";

export default async function Home() {
  const user = await prisma.user.findFirst({})
  const session = await getServerSession(authOptions)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginButton />
      <LogoutButton />
      hello , {user?.name || "world"}
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}
