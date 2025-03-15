import mongoose from "mongoose";

const TravelLogSchema = new mongoose.Schema({
  location: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  images: { type: [String], default: [] },
  rating: { type: Number, default: 3 },
  
  // ❌ Remove OR Make `userId` Optional
  userId: { type: String, required: false }  // <-- Change `required: true` to `false`
});

const TravelLog = mongoose.model("TravelLog", TravelLogSchema);
export default TravelLog;
