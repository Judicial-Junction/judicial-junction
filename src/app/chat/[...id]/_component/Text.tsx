import { Avatar } from '@nextui-org/avatar';
import { Spinner } from '@nextui-org/spinner';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';
import { MessageInterface } from './Chat';

interface ChatMessageProps {
	message: MessageInterface;
}

const TextMessage: FC<ChatMessageProps> = ({ message }) => {
	const session = useSession();
	const botImage =
		'https://img.freepik.com/free-vector/cute-robot-wearing-hat-flying-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5186.jpg?w=1380&t=st=1688759864~exp=1688760464~hmac=42c7b731fbc68ac619351dc8e506083a8d19d06169b3a65f6c6b33e96034e504';
	const formattedContent = message.content_message;

	if (
		message.created_by == 'bot' &&
		message.content_message == 'super secret loading message'
	) {
		return (
			<div className="w-full bg-transparent border-b-1  dark:border-gray-700">
				<div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
					<div className="flex-shrink-0 flex flex-col relative items-end">
						<Avatar radius="md" name="Bot" src={botImage} />
					</div>
					<pre className="whitespace-pre-line">
						<Spinner />
					</pre>
				</div>
			</div>
		);
	}

	return (
		<>
			{message.created_by == 'bot' ? (
				<div className="w-full bg-transparent border-b-1  dark:border-gray-700">
					<div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
						<div className="flex-shrink-0 flex flex-col relative items-end">
							<Avatar radius="md" name="Bot" src={botImage} />
						</div>
						<pre className="whitespace-pre-line">
							{formattedContent}
						</pre>
					</div>
				</div>
			) : (
				<div className="w-fullborder-gray-700">
					<div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
						<div className="flex-shrink-0 flex flex-col relative items-end">
							<Avatar
								radius="md"
								name={session.data?.user?.name || 'User'}
								src={
									session.data?.user?.image ||
									'https://i.pravatar.cc/150?u=a04258a2462d826712d'
								}
							/>
						</div>
						<pre className="whitespace-pre-line">
							{formattedContent}
						</pre>
					</div>
				</div>
			)}
		</>
	);
};

export default TextMessage;
