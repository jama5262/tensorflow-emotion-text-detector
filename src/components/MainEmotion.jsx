import React from 'react'
import { useSelector } from "react-redux";

import { Row, Col, Image } from "react-bootstrap";

export const MainEmotion = () => {

  const mainEmotion = useSelector(state => state.mainEmotion)

  if (Object.keys(mainEmotion.data).length === 0) {
    return (
      <div></div>
    )
  }
  return (
    <Row>
      <Col xs={12}>
        <Image style={{ width: "500px" }} src={ mainEmotion.data.gif } rounded />
      </Col>
      <Col xs={12}>
        <span>{ mainEmotion.data.emotion } <span style={{ fontSize: "30px" }} role="img" aria-label="emoji">{ mainEmotion.data.emoji }</span></span>
      </Col>
      <Col xs={12} style={{ marginTop: "10px" }}>
        <span style={{ color: "#66BB6A" }} className="display-4">{ Math.round(mainEmotion.data.probability * 100) }%</span>
      </Col>
    </Row>
  )
}
