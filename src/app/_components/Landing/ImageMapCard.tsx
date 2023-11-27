import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import Link from 'next/link';
export default function ImageMapCard() {
	return (
		<>
			<Card className="col-span-12 sm:col-span-4 h-[300px]">
				<Link prefetch={true} href={'/map'}>
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className=" text-tiny text-white/60 uppercase font-bold">
							Lawyer search
						</p>
						<h4 className="   ml-16 text-black font-bold text-medium">
							Search lawyers by location
						</h4>
					</CardHeader>

					<Image
						removeWrapper
						as={NextImage}
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="/CardImage3.jpeg"
						width="300"
						height="200"
					/>
					</Link>
				</Card>
		</>
	);
}
