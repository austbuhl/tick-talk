import { Chat } from './components/chat/Chat'
import { Sidebar } from './components/sidebar/Sidebar'
import { Wrapper } from './App.styles'

function App() {
  return (
    <Wrapper>
      <div className='app-body'>
        <Sidebar />
        <Chat />
      </div>
    </Wrapper>
  )
}

export default App
