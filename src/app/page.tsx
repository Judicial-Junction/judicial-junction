import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth';

export default async function Home() {
	const sess = await getServerSession(authConfig);

	if(!sess){
		return <h1>Not authenticated</h1>
	}

	return (
		<>
			<h1>Authenticated</h1>
		</>
	);
}
