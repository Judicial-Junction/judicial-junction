'use client';
import { trpc } from '@/app/_trpc/client';
import { FuzzyResponse, ValidSearchType } from '@/server/api/routers/utils';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Textarea } from '@nextui-org/input';
import { Spinner } from '@nextui-org/spinner';
import { useState } from 'react';
import ExampleQuery from './example';
import SearchSelection from './selection';

export default function SearchText() {
  const FuzzyMut = trpc.search.fuzzy.search.useMutation({
    onMutate: () => {
      setdisabled(true);
    },
    onSettled: () => {
      setdisabled(false);
    },
  });
  const SemanticMut = trpc.search.semantic.search.useMutation({
    onMutate: () => {
      setdisabled(true);
    },
    onSettled: () => {
      setdisabled(false);
    },
  });
  const SentenceMut = trpc.search.sentence.search.useMutation({
    onMutate: () => {
      setdisabled(true);
    },
    onSettled: () => {
      setdisabled(false);
    },
  });

  const [input, setinput] = useState('');
  const [searchType, setSearchType] =
    useState<ValidSearchType>('Semantic Search');
  const [disabled, setdisabled] = useState(false);
  // const [cases, setcases] = useState((mut.data || []) as any[]);

  const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === '') {
      return;
    }
    switch (searchType) {
      case 'Fuzzy Search':
        FuzzyMut.mutate({ query: input });
        break;
      case 'Semantic Search':
        SemanticMut.mutate({ query: input });
        break;
      case 'Sentence Similarity':
        SentenceMut.mutate({ query: input });
        break;
    }
    setinput('');
  };

  const UpdateSearchType = (input: ValidSearchType) => {
    setSearchType(input);
  };

  const MutationError =
    FuzzyMut.isError || SemanticMut.isError || SentenceMut.isError;
  const MutationLoading =
    FuzzyMut.isLoading || SentenceMut.isLoading || SemanticMut.isLoading;
  const MutationSuccess =
    FuzzyMut.isSuccess || SentenceMut.isSuccess || SemanticMut.isSuccess;

  return (
    <>
      <SearchSelection UpdateFunc={UpdateSearchType} />
      <Divider className="my-4 opacity-0" />
      <form
        onSubmit={HandleSubmit}
        className="flex flex-col items-center overflow-x-hidden"
      >
        <Textarea
          minRows={1}
          color="primary"
          variant="bordered"
          className="overflow-x-hidden w-[250px] md:w-[480px] "
          size="lg"
          value={input}
          onValueChange={setinput}
          isDisabled={disabled}
        />
        <br />
        <Button
          variant="bordered"
          className="mt-2 "
          type="submit"
          color="secondary"
        >
          Search
        </Button>
      </form>

      {!MutationSuccess && !MutationError && !MutationLoading && (
        <div className="mt-10 hidden sm:flex items-center flex-nowrap">
          <p className="font-bold text-xl mr-1">Example Query : </p>
          <ExampleQuery />
        </div>
      )}

      <div className="mt-10">
        {MutationLoading && (
          <div className="">
            <Spinner size="lg" color="warning" />
          </div>
        )}
        {MutationError && (
          <div className="text-danger">
            An error occurred:
            {FuzzyMut.isError
              ? FuzzyMut.error.message
              : SemanticMut.isError
                ? SemanticMut.error.message
                : SentenceMut.isError
                  ? SentenceMut.error.message
                  : null}
          </div>
        )}
      </div>
    </>
  );
}
