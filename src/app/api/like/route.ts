import { NextRequest, NextResponse } from "next/server";

export interface Message {
  role: string
  content: string
}

export async function POST(req: NextRequest) {
  try {
    const { messageId, rating } = (await req.json()) as {
      messageId: string,
      rating: number
    };
    
    const ratedResponse = JSON.stringify({ messageId, rating, userId: "123" });

    return new NextResponse(ratedResponse, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}