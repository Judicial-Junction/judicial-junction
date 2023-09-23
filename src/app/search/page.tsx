import { title } from '@/app/_components/primitives';
import { Divider } from '@nextui-org/divider';
import SearchText from './_component/text';
export default function Search() {
	return (
		<section className="flex items-center justify-items-center justify-center mt-20">
			<div className="max-w-lg text-center justify-center gap-4 mt-15">
				<h1 className={title({ color: 'violet' })}>Search&nbsp;</h1>
				<h1 className={title()}>Your Queries</h1>
				<Divider className="my-4 opacity-0" />
				<SearchText />
			</div>
		</section>
	);
}
