"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormMessage, FormItem, FormField, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/lib/zodSchemas"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { signIn } from "next-auth/react"


export default function LoginForm() {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: undefined,
            password: undefined,
        },
    })

    const handleLogin = async () => {
        await signIn("credentials", {
            username: form.getValues("username"),
            password: form.getValues("password"),
            callbackUrl: "/",
            redirect: true,
        })
    }
    return (
        <div className="w-2/3">
            <h1 className=" font-bold text-2xl lg:text-3xl">Login</h1>
            <Separator className="my-7" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8">
                    <FormField control={form.control} name="username" render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>username</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="username"
                                        type="text"
                                        required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }} />
                    <FormField control={form.control} name="password" render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Password"
                                        type="password"
                                        required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }} />
                    <Button type="submit" className="w-full">Login</Button>
                </form>
            </Form>
        </div>
    )
}
