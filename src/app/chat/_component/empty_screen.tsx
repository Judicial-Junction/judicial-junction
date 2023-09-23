import { IconArrowRight } from '@/app/_components/icons';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

const exampleMessages = [
	{
		heading: 'Explain technical concepts',
		message: `What is a "serverless function"?`,
	},
	{
		heading: 'Summarize an article',
		message: 'Summarize the following article for a 2nd grader: \n',
	},
	{
		heading: 'Draft an email',
		message: `Draft an email to my boss about the following: \n`,
	},
];

export function EmptyScreen() {
	return (
		<div className="mx-auto max-w-2xl px-4 mt-5">
			<div className=" bg-transparent p-8">
				<h1 className="mb-2 text-lg font-semibold">
					Welcome to Judicial Junction AI Chatbot!
				</h1>
				<p className="leading-normal text-muted-foreground">
					You can start a conversation here or try the following
					examples:
				</p>
				<div className="mt-4 flex flex-col items-start space-y-2">
					{exampleMessages.map((message, index) => (
						<Link
							key={index}
							className="h-auto p-0 text-foreground"
						>
							<IconArrowRight className="" />
                            <p className=''>{message.heading}</p>
							
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
