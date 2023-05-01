import { PageHeader } from '@/components/PageHeader'
import { AddFriendForm } from '@/components/forms/AddFriendForm'
export default function AddFriendPage() {
    return (
        <div className="flex flex-col w-full h-full">
            <PageHeader heading="Add Friend" text="Add A Friend By Their Email Address" />
            <div className="flex px-4 w-full">
                <AddFriendForm />
            </div>
        </div>
    )
}
