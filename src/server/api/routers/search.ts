import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import FuzzySearchMutation from "./search_handlers/fuzzy_search";
import SentenceSearchMutation from "./search_handlers/sentence_search";

export const search_router = createTRPCRouter({
  opensearch: publicProcedure
    .input(
      z.object({
        search_term: z.string(),
        search_type: z.enum(["Fuzzy Search", "Sentence Similarity"]),
      }),
    )
    .mutation(async ({ input }) => {
      switch (input.search_type) {
        case "Fuzzy Search":
          return await FuzzySearchMutation(input.search_term);
        case "Sentence Similarity":
          return await SentenceSearchMutation(input.search_term);
      }
    }),
});
