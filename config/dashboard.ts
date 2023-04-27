import { NavConfig } from '@/types'

export const DashboardConfig: NavConfig = {
    mainNav: [
        {
            title: 'Add Friend',
            href: '/add-friend',
            disabled: false,
        },
        {
            title: 'Pending',
            href: '/pending',
            disabled: false,
        },
        {
            title: 'Online',
            href: '/online',
            disabled: false,
        },
    ],
}
