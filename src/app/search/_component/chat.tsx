import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, type FC, useState } from "react";

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
    { owner: Creator.System, text: "Ask your questions about this case" },
  ]);
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chat with Case</DialogTitle>
          <DialogDescription>ask question about cases</DialogDescription>
          {/*Input here */}
          <div className="full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              {/*Messages here*/}
              {messages.map((message, idx) => (
                <div key={idx}>
                  {message.owner == Creator.System ? (
                    <div>
                      <h3>System</h3>
                      <p>{message.text}</p>
                    </div>
                  ) : (
                    <div>
                      <h3>User</h3>
                      <p>{message.text}</p>
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
