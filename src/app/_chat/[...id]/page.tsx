import MainChat from './_component/Chat';
export default async function Chat({ params }: { params: { id: string[] } }) {
	const case_number =
		params.id[0].replace('%20', ' ') + '/' + params.id.slice(1).join('/');
	return (
		<>
			<MainChat case_number={case_number} />
		</>
	);
}
