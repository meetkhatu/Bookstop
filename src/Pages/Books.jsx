import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import BookImage from '../Pages/Images/Book.png'
import { Link } from 'react-router-dom';

function Books() {

    const [book, setBook] = useState([])

    useEffect(() => {
        axios.get('https://softwium.com/api/books')
            .then((response) => {
                setBook(response.data)
            })
            .catch((error) => console.log(error));
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const recordsperpage = 16
    const lastIndex = currentPage * recordsperpage
    const firstIndex = lastIndex - recordsperpage
    const records = book.slice(firstIndex, lastIndex)
    const npage = Math.ceil(book.length / recordsperpage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const changePage = (n) => {
        setCurrentPage(n)
    }

    const [search, setSearch] = useState("")
    const [searchID, setSearchID] = useState([])
    const [booknotfound, setBooknotfound] = useState(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setSearchID([])
        setBooknotfound(null)
        // eslint-disable-next-line
        book.map(n => {
            if (n.title.toLowerCase().includes(search.toLowerCase())) {
                setSearchID(prevArray => [...prevArray, n])
            }
        })
        if (searchID.length === 0) {
            setBooknotfound(1)
        }
    }



    return (
        <div className='m-5'>
            <Container className='d-flex justify-content-center justify-content-lg-end align-items-center'>
                <Form onSubmit={handleFormSubmit}>
                    <Row className="align-items-center">
                        <Col md={8} xs={9} style={{ paddingRight: 0 }}>
                            <Form.Control type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Enter Book Name" required />
                        </Col>
                        <Col style={{ paddingLeft: 0 }}>
                            <Button type="submit"><i className="bi bi-search"></i></Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <hr className='mt-5' style={{ backgroundColor: "black", color: "black", height: "5px" }} />
            <Row className="g-4 mt-5">
                {
                    searchID.length !== 0
                        ?
                        <>{searchID.map((result) => {
                            const url=`/books/${result.id}`
                            return (
                                <Col className='d-flex justify-content-center align-items-center' key={result.id} xs={12} md={3}>
                                    <Card style={{ width: '18rem', height: "20rem", position: "relative" }}>
                                        <Card.Img variant="top" src={BookImage} />
                                        <Card.Body>
                                            <Card.Title>{result.title}</Card.Title>
                                        </Card.Body>
                                        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        <Link to={url}><Button variant="primary">More info</Button></Link>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })}
                            <hr className='mt-5' style={{ backgroundColor: "black", color: "black", height: "5px" }} /></>
                        :
                        booknotfound === 1
                            ?
                            <>
                                <Col className='d-flex justify-content-center align-items-center'>
                                    Search Result not Found
                                </Col>
                                <hr className='mt-5' style={{ backgroundColor: "black", color: "black", height: "5px" }} />
                            </>
                            :
                            <></>

                }
            </Row>
            <Row className="g-4 mt-5" id='top'>
                {
                    records.map((books) => {
                        const url=`/books/${books.id}`
                        return (
                            <Col className='d-flex justify-content-center align-items-center' key={books.id} xs={12} md={3}>
                                <Card style={{ width: '18rem', height: "20rem", position: "relative" }}>
                                    <Card.Img variant="top" src={BookImage} />
                                    <Card.Body>
                                        <Card.Title>{books.title}</Card.Title>
                                    </Card.Body>
                                    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <Link to={url}><Button variant="primary">More info</Button></Link>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className='mt-5'>
                <nav style={{ cursor: "pointer" }}>
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a href='#top' className="page-link" onClick={prePage}>Prev</a></li>
                        {
                            numbers.map(n => {
                                return(
                                <li className="page-item" key={n}><a href='#top' onClick={() => changePage(n)} className={`page-link ${currentPage === n ? `active` : ``}`}>{n}</a></li>
                            )})
                        }
                        <li className="page-item"><a href='#top' onClick={nextPage} className="page-link">Next</a></li>
                    </ul>
                </nav>
            </Row>

        </div>
    )
}

export default Books
