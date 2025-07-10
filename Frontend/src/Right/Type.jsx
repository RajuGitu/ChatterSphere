import { FiSend } from "react-icons/fi";
import { useState, useRef } from "react";
import useSendMessage from "../context/useSendMessage.js";

const Type = () => {
    const { loading, sendMessage } = useSendMessage();
    const [message, setText] = useState("");
    const textareaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        try {
            await sendMessage(message); // Await the async sendMessage
            setText("");
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }
        } catch (err) {
            console.error("Message send failed:", err);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
        if (textareaRef.current) {
            // Reset height to auto before recalculating
            textareaRef.current.style.height = "auto";
            // Set new height (max 120px, about 5 rows)
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
    };

    const handleKeyDown = (e) => {
        // If Enter is pressed without Shift, submit the form instead of adding a newline
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 px-5 border border-gray-300 shadow-sm bg-white w-full min-h-[8vh] py-2">
                {/* Input Field */}
                <textarea
                    ref={textareaRef}
                    className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none"
                    placeholder="Type..."
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    rows="1"
                    style={{ maxHeight: "120px" }}
                />
                {/* Send Button */}
                <button
                    type="submit"
                    className="p-2 rounded-full bg-white shadow-md border border-gray-300 hover:bg-gray-100 transition"
                >
                    <FiSend className={`h-5 w-5 ${loading ? "text-gray-400" : "text-gray-700"}`} />
                </button>
            </div>
        </form>
    );
};

export default Type;
