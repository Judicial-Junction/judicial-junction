import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import { MapIcon } from '../icons';
export default function TextCard() {
	return (
		<>
			<Card className="max-w-[400px]">
				<NextLink href={'/search'}>
					<CardHeader className="flex gap-3">
						<MapIcon />
						<div className="flex flex-col">
							<p className="text-md">Search Lawyers by Area</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<p className=" text-zinc-500 dark:text-zinc-400">
							This tool shows users all practicing Lawyers present
							in different cities with thier contact number.
						</p>
					</CardBody>
					<Divider />
				</NextLink>
			</Card>
		</>
	);
}
