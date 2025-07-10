import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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
        setError("");
        setLoading(true);

        try {
            const { data } = await axios.post("http://localhost:5002/user/login", {
                email,
                password,
            }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            });

            localStorage.setItem("authUser", JSON.stringify(data));
            setAuthUser(data);
            navigate("/whatsapp");
        } catch (error) {
            setError(error.response?.data?.message || "Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
                {error && <p className="text-red-600 bg-red-100 p-2 rounded text-sm mb-3">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-green-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-green-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mx-auto"></div> : "Login"}
                    </button>
                </form>
                <div className="mt-4 text-sm text-center">
                    <Link to="/forgot-password" className="text-green-600 hover:underline">Forgot Password?</Link>
                    <span className="mx-2">|</span>
                    <Link to="/signup" className="text-green-600 hover:underline">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
