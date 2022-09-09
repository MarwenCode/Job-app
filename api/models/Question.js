import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true,
  },
      username: {
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

QuestionSchema.virtual("answers", {
  ref: "Answer",
  localField: "_id",
  foreignField: "QuestionId",
  justOne: false
});

export default mongoose.model("Question", QuestionSchema)