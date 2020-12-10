import { Chat } from './components/Chat'
import { Sidebar } from './components/Sidebar'
import { Wrapper } from './App.styles'

function App() {
  return (
    <Wrapper>
      <div className='app-body'>
        <h1>Tick Talk</h1>
        <Sidebar />
        <Chat />
      </div>
    </Wrapper>
  )
}

export default App
