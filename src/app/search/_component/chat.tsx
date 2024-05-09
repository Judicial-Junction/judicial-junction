import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, type FC, useState, type FormEvent } from "react";
import clsx from "clsx";

enum Creator {
  System,
  User,
}

interface ChatDialogProps {
  CaseText: string;
  CaseTitle: string;
  CaseNumber: string;
}

interface Message {
  owner: Creator;
  text: string;
}

const ChatDialog: FC<ChatDialogProps> = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setmessages] = useState<Message[]>([
    { owner: Creator.System, text: "Ask questions about the ask !!" },
  ]);
  const [input, setinput] = useState("");

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === "") return;
    setmessages((prev) => [...prev, { owner: Creator.User, text: input }]);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setmessages((prev) => [
      ...prev,
      { owner: Creator.System, text: "thinking......." },
    ]);
    setmessages((prev) => prev.slice(0, -1));
    setinput("");
  };

  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogOverlay className="">
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Chat with Case</DialogTitle>
            {/*Input here */}
            <div className="flex h-[400px] flex-col">
              <div className="flex-1 space-y-2 overflow-y-auto text-center">
                {messages.map((message, idx) => (
                  <div
                    key={idx}
                    className={clsx(
                      message.owner == Creator.System
                        ? "bg-slate-100 text-left"
                        : "text-right",
                      "border-b-1 border-slate-200",
                    )}
                  >
                    {message.owner == Creator.System ? (
                      <p>{message.text}</p>
                    ) : (
                      <p>{message.text}</p>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
              <form
                className="mt-2 flex w-full max-w-sm items-center space-x-2"
                onSubmit={HandleSubmit}
              >
                <Input
                  type="search"
                  value={input}
                  onChange={(e) => setinput(e.target.value)}
                  placeholder="chat"
                />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default ChatDialog;
