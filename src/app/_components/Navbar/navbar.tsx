'use client';
import { Link } from '@nextui-org/link';
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Navbar as NextUINavbar,
} from '@nextui-org/navbar';

import { ThemeSwitcher } from '../ThemeSwitcher';
import { AcmeLogo } from '../icons';
import AuthButton from './AuthButton';

const navItems = [
	{
		label: 'fiverr ?',
		href: '#',
		active: true,
	},
	{
		label: 'chat ?',
		href: '#',
		active: false,
	},
];

const navMenuItems = [
	{
		label: 'fiverr ?',
		href: '#',
	},
	{
		label: 'chat ?',
		href: '#',
	},
];

const links = {
	github: 'https://github.com/Judicial-junction/judicial-junction',
	demo: '/chat',
};

export default function Navbar() {
	return (
		<NextUINavbar shouldHideOnScroll isBlurred>
			<NavbarBrand>
				<Link color="foreground" className="" href="#">
					<AcmeLogo />
					<p className="font-bold text-inherit">Home</p>
				</Link>
			</NavbarBrand>

			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Hire
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#" color="foreground">
						Chat
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Near you
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<ThemeSwitcher />
				</NavbarItem>
				<NavbarItem>
					<AuthButton />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
}
