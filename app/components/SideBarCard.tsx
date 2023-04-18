import { FormatDate } from '@/utils'

const SideCard = ({ title, text, date }: { title: string; text: string; date: string }) => {
    return (
        <div className="flex flex-col w-full h-28 justify-center px-4 text-body-text-light">
            <div className="flex justify-between">
                <h1>{title}</h1>
                {FormatDate(date)}
            </div>
            <p className="truncate ...">{text}</p>
        </div>
    )
}

export default SideCard
