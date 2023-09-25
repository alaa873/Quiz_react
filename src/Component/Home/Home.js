import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import img from '../../Images/undraw_exams_g4ow.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Row >
                <Row className='p-0 m-0 mt-5 d-flex justify-content-around  align-items-center   '>
                    <Col xs={12} sm={12} md="6" lg={6} xxl={6} className=' p-0 '>
                        <div>
                            <img src={img} alt='' className='img-fluid rounded-5' />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md="6" lg={6} xxl={6} className=' p-4 text-center m-0'>
                        <h3>Hello dear student</h3>
                        <h3>Ready to start the quiz</h3>
                        <Link to="/quizpage">
                            <Button variant='danger' className='mt-3 btn-start'>Start Quiz</Button>
                        </Link>

                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default Home