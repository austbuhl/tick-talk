import React from 'react'
import { SidebarChat } from './SidebarChat'
import { Wrapper, Header, Search, SidebarChatContainer } from './Sidebar.styles'
import { Avatar, IconButton } from '@material-ui/core'
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons'

export const Sidebar = ({ rooms, getMessages }) => {
  const renderRooms = () => {
    return rooms.map((room) => (
      <SidebarChat key={room._id} room={room} getMessages={getMessages} />
    ))
  }

  return (
    <Wrapper>
      <Header>
        <Avatar src='https://avatars2.githubusercontent.com/u/44592690?s=460&u=e3953edcf5c5ace3e45c7565c52e9031f9177cf4&v=4' />
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
        {/* <SidebarChat />
        <SidebarChat /> */}
        {renderRooms()}
      </SidebarChatContainer>
    </Wrapper>
  )
}
