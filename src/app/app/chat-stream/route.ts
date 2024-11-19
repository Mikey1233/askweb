import { ragChat } from "@/lib/rag-chat";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req : NextRequest,res : NextResponse) =>{
const {messages , sessionId} = await req.json()

const lastMessage = messages[messages.length -1].content
const response = await ragChat.chat(lastMessage)
console.log("response :",response)
}