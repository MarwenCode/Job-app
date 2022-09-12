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
      max: 50,
    },
    technology: {
      type: String,
    },

    cost: {
      type: String,
     
    },
  },
  { timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true } },
);

DevUserSchema.virtual("review", {
  ref: "Review",
  localField: "_id",
  foreignField: "DevUserId",
  justOne: false
});

export default mongoose.model("DevUser", DevUserSchema);
