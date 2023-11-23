import TextAnimation from './_components/Landing/text';

export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 justify-items-center">
				<div className="mt-40 text-[19px]">
					<TextAnimation />
				</div>
				<div className="flex gap-3 mt-8 ">
					<h1 className=" text-default">Our services</h1>
				</div>
			</section>
		</>
	);
}
