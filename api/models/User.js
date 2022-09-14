import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
      profilePicture: {
        type: String,
        default: "",
      },
      password: {
        type: String,
        required: true,
        min: 6,
      },
   


},{ timestamps: true }



);

export default mongoose.model("User", UserSchema)