import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { predictEmotionAction } from "../redux/actions"

import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";

import { TextArea } from "../components/TextArea";
import { MainEmotion } from "../components/MainEmotion";
import { SubEmotion } from "../components/SubEmotion";

export const Home = () => {

  const loading = useSelector(state => state.loading.loading)
  const alert = useSelector(state => state.alert.data)
  const dispatch = useDispatch()

  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    if (alert.variant === "success") {
      executeScroll()
    }
  }, [alert])

  const scrollRef = useRef(null)
  const executeScroll = () => {
    setTimeout(() => {
      scrollToRef(scrollRef)
    }, 1000);
  }

  const predictEmotion = () => {
    executeScroll()
    dispatch(predictEmotionAction())
  }

  return (
    <Container>
      <Row className="justify-content-sm-center">
        <Col style={{ marginTop: "90px" }} md={{ span: 7 }}>
          <h1 style={{ textAlign: "center" }} className="display-5 animateText">Tensorflow Emotion Text Detector</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }} className="justify-content-sm-center">
        <Col md={{ span: 10 }}>
          <Alert show={alert.show} variant={alert.variant}>
            {alert.message}
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }} md={{ span: 10, offset: 1 }}>
          <TextArea />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "30px" }} md={{ span: 10, offset: 1 }}>
          <Button disabled={loading} variant="primary" onClick={() => predictEmotion()}>
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
            What am I feeling
          </Button>
        </Col>
      </Row>
      <Row>
        <Col ref={scrollRef} style={{ textAlign: "center", marginTop: "50px" }} md={{ span: 10, offset: 1 }}>
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
