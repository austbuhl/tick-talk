import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  :hover {
    background-color: #ebebeb;
  }

  .sidebar-chat-info {
    margin-left: 15px;
  }

  .sidebar-chat-info > h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`
