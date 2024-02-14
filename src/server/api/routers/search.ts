import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';
import FuzzySearchMutation from './search_sub_routers/fuzzy_search';
import SemanticSearchMutation from './search_sub_routers/semantic_search';
import SentenceSearchMutation from './search_sub_routers/sentence_search';

export const search_router = createTRPCRouter({
  fuzzy_search: publicProcedure
    .input(z.object({ query: z.string() }))
    .mutation(async ({ input }) => {
      return await FuzzySearchMutation(input.query);
    }),
  semantic_search: publicProcedure
    .input(z.object({ query: z.string() }))
    .mutation(async ({ input }) => {
      return await SemanticSearchMutation(input.query);
    }),
  sentence_search: publicProcedure
    .input(z.object({ query: z.string() }))
    .mutation(async ({ input }) => {
      return await SentenceSearchMutation(input.query);
    }),
});
