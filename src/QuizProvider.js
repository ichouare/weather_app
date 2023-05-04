import React, {useRef, useState} from 'react'
import { createContext } from 'react';

export const QuizContext = createContext()
const QuizProvider = ({children}) => {
    const [result, setResult] = useState(0);
    const URL_APP = 'https://opentdb.com/api.php?amount=10'
    const [questions, setQuestions] = useState([]);
    const [tray, setTray] = useState(false);
    const ContainerItems = useRef()
    const [count, setCount] = useState(0);
    const [addClass, setAddClass] = useState(false);
    return (
        <QuizContext.Provider value={{result, setResult, URL_APP, questions, setQuestions, setCount, count, tray , setTray, ContainerItems, addClass, setAddClass}}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider