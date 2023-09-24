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
		<NextUINavbar shouldHideOnScroll isBordered>
			<NavbarBrand>
				<Link color="foreground" className="" href="/">
					<AcmeLogo />
				</Link>
			</NavbarBrand>

			<NavbarContent
				className="hidden sm:flex gap-[40px]"
				justify="center"
			>
				<NavbarItem isActive>
					<Link
						href="/search"
						color="danger"
						className="animate-pulse"
						aria-current="page"
					>
						<p className="text-[18px]">Search</p>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/map">
						<p className="text-[18px]">Near you</p>
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end" className="gap-5">
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
