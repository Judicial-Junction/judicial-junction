import { trpc } from "@/app/_trpc/client";
import { Spinner } from "@nextui-org/spinner";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
export default function SearchLoading() {
  const queryClient = useQueryClient();
  const loading_query_key = getQueryKey(
    trpc.openai_router.loading_message,
    undefined,
    "query",
  );
  queryClient.setQueryDefaults(loading_query_key, {
    refetchInterval: 10 * 1000,
  });
  const loading_query = trpc.openai_router.loading_message.useQuery();

  return (
    <div className="flex w-[250px] flex-col gap-3 md:w-[480px]">
      <Spinner size="lg" color="warning" />
      {loading_query.isFetched && (
        <p className="text-lg font-bold">
          Interesting Fact: {loading_query.data}
        </p>
      )}
    </div>
  );
}
