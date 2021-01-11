import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import { Chat } from './components/chat/Chat'
import { Sidebar } from './components/sidebar/Sidebar'
import { Wrapper } from './App.styles'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  const [rooms, setRooms] = useState([])
  const [selectedRoom, setSelectedRoom] = useState('')

  useEffect(() => {
    // axios.get('/messages').then((resp) => {
    //   setMessages(resp.data)
    // })
    axios.get('/rooms').then((resp) => {
      setRooms(resp.data)
    })
  }, [])

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
        <Sidebar rooms={rooms} getMessages={getMessages} />
        <Chat messages={messages} room={selectedRoom} />
      </div>
    </Wrapper>
  )
}

export default App
