import { useState, useRef, useEffect } from "react";
import { postChat } from "../services/chat";
import ReactMarkdown from "react-markdown";
// import Markdown from "react-markdown"

interface Message {
    role: "user" | "assistant";
    content: string;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const handleSend = async () => {
        if (!input.trim()) return;
        const newMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");
        try {
            const response = await postChat(newMessage);
            if (response.data?.error) {
                const assistantMessage: Message = {
                    role: "assistant",
                    content: response.data.error.message || "No response from AI."
                };
                setMessages((prev) => [...prev, assistantMessage]);
            } else {
                const assistantMessage: Message = {
                    role: "assistant",
                    content: response.data.choices[0].message.content || "No response from AI."
                };
                setMessages((prev) => [...prev, assistantMessage]);
            }
        }
        catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: Message = {
                role: "assistant",
                content: error?.message || "Sorry, there was an error processing your request."
            };
            setMessages((prev) => [...prev, errorMessage]);
        }
    };

    return (
        <div className="h-[80vh] bg-gray-100/70 rounded-lg text-white font-sans font-normal flex flex-col">
            <div className="flex-1 w-96 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                    <div
                        className={`mb-2 p-3 rounded ${msg.role === "user" ? "bg-blue-500 text-right self-end w-80 float-right" : "bg-gray-700 self-start w-80 float-left"
                            }`}
                    >
                        {msg.content}
                    </div>
                ))}
                <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4" />
            </div>
            <div className="p-4 bg-gray-800 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Type your message..."
                />
                <button
                    onClick={handleSend}
                    className="ml-2 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;
