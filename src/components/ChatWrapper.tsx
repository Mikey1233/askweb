"use client";

import { useChat } from "ai/react";

function ChatWrapper({ sessionId }: { sessionId: string }) {
  const { messages ,handleInputChange,input,handleSubmit} = useChat({ api: "/api/chat-stream", body: { sessionId } });
  return (
    <div className="relative min-h-full bg-zinc-900 flex flex-col justify-between gap-2 divide-y divide-zinc-700">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
  {JSON.stringify(messages)}
      </div>
      <form onSubmit={handleSubmit}>
      <input className="text-black" onChange={handleInputChange} value={input} type="text"/>
      <button type="submit">submit</button>
      </form>
      
    </div>
  );
}

export default ChatWrapper;
