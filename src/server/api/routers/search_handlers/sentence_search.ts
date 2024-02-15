import { z } from 'zod';
import { SentenceResponse } from '../utils';
import { TRPCError } from '@trpc/server';

export default async function SentenceSearchMutation(input: string) {
  const myHeaders = new Headers();

  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    message: input,
  });

  try {
    const response = await fetch(
      'http://ec2-3-108-192-195.ap-south-1.compute.amazonaws.com:8000/sentence_similarity',
      {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      },
    );

    const result = await response.json();
    return result as SentenceResponse[];
  } catch (error) {
    console.log(error);
    throw new TRPCError({
      message: 'Connection to opensearch server failed',
      code: 'INTERNAL_SERVER_ERROR',
    });
  }
}
