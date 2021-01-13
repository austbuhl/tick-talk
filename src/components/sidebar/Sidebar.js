import React from 'react'
import { SidebarChat } from './SidebarChat'
import { Wrapper, Header, Search, SidebarChatContainer } from './Sidebar.styles'
import { Avatar, IconButton } from '@material-ui/core'
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons'
import { useStateValue } from '../../StateProvider'

export const Sidebar = ({ selectRoom, rooms, messages }) => {
  const [{ user }, dispatch] = useStateValue()

  const renderRooms = () => {
    return rooms.map((room) => {
      // const lastMessage = messages.filter((msg) => msg.roomId === room._id)[
      //   messages.length - 1
      // ]
      const roomMessages = messages.filter((msg) => msg.roomId === room._id)

      return (
        <SidebarChat
          key={room._id}
          room={room}
          selectRoom={selectRoom}
          roomMessages={roomMessages}
        />
      )
    })
  }

  return (
    <Wrapper>
      <Header>
        <Avatar src={user?.photoURL} />
        <div className='header-right'>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </Header>

      <Search>
        <div className='search-container'>
          <SearchOutlined />
          <input placeholder='Search or start a new chat' type='text' />
        </div>
      </Search>

      <SidebarChatContainer>
        <SidebarChat addNewChat />
        {renderRooms()}
      </SidebarChatContainer>
    </Wrapper>
  )
}
