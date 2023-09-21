import { serverTrpc } from '@/server/trpc-caller';

export default async function Home() {
	const test = await serverTrpc.greeting('hello');

	return (
		<>
			<h1>{test.greeting}</h1>
		</>
	);
}
