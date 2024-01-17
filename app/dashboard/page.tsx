"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  const [contactExists, setContactExists] = useState(false);

  return (
    <div className="mx-auto flex flex-col gap-y-4 px-4 py-8 sm:px-6 sm:py-12 md:gap-y-8 lg:gap-y-12 lg:px-8">
      <header>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back!</h1>
            <p className="mt-1.5 text-sm text-gray-500">Let&apos;s save a new contact today! 🎉</p>
          </div>

          <div className="mt-4 flex flex-col sm:mt-0 sm:flex-row sm:items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="hover:bg-duskyRedHover block rounded-lg bg-duskyRed px-5 py-3 text-sm font-medium text-white transition hover:text-white">
                  Create Contact
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create a new contact</DialogTitle>
                  <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      {contactExists ? <p></p> : <h2 className="text-center text-xl font-bold text-gray-900 sm:text-3xl">You have no contacts yet!</h2>}
    </div>
  );
}
