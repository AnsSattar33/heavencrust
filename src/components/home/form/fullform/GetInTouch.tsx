"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Zod schema for form validation
const formSchema = z.object({
    contactreason: z.string().min(2, { message: "Reason for contact is required." }),
    firstname: z.string().min(1, { message: "First name is required." }),
    lastname: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
    company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
    region: z.string().min(1, { message: "Please select a region." }),
    message: z.string().min(5, { message: "Message should be at least 5 characters." }),
})

// Type inferred from the form schema
type FormData = z.infer<typeof formSchema>;

export function GetInTouch() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 my-10 container mx-auto md:w-2/5 w-5/6 shadow-2xl p-4 md:p-8 rounded-2xl">
                <div className="flex justify-center items-center">
                    <h1 className="uppercase text-xl md:text-3xl text-orange-500 font-bold">Get In Touch</h1>
                </div>
                <div className="space-y-10">
                    <FormField
                        control={form.control}
                        name="contactreason"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Reason for Contact <span className="text-orange-600">*</span></FormLabel>
                                <FormControl>
                                    <Input className="text-sm p-1 md:text-xl" placeholder="Reason..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex md:flex-row flex-col justify-start gap-2 items-center">
                        <div className="md:w-1/2 flex items-center gap-2">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input className="text-sm p-1 md:text-xl" placeholder="First Name" {...field} />
                                        </FormControl>
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
                                            <Input className="text-sm p-1 md:text-xl" placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter Email</FormLabel>
                                        <FormControl>
                                            <Input className="text-sm p-1 md:text-xl" placeholder="user11@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-2">
                        <div className="md:w-1/2 w-full">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input className="text-sm p-1 md:text-xl" placeholder="(201)555-01234" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input className="text-sm p-1 md:text-xl" placeholder="Micro Data Solutions..." {...field} />
                                        </FormControl>
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
                                <FormLabel>Primary Warehouse Region?</FormLabel>
                                <FormControl>
                                    <Input className="text-sm p-1 md:text-xl" placeholder="-Select-" {...field} />
                                </FormControl>
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
                                    <Input className="text-sm p-1 md:text-xl" placeholder="abc..." {...field} />
                                </FormControl>
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
