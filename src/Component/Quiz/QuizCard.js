import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, NavLink, Row } from 'react-bootstrap'
import './QuizCard.css'
import Result from './Result'
import { jsQuizes, resultIntial } from '../data'
import TimerAnswer from './TimerAnswer'


const QuizCard = () => {

    const [questionNumber, setQuestionNumber] = useState(0)
    const { question, choices, correctAnswer } = jsQuizes[questionNumber]
    const [answer, setAnswer] = useState(null)
    const [answerId, setAnswerId] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState(resultIntial)
    const [showProgress, setShowProgress] = useState(true)

    //create function to handel click in choices and get your answer and id selected
    // and store to state and compaire => correct answer
    const handelClickAnswer = (answerSelected, indexSelected) => {
        setAnswer(answerSelected)
        setAnswerId(indexSelected)
    }
    //create fun to handel click next 
    const handelClickNext = () => {
        setShowProgress(false)
        //creat condition to chick the correct answer and 
        if (answer === correctAnswer) {
            setResult((pre) => (
                {
                    ...pre,
                    score: pre.score + 1,
                    correctAnswer: pre.correctAnswer + 1
                }))
        } else {
            setResult((prev) => ({
                ...prev, wrongAnswer: prev.wrongAnswer + 1
            }))
        }

        ///////////////////
        if (questionNumber !== jsQuizes.length - 1) {
            setQuestionNumber((prev) => prev + 1)
            setAnswerId(null)
            setAnswer(null)
            setTimeout(() => {
                setShowProgress(true)
            });
        } else {
            setShowResult(!showResult)
        }


    }
    //handel time
    const handelTime = () => {
        setAnswer(false)
        handelClickNext(false)
    }



    return (

        <Row className='m-0' >
            <Row className='text-center mt-5 '>
                <h3 className='quiz-header'>Quiz</h3>
            </Row>
            {!showResult ? <Row className='m-0 mt-5 text-center p-0  quetions-container' >
                {showProgress && <TimerAnswer duration={15} handelTime={handelTime} />}
                <h3 className='mt-3'>Quetion {questionNumber + 1} out of {jsQuizes.length}</h3>
                <Col className='p-1 mt-2 '>
                    <h4 className='quetion p-2 rounded-5'>{question}</h4>

                    <div className='answers mt-4'>
                        <ul className='d-flex flex-wrap gap-3 p-3 justify-content-between align-items-center'>
                            {choices && choices.map((answer, index) => {
                                return (
                                    <li key={answer} onClick={() => handelClickAnswer(answer, index)}
                                        className={answerId === index ? "active" : ""}>{answer}</li>
                                )
                            })}


                        </ul>
                    </div>
                    <div className='btn-box d-flex justify-content-end '>
                        {/* <Button variant='danger' className='mt-3 btn-start'>back</Button> */}
                        {/* <Link to={showResult && "/result"}> */}
                        <Button variant='danger' onClick={() => handelClickNext(answer)} className='mt-3 btn-start' disabled={answerId == null}>{questionNumber + 1 < jsQuizes.length ? "next" : "finish"}</Button>
                        {/* <Link/> */}
                    </div>
                </Col>
            </Row> :
                <Row >
                    <Result result={result} />
                </Row>}
        </Row>

    )
}

export default QuizCard