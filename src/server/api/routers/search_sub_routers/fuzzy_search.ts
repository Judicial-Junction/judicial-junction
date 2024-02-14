import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { FuzzyResponse, OpensearchClient } from '../utils';
import { TRPCError } from '@trpc/server';

export const FuzzySearch = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const res = await OpensearchClient.search({
          index: 'word_embedding',
          body: {
            query: {
              fuzzy: {
                'Judgement Text': {
                  value: input.query,
                },
              },
            },
            fields: [
              'Judgement PDF URL',
              'Case Number',
              'Case Title',
              'Judgement Date',
              'Judgement Text',
            ],
            size: 3,
            _source: false,
          },
        });

        return res.body.hits.hits as FuzzyResponse[];
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          message: 'Connection to opensearch server failed',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }
    }),
});
