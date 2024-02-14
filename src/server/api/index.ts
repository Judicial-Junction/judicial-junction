import { createTRPCRouter, publicProcedure } from '../trpc';
import { documentQueryingRouter } from './routers/chatApp';
import { FuzzySearch } from './routers/search_sub_routers/fuzzy_search';
import { SemanticSearch } from './routers/search_sub_routers/semantic_search';
import { SentenceSearch } from './routers/search_sub_routers/sentence_search';

export const appRouter = createTRPCRouter({
  health: publicProcedure.query(() => {
    return 'healthy api';
  }),
  search: createTRPCRouter({
    fuzzy: FuzzySearch,
    semantic: SemanticSearch,
    sentence: SentenceSearch,
  }),
  documentQuery: documentQueryingRouter,
});

export type AppRouter = typeof appRouter;
