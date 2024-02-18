import { IconArrowRight } from '@/app/_components/icons';
import { trpc } from '@/app/_trpc/client';
import { Link } from '@nextui-org/link';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { MessageInterface } from './Chat';

const exampleMessages = [
	{
		heading: 'Ask about this case',
		message: 'What is this file about ?',
	},
	{
		heading: 'Find out specifics in this case',
		message: 'Tell me about specific unique specific details about this case',
	},
	{
		heading: 'Find out Judgement',
		message: `WHat is the judgement provided in the case ?`,
	},
];

export function EmptyScreen({ case_number }: { case_number: string }) {
	const queryClient = useQueryClient();

	const newMessageMutation = trpc.documentQuery.useMutation({
		onMutate: async ({ query, case_number }) => {
			await queryClient.cancelQueries({ queryKey: ['messages'] });
			let previousMessages = queryClient.getQueryData<MessageInterface[]>([
				'messages',
			]);

			let FirstMessage: MessageInterface = {
				content_message: `Starting chat for Case Number - ${case_number}`,
				created_by: 'bot',
			};

			if (previousMessages) {
				previousMessages = [...previousMessages, FirstMessage];
			}

			queryClient.setQueryData<MessageInterface[]>(
				['messages'],
				previousMessages,
			);

			previousMessages = queryClient.getQueryData<MessageInterface[]>([
				'messages',
			]);

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

			previousMessages = queryClient.getQueryData<MessageInterface[]>([
				'messages',
			]);

			let LoadingMessage: MessageInterface = {
				content_message: 'super secret loading message',
				created_by: 'bot',
			};

			if (previousMessages) {
				previousMessages = [...previousMessages, LoadingMessage];
			}
			queryClient.setQueryData<MessageInterface[]>(
				['messages'],
				previousMessages,
			);
		},
		onError: (error) => {
			let previousMessages = queryClient.getQueryData<MessageInterface[]>([
				'messages',
			]);
			console.log(error);
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
			let previousMessages = queryClient.getQueryData<MessageInterface[]>([
				'messages',
			]);

			previousMessages?.pop();

			queryClient.setQueryData<MessageInterface[]>(
				['messages'],
				previousMessages,
			);

			previousMessages = queryClient.getQueryData<MessageInterface[]>([
				'messages',
			]);

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
		<div className="mx-auto max-w-2xl px-4  mt-16">
			<div className="rounded-lg p-8 text-center">
				<h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none">
					Digital Adhivakta AI Chatbot
				</h1>
				<p className="mx-auto max-w-[500px] text-zinc-500 text-sm md:text-xl dark:text-zinc-400">
					You can start a conversation about the case here
				</p>
				<div className="mt-8 flex flex-col space-y-2 ">
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
