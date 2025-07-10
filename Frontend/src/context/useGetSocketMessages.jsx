import { useEffect } from "react";
import { useSocketContext } from "./SocketContex";
import useConversation from "./useConversation";

function useGetSocketMessages() {
    const { socket } = useSocketContext();
    const { setMessages, messages } = useConversation();
    const { appendMessage } = useConversation();


    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            appendMessage(newMessage); // ✅ Safe update
        };

        socket.on("newMessage", handleNewMessage);
        console.log(messages);

        return () => socket.off("newMessage", handleNewMessage);
    }, [socket]);

    return null;
}

export default useGetSocketMessages;
