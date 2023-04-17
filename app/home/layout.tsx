import SideBar from '../components/Sidebar'
import '../globals.css'
import '../components/Sidebar'
export default function HomeRootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full">
            <SideBar />
            {children}
        </div>
    )
}
