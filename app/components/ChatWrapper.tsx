"use client"
import { Message, useChat } from "ai/react"
import { Messages } from "./Messages"
import { ChatInput } from "./ChatInput"

export default function ChatWrapper({sessionId , initialMessages} : {sessionId: string,
    initialMessages: Message[]
}) {
    
const { messages , input , handleInputChange ,  handleSubmit ,setInput} = useChat({
    api: "/api/chat-stream" ,
    body: {sessionId},
    initialMessages : initialMessages
})
    
return (
   <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700
      flex-col justify-between gap-2">
        <div className="flex-1 bg-zinc-800 flex flex-col justify-between text-white">
            <Messages  messages = {messages} />
        </div>

        <ChatInput 
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
         />
        
    </div>
    )
}
