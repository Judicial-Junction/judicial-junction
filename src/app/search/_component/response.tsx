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
									<h1 className="text-xl">
										{result.fields['Case Title'][0]}
									</h1>
									<div className="text-sm flex font-light gap-2">
										<h4>
											{result.fields['Case Number'][0]}
										</h4>
										<h4>
											{result.fields['Judgement Date'][0]}
										</h4>
									</div>
								</ModalHeader>
								{result.fields['Judgement Text'] && (
									<ModalBody>
										{result.fields['Judgement Text'][0]}
									</ModalBody>
								)}
								<ModalFooter className="gap-4">
									<Button
										color="secondary"
										size="md"
										variant="bordered"
										as={Link}
										isExternal
										startContent={
											<FileIcon className="h-4 w-4" />
										}
										href={
											result.fields[
												'Judgement PDF URL'
											][0]
										}
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
