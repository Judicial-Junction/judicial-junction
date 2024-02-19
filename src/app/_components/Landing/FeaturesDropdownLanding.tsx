'use client';
import { Button } from '@nextui-org/button';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
} from '@nextui-org/dropdown';
import { useRouter } from 'next/navigation';
import { ChevronDown, MapIcon, SearchIcon } from '../icons';
export default function FeaturesDropdownLanding() {
	const router = useRouter();

	if (typeof window !== 'undefined') {
		router.prefetch('/search');
		router.prefetch('/manya');
	}

	return (
		<Dropdown backdrop="blur">
			<DropdownTrigger>
				<Button
					disableRipple
					className="p-0 w-[100px] data-[hover=true]:bg-transparent"
					radius="sm"
					variant="bordered"
					endContent={<ChevronDown />}
				>
					Explore
				</Button>
			</DropdownTrigger>

			<DropdownMenu
				aria-label="Digital Adhivakta features"
				className="w-[340px]"
				itemClasses={{
					base: 'gap-4',
				}}
				variant="light"
				onAction={(key) => router.push(`${key}`)}
			>
				<DropdownSection title="For Lawyers" showDivider>
					<DropdownItem
						key="search"
						description="This is a search tool Intended for Lawyers where they can semantically search all previous cases."
						startContent={<SearchIcon size={30} />}
					>
						Case Search
					</DropdownItem>
				</DropdownSection>

				<DropdownSection title="For Users">
					<DropdownItem
						key="map"
						description="This tool shows users all practicing Lawyers present in different cities with thier contact number."
						startContent={<MapIcon size={30} />}
					>
						Search Lawyers by area
					</DropdownItem>
					{/* <DropdownItem
						key="manya"
						description="This is a marketplace for users which displays Lawyers by thier field of practice."
						startContent={<MarketIcon size={30} />}
					>
						Marketplace
					</DropdownItem> */}
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
}
