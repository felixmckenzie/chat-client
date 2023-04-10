import SideBar from '../components/Sidebar'
import '../globals.css'
import '../components/Sidebar'
export default function HomeRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
 <html lang="en">
      <body className='h-screen w-screen  bg-bg-dark'>
        <SideBar/>
        {children}
        </body>
    </html>
  )
}