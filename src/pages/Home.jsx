import React from 'react'
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

import { TextArea } from "../components/TextArea";
import { MainEmotion } from "../components/MainEmotion";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "90px" }} md={{ span: 10, offset: 1 }}>
          <h1 style={{ margin: "0 200px" }} className="display-5">Tensorflow Test Text Detector</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "50px" }} md={{ span: 10, offset: 1 }}>
          <TextArea />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "30px" }} md={{ span: 10, offset: 1 }}>
          <Button variant="primary">
            <Spinner
              style={{margin: "0 10px"}}
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Primary
          </Button>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "50px" }} md={{ span: 10, offset: 1 }}>
          <MainEmotion/>
        </Col>
      </Row>
    </Container>
  )
}
