import { useState } from 'react'
import { ChatMessages } from './components/Messages'
import { ChatbotInput } from './components/InputMessage'
import './App.css'

function App() {
    const [chatMessage, setChatMessage] = useState([{
        msg: 'test',
        sender: 'user',
        id: crypto.randomUUID()
    },
    {
        msg: 'test',
        sender: 'bot',
        id: crypto.randomUUID()
    },])

    return (<>
        <ChatMessages
            chatMessage={chatMessage}
        />
        <ChatbotInput
            chatMessage={chatMessage}
            setChatMessage={setChatMessage}
        />
    </>)
}

export default App
