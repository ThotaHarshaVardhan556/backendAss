import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import travelLogRoutes from "./Routes/travelLogRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import authRoutes from "./Routes/authRoutes.js"; // ✅ Import auth routes

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/travellogs", travelLogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", authRoutes); // ✅ Add authentication routes

// Default Route for Root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Travel Log API!");
});

// Check if MONGO_URI is provided
if (!process.env.MONGO_URI) {
  console.error("❌ MongoDB URI is missing! Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
