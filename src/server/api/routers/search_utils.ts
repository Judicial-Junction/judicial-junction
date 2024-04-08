interface SearchResponseFields {
  "Judgement PDF URL": string[];
  "Case Number": string[];
  "Judgement Date": string[];
  "Case Title": string[];
  "Judgement Text"?: string[];
  Sentences?: [string, string, string, string, string];
}

export type ValidSearchType =
  | "Fuzzy Search"
  | "Sentence Similarity"
  | "Semantic Search";

export interface SearchResponse {
  _id: string;
  _index: string;
  _score: number;
  search_query: string;
  fields: SearchResponseFields;
  search_type?: ValidSearchType;
}

export const removeDuplicatesByScore = (searchResponses: SearchResponse[]) => {
  const unique = new Set<number>();
  const filteredResponses: SearchResponse[] = [];

  for (const response of searchResponses) {
    if (!unique.has(response._score)) {
      unique.add(response._score);
      filteredResponses.push(response);
    }
  }

  return filteredResponses;
};
