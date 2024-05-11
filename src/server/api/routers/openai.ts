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
      z.object({
        messages: z.array(
          z.object({ role: z.enum(["system", "user"]), content: z.string() }),
        ),
        caseText: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const initialMessage = {
        role: "user" as const,
        content: `below given is the case text of a high court case. \n ${input.caseText} \n\n Now answer me the questions that I have which are related to the given case text. If you cannot provide answer to any question due to insufficient context then just say I don't know.`,
      };
      input.messages[0] = initialMessage;
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4-1106-preview",
          messages: input.messages,
        });
        return response.choices[0].message.content;
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          // @ts-expect-error accessing message
          message: `problem with openai chat endpoint : \n${error?.message}`,
        });
      }
    }),
});
