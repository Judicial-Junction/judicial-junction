import { IconArrowRight } from '@/app/_components/icons';
import { subtitle, title } from '@/app/_components/primitives';
import { trpc } from '@/app/_trpc/client';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { MessageInterface } from './Chat';

const exampleMessages = [
	{
		heading: 'Ask about this case',
		message: `What is this file about ?`,
	},
	{
		heading: 'Find out specifics in this case',
		message: 'Summarize the following article for a 2nd grader: \n',
	},
	{
		heading: 'Find out Judgement',
		message: `Draft an email to my boss about the following: \n`,
	},
];

export function EmptyScreen({ case_number }: { case_number: string }) {
	const queryClient = useQueryClient();

	const newMessageMutation = trpc.documentQuery.useMutation({
		onMutate: async ({ query, case_number }) => {
			await queryClient.cancelQueries({ queryKey: ['messages'] });
			let previousMessages = queryClient.getQueryData<MessageInterface[]>(
				['messages'],
			);
			let HumanMessage: MessageInterface = {
				content_message: query,
				created_by: 'user',
			};
			if (previousMessages) {
				previousMessages = [...previousMessages, HumanMessage];
			}
			queryClient.setQueryData<MessageInterface[]>(
				['messages'],
				previousMessages,
			);
		},
		onError: (error) => {
			let previousMessages = queryClient.getQueryData<MessageInterface[]>(
				['messages'],
			);
			let ErrorMessage: MessageInterface = {
				content_message: error.message,
				created_by: 'user',
			};
			if (previousMessages) {
				previousMessages = [...previousMessages, ErrorMessage];
			}
			queryClient.setQueryData<MessageInterface[]>(
				['messages'],
				previousMessages,
			);
		},
		onSuccess(data) {
			let previousMessages = queryClient.getQueryData<MessageInterface[]>(
				['messages'],
			);
			let BotMessage: MessageInterface = {
				content_message: data,
				created_by: 'bot',
			};
			if (previousMessages) {
				previousMessages = [...previousMessages, BotMessage];
			}
			queryClient.setQueryData<MessageInterface[]>(
				['messages'],
				previousMessages,
			);
		},
	});

	const HandleClick = (message: string) => {
		newMessageMutation.mutate({ query: message, case_number });
	};

	return (
		<div className="mx-auto max-w-2xl px-4  mt-20">
			<div className="rounded-lg p-8 text-center">
				<h1
					className={clsx(
						'mb-2 text-3xl font-semibold text-dark dark:text-primary-50',
					)}
				>
					Welcome to Judicial Junction AI Chatbot!
				</h1>
				<p className="leading-normal text-muted-foreground">
					You can start a conversation about the case here
				</p>
				<div className="mt-4 flex flex-col space-y-2 ">
					{exampleMessages.map((message, index) => (
						<Link
							onClick={() => HandleClick(message.message)}
							key={index}
							className="h-auto p-0 text-foreground"
						>
							<IconArrowRight />
							<p className=" ml-2 font-bold hover:underline">
								{message.heading}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
