// "use client"
import LoginForm from "./_components/LoginForm";

export default async function Login() {

  return (
    <div className="flex w-full h-screen">
      <div className="w-full hidden lg:flex h-full p-5 items-center justify-center">
        <div className="w-2/3">
          <h1 className="font-bold text-3xl tracking-tight">
            Welcome
          </h1>
          <p>
            Login to continue
          </p>
        </div>
      </div>
      <div className="w-full h-full flex items-center  justify-center">
        <LoginForm />
      </div>
    </div>
  )
}