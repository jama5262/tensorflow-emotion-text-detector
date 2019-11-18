import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

import { TextArea } from "../components/TextArea";
import { MainEmotion } from "../components/MainEmotion";
import { SubEmotion } from "../components/SubEmotion";

export const Home = () => {

  const loading = useSelector(state => state.loading.loading)

  return (
    <Container>
      <Row className="justify-content-sm-center">
        <Col style={{ marginTop: "90px" }} md={{ span: 7 }}>
          <h1 style={{ textAlign: "center" }} className="display-5">Tensorflow Emotion Text Detector</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "50px" }} md={{ span: 10, offset: 1 }}>
          <TextArea />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "30px" }} md={{ span: 10, offset: 1 }}>
          <Button disabled={loading} variant="primary">
            {
              loading ?
                (
                  <Spinner
                    style={{ marginRight: "10px" }}
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : null
            }
            What are you feeling
          </Button>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "50px" }} md={{ span: 10, offset: 1 }}>
          <MainEmotion />
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-sm-center">
        <SubEmotion />
      </Row>
      <div style={{ marginBottom: "100px" }}></div>
    </Container>
  )
}
