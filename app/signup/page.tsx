import { SignUp } from '@clerk/nextjs/app-beta';

export default function Page() {
  return ( 
        <div className='flex flex-col h-full justify-center items-center  bg-bg-dark'>
        <SignUp appearance={{
      elements: {
        formButtonPrimary: 'bg-highlight hover:bg-tertiary text-sm normal-case'
      }
    }}
    signInUrl='/signin'
    redirectUrl='/signup/create-profile'
    />;
        </div>
   )
}