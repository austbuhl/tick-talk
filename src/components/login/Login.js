import React from 'react'
import { Button } from '@material-ui/core'
import { Wrapper, Container } from './Login.styles'

export const Login = () => {
  return (
    <Wrapper>
      <Container>
        <img
          src='https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png'
          alt=''
        />
        <div className='login-text'>
          <h1>Sign in to TikTalk</h1>
        </div>

        <Button>Sign in with Google</Button>
      </Container>
    </Wrapper>
  )
}
