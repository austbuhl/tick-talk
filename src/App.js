import React, { useEffect, useState } from 'react'
import { Chat } from './components/chat/Chat'
import { Sidebar } from './components/sidebar/Sidebar'
import { Wrapper } from './App.styles'
import { Login } from './components/login/Login'
import { useStateValue } from './StateProvider'
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  const [selectedRoom, setSelectedRoom] = useState('')
  const [roomMessages, setRoomMessages] = useState([])
  const [rooms, setRooms] = useState([])
  const [{ user }, dispatch] = useStateValue()

  const getMessages = async (room) => {
    const roomId = room._id
    const resp = await axios.get(`/rooms/${roomId}/messages`)
    setMessages(resp.data)
  }

  const selectRoom = (room) => {
    setSelectedRoom(room)
    const selectedRoomMessages = messages.filter(
      (msg) => msg.roomId === room._id
    )

    setRoomMessages(selectedRoomMessages)
  }

  useEffect(() => {
    axios.get('/rooms').then((resp) => {
      setRooms(resp.data)
    })
  }, [])

  useEffect(() => {
    if (selectedRoom) {
      setRoomMessages(messages.filter((msg) => msg.roomId === selectedRoom._id))
    }
  }, [messages])

  useEffect(() => {
    axios
      .get('/messages')
      .then((resp) => {
        setMessages(resp.data)
      })
      .catch((err) => console.log(err))
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
          <Chat messages={roomMessages} room={selectedRoom} />
        </div>
      )}
    </Wrapper>
  )
}

export default App
