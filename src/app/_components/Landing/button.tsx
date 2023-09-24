'use client';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { useTheme } from 'next-themes';
export default function LandingButton() {
	const { theme, setTheme } = useTheme();
	return (
		<>
			{theme === 'light' ? (
				<Link
					href={'/search'}
					className={buttonStyles({
						color: 'primary',
						radius: 'full',
						variant: 'ghost',
					})}
				>
					Get Started
				</Link>
			) : (
				<Link
					href={'/search'}
					className={buttonStyles({
						color: 'danger',
						radius: 'full',
						variant: 'ghost',
					})}
				>
					Get Started
				</Link>
			)}
		</>
	);
}
