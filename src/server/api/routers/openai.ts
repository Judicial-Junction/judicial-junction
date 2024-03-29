import { env } from "@/env.mjs";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import OpenAi from "openai";

const openai = new OpenAi({
  apiKey: env.OPENAI_API_KEY,
});

export const openai_router = createTRPCRouter({
  loading_message: publicProcedure.query(async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `I have a app which takes a long time loading a particular thing and i need to display some interesting facts to user related to Indian law. Generate one such thing and only give out that in your response without anything else. Your response should be under 50 words`,
        },
      ],
    });
    return response.choices[0].message.content as string;
  }),
});
