import React, { useEffect, useState } from 'react'
import { Wrapper } from './SidebarChat.styles'
import {
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import axios from '../../axios'

export const SidebarChat = ({ addNewChat, room, selectRoom, lastMessage }) => {
  const [seed, setSeed] = useState('')
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  console.log(lastMessage)

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/rooms', {
        name: name
      })
      console.log(response.data)
    } catch (err) {
      console.error(err)
    }

    setOpen(false)
    setName('')
  }

  // const getLastMessage = async (room) => {
  //   const roomId = room._id
  //   const resp = await axios.get(`/rooms/${roomId}/messages`)
  //   setLastMessage(resp.data[resp.data.length - 1])
  // }
  return !addNewChat ? (
    <Wrapper onClick={() => selectRoom(room)}>
      <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} />
      <div className='sidebar-chat-info'>
        <h2>{room.name}</h2>
        {lastMessage && <p> {lastMessage.message} </p>}
      </div>
    </Wrapper>
  ) : (
    <>
      <Wrapper onClick={() => setOpen(true)}>
        <h2>Add New Chat</h2>
      </Wrapper>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Create a New Chat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name of the room below.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='name'
            label='Chat'
            type='text'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={createChat} color='primary'>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
