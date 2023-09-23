import { getServerSession } from 'next-auth';
import { authConfig } from '@/config/auth';
import Unauthenticated from './_component/400';
import MainChat from './_component/Chat';
export default async function Chat() {
	const session = await getServerSession(authConfig);

	if (!session) {
		return <Unauthenticated />;
	}

	return (
		<>
			<MainChat />
		</>
	);
}
