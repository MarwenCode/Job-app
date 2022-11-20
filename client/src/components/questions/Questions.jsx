import React, { useState, useEffect, useContext } from "react";
import "./questions.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Question from "../question/Question";
import { AppContext } from "../../context/context";

const Questions = () => {
  const { user } = useContext(AppContext);

  const [questions, setQuestions] = useState([]);
  const [askQuestion, setAskQuestion] = useState([]);
  const [questionMode, setQuestionMode] = useState(false);

  //fetch questions
  useEffect(() => {
    const getQuestions = async () => {
      const res = await axios.get("/question");
      console.log(res);
      setQuestions(res.data);
    };

    getQuestions();
  }, []);

  console.log(questions);

  // ask a question function
  const Ask = (e) => {
    e.preventDefault();

    const newQuestion = {
      userId: user._id,
      username: user.username,
      text: askQuestion,
    };

    try {
      const res = axios.post("/question", newQuestion);
      setAskQuestion(res.data);
      console.log(res);
      window.location.replace("/forum");
    } catch (error) {
      console.log(error);
    }

    Ask();
  };

  return (
    <div className="questions">
      <h1> Ask your question...devs are here!</h1>
      <button
        className="btnAsk"
        onClick={() => setQuestionMode((prev) => !prev)}>
        Ask
      </button>

      <div className="addquestion">
        {questionMode && (
          <>
            <form>
              <textarea
                className="questionInput"
                value={askQuestion}
                onChange={(e) => setAskQuestion(e.target.value)}
              />
            </form>

            <button className="btnQuestion" onClick={(e) => Ask(e)}>
              Submit
            </button>
          </>
        )}
      </div>

      {questions.map((question, index) => (
        <Question question={question} key={index} />
      ))}
    </div>
  );
};

export default Questions;
