import { env } from '@/env.mjs';
import { SearchResponse } from '../search_utils';
import { TRPCError } from '@trpc/server';

export default async function SentenceSearchMutation(input: string) {
	const myHeaders = new Headers();

	myHeaders.append('Accept', 'application/json');
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		message: input,
	});

	try {
		const response = await fetch(
			`http://${env.EMBEDDING_SERVER_HOST}:8000/sentence_similarity`,
			{
				method: 'POST',
				headers: myHeaders,
				body: raw,
			},
		);
		const result = await response.json();
		return result as SearchResponse[];
	} catch (error) {
		console.log(error);
		throw new TRPCError({
			message: 'Connection to embeddings-conversion server failed',
			code: 'INTERNAL_SERVER_ERROR',
		});
	}
}
