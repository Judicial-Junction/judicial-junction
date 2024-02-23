import { FileIcon } from '@/app/_components/icons';
import { SearchResponse } from '@/server/api/routers/search_utils';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { closest } from 'fastest-levenshtein';
import { useMemo } from 'react';

function FindFuzzyWord(searched_keyword: string, case_text: string) {
	const wordsArray = case_text.split(/\s+/);
	const closest_word = closest(searched_keyword, wordsArray);
	const targetIndex = wordsArray.findIndex((word) =>
		word.includes(closest_word),
	);
	const prevSentence = wordsArray
		.slice(Math.max(targetIndex - 15, 0), targetIndex)
		.join(' ');
	if (targetIndex + 16 >= wordsArray.length)
		return [prevSentence, closest_word, ''] as [string, string, string];
	return [
		prevSentence,
		closest_word,
		wordsArray.slice(targetIndex + 1, targetIndex + 16).join(' '),
	] as [string, string, string];
}

function GetFuzzySentence(keyword: string, judgement_text: string) {
	const sentencesToDisplay = useMemo(
		() => FindFuzzyWord(keyword, judgement_text),
		[keyword, judgement_text],
	);
	return sentencesToDisplay;
}

export default function Response({ data }: { data: SearchResponse[] }) {
	return (
		<div className="flex flex-col gap-4 items-center">
			{data.map((result, index) => {
				// eslint-disable-next-line react-hooks/rules-of-hooks
				return (
					<Card
						key={index}
						className="items-center justify-center sm:w-[500px] w-min"
					>
						<CardHeader className="flex flex-col gap-2 justify-center text-center">
							<h1 className="font-bold text-2xl">
								{result.fields['Case Title'][0]}
							</h1>
							<h4 className="font-light text-sm">
								Case Number : {result.fields['Case Number'][0]}
							</h4>
							<h4 className="font-semibold text-medium">
								Date : {result.fields['Judgement Date'][0]}
							</h4>
						</CardHeader>
						{result.fields['Judgement Text'] && (
							<CardBody>
								{result.search_type == 'Fuzzy Search' && (
									<>
										<p>
											{'...' +
												GetFuzzySentence(
													result.search_query,
													result.fields['Judgement Text'][0],
												)[0] +
												' '}
											<mark className="bg-slate-700: dark:bg-slate-300">
												{
													GetFuzzySentence(
														result.search_query,
														result.fields['Judgement Text'][0],
													)[1]
												}
											</mark>
											{' ' +
												GetFuzzySentence(
													result.search_query,
													result.fields['Judgement Text'][0],
												)[2] +
												'...'}
										</p>
									</>
								)}
							</CardBody>
						)}
						{result.fields['Sentences'] && (
							<CardBody>
								<p>
									{result.fields.Sentences[0] + ' '}
									{result.fields.Sentences[1] + ' '}
									<mark className="bg-grap-700: dark:bg-slate-300">
										{result.fields.Sentences[2] + ' '}
									</mark>
									{result.fields.Sentences[3] + ' '}
									{result.fields.Sentences[4]}
								</p>
							</CardBody>
						)}
						<CardFooter className="gap-5 flex justify-end">
							<Button
								color="secondary"
								variant="bordered"
								as={Link}
								isExternal
								startContent={<FileIcon className="h-4 w-4" />}
								href={result.fields['Judgement PDF URL'][0]}
							>
								View PDF
							</Button>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
}
