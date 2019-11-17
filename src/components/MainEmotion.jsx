import React from 'react'
import { Row, Col, Image } from "react-bootstrap";

export const MainEmotion = () => {
  return (
    <Row>
      <Col xs={12}>
        <Image style={{ width: "500px" }} src="https://media.giphy.com/media/3o7bu3hn2X5NN9tnCE/giphy.gif" rounded />
      </Col>
      <Col xs={12}>
        <span>Sadness <span style={{ fontSize: "30px" }} role="img" aria-label="emoji">😄</span></span>
      </Col>
      <Col xs={12} style={{ marginTop: "10px" }}>
        <span style={{ color: "#66BB6A" }} className="display-4">74%</span>
      </Col>
    </Row>
  )
}
