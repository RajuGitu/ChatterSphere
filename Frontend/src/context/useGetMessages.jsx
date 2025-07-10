import useConversation from "./useConversation.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";

function useGetMessages() {
    const [loading, setLoading] = useState(false);
    const { setMessages, selectedConversation, messages } = useConversation();
    const { authUser } = useAuth();

    useEffect(() => {
        const getMessages = async () => {
            if (!selectedConversation?._id) {
                return;
            }

            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:5002/message/get/${selectedConversation._id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${authUser?.token}`,
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                setMessages(response.data);
            } catch (error) {
                console.error("❌ Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        };

        getMessages();
    }, [selectedConversation?._id]);


    return { messages, loading };
}

export default useGetMessages;
