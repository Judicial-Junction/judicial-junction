'use client';
import { Avatar } from '@nextui-org/avatar';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/dropdown';
import { signOut, useSession } from 'next-auth/react';

const LogoutButton = () => {
	const session = useSession();
	return (
		<Dropdown>
			<DropdownTrigger>
				<Avatar
					name={session.data?.user.name ?? 'caesar'}
					src={
						session.data?.user.image ??
						'https://i.pravatar.cc/150?u=a042581f4e29026704d'
					}
				/>
			</DropdownTrigger>
			<DropdownMenu aria-label="Profile Actions" variant="flat">
				<DropdownItem key="profile" className="h-14 gap-2">
					<p className="font-semibold">Signed in as</p>
					<p className="font-semibold">
						{session.data?.user.email ??
							'cannot retrieve your email'}
					</p>
				</DropdownItem>
				<DropdownItem key="settings">My Settings</DropdownItem>

				<DropdownItem
					key="logout"
					onPress={() => signOut()}
					color="danger"
				>
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default LogoutButton;
