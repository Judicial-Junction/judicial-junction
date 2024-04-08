import { env } from "@/env.mjs";
import { TRPCError } from "@trpc/server";
import { removeDuplicatesByScore, type SearchResponse } from "../search_utils";

export default async function SentenceSearchMutation(input: string) {
  const myHeaders = new Headers();

  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    message: input,
  });

  try {
    const response = await fetch(
      `http://${env.EMBEDDING_SERVER_HOST}:8000/sentence_similarity`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
      },
    );
    const result = (await response.json()) as SearchResponse[];
    result.forEach((val) => {
      val.search_type = "Sentence Similarity";
      val.search_query = input;
    });
    return removeDuplicatesByScore(result);
  } catch (error) {
    console.log(error);
    throw new TRPCError({
      message: "Connection to embeddings-conversion server failed",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
}
