import jwt from "jsonwebtoken";

const createTokenAndSaveCookies = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: '7d',
    });
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    })
}

export default createTokenAndSaveCookies;