import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Pusher from 'pusher-js'
import { Chat } from './components/chat/Chat'
import { Sidebar } from './components/sidebar/Sidebar'
import { Wrapper } from './App.styles'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  const [selectedRoom, setSelectedRoom] = useState('')

  const getMessages = async (room) => {
    const roomId = room._id

    const resp = await axios.get(`/rooms/${roomId}/messages`)
    setMessages(resp.data)
    setSelectedRoom(room)
  }

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
<<<<<<< HEAD
        <Switch>
          <Route path='/app'>
            <Sidebar getMessages={getMessages} rooms={rooms} />
            <Chat messages={messages} room={selectedRoom} />
          </Route>
          <Route path='/'>
            <h1>Home Screen</h1>
          </Route>
        </Switch>
=======
        <Sidebar getMessages={getMessages} />
        <Chat messages={messages} room={selectedRoom} />
>>>>>>> parent of 93f47dd... Added pusher on room creation
      </div>
    </Wrapper>
  )
}

export default App
