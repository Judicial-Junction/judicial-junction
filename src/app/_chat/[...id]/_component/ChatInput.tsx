import { IconArrowElbow } from '@/app/_components/icons';
import { trpc } from '@/app/_trpc/client';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { MessageInterface } from './Chat';

export default function ChatInput({ case_number }: { case_number: string }) {
  const queryClient = useQueryClient();
  const [inputMessage, setinputMessage] = useState('');

  const newMessageMutation = trpc.documentQuery.useMutation({
    onMutate: async ({ query, case_number }) => {
      await queryClient.cancelQueries({ queryKey: ['messages'] });
      let previousMessages = queryClient.getQueryData<MessageInterface[]>([
        'messages',
      ]);

      previousMessages = queryClient.getQueryData<MessageInterface[]>([
        'messages',
      ]);

      let HumanMessage: MessageInterface = {
        content_message: query,
        created_by: 'user',
      };

      if (previousMessages) {
        previousMessages = [...previousMessages, HumanMessage];
      }

      queryClient.setQueryData<MessageInterface[]>(
        ['messages'],
        previousMessages,
      );

      previousMessages = queryClient.getQueryData<MessageInterface[]>([
        'messages',
      ]);

      let LoadingMessage: MessageInterface = {
        content_message: 'super secret loading message',
        created_by: 'bot',
      };

      if (previousMessages) {
        previousMessages = [...previousMessages, LoadingMessage];
      }
      queryClient.setQueryData<MessageInterface[]>(
        ['messages'],
        previousMessages,
      );
    },
    onError: (error) => {
      let previousMessages = queryClient.getQueryData<MessageInterface[]>([
        'messages',
      ]);
      console.log(error);
      let ErrorMessage: MessageInterface = {
        content_message: error.message,
        created_by: 'user',
      };
      if (previousMessages) {
        previousMessages = [...previousMessages, ErrorMessage];
      }
      queryClient.setQueryData<MessageInterface[]>(
        ['messages'],
        previousMessages,
      );
    },
    onSuccess(data) {
      let previousMessages = queryClient.getQueryData<MessageInterface[]>([
        'messages',
      ]);

      previousMessages?.pop();

      queryClient.setQueryData<MessageInterface[]>(
        ['messages'],
        previousMessages,
      );

      previousMessages = queryClient.getQueryData<MessageInterface[]>([
        'messages',
      ]);

      let BotMessage: MessageInterface = {
        content_message: data,
        created_by: 'bot',
      };
      if (previousMessages) {
        previousMessages = [...previousMessages, BotMessage];
      }
      queryClient.setQueryData<MessageInterface[]>(
        ['messages'],
        previousMessages,
      );
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputMessage !== '')
      newMessageMutation.mutate({
        query: inputMessage,
        case_number,
      });
    setinputMessage('');
  };

  return (
    <>
      <div className="sticky bottom-1 z-20 bg-opacity-80 backdrop-filter backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="mx-2 gap-3 last:mb-2 md:mx-auto md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
        >
          <Textarea
            minRows={1}
            placeholder="Type your message here"
            color="secondary"
            variant="faded"
            value={inputMessage}
            onValueChange={setinputMessage}
            endContent={
              <Button isIconOnly variant="light" type="submit">
                <IconArrowElbow />
              </Button>
            }
          />
        </form>
      </div>
    </>
  );
}
