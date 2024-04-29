"use client"
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader, DialogTitle} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateContact = () => {
  const {isOpen,type,onClose} = useModal();
  const ModalOpen = isOpen && type == "createContact"
  const formSchema = z.object({
    name: z.string().min(1,{
      message:"Name is Required!"
    }),
    number: z.string().min(10,{
      message:"Make sure to enter Phone Number correctly!"
    }).max(10,{
      message:"Make sure to enter Phone Number correctly!"
    })
  })
  const router = useRouter();

  const form = useForm({
    resolver:zodResolver(formSchema),
    defaultValues:{
      name:"",
      number:"",
    }
  })
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async(values:z.infer<typeof formSchema>)=>{
    try {
      await axios.post("/api/contacts",values);
      form.reset();
      router.refresh();
      onClose();
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const handleClose = ()=>{
    form.reset();
    onClose();
  }

  return (
    <Dialog open={ModalOpen} onOpenChange={handleClose}>
        <DialogContent className="p-0 overfllow-hidden bg-white text-black">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">Cretae Contact!</DialogTitle>
                <DialogDescription className="text-center text-zinc-500">To add a new contact to your phonebook!</DialogDescription>
            </DialogHeader>
            <Form {...form}>
            <FormField control={form.control} name="name" render={({field})=>(
              <FormItem className="px-6 my-1">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Name" disabled={isLoading} {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}>
            </FormField>
            <FormField control={form.control} name="number" render={({field})=>(
              <FormItem className="px-6 mb-2">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Phone Number" disabled={isLoading} {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}>
            </FormField>
        </Form>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <Button className="bg-green-600 hover:bg-green-500 hover:scale-90 transition" onClick={form.handleSubmit(onSubmit)}>Create</Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default CreateContact;