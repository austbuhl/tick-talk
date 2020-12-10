import React from 'react'
import { SidebarChat } from './SidebarChat'
import { Wrapper, Header, Search, SidebarChatContainer } from './Sidebar.styles'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
export const Sidebar = () => {
  return (
    <Wrapper>
      <Header>
        <Avatar src='https://avatars2.githubusercontent.com/u/44592690?s=460&u=e3953edcf5c5ace3e45c7565c52e9031f9177cf4&v=4' />
        <div className='header-right'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </Header>

      <Search>
        <div className='search-container'>
          <SearchOutlinedIcon />
          <input placeholder='Search or start a new chat' type='text' />
        </div>
      </Search>

      <SidebarChatContainer>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </SidebarChatContainer>
    </Wrapper>
  )
}
