import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUsers() {  // ✅ Hook names should start with "use"
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);  // ✅ Fixed initial value

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get("jwt");
                const response = await axios.get("http://localhost:5002/user/getUserProfile", {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAllUsers(response.data.filteredUser); // ✅ Fixed response handling
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false); // ✅ Ensure loading stops even on error
            }
        };
        getUsers();
    }, []);

    return { allUsers, loading };  // ✅ Return an object instead of an array
}

export default useGetAllUsers;
