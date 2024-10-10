import {type Message as TMessage } from "ai"
import { Message } from "./Message"
import { MessageSquare } from "lucide-react"

interface MessageProps {
    messages: TMessage[]
}

export const Messages = ({ messages }: MessageProps) => {
    return (
        <div className="flex max-h-[cal(100vh -3.5rem - 7rem)] flex-1 flex-col overflow-y-auto">
            { messages.length ? messages.map( (message , i) => (
                <Message key ={i} content ={message.content} isUserMessage = {message.role === "user"} />
            ) ): 
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
                <MessageSquare  className="size-8 text-blue-500"/>
                <h1 className="font-semibold text-xl text-white">You are all set!</h1>
                <p className="text-zinc-200 text-sm ">Ask your first question to get started</p>
            </div> 
        }
        </div>
    )
}