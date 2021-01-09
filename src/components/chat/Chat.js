import React, { useState, useRef } from 'react'
import { Wrapper, Header, Body, Footer } from './Chat.styles'
import { Avatar, IconButton } from '@material-ui/core'
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  Mic
} from '@material-ui/icons'
import axios from '../../axios'

export const Chat = ({ messages }) => {
  const [msg, setMsgValue] = useState('')
  const messageRef = useRef()

  const sendMessage = async (e) => {
    e.preventDefault()
    await axios.post('/messages', {
      message: msg,
      name: 'Austin',
      timestamp: new Date().toUTCString(),
      sent: true,
      roomId: '5ff88e91915d062d430ed3fe'
    })

    setMsgValue('')
    messageRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

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
        {messages.map((message) => (
          <p
            key={message._id}
            className={`chat-message ${message.sent && 'chat-sent'}`}
          >
            <span className='chat-name'>{message.name}</span>
            {message.message}
            <span className='chat-timestamp'>{message.timestamp}</span>
          </p>
        ))}
        <div ref={messageRef} />
      </Body>

      <Footer>
        <InsertEmoticon />
        <form onSubmit={sendMessage}>
          <input
            onChange={(e) => setMsgValue(e.target.value)}
            value={msg}
            placeholder='Type a message'
            type='text'
          />
        </form>
        <Mic />
      </Footer>
    </Wrapper>
  )
}
