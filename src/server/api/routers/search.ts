import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../../trpc';
import { SearchResponse, removeDuplicatesByScore } from './utils';

export const SearchPageRouter = createTRPCRouter({
  query: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        message: input.query,
      });

      const response = await fetch(
        'http://search-lb-827559157.ap-south-1.elb.amazonaws.com/query',
        {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        },
      );
      const res = (await response.json()) as SearchResponse[];
      return removeDuplicatesByScore(res);
    }),
});
