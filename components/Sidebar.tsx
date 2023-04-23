'use client'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useAuth } from '@clerk/nextjs'
import { getClient } from '@/lib/apollo'
import queries from '@/queries'
import { AvatarPreview } from './AvatarPreview'
import { ChatBubbleBottomCenterIcon, EllipsisVerticalIcon, UsersIcon } from '@heroicons/react/24/outline'
import SideBarMenu from './SideBarMenu'
import ChatList from './ChatList'
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
            icon: <AvatarPreview width={16} height={16} alt="avatar" avatarUrl={avatarUrl} />,
            onClick: () => toggleMenu('profile'),
        },
        {
            key: 'chats',
            icon: <ChatBubbleBottomCenterIcon className="w-5 h-55" />,
            onClick: () => toggleMenu('chats'),
        },
        {
            key: 'contacts',
            icon: <UsersIcon className="w-5 h-5" />,
            onClick: () => toggleMenu('contacts'),
        },
        {
            key: 'menu',
            icon: <EllipsisVerticalIcon className="w-5 h-5" />,
            onClick: () => toggleMenu('chats'),
        },
    ]

    return (
        <div className="hidden md:flex flex-col h-screen relative overflow-hidden w-4/12 border-r border-x-text-dark divide-y">
            <SideBarMenu options={options} />
            {menuState.chats && <ChatList />}
        </div>
    )
}

export default SideBar
