import express from "express";
import TravelLog from "../models/TravelLog.js";

const router = express.Router();

// ✅ POST: Create a new travel log
router.post("/", async (req, res) => {
  try {
    const { location, description, date, images, rating } = req.body;

    if (!location || !description || !date) {
      return res.status(400).json({ message: "Location, description, and date are required" });
    }

    const newLog = new TravelLog({ 
      location, 
      description, 
      date, 
      images: images || [], 
      rating: rating || 3 
    });

    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    console.error("❌ Error adding travel log:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET: Fetch all travel logs (for Explore Page)
router.get("/", async (req, res) => {
  try {
    const logs = await TravelLog.find().sort({ date: -1 }); // Sort by latest logs
    res.status(200).json(logs);
  } catch (error) {
    console.error("❌ Error fetching travel logs:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
