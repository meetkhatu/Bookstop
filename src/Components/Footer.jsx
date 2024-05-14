import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className="m-0 p-3 bg-primary-subtle">
      <Row>
        <Col className='fs-3 text-center'>BookStop</Col>
      </Row>
      <Row>
        <Col className='text-center fs-4'><i className="mx-4 bi bi-facebook"></i>
        <i className="mx-4 bi bi-instagram"></i>
        <i className="mx-4 bi bi-twitter-x"></i></Col>
      </Row>
      <Row></Row>
      <Row>
        <Col className='text-center'>BookStop 2024. All rights reserved.</Col>
      </Row>
    </Container>
  );
}

export default Footer;