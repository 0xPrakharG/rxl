"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex w-full flex-col justify-center gap-5 self-center bg-[#F4F8FB] p-10">
      <h3 className="text-3xl font-semibold text-[#14293E]">
        Get in Touch with Us
      </h3>
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-2">
            <Label
              htmlFor="name"
              className="text-lg font-medium text-[#451F1F]"
            >
              Name*
            </Label>
            <Input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full text-base font-normal placeholder:text-[#B9C2CB] focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <Label
              htmlFor="email"
              className="text-lg font-medium text-[#451F1F]"
            >
              Email*
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@company.com"
              className="w-full text-base font-normal placeholder:text-[#B9C2CB] focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <Label
              htmlFor="number"
              className="text-lg font-medium text-[#451F1F]"
            >
              Phone Number*
            </Label>
            <Input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="+11 000 000 000"
              className="w-full text-base font-normal placeholder:text-[#B9C2CB] focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <Label
              htmlFor="message"
              className="text-lg font-medium text-[#451F1F]"
            >
              Message*
            </Label>
            <Textarea
              type="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave us a Message"
              className="w-full text-base font-normal placeholder:text-[#B9C2CB] focus:outline-none"
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="default"
          className="w-full bg-[#026295] text-lg font-semibold text-[#F1F3F5] hover:border hover:border-[#026295] hover:bg-transparent hover:text-[#026295]"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};
