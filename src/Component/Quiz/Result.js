import React, { useContext } from 'react'
import img from '../../Images/istockphoto-1203210158-612x612.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Result = ({ result }) => {
    return (
        <div className='row p-0 m-0'>
            <Container>
                <Row className='p-0 m-0 mt-5 d-flex justify-content-around  align-items-center   '>
                    <Col xs={12} sm={12} md="6" lg={6} xxl={6} className=' p-0 '>
                        <div>
                            <img src={img} alt='' className='img-fluid rounded-5' />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md="6" lg={6} xxl={6} className=' p-4 text-center m-0'>
                        <div className='card '>
                            <div className='card-body'>
                                <h3> score: {result.score} </h3>
                                <h3>correctAnswer :{result.correctAnswer}</h3>
                                <h3>wrongAnswer :{result.wrongAnswer}</h3>
                            </div>
                        </div>
                        <Link to="/">
                            <Button variant='danger' className='mt-3 btn-start'>Go To Home</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Result