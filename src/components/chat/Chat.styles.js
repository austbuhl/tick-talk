import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`

export const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;

  .header-info {
    flex: 1;
    padding-left: 20px;
  }

  .header-info > h3 {
    margin-bottom: 3px;
    font-weight: 500;
  }

  .header-info > p {
    color: gray;
  }
`
export const Body = styled.div`
  flex: 1;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: scroll;

  .chat-message {
    position: relative;
    font-size: 16px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 30px;
  }

  .chat-sent {
    margin-left: auto;
    background-color: #dcf8c6;
  }

  .chat-name {
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
  }

  .chat-timestamp {
    margin-left: 10px;
    font-size: xx-small;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    flex: 1;
    border-radius: 30px;
    padding: 10px;
    border: none;
    outline-width: 0;
  }

  form > button {
    display: none;
  }

  .MuiSvgIcon-root {
    padding: 10px;
    color: gray;
  }
`
