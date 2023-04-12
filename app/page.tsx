import {Navbar} from './components/Navbar'
export default function LandingPage() {
  return (
    <div className='h-full w-full'>
   <Navbar/>
    <main className='h-full flex justify-center items-center overflow-hidden mt-6'>
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-headline-text font-semibold tracking-wide uppercase">Welcome to </h2>
          <p className="mt-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-headline-text">
           Dev Chat
          </p>
          <p className="mt-4 text-xl text-headline-text">
           A better way for software teams to communicate
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="text-base text-headline-text bg-highlight font-medium rounded-lg  w-48 py-3 px-8 hover:bg-purple-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </main>
     </div>
  )
}
