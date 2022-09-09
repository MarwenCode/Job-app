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


  







  export default answerRoute