import React , { useRef, useContext, useState} from 'react'
import Item from './Item';
import {QuizContext} from './QuizProvider';



const Chose = ({answers }) => {
  const {questions, count, setCount , tray, setTray, ContainerItems} = useContext(QuizContext)

  const getNext = () => {
    setTray(false)
    setCount(count => count + 1)
    }

answers.sort()


  return (
    <div className='questions'>
    <h3>{questions[count]?.question}</h3>
  <ul ref={ContainerItems}>
  {
    answers && answers.map((item, index) =>{
      return (
        <Item 
        content={item}
         key={index}
         answer={questions[count]?.correct_answer}
         />
      )
    })
  }
  </ul>
  { tray && <button type='button' className='btn'
    onClick={getNext}
  >
    next
  </button>}
  
  </div>
  )
 
}

const Question = () => {
const {questions, count} = useContext(QuizContext)

const answers_incorrect = questions[count]?.incorrect_answers || []
const answers= [questions[count]?.correct_answer , ...answers_incorrect]

  return (
    <Chose answers={answers}/>
  )
}

export default Question