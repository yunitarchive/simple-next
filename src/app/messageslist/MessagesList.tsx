import { FC, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";


interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const getData = async (setMessages: React.Dispatch<React.SetStateAction<Message[]>>) => {
  try {
    const { data } = await axios.get("http://localhost:2000/messages");
    console.log("messages-get:", data);
    setMessages(data); 
  } catch (err) {
    console.log("messages-error:", err);
  }
};

const MessageList: FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);


  useEffect(() => {
    getData(setMessages);
  }, []);

  return (
    <div className="flex flex-col min-h-full bg-neutral-400">
      <Header bgColor="bg-neutral-400" />

      <div className="flex-grow flex flex-col items-center justify-center">
        {messages.length > 0 ? (
          <ul className="w-full max-w-xl mx-auto mt-6">
            {messages.map((message, index) => (
              <li
                key={index}
                className="p-4 mb-2 bg-white shadow rounded-lg"
              > <p className="text-md font-medium ">{'Sender: ' + message.name}<span className="text-md mx-2  font-light">{message.email}</span></p>
                <p className="text-lg font-semibold">{message.subject}</p>
                <p className="text-sm text-gray-600">{message.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-2xl">No messages found</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MessageList;
