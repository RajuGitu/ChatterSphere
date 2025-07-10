import { useState } from "react";
import { createContext } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import io from "socket.io-client";
import { useContext } from "react";

const socketContext = createContext();

export const useSocketContext = () => {
    return useContext(socketContext);
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const { authUser } = useAuth();
    const [onlineUsers,setOnlineUsers]=useState([]);

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5002/", {
                query: {
                    userId: authUser?.user?._id 
                }
            });
            setSocket(socket);
            socket.on("getOnline",(users)=>{
                setOnlineUsers(users);
            });
            return ()=> socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);
    return (
        <socketContext.Provider value={{ socket, onlineUsers}}>
            {children}
        </socketContext.Provider >
    );
};