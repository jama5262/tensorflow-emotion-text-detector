import React from 'react'
import { Form } from "react-bootstrap";

export const TextArea = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control as="textarea" rows="5" />
      </Form.Group>
    </Form>
  )
}
