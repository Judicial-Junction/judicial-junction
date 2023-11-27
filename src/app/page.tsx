import clsx from 'clsx';
import FeaturesDropdownLanding from './_components/Landing/FeaturesDropdownLanding';
import GreetingText from './_components/Landing/GreetingText';
import ImageMapCard from './_components/Landing/ImageMapCard';
import ImageCard from './_components/Landing/ImageSearchCard';
import TextAnimation from './_components/Landing/text';
import { subtitle, title } from './_components/primitives';
export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 justify-items-center">
				<div className="mt-40 hidden sm:flex text-[19px]">
					<TextAnimation />
				</div>
				<div className="flex flex-col gap-3 mt-8 ">
					<GreetingText />
					<div className="sm:hidden mx-auto mt-6">
						<FeaturesDropdownLanding />
					</div>
					<div className=" mt-14 mx-auto hidden flex-col">
						<h1
							className={clsx(
								subtitle(),
								'font-bold text-xl text-center',
							)}
						>
							Our services
						</h1>
						<div className="mt-16 flex gap-24">
							<ImageCard />
						</div>
					</div>
					<div className="mt-14 mx-auto sm:hidden flex  flex-col">
						<h1
							className={clsx(
								subtitle(),
								'font-bold text-xl text-center',
							)}
						>
							Our services
						</h1>
						<div className="mt-6 ">
							<ImageCard />
							<hr className=' border-t-0 my-6'/>
							<ImageMapCard />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
