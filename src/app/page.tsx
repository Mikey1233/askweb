"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send } from "lucide-react";
import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = () => {
    if (input.trim()) {
      if (!isValidUrl(input)) {
        alert("Please enter a valid link.");
        return;
      }
      const currentUrl = window.location.href;
      const combinedUrl = `${currentUrl}/${input}`;
      window.location.href = combinedUrl;
      setInput(""); // Clear the input field
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="relative min-h-full bg-zinc-900 flex flex-col justify-between gap-2 divide-y divide-zinc-700">
        <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
          {/* Main content can go here */}
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-white text-xl">ASKWEB.ai</h3>
          <p className="text-sm text-zinc-500">Enter a valid website URL , to get started</p>
        </div>
        </div>
        <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
          <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
              <div className="relative flex flex-col flex-grow w-full p-4">
                <form onSubmit={handleSubmit} className="relative">
                  <Textarea
                    rows={4}
                    onChange={handleInputChange}
                    value={input}
                    onKeyDown={(
                      e: React.KeyboardEvent<HTMLTextAreaElement>
                    ) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(); // Do not pass `e` here
                      }
                    }}
                    placeholder="https://www.example.com"
                    className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
                    autoFocus
                  />

                  <Button
                    type={"submit"}
                    variant={"outline"}
                    className="right-2 bottom-2 absolute hover:text-black z-10 border-border bg-zinc-900 hover:bg-zinc-950"
                    size={"sm"}
                  >
                    <Send className={"size-4 text-white"} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
