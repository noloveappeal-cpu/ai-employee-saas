import { NextResponse } from "next/server";
import { openai } from "@/lib/ai";
import { systemPrompt } from "@/lib/persona/systemPrompt";

export async function POST(req: Request) {
  const { input } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: input }
    ]
  });

  return NextResponse.json({
    output: completion.choices[0].message.content
  });
}
