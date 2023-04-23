import { MarketingConfig } from '@/types'

export const marketingConfig: MarketingConfig = {
    mainNav: [
        {
            title: 'Features',
            href: '/features',
            disabled: false,
        },
        {
            title: 'Pricing',
            href: '/pricing',
            disabled: true,
        },
        {
            title: 'Contact',
            href: '/contact',
            disabled: false,
        },
    ],
}
