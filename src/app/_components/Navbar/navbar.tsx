import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import clsx from 'clsx';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { AcmeLogo } from '../icons';
import AuthButton from './AuthButton';
import FeaturesDropdown from './FeaturesDropdown';

export default function Navbar() {
	return (
		<NextUINavbar shouldHideOnScroll>
			<NavbarBrand className="hidden sm:flex">
				<Link color="foreground" className="" href="/">
					<AcmeLogo />
				</Link>
			</NavbarBrand>

			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarContent className="hidden sm:flex  pl-52" justify="center">
				<NavbarItem>
					<Link href="#" color="foreground" aria-current="page">
						<p className="text-[18px]">About</p>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<FeaturesDropdown />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3" justify="center">
				<Link color="foreground" className="" href="/">
					<NavbarBrand>
						<AcmeLogo />
						<p className="font-bold text-inherit">Judicial</p>
					</NavbarBrand>
				</Link>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="sm:hidden">
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{siteConfig.navMenuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 0
									? 'warning'
									: index ===
									  siteConfig.navMenuItems.length - 1
									? 'danger'
									: 'foreground'
							}
							href={item.href}
							size="lg"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
				<NavbarMenuItem>
					<AuthButton />
				</NavbarMenuItem>
			</NavbarMenu>

			<NavbarContent className="hidden sm:flex " justify="end">
				<NavbarItem className="">
					<ThemeSwitcher />
				</NavbarItem>
				<NavbarItem>
					<AuthButton />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
}
