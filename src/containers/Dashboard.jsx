import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './Dashboard.css'
import { Redirect } from 'react-router-dom'

export default () => {
  const [user, setUser] = useState(localStorage.getItem('user'))

  const logout = () => {
    localStorage.removeItem('user')
    setUser('')
  }
  if(!user) {
    return <Redirect to='/login' />
  }
  return (
    <div className="dashboard">
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav.Item>
      </Nav>
      Selamat Datang, {user}!
    </div>
  )
}