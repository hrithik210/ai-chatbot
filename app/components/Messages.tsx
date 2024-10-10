import {type Message as TMessage } from "ai"
import { Message } from "./Message"

interface MessageProps {
    messages: TMessage[]
}

export const Messages = ({ messages }: MessageProps) => {
    return (
        <div className="flex max-h-[cal(100vh -3.5rem - 7rem)] flex-1 flex-col overflow-y-auto">
            { messages ? messages.map( (message , i) => (
                <Message key ={i} content ={message.content} isUserMessage = {message.role === "user"} />
            ) ): <div></div> }
        </div>
    )
}