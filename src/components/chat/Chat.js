import React from 'react'
import { Wrapper, Header, Body, Footer } from './Chat.styles'
import { Avatar, IconButton } from '@material-ui/core'
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  Mic
} from '@material-ui/icons'

export const Chat = () => {
  return (
    <Wrapper>
      <Header>
        <Avatar />
        <div className='header-info'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='header-right'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </Header>

      <Body>
        <p className='chat-message'>
          <span className='chat-name'>Austin</span>
          This is a message
          <span className='chat-timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat-message chat-sent'>
          <span className='chat-name'>Austin</span>
          This is a message
          <span className='chat-timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat-message'>
          <span className='chat-name'>Austin</span>
          This is a message
          <span className='chat-timestamp'>{new Date().toUTCString()}</span>
        </p>
      </Body>

      <Footer>
        <InsertEmoticon />
        <form>
          <input placeholder='Type a message' type='text' />
          {/* do we need this button? */}
          <button>Send a message</button>
        </form>
        <Mic />
      </Footer>
    </Wrapper>
  )
}
