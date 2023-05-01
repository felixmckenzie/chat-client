import { NavConfig } from '@/types'

export const DashboardConfig: NavConfig = {
    mainNav: [
        {
            title: 'Add Friend',
            href: '/dashboard/add-friend',
            disabled: false,
        },
        {
            title: 'Pending',
            href: '/dashboard/pending',
            disabled: false,
        },
        {
            title: 'Online',
            href: '/dashboard/online',
            disabled: false,
        },
    ],
}
