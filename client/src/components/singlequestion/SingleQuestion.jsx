import React, { useEffect, useState, useContext } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import "./singlequestion.scss";
import { AppContext } from "../../context/context";
import axios from "axios";
import { useParams } from "react-router-dom";

const Question = ({ question }) => {
  const { user } = useContext(AppContext);
//   const profilepic = "http://localhost:8000/images/";
  const [answer, setAnswer] = useState([]);
  const [addAnswer, setAddAnswer] = useState([]);
  const [editAnswer, setEditAnswer] = useState([]);
  const [editAnswerMode, setEditAnswerMode] = useState(false);
  const [answerMode, setAnswerMode] = useState(false);
  const [editQuestion, setEditQuestion] = useState("");
  const [editQuestionMode, setEditQuestionMode] = useState(false);
  const [details, setDetails] = useState(false);

  const params = useParams();
  console.log(params);

  //fetch answers
  useEffect(() => {
    const getAnswers = async () => {
      //   const res = await axios.get("/answers/:id");
      const res = await axios.get(`https://api-job-app.onrender.com/api/answers/${question._id}`);
      // const res = await axios.get(`/answers/${question._id}`);
      console.log(res);
      setAnswer(res.data);
      // setAddAnswer(res.data.addAnswer);
      // setEditAnswer(res.data.editAnswer);
    };

    getAnswers();
  }, []);

  console.log(answer);
  console.log(question);
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
      const res = axios.post(`https://api-job-app.onrender.com/api/answers/${question._id}`, newReply);
      // const res = axios.post(`/answers/${question._id}`, newReply);
      setAddAnswer(res.data);
      console.log(res);
      setAnswerMode(false);
      window.location.replace("/forum");
    } catch (error) {
      console.log(error);
    }

    Reply();
  };

  //delete an answer
  const deleteAnswer = async (answerId) => {
    console.log(answerId);
    try {
      await axios.delete(`https://api-job-app.onrender.com/api/answers/${answerId}`, {
      // await axios.delete(`/answers/${answerId}`, {
        data: { userId: user._id },
      });
      window.location.replace("/forum");
    } catch (error) {
      console.log(error);
    }
  };

  //edit an answer
  const editRespond = async (answerId) => {
    console.log(answerId);
    try {
      await axios.put(`https://api-job-app.onrender.com/api/answers/${answerId}`, {
      // await axios.put(`/answers/${answerId}`, {
        questionId: question._id,
        username: user.username,
        answerId: answer._id,
        userId: user._id,
        text: editAnswer,
      });

      setEditAnswerMode(false);
      window.location.replace("/forum");
    } catch (error) {
      console.log(error);
    }
  };

  //delete a question
  const deleteQuestion = async (questionId) => {
    console.log(questionId);
    try {
      await axios.delete(`https://api-job-app.onrender.com/api/question/${questionId}`, {
      // await axios.delete(`/question/${questionId}`, {
        data: { userId: user._id },
      });
      window.location.replace("/forum");
    } catch (error) {
      console.log(error);
    }
  };

  //edit question
  const editeQuestion = async () => {
    try {
      if (question.username === user.username) {
        await axios.put(`https://api-job-app.onrender.com/api/question/${question._id}`, {
        // await axios.put(`/question/${question._id}`, {
          userId: user._id,
          questionId: question._id,
          text: editQuestion,
        });
      } else {
        window.alert("you can edit only your question !");
      }

      window.location.replace("/forum");
      setEditQuestionMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="question">
      <div className="top">
        <img
          className="img"
          src={
            // user.profilePicture
            //   ? profilepic + user.profilePicture
            //   :
            "/images/noAvatar.png"
          }
        />

        <span className="name">{question.username}</span>
      </div>
      <div className="down">
        <p className="text">{question.text}</p>

        {editQuestionMode && (
          <div className="inputEdit">
            <button
              className="cancel"
              onClick={() => setEditQuestionMode(false)}>
              X
            </button>

            <div className="inputForm">
              <textarea
                className="editquestion"
                value={editQuestion}
                onChange={(e) => setEditQuestion(e.target.value)}
              />
            </div>
            <button
              className="editquestionBtn"
              onClick={(e) => editeQuestion(e)}>
              edit
            </button>
          </div>
        )}

        {question.userId === user._id && (
          <>
            <AiFillDelete
              className="deleteQuestion"
              onClick={() => deleteQuestion(question._id)}
            />
            <AiFillEdit
              className="editQuestion"
              onClick={() => setEditQuestionMode((prev) => !prev)}
            />
          </>
        )}
      </div>
      {question.answers == "" ? (
        // <p>there is no answers yet </p>
        <></>
      ) : (
        <div className="showdetails" onClick={() => setDetails(!details)}>
          <summary>
            <MdExpandMore /> show answers...
          </summary>
        </div>
      )}

      {details && (
        <div className="answers">
          {question.answers.map((answer) => (
            <div className="blocAnswer">
              <div className="imgName">
                <img src="" className="answerImg" />
                <span className="answerName">{answer.username} </span>
                {answer.userId === user._id && (
                  <>
                    <AiFillDelete
                      className="deleteAnswer"
                      onClick={() => deleteAnswer(answer._id)}
                    />
                    <AiFillEdit
                      className="editAnswer"
                      onClick={() => setEditAnswerMode((prev) => !prev)}
                    />
                  </>
                )}
              </div>

              <p className="answerText">{answer.text}</p>
            </div>
          ))}
          {editAnswerMode && (
            <>
              <form className="edit">
                <textarea
                  className=""
                  value={editAnswer}
                  onChange={(e) => setEditAnswer(e.target.value)}
                />
              </form>
              <button className="edited" onClick={(e) => editRespond(e)}>
                edit
              </button>
            </>
          )}
        </div>
      )}

      <div className="editAnswer">
        <div className="div" onClick={() => setAnswerMode((prev) => !prev)}>
          <button className="tite">
            Add an answer <AiFillEdit className="addIcon"/>
          </button>
        </div>

        {answerMode && (
          <form className="addAnswer">
            <textarea
              className="input"
              value={addAnswer}
              onChange={(e) => setAddAnswer(e.target.value)}
            />
            <button className="reply" onClick={(e) => Reply(e)}>
              reply
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Question;
