import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({

    QuestionId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      username: {
        type: String,
      },
      userId: {
        type: String,
      },
      text: {
        type: String,
      },
    },
    { timestamps: true,
      toJSON: { getters: true, virtuals: true },
      toObject: { virtuals: true } },


);

export default mongoose.model("Question", QuestionSchema)