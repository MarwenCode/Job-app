import React, { useEffect, useState, useContext } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./question.scss";
import { AppContext } from "../../context/context";
import axios from "axios";

const Question = ({ question }) => {
  const { user } = useContext(AppContext);
  const [answer, setAnswer] = useState([]);
  const [addAnswer, setAddAnswer] = useState([]);
  const [editAnswer, setEditAnswer] = useState([]);
  const [editAnswerMode, setEditAnswerMode] = useState(false);
  const [answerMode, setAnswerMode] = useState(false);
  const [editQuestion, setEditQuestion] = useState("");
  const [editQuestionMode, setEditQuestionMode] = useState(false);

  //fetch answers
  useEffect(() => {
    const getAnswers = async () => {
      //   const res = await axios.get("/answers/:id");
      const res = await axios.get(`/answers/${question._id}`);
      console.log(res);
      setAnswer(res.data);
      // setAddAnswer(res.data.addAnswer);
      // setEditAnswer(res.data.editAnswer);
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
      await axios.delete(`/answers/${answerId}`, {
        data: { userId: user._id },
      });
      window.location.replace("/forum");
    } catch (error) {
      console.log(error);
    }
  };

  //edit an answer
  const editRespond = async (answerId) => {
    try {
      await axios.put(`/answers/${answerId}`, {
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
      await axios.delete(`/question/${questionId}`, {
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

      if(user === user._id) {
        await axios.put(`/question/${question._id}`, {
          userId: user._id,
          questionId: question._id,
          text: editQuestion,
        });



      }else {
        window.alert("you can edit only your answer")
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
        <img className="img" src="/images/image1.jpg" alt="" />
        <span className="name">{question.username}</span>
      </div>
      <div className="down">
       

        {editQuestionMode && (
          <div className="inputEdit">
            <textarea
            className="editquestion"
              value={editQuestion}
              onChange={(e) => setEditQuestion(e.target.value)}
            />
            <button className="editquestionBtn"  onClick={(e) => editeQuestion(e)}>edit</button>
          </div>
        ) 
        }
         <p className="text">{question.text}</p>

<AiFillDelete
          className="deleteQuestion"
          onClick={() => deleteQuestion(question._id)}
        />
        <AiFillEdit
          className="editQuestion"
          onClick={() => setEditQuestionMode((prev) => !prev)}
        />
      </div>
      <div className="answers">
        {question.answers.map((answer) => (
          <div className="blocAnswer">
            <div className="imgName">
              <img src="" className="answerImg" />
              <span className="answerName">{answer.username} </span>
              <AiFillDelete
                className="deleteAnswer"
                onClick={() => deleteAnswer(answer._id)}
              />
              {/* <AiFillEdit
                className="editAnswer"
                onClick={() => setEditAnswerMode((prev) => !prev)}
              /> */}
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
      <div className="editAnswer">
        <span className="tite">Add an answer</span>

        <AiFillEdit
          className="addIcon"
          onClick={() => setAnswerMode((prev) => !prev)}
        />

        {answerMode && (
          <form className="addAnswer">
            <button className="reply" onClick={(e) => Reply(e)}>
              reply
            </button>
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
