'use client'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useAuth } from '@clerk/nextjs'
import { getClient } from '@/lib/apollo'
import queries from '@/queries'
import { AvatarPreview } from './AvatarPreview'
import { messages } from '@/dummyData'
import SideCard from './SideBarCard'
import { ChatBubbleBottomCenterIcon, EllipsisVerticalIcon, UsersIcon } from '@heroicons/react/24/outline'
import Menu from './Menu'
import List from './SideBarList'
type MenuKey = 'profile' | 'contacts' | 'chats'

const SideBar = () => {
    const [menuState, setMenuState] = useState({
        profile: false,
        contacts: false,
        chats: false,
    })
    const { getToken, userId } = useAuth()
    const client = getClient(getToken)

    const { data: userData } = useQuery(queries.GET_USER, { client, variables: { clerkId: userId } })

    console.log(userData?.getUser)
    const avatarUrl = userData?.getUser?.avatar

    const toggleMenu = (key: MenuKey) => {
        setMenuState((prevState) => {
            const newState = {
                profile: false,
                contacts: false,
                chats: false,
            }
            newState[key] = !prevState[key]
            return newState
        })
    }

    const options = [
        {
            key: 'profile',
            display: <AvatarPreview width={16} height={16} alt="avatar" avatarUrl={avatarUrl} />,
            onClick: () => toggleMenu('profile'),
        },
        {
            key: 'chats',
            display: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
            onClick: () => toggleMenu('chats'),
        },
        {
            key: 'contacts',
            display: <UsersIcon className="w-5 h-5" />,
            onClick: () => toggleMenu('contacts'),
        },
        {
            key: 'menu',
            display: <EllipsisVerticalIcon className="w-5 h-5" />,
            onClick: () => toggleMenu('chats'),
        },
    ]

    return (
        <div className="hidden md:flex flex-col h-screen w-6/12 overflow-hidden border-r border-x-text-dark divide-y">
            <Menu options={options} className="justify-between" />
            {menuState.chats && (
                <List>
                    <div>
                        {messages.map((message) => {
                            return <SideCard key={message.id} title={message.sender} text={message.text} date={message.timestamp} />
                        })}
                    </div>
                </List>
            )}
        </div>
    )
}

export default SideBar
