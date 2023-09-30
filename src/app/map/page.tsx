import clsx from 'clsx';
import { title } from '../_components/primitives';
import MainContainer from './_components/main';
export default function Map() {
	return (
		<>
			<div className="flex flex-col pt-8 items-center ">
				<h1 className={clsx('mb-4 text-4xl')}>Select A City</h1>
				<MainContainer />
			</div>
		</>
	);
}
