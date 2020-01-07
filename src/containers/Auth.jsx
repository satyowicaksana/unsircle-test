import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Auth.css'
import { Redirect } from 'react-router-dom'

export default () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
    localStorage.setItem('user', username)
    setUser(username)
  }

  if (user) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className="auth">
      <Card className="auth-container">
        <Card.Body style={{margin: 'auto' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card.Body>
      </Card>
    </div>
  )
}