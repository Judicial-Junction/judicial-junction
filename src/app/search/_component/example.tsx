import { TypeAnimation } from 'react-type-animation';
export default function ExampleQuery() {
    return (
        <TypeAnimation
			sequence={[
				'Tell me about previous Loan fraud ',
				1000,
				'Tell me about previous Insurance fraud ',
				1000,
				'Tell me about previous Workplace Harassment',
				1000,
			]}
			speed={50}
            deletionSpeed={75}
			// omitDeletionAnimation={true}
			repeat={Infinity}
		/>
    )
}