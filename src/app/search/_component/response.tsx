import { SearchResponse } from '@/server/api/routers/search_utils';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Card, CardHeader, CardFooter } from '@nextui-org/card';
import { DocIcon, FileIcon } from '@/app/_components/icons';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';

const demoData = [
  {
    _index: 'case-text',
    _id: 'yO87rY0BmbvEn2XjuFz-',
    _score: 10.629701,
    fields: {
      'Case Number': ['CA 1213/AAm89'],
      'Judgement PDF URL': ['https://youtube.com'],
      'Judgement Date': ['10/10/21'],
      'Case Title': ['Apple vs Microsoft'],
      'Judgement Text': [
        'dAaidjiajda bad formatted \\n tezt \n do this work',
      ],
    },
  },
] as SearchResponse[];

export default function Response() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      {demoData.map((result, index) => (
        <>
          <Card key={index} className="w-max">
            <CardHeader className="flex flex-col items-start gap-2">
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
            <CardFooter className="gap-5">
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
          </Card>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior="inside"
          >
            <ModalContent>
              <>
                <ModalHeader className=" text-center">
                  dakdak
                  {result.fields['Case Title'][0]}
                </ModalHeader>
                {result.fields['Judgement Text'] && (
                  <ModalBody>
                    {result.fields['Judgement Text'][0]}
                  </ModalBody>
                )}
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
              ;
            </ModalContent>
          </Modal>
        </>
      ))}
    </>
  );
}
