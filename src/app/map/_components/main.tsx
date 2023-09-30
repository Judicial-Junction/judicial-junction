'use client';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/dropdown';
import { useState } from 'react';
import City_plot from './plot';
export default function MainContainer() {
	const [city, setCity] = useState('Delhi');

	return (
		<>
			<Dropdown backdrop="blur">
				<DropdownTrigger>
					<Button variant="bordered" size="md" color="danger">
						{city}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="City selection dropdown event"
					selectionMode="single"
					onAction={(key) => setCity(key.toString())}
				>
					<DropdownItem key="Delhi">Delhi</DropdownItem>
					<DropdownItem key="Hyderabad">Hyderabad</DropdownItem>
					<DropdownItem key="Mumbai">Mumbai</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Divider className=" my-6" />
			<City_plot City={city} />
		</>
	);
}
