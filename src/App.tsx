import React, { useEffect, useState } from 'react';
import './App.css';
import getQuizDetails from './services/quiz_service'
import { QuizCard } from './components/QuizCard';
import {QuizType , QuestionType} from './types/quiz_type'

function App() {
  const [quiz , setQuiz]=useState<QuestionType[]>([])
  const [loading , setLoading]=useState(true);
  let [score, setScore]=useState(0)
  let [currentState, setcurrentState]=useState(0)
  useEffect(()=>{
    async function getData(){
      setLoading(true)
      const questions:QuestionType[]=await getQuizDetails(5, 'easy')
      setQuiz(questions)
      setLoading(false)
    }
    getData()
  },[])
  const handleState=(e:React.FormEvent<EventTarget> , ans:string)=>{
    e.preventDefault();
    if(ans===quiz[currentState].answer){
      setScore(++score)
    }
    if(currentState!==quiz.length-1)
    {
      setcurrentState(++currentState)
    }
    else
    alert("Quiz Completed")
  }
  if (loading){
    return <div>Loading</div>
  }
  return (
    <div>
      <QuizCard question={quiz[currentState].question} option={quiz[currentState].option} answer={quiz[currentState].answer} callback={handleState} score={score}></QuizCard>
    </div>
  );
}

export default App;
