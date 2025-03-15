import express from "express";

const router = express.Router();

// Define your routes here
router.get("/", (req, res) => {
    res.send("Comments route working!");
});

export default router;  // ✅ Ensure default export
