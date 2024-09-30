import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image from '../assets/1.jpg'

function About() {
  return (
    <div>
     <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={image} rounded fluid/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={image} roundedCircle fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image} thumbnail />
        </Col>
      </Row>
    </Container>
    </div>


  );
}

export default About