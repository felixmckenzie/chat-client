import { messages } from '@/dummyData'
import SideCard from './SideBarCard'

const SideBar = () => {
    
    return (
        <div className="flex flex-col h-full overflow-y-scroll w-4/12 border-r border-x-text-dark divide-y">
            {messages.map((message) => {
                return <SideCard key={message.id} title={message.sender} date={message.timestamp} text={message.text} />
            })}
        </div>
    )
}

export default SideBar
