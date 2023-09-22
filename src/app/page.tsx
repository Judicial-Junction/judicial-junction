import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import TextAnimation from './_components/Landing/text';
export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 justify-items-center">
				<div className=" mt-40">
					<TextAnimation />
				</div>
				<div className="flex gap-3 mt-4">
					<Link
						href={'#'}
						className={buttonStyles({
							color: 'secondary',
							radius: 'full',
							variant: 'bordered',
						})}
					>
						Get Started
					</Link>
				</div>
			</section>
		</>
	);
}
