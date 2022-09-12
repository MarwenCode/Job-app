import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    // devId: {
    //     type: mongoose.Schema.Types.ObjectId,
    // //     type: String,
    // //     required: true,
    //   },
    DevUserId: {
        type: mongoose.Schema.Types.ObjectId,
      },

    userId: {
        type: String,
        required: true,
      },
    username: {
        type: String,
        required: true,
      },
      review:{
        type: String,
      }

}
,  { timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true } },

)

export default mongoose.model("Review", ReviewSchema)