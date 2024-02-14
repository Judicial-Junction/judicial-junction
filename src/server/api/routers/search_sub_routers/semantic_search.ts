import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';
import { SemanticResponse } from '../utils';

export const SemanticSearch = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const myHeaders = new Headers();

      myHeaders.append('accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        message: input.query,
      });

      const response = await fetch(
        'http://ec2-3-108-192-195.ap-south-1.compute.amazonaws.com:8000/semantic_similarity',
        {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        },
      );
      const result = await response.json();
      return result as SemanticResponse[];
    }),
});
