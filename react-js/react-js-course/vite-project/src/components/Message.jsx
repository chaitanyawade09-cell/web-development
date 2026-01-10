import BotProfileImage from "../assets/botpp.png"
import UserProfileImage from "../assets/userpp.png"
import './Message.css'

export function ChatMessage({ msg, sender }) {
            return (
                <div className={sender === 'user' ? 'ChatMessage-user' : 'ChatMessage-bot'}>
                    {sender === 'bot' && (<img src={BotProfileImage} width='50' />)}
                    <div className="Message"> {msg}
                    </div>
                    {sender === 'user' && <img src={UserProfileImage} width='50' />}
                </div>)
        }