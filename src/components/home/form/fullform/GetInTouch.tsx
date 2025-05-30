"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function GetInTouch() {
    // ...
    const form = useForm()

    const onSubmit = () => {


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 container mx-auto w-2/5 shadow-2xl p-8 rounded-2xl">
                <div className="flex justify-center items-center">
                    <h1 className="uppercase text-3xl text-orange-500 font-bold">Get In Touch</h1>
                </div>
                <div className="space-y-10">
                    <FormField
                        control={form.control}
                        name="contactreason"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Reason for Contact <span className="text-orange-600">*</span></FormLabel>
                                <FormControl>
                                    <Input className="" placeholder="Reason..." {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-start gap-2 items-center">
                        <div className="w-1/2 flex items-center gap-2">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Nmae</FormLabel>
                                        <FormControl>
                                            <Input className="" placeholder="First Name" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input className="" placeholder="Last Name" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter Email</FormLabel>
                                        <FormControl>
                                            <Input className=" text-start" placeholder="user11@gmail.com" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="(201)555-01234" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-1/2">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Micro Data Solutions..." {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="region"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Primary Wharehouse Region?</FormLabel>
                                <FormControl>
                                    <Input placeholder="-Select-" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Input placeholder="abc..." {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white text-2xl capitalize px-12 py-6" type="submit">Submit</Button>
                </div>
            </form>
        </Form>
        
    )
}