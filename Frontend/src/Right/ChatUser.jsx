import { useAuth } from "../context/AuthContext.jsx";
import { useSocketContext } from "../context/SocketContex.jsx";
import useConversation from "../context/useConversation.js";

function ChatUser() {
    const { authUser, loading } = useAuth();
    const { selectedConversation } = useConversation();
    const { socket, onlineUsers } = useSocketContext();
    let isOnline = false;
    if (selectedConversation) {
        isOnline = onlineUsers.includes(selectedConversation._id);
    }
    if (loading) return <p>Loading...</p>;
    if (!authUser) return <p>User not logged in</p>;

    return (
        <div className="pl-5 pt-4 pb-2 flex items-center h-[8vh] min-h-12 max-h-16 space-x-4 
                        bg-gray-800 hover:bg-gray-600 duration-300 sm:pl-3 sm:space-x-2">

            {/* Profile Image with Online Indicator */}
            <div className="relative w-10 h-10 sm:w-8 sm:h-8">
                <img
                    src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    alt={selectedConversation?.name || "User"}
                    className="w-full h-full rounded-full border border-gray-300"
                    loading="lazy"
                />
                {/* Online Status Indicator */}
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${isOnline?"bg-green-500":"bg-red-500"} sm:w-2.5 sm:h-2.5`}>
                </span>
            </div>

            {/* Name & Email Section */}
            <div className="flex flex-col justify-center">
                <h1 className="text-lg font-semibold truncate max-w-[150px] sm:text-sm">
                    {selectedConversation?.name || "Select a User"}
                </h1>
                <span className="text-sm text-gray-400 sm:text-xs">
                    {selectedConversation?.email || "No Email"}
                </span>
            </div>
        </div>
    );
}

export default ChatUser;
