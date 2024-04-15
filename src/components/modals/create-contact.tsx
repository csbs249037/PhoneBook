"use client"
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader, DialogTitle} from "@/components/ui/dialog";

const createContact = () => {
  return (
    <Dialog>
        <DialogContent className="p-0 overfllow-hidden bg-white text-black">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">Cretae Contact!</DialogTitle>
                <DialogDescription className="text-center text-zinc-500">To add a new contact to your phonebook, fill in the contact's name, phone number, and optionally, an email address.</DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default createContact;