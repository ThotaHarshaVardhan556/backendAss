import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  travelLogId: { type: mongoose.Schema.Types.ObjectId, ref: "TravelLog", required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", CommentSchema);
