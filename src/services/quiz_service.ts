import { QuizType, QuestionType } from './../types/quiz_type'

const shuffleArray=(array: any[])=>[...array].sort(()=>Math.random() - 0.5)

async function getQuizDetails(totalQuestion:number , level:string):Promise<QuestionType[]>{
    const {results}=await (await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&category=9&difficulty=${level}&type=multiple`)).json()
    const data:QuestionType[]=results.map((questionObj:QuizType)=>{
        return {
            question:questionObj.question,
            answer:questionObj.correct_answer,
            option:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return data
}

export default getQuizDetails;