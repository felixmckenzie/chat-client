import { FormatDate } from '@/utils'
import { AvatarPreview } from './AvatarPreview'
const SideCard = ({ title, text, date }: { title: string; text: string; date?: string }) => {
    return (
        <div className="flex w-full p-2 text-body-text-light">
            <div className="flex flex-shrink items-center">
                <AvatarPreview width={16} height={16} alt="avatar" avatarUrl={''} />
            </div>
            <div className="flex flex-grow overflow-y-hidden flex-col ml-4">
                <div className="flex justify-between items-center">
                    <h1>{title}</h1>
                    {date && <span className="text-right text-xs truncate ...">{FormatDate(date)}</span>}
                </div>
                <p className="truncate ...">{text}</p>
            </div>
        </div>
    )
}

export default SideCard
