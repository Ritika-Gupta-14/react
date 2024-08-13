import React from 'react'
import { Container, Login as LoginComponent } from '../components'

function Login() {
  return (
  <div className="py-10 w-screen overflow-x-hidden">
    <Container>
    <LoginComponent/>
    </Container>
  </div>
  )
}

export default Login