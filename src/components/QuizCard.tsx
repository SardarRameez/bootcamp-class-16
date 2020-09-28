import React, { useState } from 'react'
import { type } from 'os'
type QuestionCardType={
  question:string
  answer:string
  option:string[]
  callback:(e:React.FormEvent<EventTarget>, ans:string)=>void
  score:number
}

export const QuizCard:React.FC<QuestionCardType> = ({
  question, option , answer , callback ,score
}) => {

  const [ans, setAns]=useState("")
  const handleAns=(ev:any)=>{
    setAns(ev.target.value)
  }
  return (
    <div>
      <h2>Score : {score}</h2>
      <h3>Question: {question}</h3>
      <form onSubmit={(ev:React.FormEvent<EventTarget> )=>{callback(ev,ans)}}>
      {option.map((option:string , ind:number)=>{
        return (
          <label key={ind}>
            <input type="radio" name="opt" value={option} onChange={handleAns} required checked={ans===option}></input>
            {option}
          </label>
        )
      })}
      <input type="submit"></input>
      </form>
    </div>
  )
}
