'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import TextMessage from './Text';
import { EmptyScreen } from './empty_screen';

export interface MessageInterface {
  content_message: string;
  created_by: string;
}

export default function MainChat({ case_number }: { case_number: string }) {
  const { data } = useQuery<MessageInterface[]>(['messages'], () => []);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [data]);

  return (
    <>
      <div className="flex w-full flex-col h-screen message group">
        {data?.length == 0 && <EmptyScreen case_number={case_number} />}
        <div className="flex-1 overflow-y-auto">
          {data &&
            data.map((message, index) => (
              <TextMessage key={index} message={message} />
            ))}
          <div ref={bottomRef} />
        </div>
        <ChatInput case_number={case_number} />
      </div>
    </>
  );
}
