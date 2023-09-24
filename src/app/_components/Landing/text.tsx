'use client';
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation() {
	return (
		<TypeAnimation
			preRenderFirstString={true}
			sequence={[
				'Hire any Lawyer that you like',
				1000,
				'Use our AI for your Legal Issues',
				1000,
				'All solutions for your Legal Problems',
				1000,
			]}
			speed={50}
			omitDeletionAnimation={true}
			style={{ fontSize: '2.8em', fontWeight: 'bold' }}
			repeat={Infinity}
		/>
	);
}
