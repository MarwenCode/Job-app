import React, { useEffect, useState, useContext } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./question.scss";
import { AppContext } from "../../context/context";
import axios from "axios";

const Question = ({ question }) => {
  const { user } = useContext(AppContext);
  const [answer, setAnswer] = useState([]);
  const [addAnswer, setAddAnswer] = useState([]);
  const [answerMode, setAnswerMode] = useState(false);

  //fetch answers
  useEffect(() => {
    const getAnswers = async () => {
      //   const res = await axios.get("/answers/:id");
      const res = await axios.get(`/answers/${question._id}`);
      console.log(res);
      setAnswer(res.data);
      // setAddAnswer(res.data.addAnswer)
    };

    getAnswers();
  }, []);

  console.log(answer);

  //add an answer
  const Reply = (e) => {
    e.preventDefault();
    const newReply = {
      QuestionId: question._id,
      username: user.username,
      text: addAnswer,
      userId: user._id,
    };

    try {
      const res = axios.post(`/answers/${question._id}`, newReply);
      setAddAnswer(res.data);
      console.log(res);
      setAnswerMode(false);
    } catch (error) {
      console.log(error);
    }

    Reply();
  };

  return (
    <div className="question">
      <div className="top">
        <img className="img" src="/images/image1.jpg" alt="" />
        <span className="name">{question.username}</span>
      </div>
      <div className="down">
        <p className="text">{question.text}</p>
      </div>
      <div className="answers">
        {question.answers.map((answer) => (
          <div className="blocAnswer">
          <div className="imgName">
          <img src="" className="answerImg" />
            <span className="answerName">{answer.username} </span>

          </div>
        
            <p className="answerText">{answer.text}</p>
          </div>
        ))}
      </div>
      <div className="editAnswer">
        <span>Add an answer</span>

        <AiFillEdit
          className="addIcon"
          onClick={() => setAnswerMode((prev) => !prev)}
        />

        {answerMode && (
          <form className="addAnswer">
            <button className="reply"  onClick={(e) => Reply(e)}>reply</button>
            <textarea
              className="input"
              value={addAnswer}
              onChange={(e) => setAddAnswer(e.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Question;
