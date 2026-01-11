import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './InputMessage.css'

export function ChatbotInput({ chatMessage, setChatMessage }) {

            const [InputText, SetInputText] = useState('')

            function SaveInputText(event) {
                SetInputText(event.target.value) 
            }

            function OnEnter(event){
                if(event.key === 'Enter'){
                    sendMessage()
                }
            }

            function Clear(){
                SetInputText('')
            }

            function sendMessage() {
                const newChatMessage = ([
                    ...chatMessage,
                    {
                        msg: InputText,
                        sender: 'user',
                        id: crypto.randomUUID()
                    }
                ])
                setChatMessage(newChatMessage)

                const response = Chatbot.getResponse(InputText)
                setChatMessage([
                    ...newChatMessage,
                    {
                        msg: response,
                        sender: 'bot',
                        id: crypto.randomUUID()
                    }
                ])

                console.log(response)
                SetInputText('')
            }
            return (
                <div className="ChatbotInput">
                    <input
                        type="text"
                        placeholder="Enter a message here"
                        onChange={SaveInputText}
                        onKeyDown={OnEnter}
                        value={InputText}
                        className="InputText"
                    />
                    <button
                        onClick={sendMessage}
                        className="sendMessage"
                    >
                    Send</button>
                    <button
                        onClick={Clear}
                        className="sendMessage"
                    >
                    Clear</button>
                </div>
            )
        }
