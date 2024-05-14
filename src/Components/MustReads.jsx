import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import BookImage from '../Pages/Images/Book.png'
import { Link } from 'react-router-dom';

function MustReads() {

    const [book, setBook] = useState([])

    useEffect(() => {
        axios.get('https://softwium.com/api/books?limit=4')
            .then((response) => setBook(response.data))
            .catch((error) => console.log(error));
    }, [])
    return (
        <Container fluid style={{ backgroundColor: "#c9ffee", padding:"40px 40px 50px 40px" }} className='m-0 fs-1 fw-bold'>
            <Row><Col>Must Reads</Col><Col className='fs-2 text-end fst-italic text-decoration-underline'><Link className='text-black' style={{textDecoration:"none"}} to='/books'>Explore More &gt;</Link></Col></Row>
            <hr style={{ backgroundColor: "black", color: "black", height: "5px" }} />
            <Container  className='justify-content-center mt-4'>
                <Row>
                    {
                        book.map((books) => {
                            const url=`/books/${books.id}`
                            return (
                                <Col key={books.id} md={3} xs={12} className='g-4 d-flex justify-content-center align-items-center'>
                                    <Card style={{ width: '18rem' , height: "20rem" , position:"relative"}}>
                                        <Card.Img variant="top" src={BookImage} />
                                        <Card.Body>
                                            <Card.Title className='m-0'>{books.title}</Card.Title>
                                        </Card.Body>
                                        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        <Link to={url}><Button variant="primary">More info</Button></Link>
                                    </div>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </Container>
    )
}

export default MustReads
