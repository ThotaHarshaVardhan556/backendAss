// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const authMiddleware = (req, res, next) => {
//     const token = req.header("Authorization");

//     if (!token) {
//         return res.status(401).json({ message: "Access Denied: No Token Provided" });
//     }

//     try {
//         const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
//         req.user = decoded; // Attach user data to the request
//         next();
//     } catch (error) {
//         return res.status(400).json({ message: "Invalid Token" });
//     }
// };

// export default authMiddleware;
