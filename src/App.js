import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import { Chat } from './components/chat/Chat'
import { Sidebar } from './components/sidebar/Sidebar'
import { Wrapper } from './App.styles'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages').then((resp) => {
      setMessages(resp.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('1e8a1765529bbbac589e', {
      cluster: 'us2'
    })

    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    })

    return () => {
      channel.unbind()
      channel.unsubscribe('messages')
    }
  }, [messages])

  return (
    <Wrapper>
      <div className='app-body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </Wrapper>
  )
}

export default App
