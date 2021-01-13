import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import { Chat } from './components/chat/Chat'
import { Sidebar } from './components/sidebar/Sidebar'
import { Wrapper } from './App.styles'
import { Login } from './components/login/Login'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  const [selectedRoom, setSelectedRoom] = useState('')
  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(null)

  const getMessages = async (room) => {
    const roomId = room._id
    const resp = await axios.get(`/rooms/${roomId}/messages`)
    setMessages(resp.data)
  }

  const selectRoom = (room) => {
    setSelectedRoom(room)
  }

  useEffect(() => {
    if (selectedRoom) {
      getMessages(selectedRoom)
    }
  }, [selectedRoom])

  console.log(messages)

  useEffect(() => {
    axios.get('/rooms').then((resp) => {
      setRooms(resp.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('1e8a1765529bbbac589e', {
      cluster: 'us2'
    })

    const msgChannel = pusher.subscribe('messages')
    const roomsChannel = pusher.subscribe('rooms')
    msgChannel.bind('inserted', (data) => {
      setMessages([...messages, data])
    })

    roomsChannel.bind('inserted', (data) => {
      setRooms([...rooms, data])
    })

    return () => {
      msgChannel.unbind()
      msgChannel.unsubscribe('messages')
      roomsChannel.unbind()
      roomsChannel.unsubscribe('rooms')
    }
  }, [messages, rooms])

  return (
    <Wrapper>
      {!user ? (
        <Login />
      ) : (
        <div className='app-body'>
          <Sidebar selectRoom={selectRoom} rooms={rooms} messages={messages} />
          <Chat messages={messages} room={selectedRoom} />
        </div>
      )}
    </Wrapper>
  )
}

export default App
