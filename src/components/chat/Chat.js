import React, { useState } from 'react'
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
import { useStateValue } from '../../StateProvider'

export const Chat = ({ messages, room }) => {
  const [msg, setMsgValue] = useState('')
  const [{ user }, dispatch] = useStateValue()

  const sendMessage = async (e) => {
    e.preventDefault()
    await axios.post('/messages', {
      message: msg,
      name: user.displayName,
      timestamp: new Date().toUTCString(),
      roomId: room._id
    })

    setMsgValue('')
  }

  // console.log(messages[messages.length - 1])

  return (
    <Wrapper>
      <Header>
        <Avatar />
        <div className='header-info'>
          <h3>{room.name}</h3>
          <p>
            Last seen{' '}
            {new Date(messages[messages.length - 1]?.timestamp).toUTCString()}
          </p>
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
            className={`chat-message ${
              message.name === user.displayName && 'chat-sent'
            }`}
          >
            <span className='chat-name'>{message.name}</span>
            {message.message}
            <span className='chat-timestamp'>{message.timestamp}</span>
          </p>
        ))}
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
