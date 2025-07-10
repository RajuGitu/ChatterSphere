import Message from "./Message";
import useGetMessages from "../context/useGetMessages.jsx";
import useGetSocketMessages from "../context/useGetSocketMessages.jsx"; // ✅ Add this
import Loading from "../Components/Loading.jsx";
import { useEffect, useRef } from "react";

function Messages() {
    const { messages, loading } = useGetMessages();
    const messagesEndRef = useRef(null);

    useGetSocketMessages(); // ✅ Hook must be used here

    useEffect(() => {
        if (!loading && messages?.length && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, loading]);

    return (
        <div className="p-4 h-[80vh] overflow-y-auto bg-slate-950 rounded shadow-inner scroll-smooth">
            {loading ? (
                <Loading />
            ) : Array.isArray(messages) && messages.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {messages.map((msg) => (
                        <Message key={msg._id} message={msg} />
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            ) : (
                <p className="text-gray-500 text-center">No messages yet.</p>
            )}
        </div>
    );
}

export default Messages;
