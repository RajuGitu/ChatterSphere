import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { authUser, setAuthUser } = useAuth();

    // Redirect if already logged in
    useEffect(() => {
        if (authUser) {
            navigate("/whatsapp");
        }
    }, [authUser, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5002/user/signup",
                { name, email, password, confirmPassword },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );

            localStorage.setItem("authUser", JSON.stringify(response.data));
            setAuthUser(response.data);
            navigate("/whatsapp");
        } catch (error) {
            setMessage(error.response?.data?.message || "Error signing up. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>

                {message && <p className="text-red-500 text-center mb-2">{message}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400" required />
                    </div>

                    <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition" disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <Link to="/" className="text-green-600 hover:underline">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
