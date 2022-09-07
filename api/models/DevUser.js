import mongoose from "mongoose";

const DevUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    technologie: {
      type: String,
      default: "",
    },

    cost: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("DevUser", DevUserSchema);
