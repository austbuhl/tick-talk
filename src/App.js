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

  const getMessages = async (room) => {
    const roomId = room._id

    const resp = await axios.get(`/rooms/${roomId}/messages`)
    setMessages(resp.data)
    setSelectedRoom(room)
  }

  useEffect(() => {
    axios.get('/rooms').then((resp) => {
      setRooms(resp.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('1e8a1765529bbbac589e', {
      cluster: 'us2'
    })

    const messagesChannel = pusher.subscribe('messages')
    messagesChannel.bind('inserted', (msg) => {
      setMessages([...messages, msg])
    })

    const roomsChannel = pusher.subscribe('rooms')
    roomsChannel.bind('inserted', (room) => {
      setRooms([...rooms, room])
    })

    return () => {
      messagesChannel.unbind()
      messagesChannel.unsubscribe('messages')
      roomsChannel.unbind()
      roomsChannel.unsubscribe('rooms')
    }
  }, [messages, rooms])

  return (
    <Wrapper>
      <div className='app-body'>
        <Sidebar getMessages={getMessages} rooms={rooms} />
        <Chat messages={messages} room={selectedRoom} />
      </div>
    </Wrapper>
  )
}

export default App
