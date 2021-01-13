import React from 'react'
import { Button } from '@material-ui/core'
import { Wrapper, Container } from './Login.styles'
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

export const Login = () => {
  const [{}, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch((err) => console.error(err))
  }

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

        <Button onClick={signIn}>Sign in with Google</Button>
      </Container>
    </Wrapper>
  )
}
