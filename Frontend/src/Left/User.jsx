import { useSocketContext } from "../context/SocketContex.jsx";
import useConversation from "../context/useConversation.js";

function User({ user }) {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {socket,onlineUsers}  = useSocketContext();
    const isOnline = onlineUsers.includes(user._id);
    return (
        <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`} onClick={() => { setSelectedConversation(user) }}>
            <div className="flex items-center space-x-4 px-8 py-3 cursor-pointer hover:bg-slate-600">
                {/* Profile Image with Online Indicator */}
                <div className="relative w-10 h-10">
                    <img
                        src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border border-gray-300"
                    />
                    {/* Online Status Indicator */}
                    <span className={`${isOnline?" bg-green-500":" bg-red-500" } absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full`}></span>
                </div>

                {/* Name & Email Section */}
                <div>
                    <h2 className="text-sm font-bold text-white">{user.name || "Unknown User"}</h2>
                    <p className="text-xs text-gray-400">{user.email || "No Email Available"}</p>
                </div>
            </div>
        </div>
    );
}

export default User;
