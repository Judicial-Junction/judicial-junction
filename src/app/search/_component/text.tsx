'use client';
import { trpc } from '@/app/_trpc/client';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Textarea } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { Spinner } from '@nextui-org/spinner';
import { useState } from 'react';
import ExampleQuery from './example';

import { ChatIcon } from '@/app/_components/icons';

export default function SearchText() {
	const mut = trpc.search.useMutation();
	const [input, setinput] = useState('');
	// const [cases, setcases] = useState((mut.data || []) as any[]);

	const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (input !== '') mut.mutate({ query: input });
		setinput('');
	};

	return (
		<>
			<form
				onSubmit={HandleSubmit}
				className="flex flex-col items-center overflow-x-hidden"
			>
				<Textarea
					minRows={1}
					color="primary"
					variant="bordered"
					className="overflow-x-hidden h-full w-[480px] "
					size="lg"
					value={input}
					onValueChange={setinput}
					enterKeyHint="search"
				/>
				<br></br>
				<Button
					variant="bordered"
					className=" mt-2"
					type="submit"
					color="secondary"
				>
					Search
				</Button>
			</form>

			{!mut.isSuccess && !mut.isError && !mut.isLoading && (
				<div className="mt-10 flex items-center flex-nowrap">
					<p className="font-bold text-xl mr-1">Example Query : </p>
					<ExampleQuery />
				</div>
			)}

			<div className=" mt-10">
				{mut.isLoading && (
					<div className="">
						<Spinner size="lg" color="warning" />
					</div>
				)}
				{mut.isError ? (
					<div className="text-danger">
						An error occurred: {mut.error.message}
					</div>
				) : null}
				{mut.isSuccess &&
					mut.data.map((result, index) => (
						<div
							key={index}
							className="flex flex-col  px-[70px] border-white border-2 bg-opacity-10 my-10 py-5 rounded-3xl"
						>
							<div className="flex my-2 justify-between items-center gap-[200px]">
								<p className="font-semibold underline text-xl flex-nowrap ">
									Case Number - {result.fields.case_number[0]}
								</p>
								<Button
									isIconOnly
									className="hover:bg-opacity-80 animate-bounce"
									color="default"
									variant="flat"
									as={Link}
									href={`chat/${result.fields.case_number[0]}`}
								>
									<ChatIcon />
								</Button>
							</div>

							<hr className="my-2 invisible" />

							<div className="flex my-2 justify-center">
								<p className=" font-semibold text-xl ">Case Name</p>
							</div>

							<div
								className="flex my-2 justify-center"
								key={index}
							>
								<p className="font-bold">{index + 1}<span> .</span></p>
								<p className="ml-2">{result.fields.file_name[0]}</p>
							</div>

							<hr className="my-2 invisible" />

							<div className="flex my-2 justify-center">
								<p className="font-semibold text-xl ">Case Summary</p>
								
							</div>

							<div className="flex my-2" key={index}>
								<p className="font-bold">{index + 1}.</p>
								<p className="">
									{result.fields.file_summary[0]}
								</p>
							</div>

							{/*chat with us button*/}
							<br></br>
							<Divider className="my-4" />
						</div>
					))}
			</div>
		</>
	);
}
