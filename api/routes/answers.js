import express from "express";
import DevUser from "../models/DevUser.js";
import Question from "../models/Question.js";
import Answer from "../models/Answer.js";
const answerRoute = express.Router();


//create new answer

answerRoute.post("/:questionId", async (req, res) => {
    try {
      const newAnswer = await new Answer({
        ...req.body,
        questionId: req.params.questionId,
      });
      const savedAnswer = await newAnswer.save();
  
      res.status(200).json(savedAnswer);
    } catch (error) {
      res.status(500).json(error);
    }
    console.log(req.body);
  });


  //update an answer
  answerRoute.put("/:id", async (req, res) => {
    try {
      const answer = await Answer.findById(req.params.id);
      if (answer.userId === req.body.userId) {
        try {
          const updateAnswer = await Answer.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          );
          res.status(200).json(updateAnswer);
        } catch (error) {
          res.status(500).json(error);
        }
      } else {
        res.status(401).json("you can update only your answer");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });










  //get an answer

  
  answerRoute.get("/:questionId", async (req, res) => {
    try {
      const answers = await Answer.find({
        answerId: req.params.questionId,
      });
  
      res.status(200).json(answers);
    } catch (error) {
      res.status(500).json(error);
    }
  });


  //delete an answer
  answerRoute.delete("/:id", async (req, res) => {
  try {
    const answer = await Answer.findById(req.params.id);
    if (answer.userId === req.body.userId) {
      try {
        await answer.deleteOne();
        res.status(200).json("answer has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you can delete only your answer");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


  







  export default answerRoute