'use client';
import { trpc } from '@/app/_trpc/client';
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { Spinner } from '@nextui-org/spinner';
import { useState } from 'react';
import ExampleQuery from './example';

export default function SearchText() {
	const mut = trpc.SearchPage.query.useMutation();
	const [input, setinput] = useState('');
	// const [cases, setcases] = useState((mut.data || []) as any[]);

	const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (input !== '') mut.mutate({ query: input });
		setinput('');
	};

	const HandleChange = (event: any) => {
		setinput(event.target.value[0]);
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
					className="overflow-x-hidden w-[250px] md:w-[480px] "
					size="lg"
					value={input}
					onValueChange={setinput}
					enterKeyHint="search"
				/>
				<br />
				<Button
					variant="bordered"
					className="mt-2 "
					type="submit"
					color="secondary"
				>
					Search
				</Button>
			</form>

			{!mut.isSuccess && !mut.isError && !mut.isLoading && (
				<div className="mt-10 hidden sm:flex items-center flex-nowrap">
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
							className="flex flex-col px-4 md:px-10 border-white border-2 bg-opacity-10 my-5 md:my-10 py-3 md:py-5 rounded-3xl"
						>
							<div className="flex my-2 md:my-4 md:gap-8 justify-center">
								<p className="font-semibold underline text-lg  md:text-xl">
									Case Number - {result.fields.case_number[0]}
								</p>
							</div>

							<hr className="my-2 invisible md:visible" />

							<div className="flex my-2 md:my-4 justify-center">
								<p className="font-semibold text-lg md:text-xl">
									Case Name
								</p>
							</div>

							<div
								className="flex my-2 md:my-4 justify-center"
								key={index}
							>
								<p className="font-bold">
									{index + 1}
									<span>.</span>
								</p>
								<p className="ml-2">
									{result.fields.file_name[0]}
								</p>
							</div>

							<hr className="my-2 invisible md:visible" />

							<div className="flex my-2 md:my-4 justify-center">
								<p className="font-semibold text-lg md:text-xl">
									Case Summary
								</p>
							</div>

							<div className="flex my-2 md:my-4" key={index}>
								<p className="font-bold">{index + 1}.</p>
								<p className="">
									{result.fields.file_summary[0]}
								</p>
							</div>

							<div className="flex my-2 md:my-4 justify-center">
								<Button
									className="mt-4 py-1 px-2 text-sm w-[200px] md:w-36"
									color="secondary"
									variant="bordered"
									as={Link}
									href={`chat/${result.fields.case_number[0]}`}
								>
									Chat with this case
								</Button>
							</div>

							<br></br>
							<hr className="my-2 md:my-4 border-t-0" />
						</div>
					))}
			</div>
		</>
	);
}
