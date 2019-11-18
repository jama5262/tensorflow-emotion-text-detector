import React from 'react'
import { useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";

export const SubEmotion = () => {

  const subEmotions = useSelector(state => state.subEmotions)

  if (subEmotions.data.length === 0) {
    return (
      <div></div>
    )
  }
  return (
    subEmotions.data.map((emotion) => {
      return (
        <Col key={ emotion.emotion } style={{ textAlign: "center", marginTop: "50px" }} xs={{ span: 3 }}>
          <Row>
            <Col xs={12}>
              <span className="display-4" role="img" aria-label="emoji">{ emotion.emoji }</span>
            </Col>
            <Col xs={12} style={{ marginTop: "15px" }}>
              <span>{ emotion.emotion }</span>
            </Col>
            <Col xs={12} style={{ marginTop: "10px" }}>
              <span style={{ fontSize: "30px" }}>{ Math.round(emotion.probability * 100) }%</span>
            </Col>
          </Row>
        </Col>
      )
    })
  )
}
