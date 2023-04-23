import { Navbar } from '@/components/Navbar'
import { marketingConfig } from '@/config/marketing'
import Link from 'next/link'
interface MarketingLayoutProps {
    children: React.ReactNode
}
export default function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <header className="container sticky top-0 z-40">
                <div className="flex h-16 items-center justify-between border-b border-b-headline-text px-4">
                    <Navbar items={marketingConfig.mainNav} />
                    <nav>
                        <Link href="/login" className="px-4">
                            Login
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1 justify-center items-center">{children}</main>
        </div>
    )
}
