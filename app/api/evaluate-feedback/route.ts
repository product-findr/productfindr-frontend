import { NextRequest, NextResponse } from "next/server";

if (!process.env.OPEN_AI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export type ChatGPTAgent = "user" | "system";

interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

interface RequestPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  max_tokens: number;
}

export const POST = async (req: NextRequest) => {
  try {
    const { prompt } = await req.json();

    // Validate the prompt
    if (!prompt) {
      return NextResponse.json({ error: "No prompt in the request" }, { status: 400 });
    }

    const payload: RequestPayload = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      max_tokens: 600,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPEN_AI_API_KEY ?? ""}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error: ", error.message);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } else {
      console.error("Unexpected error: ", error);
      return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
  }
};
