import mongoose from "mongoose";

const portfolioSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Portfolio", portfolioSchema);
