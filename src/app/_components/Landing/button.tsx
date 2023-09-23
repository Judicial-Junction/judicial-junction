'use client';
import { useTheme } from 'next-themes';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
export default function LandingButton() {
	const { theme, setTheme } = useTheme();
	return (
		<>
			{theme === 'light' ? (
				<Link
					href={'#'}
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
					href={'#'}
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
