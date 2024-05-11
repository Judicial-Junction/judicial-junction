import { env } from "@/env.mjs";
import { TRPCError } from "@trpc/server";
import { removeDuplicatesByScore, type SearchResponse } from "../search_utils";

const stopwords = [
  "i",
  "me",
  "my",
  "myself",
  "we",
  "our",
  "ours",
  "ourselves",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "he",
  "him",
  "his",
  "himself",
  "she",
  "her",
  "hers",
  "herself",
  "it",
  "its",
  "itself",
  "they",
  "them",
  "their",
  "theirs",
  "themselves",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "having",
  "do",
  "does",
  "did",
  "doing",
  "a",
  "an",
  "the",
  "and",
  "but",
  "if",
  "or",
  "because",
  "as",
  "until",
  "while",
  "of",
  "at",
  "by",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "s",
  "t",
  "can",
  "will",
  "just",
  "don",
  "should",
  "now",
];

function remove_stopwords(str: string) {
  const res = [];
  const words = str.split(" ");
  for (const word of words) {
    const word_clean = word.split(".").join("");
    if (!stopwords.includes(word_clean)) {
      res.push(word_clean);
    }
  }
  return res.join(" ");
}

export default async function FuzzySearchMutation(input: string) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    `Basic ${btoa(`${env.OPENSEARCH_USER}:${env.OPENSEARCH_PASSWORD}`)}`,
  );

  const raw = JSON.stringify({
    query: {
      match: {
        "Judgement Text": {
          query: remove_stopwords(input),
        },
      },
    },
    fields: [
      "Judgement PDF URL",
      "Case Number",
      "Case Title",
      "Judgement Date",
      "Judgement Text",
    ],
    size: 3,
    _source: false,
  });

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  try {
    const response = await fetch(
      `https://${env.OPENSEARCH_HOST}:${env.OPENSEARCH_PORT}/cases-index/_search`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
      },
    );

    // eslint-disable-next-line
    const result = (await response.json()).hits.hits as SearchResponse[];
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
    result.forEach((val) => {
      val.search_type = "Fuzzy Search";
      val.search_query = input;
    });
    return removeDuplicatesByScore(result);
  } catch (error) {
    console.log(error);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
    throw new TRPCError({
      message: "Connection to opensearch server failed",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
}
