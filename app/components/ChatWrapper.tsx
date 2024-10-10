"use client"
import { useChat } from "ai/react"
import { Messages } from "./Messages"

export default function ChatWrapper({sessionId} : {sessionId: string}) {
    
const { messages , input , handleInputChange ,  handleSubmit} = useChat({
    api: "/api/chat-stream" ,
    body: {sessionId}
})
    
return (
   <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700
      flex-col justify-between gap-2 e">
        <div className="flex-1 bg-zinc-800 flex flex-col justify-between text-white">
            <Messages  messages = {messages} />
        </div>

        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleInputChange} />
            <button className="text-white" type="submit">Send</button>
        </form>
        
    </div>
    )
}
