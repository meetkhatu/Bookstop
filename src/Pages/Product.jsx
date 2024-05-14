import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container,Row,Col,Image } from 'react-bootstrap'
import Photo from './Images/Product.png'
import { useParams } from 'react-router-dom'

function Product() {


    const {id} = useParams();
    const [book,setBook]=useState([])

    useEffect(()=>{
        axios.get(`https://softwium.com/api/books/${id}`)
        .then((response) => {
            setBook(response.data)
        })
        .catch((error) => console.log(error));  
    },[id])

  return (
    <div style={{margin:"100px"}}>
      <Container fluid>
        <Row>
            <Col lg={6} md={12} className='d-flex justify-content-center align-items-center'>
                <Image style={window.innerWidth >= 992 ? {height:"600px", width:"600px"}:{height:"600px",width:"600px"}} src={Photo} />
            </Col>
            <Col lg={6} md={12}>
                <Container fluid >
                    <Row className='m-5 text-center text-primary'>
                        <h1>{book.title}</h1>
                    </Row>
                    <Row className='m-5 text-center'>
                        <h3>ISBN : {book.isbn}</h3>
                    </Row>
                    <Row className='m-5 text-center'>
                        <h3>Page Count : {book.pageCount}</h3>
                    </Row>
                    <Row className='m-5 text-center'>
                        <h3>Authors:</h3>
                        {
                            book.authors?
                            book.authors.map((author,n)=>{
                            return (
                            <h3 key={n}>{author}</h3>)})
                            :
                            <div>NoDataAvailable</div>
                        }
                    </Row>
                </Container>
                
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product
