import React, { useState, useEffect, useContext } from "react";
import "./questions.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Question from "../question/Question"
import { AppContext } from "../../context/context";

const Questions = () => {
  const { user } = useContext(AppContext);

  const [questions, setQuestions] = useState([]);


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



  




  return (
    <div className="questions">
        <Link   to="/addquestion"  className="link">
        <h1>Click here and  Ask your question...devs are here!</h1>
        </Link>
     
      {questions.map((question, index)=> (
      <Question question={question} key={index}/>
      

    ))}

  


    </div>
  );
};

export default Questions;
