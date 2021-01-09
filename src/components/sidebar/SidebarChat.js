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

export const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {}

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    console.log(open)
    setOpen(false)
    console.log(open)
  }

  return !addNewChat ? (
    <Wrapper>
      <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} />
      <div className='sidebar-chat-info'>
        <h2>Room Name</h2>
        <p>This is the last message</p>
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
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} color='primary'>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
