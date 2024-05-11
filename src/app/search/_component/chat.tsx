import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, type FC, useState, type FormEvent } from "react";
import clsx from "clsx";
import { trpc } from "@/app/_trpc/client";

interface ChatDialogProps {
  CaseText?: string;
  CaseTitle: string;
}

interface Message {
  role: "system" | "user";
  content: string;
}

const ChatDialog: FC<ChatDialogProps> = (props) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setmessages] = useState<Message[]>([
    { role: "system", content: "Ask questions about this case!!" },
  ]);
  const [input, setinput] = useState("");
  const chatMut = trpc.openai_router.ChatWithCase.useMutation({
    onMutate: () => {
      setmessages((prev) => [
        ...prev,
        { role: "system", content: "thinking......." },
      ]);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    onSuccess: (data) => {
      setmessages((prev) => prev.slice(0, -1));
      if (data) {
        setmessages((prev) => [...prev, { role: "system", content: data }]);
        return;
      }

      setmessages((prev) => [
        ...prev,
        { role: "system", content: "There was no reply :(" },
      ]);
    },
    onError: (error) => {
      setmessages((prev) => prev.slice(0, -1));
      setmessages((prev) => [
        ...prev,
        { role: "system", content: `Error occured,  ${error.message}` },
      ]);
    },
    onSettled: () => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  });

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === "") return;
    if (!props.CaseText) return;
    setmessages((prev) => [...prev, { role: "user", content: input }]);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    chatMut.mutate({ messages, caseText: props.CaseText });
    setinput("");
  };

  return (
    <Dialog>
      <DialogTrigger>Chat</DialogTrigger>
      <DialogOverlay>
        <DialogContent>
          <DialogTitle>Chat with Case : {props.CaseTitle}</DialogTitle>
          <div className="flex h-[400px] flex-col">
            <div className="flex-1 space-y-2 overflow-y-auto text-center">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    message.role == "system"
                      ? "border-b-1 border-slate-200 bg-slate-100 text-left"
                      : "text-right",
                  )}
                >
                  {message.role == "system" ? (
                    <p>{message.content}</p>
                  ) : (
                    <p>{message.content}</p>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <form
              className="mt-2 flex items-center space-x-2"
              onSubmit={HandleSubmit}
            >
              <Input
                type="search"
                value={input}
                onChange={(e) => setinput(e.target.value)}
                placeholder="Type your query here."
              />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default ChatDialog;
