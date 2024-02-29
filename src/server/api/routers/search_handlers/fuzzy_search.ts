import { env } from '@/env.mjs';
import { SearchResponse, removeDuplicatesByScore } from '../search_utils';
import { TRPCError } from '@trpc/server';

export default async function FuzzySearchMutation(input: string) {
  const myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    `Basic ${btoa(`${env.OPENSEARCH_USER}:${env.OPENSEARCH_PASSWORD}`)}`,
  );

  const raw = JSON.stringify({
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
  });

  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

  try {
    const response = await fetch(
      `https://${env.OPENSEARCH_HOST}:${env.OPENSEARCH_PORT}/case-text/_search`,
      {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      },
    );

    const result = (await response.json()).hits.hits as SearchResponse[];
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
    result.forEach((val) => {
      val.search_type = 'Fuzzy Search';
      val.search_query = input;
    });
    return removeDuplicatesByScore(result);
  } catch (error) {
    console.log(error);
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
    throw new TRPCError({
      message: 'Connection to opensearch server failed',
      code: 'INTERNAL_SERVER_ERROR',
    });
  }
}
