"use client";

import { Message, useChat } from "ai/react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

function ChatWrapper({ sessionId,initialMessages }: { sessionId: string,initialMessages: Message[] }) {
  const { messages, handleInputChange, input, handleSubmit, setInput } =
    useChat({ api: "/api/chat-stream", body: { sessionId },initialMessages });
  return (
    <div className="relative min-h-full bg-zinc-900 flex flex-col justify-between gap-2 divide-y divide-zinc-700">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        {/* {JSON.stringify(messages)} */}
        <Messages messages={messages} />
      </div>
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
}

export default ChatWrapper;
