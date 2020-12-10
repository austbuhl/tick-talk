import React from 'react'
import { Wrapper } from './SidebarChat.styles'
import { Avatar } from '@material-ui/core'

export const SidebarChat = () => {
  return (
    <Wrapper>
      <Avatar />
      <div className='sidebar-chat-info'>
        <h2>Room Name</h2>
        <p>This is the last message</p>
      </div>
    </Wrapper>
  )
}
