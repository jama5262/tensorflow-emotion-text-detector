import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { addQueryAction } from "../redux/actions"

import { Form } from "react-bootstrap";

export const TextArea = () => {

  const query = useSelector((state) => state.query)
  const dispatch = useDispatch()

  const changeQuery = (value) => {
    dispatch(addQueryAction(value))
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows="5"
          value={query.query}
          onChange={(e) => changeQuery(e.target.value)}
        />
      </Form.Group>
    </Form>
  )
}
