import React from 'react'
import { Row, Col } from "react-bootstrap";

export const SubEmotion = () => {
  return (
    <Row>
      <Col xs={12}>
        <span className="display-4" role="img" aria-label="emoji">😡</span>
      </Col>
      <Col xs={12} style={{ marginTop: "15px" }}>
        <span>Anger</span>
      </Col>
      <Col xs={12} style={{ marginTop: "10px" }}>
        <span style={{ fontSize: "30px" }}>13%</span>
      </Col>
    </Row>
  )
}
