import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} xs={12} className="text-center">
          <p>React App Working</p>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeComponent;