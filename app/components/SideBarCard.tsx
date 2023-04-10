import { FormatDate } from "@/utils"

const SideCard = ({title, text, date}) => {

    return (
        <div className="flex flex-col w-full h-40 justify-center p-6 text-body-text-light">
           <div className="flex justify-between">
            <h1>{title}</h1> 
            {FormatDate(date)}
            </div>
            <p className="truncate ...">{text}</p>
        </div>
    )
}

export default SideCard
