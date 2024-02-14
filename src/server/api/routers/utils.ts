import { env } from '@/env.mjs';
import { Client } from '@opensearch-project/opensearch';

interface SearchResponse {
  _id: string;
  _index: string;
  _score: number;
}

interface SearchResponseFields {
  'Judgement PDF URL': string[];
  'Case Number': string[];
  'Judgement Date': string[];
  'Case Title': string[];
}

interface FuzzyResponseFields extends SearchResponseFields {
  'Judgement Text': string[];
}

interface SemanticResponseFields extends SearchResponseFields {
  'Judgement Text': string[];
}

interface SentenceResponseFields extends SearchResponseFields {
  Sentence: string[];
}

export interface SemanticResponse extends SearchResponse {
  fields: SemanticResponseFields;
}

export interface FuzzyResponse extends SearchResponse {
  fields: FuzzyResponseFields;
}

export interface SentenceResponse extends SearchResponse {
  fields: SentenceResponseFields;
}

export type ValidSearchType =
  | 'Fuzzy Search'
  | 'Sentence Similarity'
  | 'Semantic Search';

export const OpensearchClient = new Client({
  node:
    'https://' +
    `${env.OPENSEARCH_USER}:${env.OPENSEARCH_PASSWORD}` +
    '@' +
    env.OPENSEARCH_HOST +
    ':' +
    `${env.OPENSEARCH_PORT}`,
  ssl: {
    rejectUnauthorized: false,
  },
});

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
