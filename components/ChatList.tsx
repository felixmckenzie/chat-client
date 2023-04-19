import { messages } from '@/dummyData'
import SideCard from './SideBarCard'

const ChatList = () => {
    return (
        <div className="flex flex-col h-full p-2 overflow-y-auto space-y-2 divide-body-text-light divide-y">
            {messages.map((message) => {
                return <SideCard key={message.id} title={message.sender} date={message.timestamp} text={message.text} />
            })}
        </div>
    )
}

export default ChatList
