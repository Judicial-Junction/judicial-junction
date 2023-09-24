'use client';

import { useState } from 'react';
import { EmptyScreen } from './empty_screen';

export default function MainChat() {
	const [Message, setMessages] = useState<string[]>([]);
	return <>{Message.length == 0 && <EmptyScreen />}</>;
}
