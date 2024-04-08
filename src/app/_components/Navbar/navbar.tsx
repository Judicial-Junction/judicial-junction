import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { AcmeLogo } from "../icons";
import FeaturesDropdown from "./FeaturesDropdown";

export default function Navbar() {
  return (
    <NextUINavbar shouldHideOnScroll>
      <NavbarBrand className="hidden sm:flex">
        <Link color="foreground" className="" href="/" as={NextLink}>
          <AcmeLogo />
        </Link>
      </NavbarBrand>

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden pl-52  sm:flex" justify="center">
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page" as={NextLink}>
            <p className="text-[18px]">About</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <FeaturesDropdown />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <Link color="secondary" className="" href="/" as={NextLink}>
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Digital Adhivakta</p>
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
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color={
                index === 0
                  ? "warning"
                  : index === siteConfig.navMenuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
              as={NextLink}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent className="hidden sm:flex " justify="end">
        <NavbarItem className="">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
