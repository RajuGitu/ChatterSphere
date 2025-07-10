import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";

function Right() {
    return (
        <div className="w-[72%] bg-slate-950 text-white flex flex-col h-screen">
            {/* Fixed ChatUser at the top */}
            <div className="h-[8vh] flex-shrink-0">
                <ChatUser />
            </div>

            {/* Scrollable Messages Section with Hidden Scrollbar */}
            <div className="flex-grow overflow-y-auto no-scrollbar">
                <Messages />
            </div>

            {/* Fixed Type input at the bottom */}
            <div className="h-[8vh] flex-shrink-0">
                <Type />
            </div>
        </div>
    );
}

export default Right;
