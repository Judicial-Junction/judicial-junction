interface SearchField {
	file_name: string[];
	file_summary: string[];
}

export interface SearchResponse {
	_id: string;
	_index: string;
	_score: number;
	fields: SearchField;
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
