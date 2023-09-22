'use client';
import { Button } from '@nextui-org/button';
import { signIn } from 'next-auth/react';
import { GreenUserIcon } from '../icons';

export default function LogInButton() {
	return (
		<Button
			onPress={() => signIn('google')}
			variant="flat"
			color="success"
			startContent={<GreenUserIcon />}
		>
			Login
		</Button>
	);
}
