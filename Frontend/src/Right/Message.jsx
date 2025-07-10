import { useAuth } from "../context/AuthContext.jsx";

const Message = ({ message }) => {
    const { authUser } = useAuth();
    const itsMe = message.sender === authUser?.user?._id;

    return (
        <div className={`flex ${itsMe ? "justify-end" : "justify-start"} p-1`}>
            <div
                className={`p-3 rounded-lg max-w-xs text-white shadow ${itsMe ? "bg-green-500" : "bg-blue-500"
                    }`}
            >
                <p className="text-sm text-white">{message.message}</p>
            </div>
        </div>
    );
};

export default Message;
