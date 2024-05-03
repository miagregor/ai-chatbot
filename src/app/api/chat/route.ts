import { ChatMessage } from "@/app/components/chat/interface";
import { NextRequest, NextResponse } from "next/server";

export interface Message {
  role: string
  content: string
}

interface StreamMessage {
  content: string,
  previous_messages: ChatMessage[],
  chat_id: number,
  stream: Boolean,
  client_metadata: unknown,
}

async function fetchReadableStream(reqBody: StreamMessage) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_AI_ASSISTANT_BE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  });

  const reader = response.body?.getReader();

  return new ReadableStream({
    start(controller) {
      const decoder = new TextDecoder("utf-8");

      async function push() {
        while (true) {

          if(!reader) {
            throw Error("Response is empty or undefined.")
          }

          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const msgChunk = chunk.split("\n");
          msgChunk.forEach( msg => {
            if(msg !== "" && msg) {
              controller.enqueue(`${msg}\n`);
            }
          });
        }
        controller.close();
      }

      push().catch(error => {
        throw Error(error);
      });
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { messages, input, chatId } = await req.json();

    const reqBody = {
      content: input,
      previous_messages: messages,
      chat_id: 2222,
      stream: true,
      client_metadata: {},
    };
    const stream = await fetchReadableStream(reqBody);
    return new NextResponse(stream, {
      headers: { "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}

