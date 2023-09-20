'use client';
import { trpc } from './_trpc/client';

export default function Home() {
	const test = trpc.greeting.useQuery('hellow');

	return (
		<>
			<h1>{test.data?.greeting}</h1>
		</>
	);
}
