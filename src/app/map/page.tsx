'use client'
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/dropdown";
import clsx from "clsx";
import { title } from "../_components/primitives";
export default function Map() {
	return (
		<>
		<div className="flex flex-col pt-8 items-center ">
			<h1 className={clsx(" mb-4 text", title())}>Select A City</h1>
			<Dropdown>
				<DropdownTrigger>
					<Button variant="bordered" size="md" color="danger">
						Choose city
					</Button>
				</DropdownTrigger>
				<DropdownMenu>
					<DropdownItem key='Delhi'>Delhi</DropdownItem>
					<DropdownItem key='Hyderabad'>Hyderabad</DropdownItem>
					<DropdownItem key='Mumbai'>Mumbai</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			
		</div>
			
		</>
	);
}
