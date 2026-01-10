import { useRef, useEffect } from 'react'
import { ChatMessage } from './Message'
import './Messages.css'

export function ChatMessages({ chatMessage }) {
            const ChatMessagesRef = useRef(null)

            useEffect(()=>{
                const CurrentElem = ChatMessagesRef.current
                if(CurrentElem){
                    CurrentElem.scrollTop = CurrentElem.scrollHeight
                }
            }, [chatMessage])
            return (
                <div className="MessagesSection" 
                    ref = {ChatMessagesRef}
                >
                    {chatMessage.map((details) => {
                        return (
                            <ChatMessage
                                msg={details.msg}
                                sender={details.sender}
                                key={details.id}
                            />
                        )
                    })}
                </div>
            )
        }