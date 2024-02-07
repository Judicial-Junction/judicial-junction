import { ValidSearchType } from '@/server/api/routers/utils';
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
      disabledKeys={['Keyword', 'SentenceEmbedding']}
      selectedKey={selected}
      onSelectionChange={HandleChange}
    >
      <Tab key="Keyword" title="Keyword search"></Tab>
      <Tab
        key="SentenceEmbedding"
        title="Setence similarity search"
      ></Tab>
      <Tab key="WordEmbedding" title="Word similarity search"></Tab>
    </Tabs>
  );
}
