import express from "express";
import Question from "../models/Question.js";
import DevUser from "../models/DevUser.js";
import Answer from "../models/Answer.js";
const questionRoute = express.Router();


//create a question
questionRoute.post("/", async (req, res) => {
    try {
      const newQuestion = new Question(req.body);
      const question = await newQuestion.save();
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //update a a question
  questionRoute.put("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question.userId === req.body.userId) {
      try {
        const updateQuestion = await Question.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updateQuestion);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you can update only your question");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a question
questionRoute.delete("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question.userId === req.body.userId) {
      try {
        await question.deleteOne();
        res.status(200).json("question has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you can delete only your question");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//get my own questions

questionRoute.get("/myquestions/:id", async (req, res) => {
  try {
    const user = await DevUser.findById(req.params.id);
    const questions = await Question.find({ userId: user._id })
      .populate("answers")
      .exec();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
});



//get a question
// questionRoute.get("/:id", async (req, res) => {
//   try {
//     const question = await Question.findById(req.params.id);
//     res.status(200).json(question);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });


//get all questions
questionRoute.get("/", async (req, res) => {
  try {
    // await DevUser.find();
    // const questions = await Question.find()
    const questions = await Question.find().populate("answers").exec();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
});












  export default questionRoute;



