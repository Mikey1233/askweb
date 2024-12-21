import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

const reconstructUrl = ({ url }: { url: string[] }) => {
  const decodedComponents = url.map((comp) => {
    return decodeURIComponent(comp);
  });

  return decodedComponents.join("/");
};


const Page = async ({params}: {params : Promise<{ url: string[] }>}) => {
  const res = (await params).url
  const sessionCookie = (await cookies()).get("sessionId")?.value;

  // const { params } = await props;
  // console.log(params)
  const reconstructedUrl = reconstructUrl({ url: res as string[] ?? []});
  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructedUrl
  );

  const sessionId = (reconstructUrl + "--" + sessionCookie).replace(/\//g, "");

  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });
  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });
  }

  await redis.sadd("indexed-urls", reconstructedUrl);
  return (
    <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
  );
};

export default Page;