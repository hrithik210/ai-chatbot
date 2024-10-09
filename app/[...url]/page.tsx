import { ragChat } from "../lib/rag-chat"

interface ParamsProps {
    url: string | string[]
}

function reConstructUrl({ url }: { url: string[] }) {
    const decodedUrl = url.map(( url )=>decodeURIComponent(url as string)).join("/")
    console.log(decodedUrl)
    return decodedUrl
    
}

export default async function Home({ params }: { params: ParamsProps }) {
    console.log(params)
    const url = reConstructUrl({url : params.url as string[]})
    
    // await ragChat.context.add({
    //     type:"html",
    //     source: url
    // })
    return (
        <p>Hello</p>
    )
}
