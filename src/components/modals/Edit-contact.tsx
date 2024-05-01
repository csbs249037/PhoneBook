    "use client";

    import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    } from "../ui/dialog";
    import { DialogTitle } from "@radix-ui/react-dialog";
    import { useModal } from "@/hooks/use-modal-store";
    import { z } from "zod";
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    } from "../ui/form";
    import { Input } from "../ui/input";
    import { Button } from "../ui/button";
    import axios from "axios";
    import { useEffect } from "react";
    import { useRouter } from "next/navigation";

    const EditContact = () => {
    const { isOpen, type, onClose, data } = useModal();
    const modalOpen = isOpen && type === "editContact";
    const { contact } = data;

    const formSchema = z.object({
        name: z.string().min(1, {
        message: "Name is required",
        }),
        number: z.string().length(10, { message: "Phone number must be 10 digits" }),
        address: z.optional(z.string()),
        email: z.optional(z.string().email()),
    });

    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        number: "",
        address: "",
        email: "",
        },
    });

    useEffect(() => {
        if (contact) {
        form.setValue("name", contact?.name);
        form.setValue("number", contact?.phone);
        form.setValue("address", contact?.address);
        form.setValue("email", contact?.email);
        }
    }, [form,contact]);

    const isLoading = form.formState.isLoading;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
        await axios.patch(`/api/contacts/${contact?.id}`, values);
        form.reset();
        router.refresh();
        onClose();
        } catch (error) {
        console.log(error);
        }
    };

    const handleClose = () => {
        form.reset();
        onClose();
    };

    return (
        <Dialog open={modalOpen} onOpenChange={handleClose}>
        <DialogContent className="p-0 text-black bg-white overflow-hidden">
            <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-center text-2xl font-bold">
                Edit Contact
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-500">
                Edit your Contact details!!
            </DialogDescription>
            </DialogHeader>
            <Form {...form}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem className="px-6 my-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="Enter Name"
                        disabled={isLoading}
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                <FormItem className="px-6 mb-2">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="Enter Phone Number"
                        disabled={isLoading}
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                <FormItem className="px-6 mb-2">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="Enter Address"
                        disabled={isLoading}
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem className="px-6 mb-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="Enter Email"
                        type="email"
                        disabled={isLoading}
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            </Form>
            <DialogFooter className="bg-gray-100 px-6 py-4">
            <Button
                className="bg-green-600 hover:bg-green-500 hover:scale-90 transition"
                disabled={isLoading}
                onClick={form.handleSubmit(onSubmit)}
            >
                Save
            </Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    );
    };

    export default EditContact;