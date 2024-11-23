"use client";

import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {type useChat} from "ai/react"

type HandleInputChat = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]


interface ChatInputProps {
    input : string
    handleInputChange: HandleInputChat
    handleSubmit : HandleSubmit
    setInput : SetInput
}
function ChatInput({handleInputChange,handleSubmit,setInput,input}: ChatInputProps) {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col flex-grow w-full p-4">
            <form onSubmit={handleSubmit} className="relative">
              <Textarea
                rows={4}
                onChange={handleInputChange}
                value={input}
                onKeyDown={(e)=> {
                    if (e.key === "Enter" && !e.shiftKey){
                        e.preventDefault()
                        handleSubmit()
                        setInput("")
                    }
                }}
                placeholder="Enter your question..."
                className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
                autoFocus
              />
              <Button
                type={"submit"}
                variant={"outline"}
                className="right-2 bottom-2 absolute  hover:text-black z-10 border-border bg-zinc-900 hover:bg-zinc-950"
                size={"sm"}
              >
                <Send className={"size-4 text-white "} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
