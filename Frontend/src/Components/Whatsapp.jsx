import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Left from "../Left/Left";
import Right from "../Right/Right";

const Whatsapp = () => {
    const { authUser } = useAuth();
    const navigate = useNavigate();

    // Redirect unauthenticated users to login page
    useEffect(() => {
        if (!authUser) {
            navigate("/");
        }
    }, [authUser, navigate]);

    return (
        <div className="flex h-screen">
            <Left />
            <Right />
        </div>
    );
};

export default Whatsapp;
