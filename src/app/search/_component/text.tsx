"use client";
import { trpc } from "@/app/_trpc/client";
import { type ValidSearchType } from "@/server/api/routers/search_utils";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Textarea } from "@nextui-org/input";
import { useState, type FormEvent } from "react";
import ExampleQuery from "./example";
import SearchLoading from "./loading";
import Response from "./response";
import SearchSelection from "./selection";

export default function SearchText() {
  const mut = trpc.search_router.opensearch.useMutation();
  const [input, setinput] = useState("");
  const [searchType, setSearchType] =
    useState<ValidSearchType>("Semantic Search");
  // const [cases, setcases] = useState((mut.data || []) as any[]);

  const HandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === "") return;
    mut.mutate({ search_term: input, search_type: searchType });
    setinput("");
  };

  const UpdateSearchType = (input: ValidSearchType) => {
    setSearchType(input);
  };

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
          className="w-[250px] overflow-x-hidden md:w-[480px] "
          size="lg"
          value={input}
          onValueChange={setinput}
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

      {!mut.isSuccess && !mut.isError && !mut.isLoading && (
        <div className="mt-10 hidden flex-nowrap items-center sm:flex">
          <p className="mr-1 text-xl font-bold">Example Query : </p>
          <ExampleQuery />
        </div>
      )}

      <div className="mt-10">
        {mut.isLoading && <SearchLoading />}
        {mut.isError && (
          <div className="text-danger">
            An error occurred: {mut.error.message}
          </div>
        )}
        {mut.isSuccess && <Response data={mut.data} />}
      </div>
    </>
  );
}
