// import React, { useState } from 'react'
// import { resultInitial } from './data'

// const QuizForm = ({ questions }) => {

//     const [currentQes, setCurrwntQue] = useState(0)
//     const { question, choices, correctAnswer } = questions[currentQes]
//     const [answerQus, setAnswerQus] = useState(null)
//     const [answerId, setAnswerID] = useState(null)
//     const [showResult, setShowResult] = useState(false)
//     const [result, setResult] = useState(resultInitial)
//     //handel click on answer choise and store your answer chooised
//     const onSelectAnswer = (answer, index) => {
//         if (answer === correctAnswer) {
//             setAnswerQus(true)
//         } else {
//             setAnswerQus(false)
//         }
//         setAnswerID(index)
//     }
//     //handel onsubmit next
//     const onClickNext = () => {
//         setAnswerID(null)
//         if (currentQes !== questions.length - 1) {
//             setCurrwntQue((prev) => prev + 1)
//         } else {
//             setShowResult(!showResult)
//         }
//         setResult((prev) => (
//             answerQus ? { ...prev, score: prev.score + 5, correctAnswer: prev.correctScore + 1 }
//                 : { ...prev, wrongResult: prev.wrongResult + 1 })
//         )
//     }
//     //handel onsubmit prev
//     const onClickPrev = () => {
//         if (currentQes <= questions.length - 1 && currentQes !== 0) {
//             setCurrwntQue((prev) => prev - 1)
//         }
//         console.log(answerQus)
//     }


//     return (
//         <div className='quize'>
//             <h3 className='header-text'>Quiz</h3>

//             {!showResult ? (
//                 <div>
//                     <h3>Quetion {currentQes + 1} out of {questions.length}</h3>
//                     <diV className="box">
//                         <div className='quetions'>
//                             <h3>{question}</h3>
//                         </div>
//                         <div className='answar-box'>
//                             <ul>
//                                 {
//                                     choices ? (choices.map((answer, index) => {
//                                         return (
//                                             <li onClick={() => onSelectAnswer(answer, index)}
//                                                 className={answerId === index ? "active" : "null"}
//                                                 key={answer} >{answer}</li>
//                                         )
//                                     })) : (null)
//                                 }
//                             </ul>
//                         </div>
//                         {
//                             currentQes > 0 ? (<button onClick={() => onClickPrev()}  > back</button>) : null
//                         }
//                         <button onClick={() => onClickNext()} disabled={answerId === null} > {questions.length - 1 === currentQes ? "finish" : "next"}</button>

//                     </diV>
//                 </div >) : (
//                 <div>
//                     <h3>Total Quetions ={questions.length}</h3>
//                     <h3>Total Score ={result.score}</h3>
//                     <h3>Correct Answers ={result.correctScore}</h3>
//                     <h3>Wrong Answers ={result.wrongResult}</h3>
//                 </div>
//             )}




//         </div >
//     )
// }

// export default QuizForm 