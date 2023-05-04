import React, { useContext } from 'react'
import './App.css'
import logo from './imgs/undraw_adventure_4hum 1.svg'
import thron from './imgs/undraw_winners_ao2o 2.svg'
import { useState, useEffect } from 'react';
import Loader from './Loader';
import Question from './Question';
import axios from 'axios';
import {QuizContext} from './QuizProvider';


const Quiz = () => {

  const [loading, setloadings] = useState(false);
  const [error, setError] = useState('');
  const {result, setResult, URL_APP, questions, setQuestions, setCount, count, setAddClass} = useContext(QuizContext)
useEffect(() => {
    const fetchQuestions = async() => {
        try{
            setAddClass(false)
            setloadings(true)
            const responses = await axios.get(URL_APP)
            setQuestions(responses.data.results)
            setTimeout(() => setloadings(false), 1000 )
            
        }catch(err){
            console.log(err)
            setError(err)
        };
        
    }
  fetchQuestions()
}, [count])

const handleQuiz = () =>  {
  setCount(0);
  setResult(0);
}

if(count === 10)
{
  return(
    <div className='section-quiz sucess'>
      <div>
      <img src={thron} alt='logo' className='img' />
      <h1>results</h1>
      <p>you got <span>{result}</span> correct answer</p>
      </div>
      <button onClick={() => handleQuiz()}>try again</button>
    </div>
  )
}
else
{
  return (
    <section className='section-quiz'>
        <div className='section-quiz-logo'>

      <img src={logo} alt='logo' className='logo-quiz' />
        </div>
      <div className='section-quiz-questions'>
            {loading && !error && <Loader />}
            {
                !loading && !error && questions && 
                <Question  />
            }
            {!loading && error && <p>ERROR</p>}
      </div>
    </section>
  )
}


}

export default Quiz