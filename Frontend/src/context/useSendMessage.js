import { useState } from "react";
import useConversation from "./useConversation.js";
import axios from "axios";
import { useAuth } from "./AuthContext.jsx";

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuth();

    const sendMessage = async (message) => {
        if (!selectedConversation?._id) {
            console.error("❌ No conversation selected!");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                `http://localhost:5002/message/send/${selectedConversation._id}`,
                { message },  
                {
                    headers: {
                        Authorization: `Bearer ${authUser.token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );



        } catch (error) {
            console.error("❌ Error sending message:", error.response?.data || error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, sendMessage };
}

export default useSendMessage;
