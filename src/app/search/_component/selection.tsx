import { ValidSearchType } from '@/server/api/routers/search_utils';
import { Tabs, Tab } from '@nextui-org/tabs';
import { Key, useState } from 'react';
export default function SearchSelection({
	UpdateFunc,
}: {
	UpdateFunc: (key: ValidSearchType) => void;
}) {
	const [selected, setSelected] = useState('WordEmbedding');

	const HandleChange = (key: Key) => {
		if (typeof key !== 'string') {
			return;
		}
		setSelected(key);
		UpdateFunc(key as ValidSearchType);
	};

	return (
		<Tabs
			color="primary"
			variant="solid"
			selectedKey={selected}
			onSelectionChange={HandleChange}
			disabledKeys={['Sentence Similarity']}
		>
			<Tab key="Fuzzy Search" title="Fuzzy search"></Tab>
			<Tab key="Sentence Similarity" title="Setence similarity"></Tab>
			<Tab key="Semantic Search" title="Semantic search"></Tab>
		</Tabs>
	);
}
