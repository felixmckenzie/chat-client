import { SignIn } from '@clerk/nextjs/app-beta'

export default function Page() {
    return (
        <div className="flex flex-col h-full justify-center items-center  bg-bg-dark">
            <SignIn
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-highlight hover:bg-tertiary text-sm normal-case',
                    },
                }}
                signUpUrl="/signup"
                redirectUrl="/dashboard/add-friend"
            />
        </div>
    )
}
