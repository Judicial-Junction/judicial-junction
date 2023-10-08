'use client';
import { Button } from '@nextui-org/button';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from '@nextui-org/dropdown';
import { NavbarItem } from '@nextui-org/navbar';
import { ChevronDown } from '../icons';
export default function FeaturesDropdown() {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button
					disableRipple
					className="p-0 bg-transparent data-[hover=true]:bg-transparent"
					radius="sm"
					variant="light"
                    size='lg'
                    endContent={<ChevronDown />}
				>
					Explore
				</Button>
			</DropdownTrigger>

			<DropdownMenu
				aria-label="ACME features"
				className="w-[340px]"
				itemClasses={{
					base: 'gap-4',
				}}
			>
				<DropdownItem
					key="autoscaling"
					description="ACME scales apps to meet user demand, automagically, based on load."
				>
					Autoscaling
				</DropdownItem>
				<DropdownItem
					key="usage_metrics"
					description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
				>
					Usage Metrics
				</DropdownItem>
				<DropdownItem
					key="production_ready"
					description="ACME runs on ACME, join us and others serving requests at web scale."
				>
					Production Ready
				</DropdownItem>
				<DropdownItem
					key="99_uptime"
					description="Applications stay on the grid with high availability and high uptime guarantees."
				>
					+99% Uptime
				</DropdownItem>
				<DropdownItem
					key="supreme_support"
					description="Overcome any challenge with a supporting team ready to respond."
				>
					+Supreme Support
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
