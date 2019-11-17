import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col style={{textAlign: "center", marginTop: "90px"}} md={{ span: 10, offset: 1 }}>
          <h1 style={{padding: "0 200px"}} className="display-5">Tensorflow Emotion Text Detector</h1>
        </Col>
      </Row>
    </Container>
  )
}
