import { DocIcon, FileIcon } from '@/app/_components/icons';
import { SearchResponse } from '@/server/api/routers/search_utils';
import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/modal';
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
				const { isOpen, onOpen, onClose } = useDisclosure();
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
						<CardFooter className="gap-5 flex justify-center">
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
							<Button
								color="secondary"
								variant="bordered"
								startContent={<DocIcon className="h-4 w-4" />}
								onPress={onOpen}
							>
								View Case
							</Button>
						</CardFooter>
						<Modal
							key={index}
							isOpen={isOpen}
							onClose={onClose}
							scrollBehavior="inside"
							backdrop="opaque"
						>
							<ModalContent>
								<ModalHeader className="flex flex-col">
									<h1 className="text-xl">{result.fields['Case Title'][0]}</h1>
									<div className="text-sm flex font-light gap-2">
										<h4>{result.fields['Case Number'][0]}</h4>
										<h4>{result.fields['Judgement Date'][0]}</h4>
									</div>
								</ModalHeader>
								{result.fields['Judgement Text'] && (
									<ModalBody>
										{result.search_type == 'Fuzzy Search' && (
											<>
												<p className="font-semibold text-warning">
													Below is the segment of judgement text that contains
													your searched word.
												</p>
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
										<p className="font-semibold text-warning">
											Below is full case Text for the following case.
										</p>
										<pre className="whitespace-pre-line">
											{result.fields['Judgement Text'][0]}
										</pre>
									</ModalBody>
								)}
								{result.fields['Sentences'] && (
									<ModalBody>
										<p className="font-light text-warning">
											Similar Sentence is highlighted below.
										</p>
										<p>
											{result.fields.Sentences[0] + ' '}
											{result.fields.Sentences[1] + ' '}
											<mark className="bg-grap-700: dark:bg-slate-300">
												{result.fields.Sentences[2] + ' '}
											</mark>
											{result.fields.Sentences[3] + ' '}
											{result.fields.Sentences[4]}
										</p>
									</ModalBody>
								)}
								<ModalFooter className="gap-4">
									<Button
										color="secondary"
										size="md"
										variant="bordered"
										as={Link}
										isExternal
										startContent={<FileIcon className="h-4 w-4" />}
										href={result.fields['Judgement PDF URL'][0]}
									>
										View PDF
									</Button>
									<Button
										size="md"
										color="danger"
										variant="bordered"
										onPress={onClose}
									>
										Close
									</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</Card>
				);
			})}
		</div>
	);
}
