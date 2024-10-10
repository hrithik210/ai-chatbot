import { cookies } from "next/headers"
import ChatWrapper from "../components/ChatWrapper"
import { ragChat } from "../lib/rag-chat"
import { redis } from "../lib/redis"

interface ParamsProps {
    url: string | string[]
}

function reConstructUrl({ url }: { url: string[] }) {
    const decodedUrl = url.map(( url )=>decodeURIComponent(url as string)).join("/")
    console.log(decodedUrl)
    return decodedUrl
    
}

export default async function Home({ params }: { params: ParamsProps }) {
    const sessionCookie = cookies().get("sessionId")?.value
    const reco_url = reConstructUrl({url : params.url as string[]})
    const isAlreadyIndexed = await redis.sismember("indexed_url", reco_url)

    const sessionId  = (reco_url + "__" + sessionCookie).replace(/\//g, "")
    const initialMessages = await ragChat.history.getMessages({sessionId , amount: 10})


    if(!isAlreadyIndexed){
        await ragChat.context.add({
            type:"html",
            source: reco_url,
            config: {chunkOverlap :50 , chunkSize:200 }
        })

        await redis.sadd("indexed_url", reco_url)
    }
    
    return (
        <ChatWrapper sessionId= {sessionId} initialMessages = {initialMessages} />
    )
}
