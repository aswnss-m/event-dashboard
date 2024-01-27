"use client"
import { eventSchema } from "@/lib/zodSchemas"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
export default function NewEvent() {

    const form = useForm<z.infer<typeof eventSchema>>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            name: undefined,
            description: undefined,
            duration: 60,
            cost: 99,
        }
    })
    const handleSubmit = (values: z.infer<typeof eventSchema>) => {
        console.log(values)
    }
    return (
        <div className="w-11/12 max-w-[800px] mx-auto">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="font-bold text-2xl lg:text-3xl">New Event</h1>
                    <p className="text-sm text-gray-400">submit application for a new event</p>
                </div>
                <Separator />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        <FormField control={form.control} name="name" render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Event name"
                                            type="text"
                                            required />
                                    </FormControl>
                                    <FormDescription>
                                        This is the name of your event
                                    </FormDescription>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )
                        }} />
                        <FormField control={form.control} name="description" render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Description <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder="Event description"
                                            required
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This description is used for socials and publicity
                                    </FormDescription>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )
                        }} />
                        <div className="flex w-full justify-between gap-8">
                            <FormField
                                control={form.control}
                                name="cost"
                                render={({ field }) => {
                                    return (
                                        <FormItem
                                            className="w-full"
                                        >
                                            <FormLabel>Registration fees <span className="text-xs text-gray-400">(Rs.)</span></FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="0 for free"
                                                    type="number"
                                                    min={0}
                                                    max={9999}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                This is the fees for registration (use '0' for free)
                                            </FormDescription>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )
                                }} />
                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => {
                                    return (
                                        <FormItem
                                            className="w-full"
                                        >
                                            <FormLabel>Duration <span className="text-xs text-gray-400">(minutes)</span></FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="99+"
                                                    type="number"
                                                    min={0}
                                                    max={9999}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                This is the duration of the event in minutes
                                            </FormDescription>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )
                                }} />
                        </div>
                        <Button type="submit" className="w-full font-bold">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}