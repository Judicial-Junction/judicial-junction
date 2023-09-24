import MainChat from './_component/Chat';
export default async function Chat({ params }: { params: { id: string } }) {
	return (
		<>
			<MainChat />
		</>
	);
}
