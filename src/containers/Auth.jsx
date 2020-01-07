import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Auth.css'
import { Redirect } from 'react-router-dom'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email) {
      setValidEmail(false)
    } else {
      setValidEmail(true)
    }
    if(password) {
      setValidPassword(false)
    } else {
      setValidPassword(true)
    }
    if(email && password) {
      localStorage.setItem('user', email)
      setUser(email)
    }
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
            <Form.Control isInvalid={validEmail} value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Control.Feedback type="invalid">
              Please insert an email.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control isInvalid={validPassword} value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Please insert your password.
            </Form.Control.Feedback>
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