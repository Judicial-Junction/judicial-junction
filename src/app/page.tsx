import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import TextAnimation from './_components/Landing/text';

export default function Home() {
	const customStyles = {
		fontSize: '16px',
		width: '180px',
		height: '60px',
	};
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 justify-items-center">
				<div className=" mt-40 text-[19px]">
					<TextAnimation />
				</div>
				<div className="flex gap-3 mt-8 ">
					<Link
						href={'/search'}
						className={buttonStyles({
							color: 'default',
							radius: 'full',
							variant: 'ghost',
						})}
						style={customStyles}
					>
						Get Started
					</Link>
				</div>
			</section>
		</>
	);
}
