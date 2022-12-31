import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Contact", contactSchema);
