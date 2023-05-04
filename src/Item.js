import React  , {createElement, useContext, useRef, useState}  from'react'
import { IoIosClose, IoIosCheckmark } from "react-icons/io";
import { QuizContext } from './QuizProvider';


const iconHandler = (correct) => {
    return(
        correct ? <span className='correct'><IoIosCheckmark /></span>:
        <span className='incorrect'><IoIosClose /></span>
    )
}

const Item = ({content, answer}) => {

    const {setTray, setResult, setCount, ContainerItems , addClass, setAddClass} = useContext(QuizContext)
    const refContent = useRef('');
    const [correct, setCorrect] = useState(false)
    const [cliked, setcliked] = useState(false)
    const handlerClick= () => {
       if(addClass === false) 
       {
        setAddClass(true)
        setcliked(true);
        if(refContent.current.id == answer)
        {
          refContent.current.className += ' corrected_answer';
          setCorrect(true);
          setTray(true)
          setResult(result => result + 1)
          setTimeout(()=> {setCount(prev => prev + 1)}, 2000)
          setTray(false)

        }
        else 
        {
            refContent.current.className += ' selectedQuestion';
            setCorrect(false);
            setTray(true)
            for(let i = 0; i < ContainerItems.current.childNodes.length; i++)
            {

              if(ContainerItems.current.childNodes[i].id === answer)
              {
                  const element  = document.createElement("span")
                  setTimeout(()=>{
                    ContainerItems.current.childNodes[i].className += ' corrected_answer';
                    // ContainerItems.current.childNodes[i].appChild(element);
                    
                  }, 200)
                } 
            }

        }

       }
       else 
        return ;
       
      } 
  return (
          <li
            className='question'
            id={content}
            onClick={() => handlerClick()}
            ref={refContent}
            >
            <label name={content}>{content}
            </label>
                {
                cliked &&  iconHandler(correct)
                }
          </li>
  )
}

export default Item