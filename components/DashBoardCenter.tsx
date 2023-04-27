'use client'
import { useState } from 'react'
import Menu from './Menu'
import { DashboardHeader } from './PageHeader'

type MenuKey = 'add' | 'pending' | 'blocked' | 'inbox'

export function DashboardCenter() {
    const [menuState, setMenuState] = useState({
        add: false,
        pending: false,
        blocked: false,
        inbox: false,
    })

    const toggleMenu = (key: MenuKey) => {
        setMenuState((prevState) => {
            const newState = {
                add: false,
                pending: false,
                blocked: false,
                inbox: false,
            }
            newState[key] = !prevState[key]
            return newState
        })
    }

    const options = [
        {
            key: 'add',
            display: <span>Add Friend</span>,
            onClick: () => toggleMenu('add'),
            buttonStyle: 'bg-highlight rounded text-headline-text',
        },
        {
            key: 'pending',
            display: <span>Pending</span>,
            onClick: () => toggleMenu('pending'),
        },
        {
            key: 'blocked',
            display: <span>Blocked</span>,
            onClick: () => toggleMenu('blocked'),
        },
        {
            key: 'inbox',
            display: <span>InBox</span>,
            onClick: () => toggleMenu('inbox'),
        },
    ]

    return (
        <div className="hidden md:flex flex-col h-screen w-full overflow-hidden">
            <Menu options={options} className="justify-start space-x-10" />
            <div className="">
                <DashboardHeader heading="Add Friend" text="You Can Add a Friend by Email or Username" />
            </div>
        </div>
    )
}
