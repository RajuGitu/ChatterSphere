import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth

const Logout = () => {
    const { setAuthUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Call backend to remove token from cookies
            await axios.get("http://localhost:5002/user/logout", { withCredentials: true });

            // Clear local storage and update AuthContext
            localStorage.removeItem("authUser");
            setAuthUser(null);

            // Redirect user to login page
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="fixed top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
        >
            <TbLogout2 size={20} />
        </button>
    );
};

export default Logout;
