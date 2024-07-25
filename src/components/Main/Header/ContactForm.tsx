"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

const SHEET_SIDES = ["bottom"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  const [info, setInfo] = useState('false')
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = () => {
    setMessage('Information sent. The owner will contact you in 24 hours.')
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000) // Hide the message after 3 seconds
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="bg-green-500 text-white w-[135px] hover:bg-green-600 transition duration-300">Contact us</Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-green-50 shadow-lg rounded-lg p-6">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold text-green-700">Edit profile</SheetTitle>
              <SheetDescription className="text-green-600">
                Make changes to your profile here. Click save when you are done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right text-green-600">
                  Name
                </Label>
                <Input id="name" placeholder="Faran Butt" className="col-span-3 border-green-400 focus:ring-green-500" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right text-green-600">
                  Email
                </Label>
                <Input id="email" placeholder="abc@gmail.com" className="col-span-3 border-green-400 focus:ring-green-500" type="email" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right text-green-600">
                  Phone Number
                </Label>
                <Input id="number" placeholder="+92335111231" className="col-span-3 border-green-400 focus:ring-green-500" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="button" className="bg-green-500 text-white hover:bg-green-600 transition duration-300" onClick={handleSubmit}>Submit</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
      {showMessage && (
        <div
          className={`fixed bottom-4 right-4 p-4 bg-green-500 text-whit z-50 rounded-lg shadow-lg transition-transform duration-300 ${
            showMessage ? 'transform translate-y-0' : 'transform translate-y-full'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  )
}
