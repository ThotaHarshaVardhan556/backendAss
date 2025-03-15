import TravelLog from "../models/TravelLog.js";

export const createLog = async (req, res) => {
  try {
    const { location, description, images, rating } = req.body;
    const newLog = new TravelLog({ userId: req.user.userId, location, description, images, rating });

    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getLogs = async (req, res) => {
  try {
    const logs = await TravelLog.find().populate("userId", "username");
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteLog = async (req, res) => {
  try {
    await TravelLog.findByIdAndDelete(req.params.id);
    res.json({ message: "Travel log deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
