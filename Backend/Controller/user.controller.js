import User from "../models/user.model.js";
import createTokenAndSaveCookies from "../jwt/generatejwttoken.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (password != confirmPassword) {
            return res.status(400).json({ message: "password do not match" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email Already Exists" });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedpassword });
        if (newUser) {
            await newUser.save();
            createTokenAndSaveCookies(newUser._id, res);
            return res.status(201).json({
                message: "User registered successfully",
                user: {
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                },
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Problem" });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ message: "fill all details properly" });
        }
        const newUser = await User.findOne({ email });
        if (!newUser) {
            return res.status(401).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, newUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        createTokenAndSaveCookies(newUser._id, res);
        return res.status(201).json({
            message: "User Logged In Successfully",
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Problem" });
    }
}
export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt", { httpOnly: true, secure: false, sameSite: "Strict" });
        return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Problem" });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const loggedinUser = req.user._id;
        const filteredUser = await User.find({ _id: { $ne: loggedinUser } }).select("-password");
        res.status(200).json({ filteredUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Problem" });
    }
}