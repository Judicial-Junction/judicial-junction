import { env } from "@/env.mjs";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import OpenAi from "openai";
import { z } from "zod";

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

    return response.choices[0].message.content;
  }),
  ChatWithCase: publicProcedure
    .input(
      z.array(
        z.object({ role: z.enum(["system", "user"]), content: z.string() }),
      ),
    )
    .query(async ({ input }) => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: input,
        });

        return response.choices[0].message.content;
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "problem with openai chat endpoint",
        });
      }
    }),
});
