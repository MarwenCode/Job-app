import React,{ useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const Questions = () => {

    const [questions, setQuestions] = useState([])

    //fetch questions 
    useEffect(() => {
        const getQuestions = async() => {
            const res = await axios.get("/question")
            console.log(res)
            setQuestions(res.data)
        }

        getQuestions()
    },[])

    console.log(questions)



  return (
    <div className='questions'>
        <h1>You can Ask your question...devs are here!</h1>
        {questions.map((question) => (
            <>
             <span>{question.username}</span>
             <p>{question.text}</p>
            
            </>
           
        ))}
        
    </div>
  )
}

export default Questions