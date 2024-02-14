import { z } from 'zod';
import { FuzzyResponse, OpensearchClient } from '../utils';
import { TRPCError } from '@trpc/server';

export default async function FuzzySearchMutation(input: string) {
  try {
    const res = await OpensearchClient.search({
      index: 'word_embedding',
      body: {
        query: {
          fuzzy: {
            'Judgement Text': {
              value: input,
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
}
